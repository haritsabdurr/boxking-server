const db = require('../models');
const Method = db.methods;

exports.findAll = (req, res) => {
  Method.find({})
    .then((methods) => {
      res.status(200).json(methods);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil metode bayar.');
    });
};

exports.findOne = (req, res) => {
  const methodId = req.params.id;

  Method.findById(methodId)
    .then((method) => {
      res.status(200).json(method);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil metode bayar.');
    });
};

exports.create = (req, res) => {
  const { payment_method, payment_desc } = req.body;

  const method = new Method({
    payment_method,
    payment_desc,
  });

  method
    .save()
    .then(() => {
      res.status(201).send('Metode bayar berhasil ditambahkan.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menyimpan metode bayar.');
    });
};

exports.update = (req, res) => {
  const methodId = req.params.id;
  const { payment_method, payment_desc } = req.body;

  Method.findByIdAndUpdate(methodId, {
    payment_method,
    payment_desc,
  })
    .then(() => {
      res.status(200).send('Kategori berhasil diupdate.');
    })
    .catch((err) => {
      res.status(500).send('Gagal mengupdate kategori.');
    });
};

exports.delete = (req, res) => {
  const methodId = req.params.id;

  Method.findByIdAndRemove(methodId)
    .then(() => {
      res.status(200).send('Kategori berhasil dihapus.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menghapus kategori.');
    });
};
