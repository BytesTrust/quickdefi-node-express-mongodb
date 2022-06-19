module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      email: String,
      country: String,
      walletAddress: String,
      kycVerify: Boolean,
      verificationStatus: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
