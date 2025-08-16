import React, { useState } from 'react'
import bg2 from '../assets/bg-2.jpg'
import success from '../assets/check.png'


const Appointment = () => {
    const [isSuccess, setIsSuccess] = useState(false)
  return (
    <>

    {isSuccess ? (
    <>
    <div className="success-area bg-[rgb(19,21,25)] w-full min-h-screen flex items-center flex-col">

        <h1 className='font-medium text-white text-xl flex items-center pt-10 px-10'><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
  <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"/>
  <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
</svg>
             Medi Plus</h1>

        <img src={success} className='w-40 h-full  rounded-full py-8'/>

        <p className='text-2xl text-gray-100 font-semibold'>Your <span className='text-green-600'>appointment</span> request has <br /> been successfully submitted!</p>
        <p className='py-4 text-[rgb(121,123,127)] text-sm'>We'll be in touch shortly to confirm.</p>

        <div className="appointment-details-section  flex items-center justify-center gap-4 px-4  border-[rgba(121,123,127,0.28)] border-t border-b text-[rgb(121,123,127)] py-2">
          <p>Requested appointment details:</p>
          <div className="doctor-details flex items-center gap-2">
            <div className="doc-profile w-8 h-8 rounded-full flex items-center justify-center text-[rgb(121,123,127)] bg-gray-800 text-xs">HB</div>
            <p>Dr. Harshit Bhardwaj</p>
          </div>
          <div className="appointment-schedule flex items-center gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            <p>Aug 16, 2025, 2:20PM</p>
          </div>
        </div>

      <button className='bg-[rgb(28,141,100)] py-3 text-gray-300 font-medium rounded-md text-xs my-4 px-4 hover:bg-[rgba(28,141,100,0.89)] transition-all' onClick={()=> setIsSuccess(false)}>New Appointment</button>
        

    </div>
    </>):(
        <>
        <div className='main-container bg-cover bg-center min-h-screen bg-fixed' style={{ backgroundImage: `url(${bg2})` }}>

   <div className="form-area bg-[rgb(19,21,25)] w-2/3 pb-8 min-h-screen">

     <h1 className='font-medium text-white text-xl flex items-center pt-6 px-10'><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
  <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"/>
  <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
</svg>
             Medi Plus</h1>

      <h2 className='text-2xl font-medium text-gray-100 mx-10 mt-8'>New Appointment</h2>
    <p className='text-[rgb(121,123,127)] text-xs mx-10 mt-2'>Request a new appointment in 10 seconds.</p>


    <div className="form-area">
          <div className="form-section px-10 pt-4 pr-20">

        <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Doctor</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Select a Doctor'/>
        </div>
        </div>

         <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Expected appointment date</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>

</svg>

        <input type="datetime-local" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Ram Charan'/>
        </div>
         </div>

         <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Appointment reason</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
         
        <textarea type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Monthly checkup'></textarea>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Comment/notes</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
         

        <textarea type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Prefer afternoon'></textarea>
        </div>
                    </div>
         </div>


      <button className='w-full bg-[rgb(28,141,100)] py-3 text-gray-300 font-medium rounded-md text-xs my-4' onClick={()=> setIsSuccess(true)}>Submit Appointment</button>



        </div>

    </div>


   </div>

        </div>
        </>
        )}
    

   </>

  )
}

export default Appointment