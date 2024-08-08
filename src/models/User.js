import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, "User Name is Required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your Email Address"],
    match: [/.+\@.+\..+/, "Please Use a Valid Email Address"],
    unique: true,
  },
  image: {
    type: String,
  },
  isPaymentAccepted: {
    type: Boolean,
    default: false,
  },
  fullName: {
    type: String,
  },
  razorPay_key_id: {
    type: String,
    required: function () {
      return this.isPaymentAccepted;
    },
  },
  razorPay_key_secret: {
    type: String,
    required: function () {
      return this.isPaymentAccepted;
    },
  },
  transactionsReceived: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },
  ],
  transactionsSent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },
  ],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const PaymentSchema = new Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);
export const PaymentModel =
  mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
