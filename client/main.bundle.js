webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n\n\n\n\n\n<!-- <h2>Here are some links to help you start: </h2>\n<ul>\n    <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n    </li>\n    <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n    </li>\n    <li>\n        <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n    </li>\n</ul> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_customers_customers_component__ = __webpack_require__("../../../../../src/app/components/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_add_customer_add_customer_component__ = __webpack_require__("../../../../../src/app/components/add-customer/add-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_edit_customer_edit_customer_component__ = __webpack_require__("../../../../../src/app/components/edit-customer/edit-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_customer_details_customer_details_component__ = __webpack_require__("../../../../../src/app/components/customer-details/customer-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__ = __webpack_require__("../../../../../src/app/components/add-invoice/add-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












 // add and declare below providers
// khai báo appRoots sử dụng ở dưới imports
var appRoots = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_customers_customers_component__["a" /* CustomersComponent */] },
    { path: 'customer/add', component: __WEBPACK_IMPORTED_MODULE_8__components_add_customer_add_customer_component__["a" /* AddCustomerComponent */] },
    { path: 'customer/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_customer_details_customer_details_component__["a" /* CustomerDetailsComponent */] },
    { path: 'customer/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_edit_customer_edit_customer_component__["a" /* EditCustomerComponent */] },
    { path: 'invoice/add/:customer_id', component: __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__["a" /* AddInvoiceComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_customers_customers_component__["a" /* CustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_add_customer_add_customer_component__["a" /* AddCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_edit_customer_edit_customer_component__["a" /* EditCustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_customer_details_customer_details_component__["a" /* CustomerDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__["a" /* AddInvoiceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoots),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_customer_service__["a" /* CustomerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-customer/add-customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-customer/add-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Add Customer</h1>\n<form (submit)=\"onAddSubmit()\" class=\"well\">\n    <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Company</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company\" name=\"company\" placeholder=\"Company\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Phone</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Street</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"street\" name=\"street\" placeholder=\"Street\" />\n    </div>\n    <div class=\"form-group\">\n        <label>City</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\" />\n    </div>\n    <div class=\"form-group\">\n        <label>State</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\" />\n    </div>\n    <div class=\"form-group\">\n        <label>Zip</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"Zip\" />\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/add-customer/add-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import customer service, sau đó khởi tạo ở hàm constructor bên dưới

// import Router to use this.router.navigate , và tương tự CustomerService khởi tạo ở constructor

var AddCustomerComponent = (function () {
    function AddCustomerComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
    };
    // add event submit, this.first_name .. là do ta khai báo 1 dọc ở trên
    AddCustomerComponent.prototype.onAddSubmit = function () {
        // alert('test');
        var _this = this;
        // chú ý: this.last_name sẽ lấy từ name trong tag input của component html
        // nhưng last_name sẽ là cái đc submit lên server thay vì name trong tag input
        // vậy trong tag input có thể là txtLastName và code đc viết là last_name: this.txtLastName
        var customer = {
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
        this.customerService.saveCustomer(customer).subscribe(function (customer) {
            _this.router.navigate(['/']);
        });
    };
    AddCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-customer',
            template: __webpack_require__("../../../../../src/app/components/add-customer/add-customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-customer/add-customer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-invoice/add-invoice.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-invoice/add-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Add Invoice</h1>\n<form (submit)=\"onAddSubmit()\">\n  <div class=\"form-group\">\n    <label>Service</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Service\" name=\"service\" [(ngModel)]=\"service\">\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Price\" name=\"price\" [(ngModel)]=\"price\">\n  </div>\n  <div class=\"form-group\">\n    <label>Status</label>\n    <select class=\"form-control\" name=\"status\" [(ngModel)]=\"status\">\n      <option value=\"unpaid\" selected=\"selected\">Unpaid</option>\n      <option value=\"paid\">Paid</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <label>Due Date</label>\n    <input type=\"date\" class=\"form-control\" placeholder=\"Due Date\" name=\"due\" [(ngModel)]=\"due\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-invoice/add-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import customer service vào. Tất cả cái gì liên quan customer thì đưa vào đây sử dụng

// import Router cho redirect, Route để lấy params

var AddInvoiceComponent = (function () {
    function AddInvoiceComponent(customerService, router, route) {
        this.customerService = customerService;
        this.router = router;
        this.route = route;
    }
    AddInvoiceComponent.prototype.ngOnInit = function () {
        // ví dụ set gtrị default thẻ select là Unpaid
        this.status.value = 'Unpaid';
    };
    AddInvoiceComponent.prototype.onAddSubmit = function () {
        var _this = this;
        // chuẩn bị obj invoice để insert
        // import thêm Route để lấy được tham số parameter trên trình duyệt, bên php hoặc c# mấy cái này là default
        this.customer = this.route.snapshot.params['customer_id'];
        // alert(this.customer);
        var invoice = {
            customer: this.customer,
            service: this.service,
            price: this.price,
            status: this.status,
            due: this.due
        };
        this.customerService.saveInvoice(invoice).subscribe(function (invoice) {
            var path = '/customer/' + _this.customer;
            _this.router.navigate([path]);
        });
    };
    AddInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-invoice',
            template: __webpack_require__("../../../../../src/app/components/add-invoice/add-invoice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-invoice/add-invoice.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AddInvoiceComponent);
    return AddInvoiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/customer-details/customer-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer-details/customer-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"customer\">\n    <h1 class=\"page-header\">\n        {{customer.first_name}} {{customer.last_name}}\n    </h1>\n\n    <h4>Contact Info</h4>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\"><strong>Company: </strong>{{customer.company}}</li>\n        <li class=\"list-group-item\"><strong>Email: </strong>{{customer.email}}</li>\n        <li class=\"list-group-item\"><strong>Phone: </strong>{{customer.phone}}</li>\n    </ul>\n\n    <h4>Location Info</h4>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\"><strong>Street: </strong>{{customer.address?.street}}</li>\n        <li class=\"list-group-item\"><strong>City: </strong>{{customer.address?.city || \"\"}}</li>\n        <li class=\"list-group-item\"><strong>State: </strong>{{customer.address?.state}}</li>\n        <li class=\"list-group-item\"><strong>Zip: </strong>{{customer.address?.zip || \"\"}}</li>\n    </ul>\n\n    <h4 class=\"page-header\">Invoices <a routerLink=\"/invoice/add/{{customer._id}}\">Create Invoice</a></h4>\n    <div class=\"invoices\">\n        <table class=\"table table-stripped\">\n            <tr>\n                <th>ID</th>\n                <th>Service</th>\n                <th>Price</th>\n                <th>Status</th>\n                <th>Due</th>\n                <th></th>\n            </tr>\n            <tr *ngFor=\"let invoice of invoices\">\n                <td>{{invoice._id}}</td>\n                <td>{{invoice.service}}</td>\n                <td>{{invoice.price}}</td>\n                <td>{{invoice.status}}</td>\n                <td>{{invoice.due}}</td>\n                <td>\n                    <a (click)=\"markPaid(invoice._id, invoice)\" class=\"btn btn-default btn-sm\">Mark Paid</a>\n                    <a href=\"\" (click)=\"onDeleteClick(invoice._id)\" class=\"btn btn-danger btn-sm\">Delete</a>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customer-details/customer-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import CustomerService

// import Router

var CustomerDetailsComponent = (function () {
    function CustomerDetailsComponent(customerService, router, route) {
        this.customerService = customerService;
        this.router = router;
        this.route = route;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // cách lấy params từ path
        this.id = this.route.snapshot.params['id'];
        this.customerService.getCustomer(this.id).subscribe(function (customer) {
            // this.customer dùng trong template
            _this.customer = customer;
        });
        // get invoices follow customer id
        this.customerService.getInvoices(this.id).subscribe(function (invoices) {
            _this.invoices = invoices;
        });
    };
    CustomerDetailsComponent.prototype.markPaid = function (invoice_id, invoice) {
        // alert(invoice_id);
        invoice.status = 'paid'; // set new status of invoice
        this.customerService.markPaid(invoice_id, invoice).subscribe(function (invoice) {
            invoice.status = 'paid'; // callback, cập nhật lại trạng thái trên web
        });
    };
    // delete invoice
    CustomerDetailsComponent.prototype.onDeleteClick = function (invoice_id) {
        // alert(this.id);
        var path = '/customer/' + this.id;
        this.router.navigate([path]);
        // this.customerService.deleteInvoice(invoice_id).subscribe(invoice => {
        //   this.router.navigate(['/customer/' + this.id]);
        // });
    };
    CustomerDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-details',
            template: __webpack_require__("../../../../../src/app/components/customer-details/customer-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customer-details/customer-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/customers/customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Customers</h1>\n<div class=\"customers\">\n    <table class=\"table table-striped\">\n        <tr>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Email</th>\n            <th>Phone</th>\n            <th></th>\n        </tr>\n        <tr *ngFor=\"let customer of customers\">\n            <td>{{customer.first_name}}</td>\n            <td>{{customer.last_name}}</td>\n            <td>{{customer.email}}</td>\n            <td>{{customer.phone}}</td>\n            <td>\n                <a routerLink=\"/customer/{{customer._id}}\" class=\"btn btn-success btn-sm\">Detail</a>\n                <a routerLink=\"/customer/edit/{{customer._id}}\" class=\"btn btn-default btn-sm\">Edit</a>\n                <a href=\"\" (click)=\"onDeleteClick(customer._id)\" class=\"btn btn-danger btn-sm\">Delete</a>\n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// add Router for this.router.navigate

var CustomersComponent = (function () {
    // constructor() { }
    function CustomersComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customers) {
            // console.log(customers);
            _this.customers = customers; // truyền biến sang component
        });
        // console.log('test');
    };
    CustomersComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        // alert(id);
        this.customerService.deleteCustomer(id).subscribe(function (customer) {
            // console.log(123);
            // console.log(customer);
            // alert(123);
            _this.router.navigate(['/']);
        });
    };
    CustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customers',
            template: __webpack_require__("../../../../../src/app/components/customers/customers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-customer/edit-customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-customer/edit-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Customer</h1>\n\n<div *ngIf=\"customer\">\n    <form (submit)=\"onEditSubmit()\" class=\"well\">\n        <div class=\"form-group\">\n            <label>First Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.first_name\" name=\"first_name\" placeholder=\"First Name\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.last_name\" name=\"last_name\" placeholder=\"Last Name\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Company</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.company\" name=\"company\" placeholder=\"Company\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.email\" name=\"email\" placeholder=\"Email\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Phone</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.phone\" name=\"phone\" placeholder=\"Phone\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Street</label>\n            <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.address.street\" name=\"street\" placeholder=\"Street\" /> -->\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"customer.address?.street\" (ngModelChange)=\"customer.address.street = $event\" name=\"street\" placeholder=\"Street\" />\n        </div>\n        <div class=\"form-group\">\n            <label>City</label>\n            <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer.address.city\" name=\"city\" placeholder=\"City\" /> -->\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"customer.address?.city\" (ngModelChange)=\"customer.address.city = $event\" name=\"city\" placeholder=\"City\" />\n        </div>\n        <div class=\"form-group\">\n            <label>State</label>\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"customer.address?.state\" (ngModelChange)=\"customer.address.state = $event\" name=\"state\" placeholder=\"State\" />\n        </div>\n        <div class=\"form-group\">\n            <label>Zip</label>\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"customer.address?.zip\" (ngModelChange)=\"customer.address.zip = $event\" name=\"zip\" placeholder=\"Zip\" />\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-customer/edit-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import Customer Service

// to get id from params, need include router, route, params

var EditCustomerComponent = (function () {
    function EditCustomerComponent(customerService, router, route) {
        this.customerService = customerService;
        this.router = router;
        this.route = route;
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get id from params
        // vì params có mày xanh là property, nên dùng theo kiểu object []
        this.id = this.route.snapshot.params['id'];
        // console.log(this.id);
        // get customer from id by method getCustomer of customerService
        this.customerService.getCustomer(this.id).subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    EditCustomerComponent.prototype.onEditSubmit = function () {
        // alert('test');
        var _this = this;
        // new obj customer, chú ý, const customer này ko liên quan customer từ customer interface trên.
        // nếu muốn dùng customer interface trên thì dùng với this.customer
        // this.customer.first_name là do bên view dùng ngModel là customer.first_name
        // ngoài ra nó lấy đc cũng nhờ đã khai báo customer interface. gần như nó đi toàn bồ xuyên suốt component nay
        var customer = {
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
        this.customerService.updateCustomer(this.id, customer).subscribe(function (customer) {
            // console.log('test');
            _this.router.navigate(['/']);
        });
    };
    EditCustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-customer',
            template: __webpack_require__("../../../../../src/app/components/edit-customer/edit-customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-customer/edit-customer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EditCustomerComponent);
    return EditCustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n            <a class=\"navbar-brand\" href=\"#\">Invoice</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Dashboard</a></li>\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/customer/add']\">Add Customer</a></li>\n                <li><a href=\"#contact\">Contact</a></li>\n            </ul>\n        </div>\n        <!--/.nav-collapse -->\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
    }
    // add function getCustomers from link localhost:3000/api/customers
    CustomerService.prototype.getCustomers = function () {
        return this.http.get('http://localhost:3000/api/customers').map(function (res) { return res.json(); });
    };
    // saveCustomer , use in component add-customer
    CustomerService.prototype.saveCustomer = function (customer) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json'); // chú ý, code này quan trọng
        return this.http.post('http://localhost:3000/api/customers/add', customer, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // getCustomer , to get get detail customer when open detail customer page
    CustomerService.prototype.getCustomer = function (id) {
        return this.http.get('http://localhost:3000/api/customers/' + id).map(function (res) { return res.json(); });
    };
    // updateCustomer used in edit customer component
    CustomerService.prototype.updateCustomer = function (id, customer) {
        // chú ý đây là hàm của angular2 gửi put lên /api/customers/
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/customers/update/' + id, customer, { headers: headers }).map(function (res) { return res.json(); });
    };
    // deleteCustomer
    CustomerService.prototype.deleteCustomer = function (id) {
        // chú ý: với việc delete thì ko có dữ liệu submit lên, vì thế ko cần new Header()
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/api/customers/delete/' + id).map(function (res) { return res.json(); });
    };
    // getInvoices used in customer-details
    CustomerService.prototype.getInvoices = function (customer_id) {
        return this.http.get('http://localhost:3000/api/invoices/customer/' + customer_id)
            .map(function (res) { return res.json(); });
    };
    // markPaid() used in customer details
    CustomerService.prototype.markPaid = function (invoices_id, invoice) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // cập nhật lại status trong collection invoice
        return this.http.put('http://localhost:3000/api/invoices/update/' + invoices_id, invoice, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // deleteInvoice used in customer detail
    CustomerService.prototype.deleteInvoice = function (id) {
        return this.http.delete('http://localhost:3000/api/invoices/delete/' + id)
            .map(function (res) { return res.json(); });
    };
    // saveInvoice() used in add invoice component
    CustomerService.prototype.saveInvoice = function (invoice) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/invoices/add', invoice, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map