const db = require('../models');
const SubCategory = db.subcategory;

exports.findAll = (req, res) => {
  SubCategory.find({})
    .then((subcategories) => {
      res.status(200).json(subcategories);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil subkategori.');
    });
};

exports.findOne = (req, res) => {
  const subcategoryId = req.params.id;

  SubCategory.findById(subcategoryId)
    .then((subcategory) => {
      res.status(200).json(subcategory);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil subkategori.');
    });
};

exports.create = (req, res) => {
  const { subcategory_name, subcategory_desc, category_name } = req.body;

  const subcategory = new SubCategory({
    subcategory_name,
    subcategory_desc,
    category_name,
  });

  subcategory
    .save()
    .then(() => {
      res.status(201).send('SubKategori berhasil ditambahkan.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menyimpan subkategori.');
    });
};

exports.update = (req, res) => {
  const subcategoryId = req.params.id;
  const { subcategory_name, subcategory_desc, category_name } = req.body;

  SubCategory.findByIdAndUpdate(subcategoryId, {
    subcategory_name,
    subcategory_desc,
    category_name,
  })
    .then(() => {
      res.status(200).send('SubKategori berhasil diupdate.');
    })
    .catch((err) => {
      res.status(500).send('Gagal mengupdate subkategori.');
    });
};

exports.delete = (req, res) => {
  const subcategoryId = req.params.id;

  SubCategory.findByIdAndRemove(subcategoryId)
    .then(() => {
      res.status(200).send('SubKategori berhasil dihapus.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menghapus subkategori.');
    });
};
