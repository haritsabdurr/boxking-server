const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require('./product.model')(mongoose);
db.category = require('./category.model')(mongoose);
db.subcategory = require('./subcategory.model')(mongoose);
db.users = require('./user.model')(mongoose);
db.customers = require('./customer.model')(mongoose);
db.orders = require('./order.model')(mongoose);
db.payments = require('./payment.model')(mongoose);
db.methods = require('./method.model')(mongoose);

module.exports = db;
