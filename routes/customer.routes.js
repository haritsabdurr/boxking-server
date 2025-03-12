module.exports = (app) => {
  const customer = require('../controllers/customer.controller');
  const router = require('express').Router();

  router.get('/', customer.findAll);
  router.get('/:id', customer.findOne);
  router.get('/:id/order', customer.findAllOrders);
  router.post('/', customer.create);
  router.post('/login', customer.login);
  router.delete('/:id', customer.delete);

  app.use('/api/customer', router);
};
