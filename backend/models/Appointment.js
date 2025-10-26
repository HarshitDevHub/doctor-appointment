const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Reference to the User model
    required: true,
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
  status:{
    type: String,
    default:'Pending',
  },
  cancelReason:{
    type: String,
    default: null,
  },
  requestedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
