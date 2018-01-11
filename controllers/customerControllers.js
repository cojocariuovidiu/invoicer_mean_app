const Customer = require('../models/customer');

// get all customers
exports.getCustomers = function(req, res, next) {
    // res.send('customers');
    Customer.getCustomers((err, customers) => {
        if (err) {
            console.log(err);
            res.send(err);
        }

        // chú ý, với api thì send.json()
        res.json(customers);
    });
}

exports.getCustomer = function(req, res) {
    Customer.getCustomerById(req.params.id, function(err, customer) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(customer);
    })
}

// result in callback is customer obj
exports.addCustomer_post = function(req, res) {
    // console.log(req.body);
    // res.send('ok');
    var customer = req.body;
    Customer.addCustomer(customer, function(err, result) {
        if (err) {
            console.error(err);
            res.send(err);
        }
        res.json(result);
    });
}

// update
exports.updateCustomer_put = function(req, res) {
    const id = req.params.id;
    const customer = req.body;
    console.log(customer);

    Customer.updateCustomer(id, customer, {}, function(err, result) {
        if (err) {
            console.error(err);
            res.send('have error: ' + err);
        }
        // result này là thông tin customer cũ
        // res.send('ket qua' + result);

        // nếu trả về ko phải là 1 obj mà như ở trên: string + obj, thì phía client
        // ở đây là angular 2 sẽ bị lỗi, vì default khi nhận callback về nó là 1 object
        // vì vậy sẽ có báo lỗi tại client là unexpected token in json at position 0
        // lúc đó edit customer component sẽ bị lỗi và ko redirect được tại hàm như bên dưới
        // mở file edit-customer.component.ts hàm:
        // this.customerService.updateCustomer(this.id, customer).subscribe(customer => {this.router.navigate(['/']);});        
        res.send(result);
    });
}

// delete
exports.removeCustomer_delete = function(req, res) {
    const query = req.params.id;

    Customer.removeCustomer(query, function(err, result) {
        if (err) {
            console.error(err);
            res.send(err);
        }
        res.send(result);
    })
}