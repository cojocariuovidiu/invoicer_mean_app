import { Component, OnInit } from '@angular/core';

// import customer service, sau đó khởi tạo ở hàm constructor bên dưới
import { CustomerService } from '../../services/customer.service';

// import Router to use this.router.navigate , và tương tự CustomerService khởi tạo ở constructor
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  first_name;
  last_name;
  company;
  email;
  phone;
  street;
  city;
  state;
  zip;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  // add event submit, this.first_name .. là do ta khai báo 1 dọc ở trên
  onAddSubmit() {
    // alert('test');

    // chú ý: this.last_name sẽ lấy từ name trong tag input của component html
    // nhưng last_name sẽ là cái đc submit lên server thay vì name trong tag input
    // vậy trong tag input có thể là txtLastName và code đc viết là last_name: this.txtLastName
    const customer = {
      first_name: this.first_name,
      last_name: this.last_name,
      company: this.company,
      email: this.email,
      phone: this.phone,
      address: {
        street: this.street,
        city: this.city,
        state: this.state,
        zip: this.zip
      }
    };

    // chú ý, hàm saveCustomer là 1 method ta phải viết bên CustomerService, nó dùng để tương tác với api
    this.customerService.saveCustomer(customer).subscribe(customer => {
      this.router.navigate(['/']);
    });
  }

}
