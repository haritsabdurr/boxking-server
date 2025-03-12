module.exports = (app) => {
  const user = require('../controllers/user.controller');
  const router = require('express').Router();

  router.get('/', user.findAll);
  router.get('/:id', user.findOne);
  router.post('/', user.create);
  router.put('/:id', user.update);
  router.post('/login', user.login);
  router.delete('/:id', user.delete);

  app.use('/api/user', router);
};
