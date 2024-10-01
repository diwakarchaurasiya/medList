import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { doctors } from '../../assets/assets_frontend/assets';
import { assets } from './../../assets/assets_frontend/assets'
import Appointment from '../Appointment';
import DocsCard from '../docsCard/docsCard';
import Recommendation from './Recommendation';

const DoctorDetails = () => {
  const { docName } = useParams();
  const [docInfo, setDocInfo] = useState([]);
  let [showAppointment, setShowAppointment] = useState(false)
  const fetchDoc = () => {
    setDocInfo(doctors.find(doc => doc.name == docName));
  }
  useEffect(() => {
    fetchDoc()
  }, [docName])
  return (
    <div className="mx-auto p-6">
      {/* Container for image and info */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Picture */}
        <div className="md:w-1/3 flex justify-center">
          <img
            className="rounded-lg w-48 h-48 md:w-60 md:h-80 object-cover bg-primary"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        {/* Doctor Information */}
        <div className="md:w-2/3 md:ml-8 text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-3xl font-bold flex items-center justify-center md:justify-start">{docInfo.name}<img src={assets.verified_icon} className="px-2 w-8"/></h1>
            <h2 className="text-lg text-blue-600 mt-2">{docInfo.degree} - { docInfo.speciality}</h2>
          {showAppointment ? <Appointment setShowAppointment = {setShowAppointment} /> : <div className="right">
            <p className="mt-4 text-[gray]">
            {docInfo.about}
          </p>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row mt-4 text-sm">
            <div className="flex items-center">
              <span role="img" aria-label="phone" className="mr-2">📞</span>
              <p>24/7 Support: +1 91654-8741</p>
            </div>
            <div className="flex items-center mt-2 md:mt-0 md:ml-8">
              <span role="img" aria-label="email" className="mr-2">✉️</span>
              <p>diwakarbmj1212@gmail.com</p>
            </div>
          </div>
          
          {/* Book an appointment*/}
          <div className="flex mt-4 space-x-4 justify-center md:justify-start">
            <button type="button" className="outline-0  bg-primary focus:ring-4 focus:ring-green-300 font-medium rounded-md  px-5 py-2.5 text-white" onClick={()=>setShowAppointment(!showAppointment)}>Book an appointment</button>
            </div>
            </div>
}
        </div>
      </div>

      {/* Specialties Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">My Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Specialties Cards */}
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-semibold">{docInfo.experience}</h4>
            <p className="mt-2">Experience</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-semibold">{docInfo.degree}</h4>
              <p className="mt-2">In {docInfo.speciality}</p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-semibold">₹{(docInfo.fees*10)-1}</h4>
            <p className="mt-2">Appointment Fees</p>
          </div>
        </div>
      </div>
      <div className="recommendedDoctors  w-full flex flex-wrap gap-8 items-center  px-3 sm:px-0 my-10 text-center">
        <Recommendation speciality = {docInfo.speciality}/>
      </div>
    </div>

  )
}

export default DoctorDetails
