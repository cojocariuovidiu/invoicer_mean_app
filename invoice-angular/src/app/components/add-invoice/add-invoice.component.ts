import { Component, OnInit } from '@angular/core';

// import customer service vào. Tất cả cái gì liên quan customer thì đưa vào đây sử dụng
import { CustomerService } from '../../services/customer.service';

// import Router cho redirect, Route để lấy params
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  // nếu khai báo từng value như sau thì ta đỡ công khai báo 1 interface là obj, trước khi insert ta chuẩn bị obj là ok
  // các giá trị này dùng với biến this. , và khi ngOnInit ta gán ngược lại lên trình duyệt
  customer;
  service;
  price;
  status;
  due;

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // ví dụ set gtrị default thẻ select là Unpaid
    this.status.value = 'Unpaid';
  }

  onAddSubmit() {
    // chuẩn bị obj invoice để insert
    // import thêm Route để lấy được tham số parameter trên trình duyệt, bên php hoặc c# mấy cái này là default
    this.customer = this.route.snapshot.params['customer_id'];
    // alert(this.customer);

    const invoice = {
      customer: this.customer,
      service: this.service,
      price: this.price,
      status: this.status,
      due: this.due
    };

    this.customerService.saveInvoice(invoice).subscribe(invoice => {
      const path = '/customer/' + this.customer;
      this.router.navigate([path]);
    });
  }

}
