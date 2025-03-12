const db = require('../models');
const Order = db.orders;
const Customer = db.customers;

exports.findAll = (req, res) => {
  Order.find({})
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil order.');
    });
};

exports.findOne = (req, res) => {
  const orderId = req.params.id;

  Order.findById(orderId)
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil order.');
    });
};

exports.create = (req, res) => {
  const { customer, customer_name, customer_phone, total, order_items, user } =
    req.body;

  const order = new Order({
    customer,
    customer_name,
    customer_phone,
    total,
    order_items,
    user,
  });

  order
    .save()
    .then(() => {
      res.status(201).json({
        code: 'success',
        message: 'Order Berhasil!',
        data: order,
      });
    })
    .catch((err) => {
      res.status(500).send('Gagal menyimpan cust order.');
    });
};
