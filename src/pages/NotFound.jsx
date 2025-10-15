import React from 'react'

const NotFound = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center flex-col'>
        <h2 className='text-white'>404 Not Found</h2>
        <a href="./" className='text-green-800 underline text-xs'>Go to home</a>
    </div>
  )
}

export default NotFound