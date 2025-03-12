const db = require('../models');
const Product = db.products;

exports.findAll = (req, res) => {
  Product.find({})
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil produk.');
    });
};

exports.findOne = (req, res) => {
  const productId = req.params.id;

  Product.findById(productId)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil produk.');
    });
};

exports.create = (req, res) => {
  const {
    category_name,
    // subcategory_name,
    product_name,
    product_desc,
    product_price,
    // product_img,
  } = req.body;

  const product = new Product({
    category_name,
    // subcategory_name,
    product_name,
    product_desc,
    product_price,
    // product_img,
  });

  product
    .save()
    .then(() => {
      res.status(201).send('Produk berhasil ditambahkan.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menyimpan produk.');
    });
};

exports.update = (req, res) => {
  const productId = req.params.id;
  const {
    category_name,
    // subcategory_name,
    product_name,
    product_desc,
    product_price,
    product_img,
  } = req.body;

  Product.findByIdAndUpdate(productId, {
    category_name,
    subcategory_name,
    product_name,
    product_desc,
    product_price,
    // product_img,
  })
    .then(() => {
      res.status(200).send('Produk berhasil diupdate.');
    })
    .catch((err) => {
      res.status(500).send('Gagal mengupdate produk.');
    });
};

exports.delete = (req, res) => {
  const productId = req.params.id;

  Product.findByIdAndRemove(productId)
    .then(() => {
      res.status(200).send('Produk berhasil dihapus.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menghapus produk.');
    });
};
