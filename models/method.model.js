module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    payment_method: { type: String, required: true },
    payment_desc: { type: String, required: true },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.method_id = _id;
    return object;
  });

  const Method = mongoose.model('method', schema);
  return Method;
};
