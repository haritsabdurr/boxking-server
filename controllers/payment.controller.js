const db = require('../models');
const Payment = db.payments;

exports.findAll = (req, res) => {
  Payment.find({})
    .then((payments) => {
      res.status(200).json(payments);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil payment.');
    });
};

exports.findOne = (req, res) => {
  const paymentId = req.params.id;

  Payment.findById(paymentId)
    .then((payment) => {
      res.status(200).json(payment);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil payment.');
    });
};

exports.create = (req, res) => {
  const { customer_name, total, order_items } = req.body;

  const order = new Order({
    customer_name,
    total,
    order_items,
  });

  order
    .save()
    .then(() => {
      res.status(201).send('Order berhasil ditambahkan.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menyimpan order.');
    });
};
