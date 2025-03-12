const { Schema } = require('mongoose');

module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      customer: { type: Schema.Types.ObjectId, ref: 'customer' },
      customer_name: { type: String, required: true },
      customer_phone: { type: String, required: true },
      user: { type: String, required: true },
      total: { type: Number, required: true },
      order_items: { type: Array, required: true },
    },
    {
      timestamps: true,
    }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.order_id = _id;
    return object;
  });

  const Order = mongoose.model('order', schema);
  return Order;
};
