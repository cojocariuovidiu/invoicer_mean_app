import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  // add function getCustomers from link localhost:3000/api/customers
  getCustomers() {
    return this.http.get('http://localhost:3000/api/customers').map(res => res.json());
  }

  // saveCustomer , use in component add-customer
  saveCustomer(customer) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');  // chú ý, code này quan trọng

    return this.http.post('http://localhost:3000/api/customers/add', customer, {headers: headers})
      .map(res => res.json());
  }

  // getCustomer , to get get detail customer when open detail customer page
  getCustomer(id) {
    return this.http.get('http://localhost:3000/api/customers/' + id).map(res => res.json());
  }

  // updateCustomer used in edit customer component
  updateCustomer(id, customer) {
    // chú ý đây là hàm của angular2 gửi put lên /api/customers/
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put('http://localhost:3000/api/customers/update/' + id, customer, {headers: headers}).map(res => res.json());
  }

  // deleteCustomer
  deleteCustomer(id) {
    // chú ý: với việc delete thì ko có dữ liệu submit lên, vì thế ko cần new Header()
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    return this.http.delete('http://localhost:3000/api/customers/delete/' + id).map(res => res.json());
  }

  // getInvoices used in customer-details
  getInvoices(customer_id) {
    return this.http.get('http://localhost:3000/api/invoices/customer/' + customer_id)
      .map(res => res.json());
  }

  // markPaid() used in customer details
  markPaid(invoices_id, invoice) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // cập nhật lại status trong collection invoice
    return this.http.put('http://localhost:3000/api/invoices/update/' + invoices_id, invoice, {headers: headers})
      .map(res => res.json());
  }

  // deleteInvoice used in customer detail
  deleteInvoice(id) {
    return this.http.delete('http://localhost:3000/api/invoices/delete/' + id)
      .map(res => res.json());
  }

  // saveInvoice() used in add invoice component
  saveInvoice(invoice) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/api/invoices/add', invoice, {headers: headers})
      .map(res => res.json());
  }

}
