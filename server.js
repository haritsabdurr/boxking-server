const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8800;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const db = require('../server/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Koneksi Database Berhasil!');
  })
  .catch((err) => {
    console.log('Koneksi Database Gagal');
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({
    message: 'Rest API Boxking POS',
  });
});

require('./routes/product.routes')(app);
require('./routes/category.routes')(app);
// require('./routes/subcategory.routes')(app);
require('./routes/user.routes')(app);
require('./routes/customer.routes')(app);
require('./routes/order.routes')(app);
require('./routes/method.routes')(app);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}!`));
