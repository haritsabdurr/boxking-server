const { Schema } = require('mongoose');

module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      customer: { type: Schema.Types.ObjectId, ref: 'customer' },
      // customer_name: { type: String, required: true },
      // customer_phone: { type: String, required: true },
      total: { type: Number, required: true },
      payment_method: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.payment_id = _id;
    return object;
  });

  const Payment = mongoose.model('payment', schema);
  return Payment;
};
