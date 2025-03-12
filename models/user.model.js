// module.exports = (mongoose) => {
//   const schema = mongoose.Schema({
//     user_name: { type: String, required: true },
//     user_email: { type: String, required: true },
//     user_password: { type: String, required: true },
//     user_Position: { type: String, required: true },
//   });

//   schema.method('toJSON', function () {
//     const { __v, _id, ...object } = this.toObject();
//     object.user_id = _id;
//     return object;
//   });

//   const User = mongoose.model('users', schema);
//   return User;
// };

module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    user_name: { type: String, required: true },
    user_email: { type: String, required: true },
    user_password: { type: String, required: true },
    user_position: { type: String, required: true },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.user_id = _id;
    return object;
  });

  const User = mongoose.model('users', schema);
  return User;
};
