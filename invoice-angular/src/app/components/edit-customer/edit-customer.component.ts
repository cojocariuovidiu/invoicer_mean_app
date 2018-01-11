import { Component, OnInit } from '@angular/core';

// import Customer Service
import { CustomerService } from '../../services/customer.service';

// to get id from params, need include router, route, params
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  id: string;
  customer: CustomerInterface;  // for return customer from getCustomer method

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // get id from params
    // vì params có mày xanh là property, nên dùng theo kiểu object []
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    // get customer from id by method getCustomer of customerService
    this.customerService.getCustomer(this.id).subscribe(customer => {
      this.customer = customer;
    });
  }

  onEditSubmit() {
    // alert('test');

    // new obj customer, chú ý, const customer này ko liên quan customer từ customer interface trên.
    // nếu muốn dùng customer interface trên thì dùng với this.customer
    // this.customer.first_name là do bên view dùng ngModel là customer.first_name
    // ngoài ra nó lấy đc cũng nhờ đã khai báo customer interface. gần như nó đi toàn bồ xuyên suốt component nay
    const customer = {
      first_name: this.customer.first_name,
      last_name: this.customer.last_name,
      company: this.customer.company,
      email: this.customer.email,
      phone: this.customer.phone,
      address: {
        street: this.customer.address.street,
        city: this.customer.address.city,
        state: this.customer.address.state,
        zip: this.customer.address.zip
      }
    };

    // alert(this.customer.first_name);
    // console.log(customer);

    this.customerService.updateCustomer(this.id, customer).subscribe(customer => {
      // console.log('test');
      this.router.navigate(['/']);
    });
  }

}

export interface CustomerInterface {
  id: string;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}