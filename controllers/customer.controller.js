const db = require('../models');
const Customer = db.customers;

exports.findAll = (req, res) => {
  Customer.find({})
    .then((customers) => {
      res.status(200).json(customers);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil kustomer.');
    });
};

exports.findAllOrders = (req, res) => {
  let foundCustomer = Customer.find({
    customer_id: req.params.id,
  })
    .populate('order')
    .then((custOrder) => {
      res.status(200).json(custOrder);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil order kustomer');
    });
  // res.json(foundCustomer);
};

exports.findOne = (req, res) => {
  const customerId = req.params.id;

  Customer.findById(customerId)
    .then((customer) => {
      res.status(200).json(customer);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil kustomer.');
    });
};

exports.create = (req, res) => {
  const { customer_name, customer_phone } = req.body;

  const customer = new Customer({
    customer_name,
    customer_phone,
  });

  customer
    .save()
    .then(() => {
      res.status(201).send('Kustomer berhasil ditambahkan.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menyimpan kustomer.');
    });
};

exports.delete = (req, res) => {
  const customerId = req.params.id;

  Customer.findByIdAndRemove(customerId)
    .then(() => {
      res.status(200).send('Kustomer berhasil dihapus.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menghapus kustomer.');
    });
};

exports.login = (req, res) => {
  const customer_name = req.body.customer_name;
  Customer.findOne({ customer_name: customer_name })
    .then((customer) => {
      res.status(200).json({
        code: 'success',
        message: 'data found successfully',
        data: customer,
      });
    })
    .catch((err) => {
      res.status(500).json({
        code: 'error',
        message: 'Field Must Be Filled',
        data: err,
      });
    });
};
