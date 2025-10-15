const mongoose = require('mongoose');

const medicalInfoSchema = new mongoose.Schema({
  selectedDoctor: {
    type: String,
    default: null,
  },
  insuranceProvider: {
    type: String,
    default: null,
  },
  insurancePolicyNumber: {
    type: String, // Changed to String because policy numbers often contain letters
    default: null,
  },
  familyMedicalHistory: {  // renamed for clarity and consistency
    type: String,
    default: null,
  },
  pastMedicalHistory: {
    type: String,
    default: null,
  },
}, { _id: false });

const identificationSchema = new mongoose.Schema({
  identificationType: {
    type: String,
    default: null,
  },
  identificationNumber: {
    type: String,
    default: null,
  },
  documentUpload: {
    type: String, // URL or file path to scanned document
    default: null,
  }
}, { _id: false });

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,  // Changed to String to handle various formats
    required: true,
  },
  dob: {
    type: Date,
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
  occupation: {
    type: String,
    default: null,
  },
  emergencyContactName: {
    type: String,
    default: null,
  },
  emergencyContactNumber: {
    type: String, // Changed to String here too
    default: null,
  },
  medicalInformation: {
    type: [medicalInfoSchema], // array of medical records
    default: [],
  },
  identificationAndVerification: {
    type: identificationSchema,
    default: {},
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
