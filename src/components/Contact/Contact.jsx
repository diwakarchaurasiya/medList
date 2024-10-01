import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
     <div className="w-full py-16 px-8 lg:px-20">
      <h2 className="text-center text-3xl  text-[gray] mb-12">
        CONTACT <span className="text-black font-semibold">US</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16  text-[gray]">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={assets.contact_image} 
            alt="Doctor with a patient"
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right Section - Info */}
        <div className="w-full lg:w-1/2">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">OUR OFFICE</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              00000 Willms Station<br />Suite 000, Washington, USA
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              Tel: (000) 000-0000
            </p>
            <p className="text-gray-600 leading-relaxed">
              Email: greatstackdev@gmail.com
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">CAREERS AT PRESCRIPTO</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn more about our teams and job openings.
            </p>
          </div>

          {/* Button */}
          <button className="px-6 py-3 border border-gray-700 hover:bg-gray-100 transition rounded-md text-gray-700 font-medium">
            Explore Jobs
          </button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
