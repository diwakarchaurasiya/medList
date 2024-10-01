import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets_frontend/assets'
const Invalid = () => {
  return (
    <div className="h-3/4 flex flex-col justify-center items-center bg-primary text-center text-white p-10 rounded-md my-10">
      {/* Sad face image */}
      <img 
        src={assets.sad404} 
        alt="404 sad face" 
        className="w-40 mb-6"
      />
      
      {/* 404 text */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Looks like you're lost</h1>
      
      {/* Error message */}
      <p className="text-lg mb-8">
      404 error
      </p>
      
      {/* Go back button */}
      <Link to='/'><button
        className="bg-primary hover:bg-[green] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
      >
        Back to home page ...
      </button></Link>
    </div>
  )
}

export default Invalid
