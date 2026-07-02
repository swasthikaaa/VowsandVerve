import mongoose, { Schema, models } from "mongoose";

const InquirySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    weddingDate: {
      type: String,
    },
    theme: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Inquiry = models.Inquiry || mongoose.model("Inquiry", InquirySchema);

export default Inquiry;