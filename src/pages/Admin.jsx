import axios from 'axios'
import { format, parseISO } from "date-fns";
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import OtpInput from '../components/OtpInput'


const server_url = 'https://doctor-appointment-by6x.onrender.com'||'http://localhost:3000'

const Admin = () => {
  const [appointmentScheduleBox, setAppointmentScheduleBox] = useState(false)
  const [appointmentCancelBox, setAppointmentCancelBox] = useState(false)
  const [appointments, setAppointments] = useState([])
  const [appointmentData, setAppointmentData] = useState(null)
  const [isUserValid, setIsUserValid] = useState(false)



  useEffect(() => {
    fetchAppointments();
  }, [])

  useEffect(() => {
  if (appointmentScheduleBox || appointmentCancelBox) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}, [appointmentScheduleBox, appointmentCancelBox]);

  

  // handling model box logic
  
  
  const handleModelBox = (e, data) => {
    e.preventDefault();
    setAppointmentData(data)
    if (e.target.innerText == 'Approve') {
      setAppointmentScheduleBox(true)
    } else {
      setAppointmentCancelBox(true)
    }
  }

  // fetching appointments list

  const fetchAppointments = async()=>{
    try {
      const response = await axios.get(`${server_url}/fetch-appointment-list`)

      if (!response.data.success) {
        return toast.error(response.data.message)
      }
      setAppointments(response.data.appointments)

      setTimeout(() => {
        fetchAppointments();
      }, 5000);
      return console.log(response.data)
    } catch (error) {
      console.error("Internal Server Error")
      toString.error("Internal Server Error")
    }
  }

  const handleAppointmentCancel = async()=>{
    try {
      const response = await axios.put(`${server_url}/approve-appointment`,{appointmentData,action:'cancel'})
      // console.log(response.data)
      if (!response.data.success) {
        return toast.error(response.data.message)
      }
      fetchAppointments()
       setAppointmentCancelBox(false)
      return toast.success(response.data.message)
    } catch (error) {
      console.error("Internal Server Error")
      toast.error("Internal Server Error")
    }
  }

  const handleAppointmentApprove = async() =>{
     try {
      const response = await axios.put(`${server_url}/approve-appointment`,{appointmentData,action:'approve'})
      if(!response.data.success){
        return axios.error(response.data.message)
      }
        fetchAppointments()
       setAppointmentScheduleBox(false)
      return toast.success("Appoint Approved!!")
    } catch (error) {
      toast.error("Internal Server Error")
      console.error("Internal Server Error")
    }
  }




  return (
    <>
    
    {isUserValid ? (
      <>
      
      <div className='main-container min-h-screen w-full !bg-[#131519]'>

      <div className="nav-bar w-10/12 bg-[#060809] p-4 mx-auto rounded-md flex justify-between">

        <div className="logo-area">
          <h1 className='font-medium text-white text-xl flex items-center'><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
            <path fillRule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd" />
            <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
          </svg>
            Medi Plus</h1>
        </div>

        <h2 className='text-white font-medium'>Admin Dashboard</h2>

      </div>


      {/* hero section */}
      <div className="hero-section w-10/12 mx-auto py-10">
        <h2 className='text-white text-4xl font-bold'>Welcome 👋</h2>
        <p className='text-xs text-[rgb(121,123,127)] my-2'>Start the day with managing new appointments</p>

      {/* card section */}
        <div className="cards-area grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full py-8">
          {/* Card 1 */}
          <div className="card w-full p-4 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-[0.99] hover:shadow-lg hover:border-white/20">
            <div className="card-logo-area flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-yellow-300"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
                <path d="M3 10h18" />
                <path d="m16 20 2 2 4-4" />
              </svg>

              <h2 className='text-white text-3xl font-bold'>4</h2>
            </div>
            <h2 className='text-white text-xs font-medium mt-4'>Scheduled appointments</h2>
          </div>

          <div className="card w-full p-4 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-[0.98] hover:shadow-lg hover:border-white/20">
            <div className="card-logo-area flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide text-blue-300 w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>

              <h2 className='text-white text-3xl font-bold'>8</h2>
            </div>
            <h2 className='text-white text-xs font-medium mt-4'>Pending appointments</h2>
          </div>

          {/* Card 3 */}
          <div className="card w-full p-4 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-[0.98] hover:shadow-lg hover:border-white/20">
            <div className="card-logo-area flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-red-400"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>

              <h2 className='text-white text-3xl font-bold'>4</h2>
            </div>
            <h2 className='text-white text-xs font-medium mt-4'>Cancelled appointments</h2>
          </div>
        </div>
      {/* card section */}

      {/* table section */}
  <div className="overflow-x-auto rounded-xl bg-[#1c1e23]/60 backdrop-blur-md border border-[#2e3136] shadow-lg">
  <table className="min-w-full text-sm text-left text-gray-300">
    <thead className="bg-[#0d0f12]/80 text-[#b0b2b5] text-xs uppercase tracking-wide font-medium">
      <tr>
        <th className="px-6 py-4">#</th>
        <th className="px-6 py-4">Patient</th>
        <th className="px-6 py-4">Status</th>
        <th className="px-6 py-4">Appointment</th>
        <th className="px-6 py-4">Doctor</th>
        <th className="px-6 py-4 text-center">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-[#2e3136]">

      {appointments.map((data,index) => (
        <tr className="hover:bg-[#2a2d31]/60 transition-colors">
        <td className="px-6 py-4">{index+1}.</td>
        <td className="px-6 py-4 font-normal text-white">{data.userId.fullName}</td>
        <td className="px-6 py-4">
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${data.status === 'Pending' ? 'bg-blue-600/20 text-blue-400': data.status === 'Scheduled' ? 'bg-green-600/20 text-green-400': data.status === 'Canceled' ? 'bg-red-600/20 text-red-400':''}`}>

            <span
  className={`w-2 h-2 rounded-full ${
    data.status === 'Pending'
      ? 'bg-blue-400'
      : data.status === 'Scheduled'
      ? 'bg-green-400'
      : data.status === 'Canceled'
      ? 'bg-red-400'
      : '' // default case, in case none of the conditions are met
  }`}
/>
            {data.status}
          </span>
        </td>
        <td className="px-6 py-4">{format(data.expectedAppointmentDate, "d MMM yyyy, h:mma")}</td>
        <td className="px-6 py-4">{data.doctor}</td>
        <td className="px-6 py-4 text-center">
          <button onClick={(e)=> handleModelBox(e,data)} className={`${data.status === 'Pending' ? 'text-green-400 hover:text-green-500':'text-red-400 hover:text-red-500'} text-xs font-semibold tracking-wide transition-colors`}>
            {data.status === "Pending" ? 'Approve': data.status ==='Scheduled' ? 'Cancel':''}
          </button>
        </td>
      </tr>
      ))}

      {/* Scheduled row */}
      {/* <tr className="hover:bg-[#2a2d31]/60 transition-colors">
        <td className="px-6 py-4">1.</td>
        <td className="px-6 py-4 font-normal text-white">Ansh</td>
        <td className="px-6 py-4">
          <span className="inline-flex items-center gap-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Scheduled
          </span>
        </td>
        <td className="px-6 py-4">Aug 4, 2025, 9:24 PM</td>
        <td className="px-6 py-4">Dr. Harshit</td>
        <td className="px-6 py-4 text-center">
          <button className="text-red-400 hover:text-red-500 text-xs font-semibold tracking-wide transition-colors">
            Cancel
          </button>
        </td>
      </tr> */}

      {/* Canceled row */}
      {/* <tr className="hover:bg-[#2a2d31]/60 transition-colors">
        <td className="px-6 py-4">2.</td>
        <td className="px-6 py-4 font-normal text-white">Riya</td>
        <td className="px-6 py-4">
          <span className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            Canceled
          </span>
        </td>
        <td className="px-6 py-4">Sep 15, 2025, 4:00 PM</td>
        <td className="px-6 py-4">Dr. Ansh</td>
        <td className="px-6 py-4 text-center">
          <button className="text-blue-400 hover:text-blue-500 text-xs font-semibold tracking-wide transition-colors">
            Reschedule
          </button>
        </td>
      </tr> */}

      {/* Pending row */}
      {/* <tr className="hover:bg-[#2a2d31]/60 transition-colors">
        <td className="px-6 py-4">3.</td>
        <td className="px-6 py-4 font-normal text-white">Karan</td>
        <td className="px-6 py-4">
          <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-300" />
            Pending
          </span>
        </td>
        <td className="px-6 py-4">Oct 10, 2025, 11:00 AM</td>
        <td className="px-6 py-4">Dr. Aaradhya</td>
        <td className="px-6 py-4 text-center">
          <button className="text-green-400 hover:text-green-500 text-xs font-semibold tracking-wide transition-colors" onClick={handleModelBox}>
            Approve
          </button>
        </td>
      </tr> */}

    </tbody>
  </table>
</div>



      {/* table section */}

        



      </div>
      {/* hero section */}

      {/* poup form */}
     {appointmentScheduleBox && (
  <div
    className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm"
  >
    <div className="form-box text-white bg-[rgb(19,21,25)] p-6 rounded-md border border-[rgb(54,54,54)] 
                    w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-h-[90vh] overflow-y-auto relative">

      {/* Close Button */}
      <svg
        onClick={() => setAppointmentScheduleBox(false)}
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="absolute top-4 right-4 cursor-pointer"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>

      <h2 className="text-base font-semibold">Schedule Appointment</h2>
      <p className="text-xs text-[rgb(121,123,127)] mb-6">
        Please fill in the following details to schedule an appointment
      </p>

      {/* Select Doctor */}
      <div className="flex flex-col w-full gap-2 pb-4">
        <label htmlFor="doctor" className="text-[rgb(121,123,127)] text-xs">
          Select Doctor
        </label>
        <div className="flex items-center bg-[rgb(26,28,32)] border border-[rgb(54,54,54)] rounded-md">
          <select
            name="doctor"
            className="bg-[rgb(26,28,32)] w-full py-3 px-3 rounded-md outline-none text-gray-400 text-xs"
            value={appointmentData.doctor}
            onChange={(e)=> setAppointmentData({...appointmentData,doctor:e.target.value})}
          >
            <option value="">Select a Doctor</option>
            <option value="Dr. Harshit Bhardwaj">Dr. Harshit</option>
            <option value="Dr. Ansh">Dr. Ansh</option>
            <option value="Dr. Aaradhya">Dr. Aaradhya</option>
            <option value="Dr. Aryan">Dr. Aryan</option>
            <option value="Dr. Rohan">Dr. Rohan</option>
          </select>
        </div>
      </div>

      {/* Appointment Date */}
      <div className="flex flex-col w-full gap-2 pb-4">
        <label htmlFor="expectedAppointmentDate" className="text-[rgb(121,123,127)] text-xs">
          Expected Appointment Date
        </label>
        <div className="flex items-center bg-[rgb(26,28,32)] border border-[rgb(54,54,54)] rounded-md">
          <svg
            className="w-5 h-5 ml-2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor" strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 001-1V7a1 1 0 00-1-1H5a1 1 0 00-1 1v12a1 1 0 001 1Z" />
          </svg>
         <input
  type="datetime-local"
  name="expectedAppointmentDate"
  className="bg-[rgb(26,28,32)] w-full py-3 px-3 rounded-md outline-none text-gray-400 text-xs"
  value={
    appointmentData.expectedAppointmentDate
      ? format(parseISO(appointmentData.expectedAppointmentDate), "yyyy-MM-dd'T'HH:mm")
      : ""
  }
  onChange={(e) =>
    setAppointmentData({
      ...appointmentData,
      // convert back to ISO for backend
      expectedAppointmentDate: new Date(e.target.value).toISOString(),
    })
  }
/>
          {console.log(appointmentData.expectedAppointmentDate)}
        </div>
      </div>

      {/* Submit Button */}
      <button onClick={handleAppointmentApprove} className="w-full bg-[rgb(28,141,100)] py-3 text-gray-300 font-medium rounded-md text-xs my-4 hover:bg-[rgb(24,120,85)] transition">
        Submit Appointment
      </button>
    </div>
  </div>
)}



      {appointmentCancelBox && (
         <div className="popup-form w-full min-h-screen bg-black/70 backdrop-blur-sm fixed top-0 flex justify-center items-center">
        <div className="form-box text-white bg-[rgb(19,21,25)]  p-4 rounded-md border-[rgb(54,54,54)] border w-2/5 relative">

          <h2 className='text-sm'>Cancel Appointment</h2>
          <p className='text-xs text-[rgb(121,123,127)]'>Please fill in the following details to schedule appointment</p>
          <svg onClick={()=>setAppointmentCancelBox(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="absolute top-4 right-4 cursor-pointer"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

        {/* input box are */}
         
          <div className="imp-wrap flex flex-col w-full  gap-2 pt-8">

        <label htmlFor="name" className={`text-[rgb(121,123,127)] text-xs`}>Reason for cancellation</label>
        <div className={`inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md`}>
         

        <textarea onChange={(e)=> setAppointmentData({...appointmentData, cancelReason:e.target.value})}  name='expectedAppointmentDate' className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Urgent meeting came up' rows={5}></textarea>
        </div>
         </div>


         <button className='w-full bg-[rgb(141,28,28)] py-3 text-gray-300 font-medium rounded-md text-xs my-4' onClick={handleAppointmentCancel}>Cancel Appointment</button>
        </div>
    </div>
      )}
   


      {/* poup form */}
    </div>
      </>

    ):(
    <OtpInput setIsUserValid={setIsUserValid}/>

    )}
    </>
  )
}

export default Admin