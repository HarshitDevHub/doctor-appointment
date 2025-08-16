import React, { useState } from 'react'
import bg2 from '../assets/bg-2.jpg'
import Appointment from './Appointment'

const Welcome = (setIsWelcomePageIsOpen) => {
    const [isAppointmentPageIsOpen, setIsAppointmentPageIsOpen] = useState(false)
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
            
             <h1 className='font-medium text-white text-xl flex items-center pt-6 px-10'><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
  <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"/>
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
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Ram Charan'/>
        </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Email</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>

        <input type="email" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='ramcharan@gmail.com'/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Phone number</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='9923457687'/>
        </div>
                    </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Date of birth</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>

        <input type="date" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Your email here'/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col   gap-2 pb-4 w-full">

        <label  className='text-[rgb(121,123,127)] text-xs'>Gender</label>

      <div className="radio-btn-wrap flex flex-wrap items-center gap-4">

    <div className="inp-icon  flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md py-3 px-2">
        <input type="radio" id="male" name="gender" className="outline-none" />
        <label className="text-gray-400 cursor-pointer font-medium text-xs mx-1" htmlFor="male">Male</label>
    </div>

    <div className="inp-icon  flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md py-3 px-2">
        <input type="radio" id="female" name="gender" className="outline-none" />
        <label className="text-gray-400 cursor-pointer font-medium text-xs mx-1" htmlFor="female">Female</label>
    </div>

    <div className="inp-icon  flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md py-3 px-2">
        <input type="radio" id="other" name="gender" className="outline-none" />
        <label className="text-gray-400 cursor-pointer font-medium text-xs mx-1" htmlFor="other">Other</label>
    </div>

</div>


                    </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Address</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='184, Moti Nagar New Delhi'/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Occupation</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Developer'/>
        </div>
                    </div>
                </div>

                 <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Emergency contact name</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder="Guardian's name"/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Emergency contact number</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='+91 9923457687'/>
        </div>
                    </div>
                </div>

        <h2 className='text-2xl font-medium text-gray-100 mt-8 mb-4'>Medical Information</h2>

                <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Select Doctor</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Ram Charan'/>
        </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Insurance provider</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
         
        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Harsh Ltd.'/>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Insurance policy number</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
         

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='HAB232'/>
        </div>
                    </div>
                </div>

                <div className="inp-row flex gap-8 md:flex-nowrap flex-wrap">

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Family medical history (if relevant)</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
         
        <textarea type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Family medical history here...'></textarea>
        </div>
                     </div>

                     <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Past medical history</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
         

        <textarea type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Past medical history here...'></textarea>
        </div>
                    </div>
                </div>

        <h2 className='text-2xl font-medium text-gray-100 mt-8 mb-4'>Identification and Verification</h2>

          <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Identification Type</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
        

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Birth Certificate'/>
        </div>
          </div>

          <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Identification Number</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
        

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='AB2871BC'/>
        </div>
          </div>

           <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Scanned Copy of Identification Document</label>
        <div className="inp-icon bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border-dashed border rounded-md  flex items-center justify-center flex-col gap-2 py-4 cursor-pointer">

            <svg class="w-10 h-10 text-gray-800 dark:text-green-800 bg-[rgb(54,54,54)] rounded-full p-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/>
            </svg>

            <div className='upload-text-area'>
                <p className='text-xs text-[rgb(121,123,127)] text-center'> <span className='text-green-800'>Click to upload</span> or drag and drop</p>
                <p className='text-xs text-center text-[rgb(121,123,127)] pt-1'>SVG,PNG,JPG or GIF (max. 800x400px)</p>
            </div>

        
        </div>
          </div>

        <h2 className='text-2xl font-medium text-gray-100 mt-4 mb-4'>Consent and Privacy</h2>

        <p className='text-gray-400 text-xs flex items-center gap-2 pb-2'> <input type="checkbox" />I consent to receive treatment for my health condition.</p>

        <p className='text-gray-400 text-xs flex items-center gap-2 pb-2'> <input type="checkbox" />I consent to the use and disclosure of my health information for treatment purposes.</p>

        <p className='text-gray-400 text-xs flex items-center gap-2 pb-2'> <input type="checkbox" />I acknowleds that I have reviewed and agree to the privacy policy</p>

      <button className='w-full bg-[rgb(28,141,100)] py-3 text-gray-300 font-medium rounded-md text-xs my-4' onClick={()=>{setIsAppointmentPageIsOpen(true)}}>Submit and Continue</button>



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