import mongoose, { Schema, models } from "mongoose";

const ConsultationSchema = new Schema(
  {
    selectedDate: {
      type: String,
      required: true,
    },
    selectedTime: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "Private Design Session",
    },
  },
  { timestamps: true }
);

const Consultation =
  models.Consultation || mongoose.model("Consultation", ConsultationSchema);

export default Consultation;