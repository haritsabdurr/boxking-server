const { Schema } = require('mongoose');

module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    customer_name: { type: String, required: true },
    customer_phone: { type: String, required: true },
    order: [{ type: Schema.Types.ObjectId, ref: 'order' }],
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.customer_id = _id;
    return object;
  });

  const Customer = mongoose.model('customer', schema);
  return Customer;
};
