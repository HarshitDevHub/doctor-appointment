const express = require('express');
const { default: mongoose } = require('mongoose');
const Users = require('./models/Users');
const Appointment = require('./models/Appointment');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// database url

const mongoURI = process.env.MONGODB_URI||'mongodb://localhost:27017/doctor-appointment';

// Connect to MongoDB
mongoose.connect(mongoURI)
.then(() => console.log('✅ Connected to Database'))
.catch(err => console.error('❌ Database connection error:', err));


// Api Section


app.get('/', (req, res) => {
  res.send('API Working!');
});

// Registering  User 
app.post('/register', async(req, res) => {
  const { name, email, phoneNumber } = req.body;

  // console.log(req.body)

  if (!name || !email || !phoneNumber) {
    return res.json({message:"All fields are required", success: false})
  }

  try {
    const isUserExist = await Users.findOne({email});

    if (isUserExist) {return res.json({message:"Email Already Exist !"})}

    const user = new Users({
        fullName: name,
        email,
        phoneNumber
    })

    await user.save();
    console.log('New user Registered: ',user.fullName)
    return res.send({message:"Account Registered",user, success: true})

  } catch (error) { 
    res.json({message:"Internal server error"})
    console.error("Register Api Internal Server Error",error)
  }

});

// Collecting User Personal And Medical Informations

app.put('/verifying-user-details', async (req, res) => {
  const {
    email,
    dob,
    gender,
    address,
    occupation,
    emergencyContactName,
    emergencyContactNumber,
    doctorName,
    insuranceProvider,
    insurancePolicyNumber,
    familyMedicalHistory,
    pastMedicalHistory,
    identificationType,
    identificationNumber,
    documentUpload
  } = req.body;

  console.log(req.body)

  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid User", success: false });
    }

    // Update personal info
    user.dob = dob;
    user.gender = gender;
    user.address = address;
    user.occupation = occupation;
    user.emergencyContactName = emergencyContactName;
    user.emergencyContactNumber = emergencyContactNumber;

    // Update medicalInformation (as a new entry in the array)
    user.medicalInformation.push({
      selectedDoctor: doctorName,
      insuranceProvider,
      insurancePolicyNumber,
      familyMedicalHistory,
      pastMedicalHistory
    });

    // Update identification info
    user.identificationAndVerification = {
      identificationType,
      identificationNumber,
      documentUpload
    };

    await user.save();

    return res.status(200).json({
      message: "User details updated successfully",
      success: true,
      user
    });

  } catch (error) {
    console.error("Internal Server Error", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
});

// Appointment

app.post('/doctor-appointment', async (req,res)=>{
  const {email,doctor,expectedAppointmentDate,appointmentReason,comment} = req.body;

console.log(req.body)
  if (!email || !doctor || !expectedAppointmentDate || !appointmentReason || !comment) {
    return res.json({message:"All fields are reuired !!", success: false})
  }

  try {

    const user = await Users.findOne({email:email});
    // console.log(user)

      if (!user) {
    return res.json({ message: "Invalid User", success: false });
  }


    const appointment = new Appointment({
      userId:user._id,
      doctor,
      expectedAppointmentDate,
      appointmentReason,
      comments:comment
    })

    await appointment.save();
    console.log(appointment)
    return res.json({appointment,message:"Appointment Successfull", success: true,})

  } catch (error) {
    console.error("Internal Server Error", error)
    return res.status(500).json({message:"Internal server error", success: false})
  }
});

// Fetching appointment details

app.get('/fetch-appointment-list', async (req, res) => {

  const appointments = await Appointment.find().populate('userId', 'fullName').sort({ _id: -1 });;
  // console.log(appointments)
  return res.json({appointments, success: true})
})

// Approving appointment details

app.put('/approve-appointment', async (req, res) => {
  const {appointmentData, action} = req.body;
  if(action === 'approve'){

    const appointment = await Appointment.findById(appointmentData._id);


    appointment.doctor = appointmentData.doctor,
    appointment.expectedAppointmentDate = appointmentData.expectedAppointmentDate,
    appointment.status = 'Scheduled'

    await appointment.save();
    console.log(appointment)

    return res.json({message:"Appointment Approved", success:true})
    
  }else{
    const appointment = await Appointment.findById(appointmentData._id)

    appointment.status = 'Canceled',
    appointment.cancelReason = appointmentData.cancelReason,

    await appointment.save();

    return res.json({message:"Appointment Canceled", success: true})
  }

})

// Validataing Passcode

app.post('/validate-user', async(req,res) => {
  const {otp} = req.body
  console.log(req.body.join(''))

  if (req.body.join('') === '1990') {
    return res.json({message:"Welcome Admin", success: true})
  }else{
    return res.json({message:'Incorrect Passcode', success: false})
  }
})


app.listen(port, () => {
  console.log(`✅ Server Started: http://localhost:${port}`);
});
