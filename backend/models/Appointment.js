const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true, // Store email for quick access
  },
  doctor: {
    type: String,
    required: true,
  },
  expectedAppointmentDate: {
    type: Date,
    required: true,
  },
  appointmentReason: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    default: null,
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
