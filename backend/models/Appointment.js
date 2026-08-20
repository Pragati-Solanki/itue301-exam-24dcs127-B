const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["confirmed", "pending", "cancelled"],
    default: "confirmed",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);