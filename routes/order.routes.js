module.exports = (app) => {
  const order = require('../controllers/order.controller');
  const router = require('express').Router();

  router.get('/', order.findAll);
  router.get('/:id', order.findOne);
  router.post('/', order.create);

  app.use('/order', router);
};
