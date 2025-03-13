module.exports = (app) => {
  const category = require('../controllers/category.controller');
  const router = require('express').Router();

  router.get('/', category.findAll);
  router.get('/:id', category.findOne);
  router.post('/', category.create);
  router.put('/:id', category.update);
  router.delete('/:id', category.delete);

  app.use('/category', router);
};
