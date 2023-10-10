const mongoose = require("mongoose");

const learnersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Every learner must have a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Every learner must have an email address"],
      trim: true,
      unique: [true, "This email has already been taken"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Learner = mongoose.model("Learner", learnersSchema);

module.exports = Learner;
