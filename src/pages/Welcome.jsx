import React, { use, useState } from 'react'
import bg2 from '../assets/bg-2.jpg'
import Appointment from './Appointment'
import { useUser } from '../context/UserContext'
import imgfile from '../assets/bg-2.jpg'
import axios from 'axios'
import toast from 'react-hot-toast'


const server_url = 'https://doctor-appointment-by6x.onrender.com' || 'http://localhost:3000'

const Welcome = (setIsWelcomePageIsOpen) => { 
  const [isAppointmentPageIsOpen, setIsAppointmentPageIsOpen] = useState(false)
  const {userData, setUserData} = useUser();
  const [userDetails, setUserDetails] = useState({
    fullName: userData.fullName || '',
    email: userData.email || '',
    phoneNumber: userData.phoneNumber || '',
    dob: '',
    gender: '',
    address: '',
    occupation: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    doctorName: '',
    insuranceProvider: '',
    insurancePolicyNumber: '',
    familyMedicalHistory: '',
    pastMedicalHistory: '',
    identificationType: '',
    identificationNumber: '',
    documentUpload:''
  });
  const [imgPreview, setImgPreview] = useState(null)
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)





    // handling form input change
    const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;

      setErrors({...errors,[name]:''})

  setUserDetails((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));

  console.log(userDetails)

    };

    // validating form input

    const formatLabel = (key) => {
  // Convert camelCase to words: "emergencyContactNumber" => "Emergency Contact Number"
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};


    const validate = () => {
  let tempErrors = {};

  // Loop through each key in userDetails
 Object.entries(userDetails).forEach(([key, value]) => {

  if (!value || value.trim() === "") {
    tempErrors[key] = `${formatLabel(key)} is required`;
  } else {
    // Additional check for emergency contact number
    if (key === "emergencyContactNumber") {
      const phoneRegex = /^\d{10,15}$/; // Example: allows 10 to 15 digits
      const digitsOnly = value.replace(/\D/g, ''); // Remove non-digit characters

      if (!phoneRegex.test(digitsOnly)) {
        tempErrors[key] = `${formatLabel(key)} must be a valid phone number`;
      }
    }
  }
});


  setErrors(tempErrors);

  // Return true if no errors
  return Object.keys(tempErrors).length === 0;
};


    // Handling form submit

    const handleFormSubmit =async (e)=>{
      // e.preventDefault();
      console.log(userDetails)

      if(validate()){
        setIsLoading(true)
      
        try {
          const response = await axios.put(`${server_url}/verifying-user-details`,userDetails)

          if (!response.data.success) {
            setIsLoading(false)
            alert("Form Submit Failed")
            return console.log(response.data.message)
          }

          console.log(response.data)
          toast.success("Book Your Appointment Now")
          
      return setIsAppointmentPageIsOpen(true)

          // return alert('Form submit')
        } catch (error) {
          setIsLoading(false)
          alert("Internal Server Error")
          console.error("Internal Server Error")
        }



        console.log(errors)
      }else{
        // console.log(errors)
        // console.log("Error in form validation")
      }
      // console.log(userDetails)
      // setIsAppointmentPageIsOpen(true)
    }

    // Handling document upload

const handleDocumentUpload = async (event) => {
  const file = event.target.files[0];

  setErrors({...errors,documentUpload:''})

  if (!file) {
    console.log("No file selected.");
    return;
  }

  // ✅ File type validation
  const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (!validImageTypes.includes(file.type)) {
    alert("Please upload a valid image file (JPG, PNG, GIF, WEBP).");
    return;
  }

  // ✅ File size check (limit to 20MB)
  const maxSizeInBytes = 20 * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    alert("File is too large. Please upload an image smaller than 5MB.");
    return;
  }

  // ✅ Optional local preview
  const reader = new FileReader();
  reader.onloadend = () => {
    const imageDataUrl = reader.result;
    setImgPreview(imageDataUrl); // your local state for preview
  };
  reader.readAsDataURL(file);

  // ✅ Upload to Cloudinary with Axios
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "my_preset"); // change this
  formData.append("cloud_name", "dcqjrswta"); // change this

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dcqjrswta/image/upload",
      formData,
      {
         onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        }
      }
    );

    // console.log("Uploaded to Cloudinary:", res.data.secure_url);
    
    // Optional: save uploaded image URL to state
    setUploadedImageUrl(res.data.secure_url);
    setUploadProgress(0)
    setUserDetails({...userDetails,documentUpload:res.data.secure_url})

  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    alert("Image upload failed. Please try again.");
    setImgPreview(null)
    setUserDetails({...userDetails,documentUpload:''});

    setUploadProgress(0);
  }
};




    
  return (
    <>
        {isAppointmentPageIsOpen ? (
            <>
            <Appointment/>
            </>
        ):(
        <>
         <div className='main-container bg-cover bg-center min-h-screen bg-fixed bg-shadow' style={{ backgroundImage: `url(${bg2})` }}>
         <div className="form-area bg-[rgb(19,21,25)] w-2/3 pb-8 min-h-screen">
            
             <h1 className='font-medium text-white text-xl flex items-center pt-6 px-10'><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
  <path fillRule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd"/>
  <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
</svg>
             Medi Plus</h1>

             <h2 className='text-2xl font-medium text-gray-100 mx-10 mt-8'>Welcome 👋</h2>
    <p className='text-[rgb(121,123,127)] text-xs mx-10 mt-1'>Let us know more about yourself.</p>

{/* form section */}

    <div className="form-area">
        <h2 className='text-2xl font-medium text-gray-100 mx-10 mt-8'>Personal Information</h2>

        <div className="form-section px-10 pt-4 pr-20">

              <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Full name</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg className="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

        <input type="text" value={userData.fullName} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Ram Charan' disabled/>
        </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Email</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg className="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>

        <input type="email" value={userData.email} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='ramcharan@gmail.com' disabled/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Phone number</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg className="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>

        <input type="text" value={userData.phoneNumber} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='9923457687' disabled/>
        </div>
                    </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.dob && 'text-red-700'}`}>Date of birth</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.dob && 'border-red-700'}`}>
          <svg className="w-6 h-6 ml-2 text-gray-800 dark:text-[rgb(121,123,127)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>

        <input type="date" name='dob' className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Your email here'  value={userDetails.dob}
  onChange={handleInputChange}/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col   gap-2 pb-4 w-full">

        <label  className={`text-[rgb(121,123,127)] text-xs ${errors.gender && 'text-red-700'}`}>Gender</label>

      <div className="radio-btn-wrap flex flex-wrap items-center gap-4">

    <div className="inp-icon  flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md py-3 px-2">
        <input type="radio" id="male" name="gender" className="outline-none"  value={'male'}
  onChange={handleInputChange}/>
        <label className="text-gray-400 cursor-pointer font-medium text-xs mx-1" htmlFor="male">Male</label>
    </div>

    <div className="inp-icon  flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md py-3 px-2">
        <input type="radio" id="female" name="gender" className="outline-none"  value={'female'}
  onChange={handleInputChange}/>
        <label className="text-gray-400 cursor-pointer font-medium text-xs mx-1" htmlFor="female">Female</label>
    </div>

    <div className="inp-icon  flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md py-3 px-2">
        <input type="radio" id="other" name="gender" className="outline-none" value={'other'}
  onChange={handleInputChange} />
        <label className="text-gray-400 cursor-pointer font-medium text-xs mx-1" htmlFor="other">Other</label>
    </div>

</div>


                    </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.address && 'text-red-700'}`}>Address</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.address && 'border-red-700'}`}>
        <input type="text" name='address' value={userDetails.address}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='184, Moti Nagar New Delhi'/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

       <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.occupation && 'text-red-700'}`}>Occupation</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.occupation && 'border-red-700'}`}>

        <input type="text" name='occupation' value={userDetails.occupation}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Developer'/>
        </div>
                    </div>
                </div>

                 <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

       <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.emergencyContactName && 'text-red-700'}`}>Emergency Contact Name</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.emergencyContactName && 'border-red-700'}`}>

        <input type="text" name='emergencyContactName' value={userDetails.emergencyContactName}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder="Guardian's name"/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

         <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.emergencyContactNumber && 'text-red-700'}`}>Emergency Contact Number</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.emergencyContactNumber && 'border-red-700'}`}>
          <svg className={`w-6 h-6 ml-2 text-gray-800 dark:text-gray-400 ${errors.emergencyContactNumber && 'dark:text-[rgb(121,123,127)]'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>

        <input type="text" name='emergencyContactNumber'  value={userDetails.emergencyContactNumber}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='+91 9923457687'/>
        </div>
                    </div>
                </div>

        <h2 className='text-2xl font-medium text-gray-100 mt-8 mb-4'>Medical Information</h2>

                <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.doctorName && 'text-red-700'}`}>Doctor Name</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.doctorName && 'border-red-700'}`}>
          <svg className="w-6 h-6 ml-2 text-gray-800 dark:text-[rgb(121,123,127)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

        <input type="text" name='doctorName' value={userDetails.doctorName}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Ram Charan'/>
        </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.insuranceProvider && 'text-red-700'}`}>Insurance provider</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.insuranceProvider && 'border-red-700'}`}>
         
        <input type="text" name='insuranceProvider' value={userDetails.insuranceProvider}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Harsh Ltd.'/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.insurancePolicyNumber && 'text-red-700'}`}
>Insurance policy number</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.insurancePolicyNumber && 'border-red-700'}`}>
         

        <input type="text" name='insurancePolicyNumber' value={userDetails.insurancePolicyNumber}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='HAB232'/>
        </div>
                    </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.familyMedicalHistory && 'text-red-700'}`}
>Family medical history (if relevant)</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.familyMedicalHistory && 'border-red-700'}`}>
         
        <textarea type="text" name='familyMedicalHistory'  value={userDetails.familyMedicalHistory}
  onChange={handleInputChange}className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Family medical history here...'></textarea>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.pastMedicalHistory && 'text-red-700'}`}>Past medical history</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.pastMedicalHistory && 'border-red-700'}`}>
         

        <textarea type="text" name='pastMedicalHistory'  value={userDetails.pastMedicalHistory}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Past medical history here...'></textarea>
        </div>
                    </div>
                </div>

        <h2 className='text-2xl font-medium text-gray-100 mt-8 mb-4'>Identification and Verification</h2>

          <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.identificationType && 'text-red-700'}`}>Identification Type</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.identificationType && 'border-red-700'}`}>
        

        <input type="text" name='identificationType'  value={userDetails.identificationType}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Birth Certificate'/>
        </div>
          </div>

          <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs ${errors.identificationNumber && 'text-red-700'}`}>Identification Number</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md ${errors.identificationNumber && 'border-red-700'}`}>
        

        <input type="text" name='identificationNumber' value={userDetails.identificationNumber}
  onChange={handleInputChange} className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='AB2871BC'/>
        </div>
          </div>

          {imgPreview === null && (
          <>
           <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="documentFile" className={`text-[rgb(121,123,127)] text-xs ${errors.documentUpload && 'text-red-700'}`}>Scanned Copy of Identification Document
        <input type="file" name="documentFile" accept='image/*' onChange={handleDocumentUpload} id="documentFile" hidden/>
        <div className={`inp-icon bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border-dashed border rounded-md  flex items-center justify-center flex-col gap-2 py-4 cursor-pointer mt-2 h-60 ${errors.documentUpload && 'border-red-700'}`}>


            <svg className="w-10 h-10 text-gray-800 dark:text-green-800 bg-[rgb(54,54,54)] rounded-full p-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/>
            </svg>

            <div className='upload-text-area'>
                <p className='text-xs text-[rgb(121,123,127)] text-center'> <span className='text-green-800'>Click to upload</span> or drag and drop</p>
                <p className='text-xs text-center text-[rgb(121,123,127)] pt-1'>SVG,PNG,JPG or GIF (max. 800x400px)</p>
            </div>

        
        </div>
        </label>
          </div>
          </>)}

          

          {/* img preview section */}
          {imgPreview !== null && (
          <>
          <div className="image-prev-section p-2 pb-0  relative">
            {uploadProgress == 0 && (<div className="close-btn bg-[rgb(26,28,32)] p-1 h-5 w-5 flex justify-center items-center text-xs absolute rounded-full text-[rgb(121,123,127)] font-bold border border-[rgb(54,54,54)] right-0 top-0 cursor-pointer" onClick={()=>{ setImgPreview(null);setUserDetails({...userDetails,documentUpload:''})}}>X</div>)}
            
          <img src={imgPreview} alt="" className={`w-full h-60 rounded-md rounded-br-none rounded-bl-none object-cover ${uploadProgress == 0 && '!rounded-md'}`}/>
          {/* <p className='text-[rgb(121,123,127)] text-xs mt-2 px-2'>Filename.jpg</p> */}
          </div>
          <div className="progress-bar w-full px-2"><div className={`progress-percent rounded-b-md bg-[rgb(28,141,100)] h-2 transition-all`} style={{width: `${uploadProgress}%`}}></div></div>
          </>)}
          
          {/* <div className="image-prev-section p-2 rounded-md relative">
            <div className="close-btn bg-[rgb(26,28,32)] p-1 h-5 w-5 flex justify-center items-center text-xs absolute rounded-full text-[rgb(121,123,127)] font-bold border border-[rgb(54,54,54)] right-0 top-0 cursor-pointer" onClick={()=> setImgPreview(null)}>X</div>
          <img src={uploadedImageUrl} alt="" className='w-full h-60 rounded-md object-cover'/>
          <p className='text-[rgb(121,123,127)] text-xs mt-2 px-2'>Upload.jpg</p>
          </div> */}

          {/* img preview section */}

        <h2 className='text-2xl font-medium text-gray-100 mt-4 mb-4'>Consent and Privacy</h2>

        <p className='text-gray-400 text-xs flex items-center gap-2 pb-2'> <input type="checkbox" required/>I consent to receive treatment for my health condition.</p>

        <p className='text-gray-400 text-xs flex items-center gap-2 pb-2'> <input type="checkbox" required/>I consent to the use and disclosure of my health information for treatment purposes.</p>

        <p className='text-gray-400 text-xs flex items-center gap-2 pb-2'> <input type="checkbox" required/>I acknowleds that I have reviewed and agree to the privacy policy</p>

      <button className='w-full bg-[rgb(28,141,100)] py-3 text-gray-300 font-medium rounded-md text-xs my-4' onClick={handleFormSubmit} >{isLoading ? 'Getting Ready...':'Submit and Continue'}</button>
      



        </div>
    </div>
    
{/* form section */}
        </div>
        </div>
        </>)}
       


    </>

  )
}

export default Welcome