import { Component, OnInit } from '@angular/core';

// import CustomerService
import { CustomerService } from '../../services/customer.service';

// import Router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  id: string;
  customer: CustomerInterface;
  invoices: InvoiceInterface[];

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // cách lấy params từ path
    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.id).subscribe(customer => {
      // this.customer dùng trong template
      this.customer = customer;
    });

    // get invoices follow customer id
    this.customerService.getInvoices(this.id).subscribe(invoices => {
      this.invoices = invoices;
    });
  }

  markPaid(invoice_id, invoice) {
    // alert(invoice_id);
    invoice.status = 'paid';  // set new status of invoice
    this.customerService.markPaid(invoice_id, invoice).subscribe(invoice => {
      invoice.status = 'paid';  // callback, cập nhật lại trạng thái trên web
    });
  }

  // delete invoice
  onDeleteClick(invoice_id) {
    // alert(this.id);
    const path = '/customer/' + this.id;
    this.router.navigate([path]);

    // this.customerService.deleteInvoice(invoice_id).subscribe(invoice => {
    //   this.router.navigate(['/customer/' + this.id]);
    // });
  }

}

// thêm vào interface Customer va Invoice
export interface CustomerInterface {
  id: string;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  address: {
    steet: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface InvoiceInterface {
  _id: string;
  customer: string;
  service: string;
  status: string;
  created_at: Date;
}
