module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    category_name: { type: String, required: true },
    subcategory_name: { type: String, required: true },
    subcategory_desc: { type: String, required: true },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.subcategory_id = _id;
    return object;
  });

  const SubCategory = mongoose.model('subcategory', schema);
  return SubCategory;
};
