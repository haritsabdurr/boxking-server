module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      category_name: { type: String, required: true },
      // subcategory_name: { type: String, required: true },
      product_name: { type: String, required: true },
      product_desc: { type: String, required: true },
      product_price: { type: Number, required: true },
      // product_img: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.product_id = _id;
    return object;
  });

  const Product = mongoose.model('products', schema);
  return Product;
};
