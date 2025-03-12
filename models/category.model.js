module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    category_name: { type: String, required: true },
    // category_desc: { type: String, required: true },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.category_id = _id;
    return object;
  });

  const Category = mongoose.model('category', schema);
  return Category;
};
