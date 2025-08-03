import React from 'react'
import bg from '../assets/bg.jpg'

const Start = ({setIsWelcomePageIsOpen, setIsAppointmentPageIsOpen}) => {
  
  return (
    <div className='main-contaoner flex min-h-screen'>


      <div className="form-area basis-2/4 bg-[rgb(19,21,25)] relative">

      <h1 className='font-medium text-white text-xl flex items-center pt-20 px-10'><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
  <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd"/>
  <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z"/>
</svg>
Medi Plus</h1>

    <h2 className='text-2xl font-medium text-gray-100 mx-10 mt-8'>Hii there 👋</h2>
    <p className='text-[rgb(121,123,127)] text-sm mx-10'>Get start with appointments.</p>

    <div className="from-section mx-10 pt-10 pr-20">

      <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Full name</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Your name here'/>
        </div>
      </div>

      <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Email</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>

        <input type="email" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Your email here'/>
        </div>
      </div>


      <div className="imp-wrap flex flex-col w-full  gap-2 pb-4">

        <label htmlFor="name" className='text-[rgb(121,123,127)] text-xs'>Phone number</label>
        <div className="inp-icon flex items-center bg-[rgb(26,28,32)] border-[rgb(54,54,54)] border rounded-md">
          <svg class="w-6 h-6 ml-2 text-gray-800 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
</svg>

        <input type="text" className='bg-[rgb(26,28,32)] w-full py-3 mx-2 rounded-md outline-none text-gray-400 text-xs placeholder:text-gray-600' placeholder='Your phone number here'/>
        </div>
      </div>


      {/* submit btn */}

      <button className='w-full bg-[rgb(28,141,100)] py-3 text-gray-300 font-medium rounded-md text-xs' onClick={()=>setIsWelcomePageIsOpen(true)}>Get Started</button>
  




    </div>

  <div className="footer-section absolute w-full bottom-0 flex items-center justify-between mx-10 pr-40">
      <p className='text-sm text-gray-600'>© 2025 CarePlus</p>
      <p className='text-green-800 text-sm cursor-pointer'>Admin</p>
  </div>

      </div>

      <div className="image-section basis-2/4 relative overflow-hidden">
  <img src={bg} alt="" className="w-full h-full object-cover" />
  <div className="absolute inset-0 shadow-inner bg-black/30 pointer-events-none" />
    </div>

    </div>
  )
}

export default Start