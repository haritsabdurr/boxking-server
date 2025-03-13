const db = require('../models');
const User = db.users;

exports.findAll = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil data user.');
    });
};

exports.findOne = (req, res) => {
  const userId = req.params.id;

  User.findById(userId)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send('Gagal mengambil data user.');
    });
};

exports.create = (req, res) => {
  const { user_name, user_email, user_password, user_position } = req.body;

  const user = new User({
    user_name,
    user_email,
    user_password,
    user_position,
  });

  user
    .save()
    .then(() => {
      res.status(201).send('User berhasil ditambahkan.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menyimpan data user.');
    });
};

exports.update = (req, res) => {
  const userId = req.params.id;
  const { user_name, user_email, user_password, user_position } = req.body;

  User.findByIdAndUpdate(userId, {
    user_name,
    user_email,
    user_password,
    user_position,
  })
    .then(() => {
      res.status(200).send('User berhasil diupdate.');
    })
    .catch((err) => {
      res.status(500).send('Gagal mengupdate data user.');
    });
};

exports.delete = (req, res) => {
  const userId = req.params.id;

  User.findByIdAndRemove(userId)
    .then(() => {
      res.status(200).send('User berhasil dihapus.');
    })
    .catch((err) => {
      res.status(500).send('Gagal menghapus data user.');
    });
};

exports.login = (req, res) => {
  const user_name = req.body.user_name;
  User.findOne({ user_name: user_name })
    .then((user) => {
      // const result = req.body.user_password === user.user_password;
      if (req.body.user_password === user.user_password) {
        res.status(200).json({
          code: 'success',
          message: 'data found successfully',
          data: user,
        });
      } else if (req.body.user_password !== user.user_password) {
        return res.status(401).json({
          code: 'error',
          message: 'Wrong Password',
          data: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        code: 'error',
        message: 'Field Must Be Filled',
        data: err,
      });
    });
};
