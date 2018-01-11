import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

// add Router for this.router.navigate
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers;

  // constructor() { }
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(customers => {
      // console.log(customers);

      this.customers = customers;     // truyền biến sang component
    });

    // console.log('test');
  }

  onDeleteClick(id) {
    // alert(id);
    this.customerService.deleteCustomer(id).subscribe(customer => {
      // console.log(123);
      // console.log(customer);
      // alert(123);
      this.router.navigate(['/']);
    });
  }

}
