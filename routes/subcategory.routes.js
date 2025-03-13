module.exports = (app) => {
  const subcategory = require('../controllers/subcategory.controller');
  const router = require('express').Router();

  router.get('/', subcategory.findAll);
  router.get('/:id', subcategory.findOne);
  router.post('/', subcategory.create);
  router.put('/:id', subcategory.update);
  router.delete('/:id', subcategory.delete);

  app.use('/subcategory', router);
};
