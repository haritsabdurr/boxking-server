module.exports = (app) => {
  const method = require('../controllers/method.controller');
  const router = require('express').Router();

  router.get('/', method.findAll);
  router.get('/:id', method.findOne);
  router.post('/', method.create);
  router.put('/:id', method.update);
  router.delete('/:id', method.delete);

  app.use('/method', router);
};
