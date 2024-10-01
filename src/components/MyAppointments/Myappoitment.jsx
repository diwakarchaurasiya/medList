import React from 'react'
import { doctors } from '../../assets/assets_frontend/assets'
import { toast } from 'react-toastify'
toast
const Myappoitment = () => {
  let notify = () => toast.info("Feature Not availble");
  return (
    <div className='my-10'>
      {doctors.slice(0,5).map((doctor,index) => {
        return (<div className=" p-6 rounded-md flex flex-col md:flex-row items-start md:items-center justify-between mb-4" key={index}>
          <div className="flex items-center mb-4 md:mb-0">
            <img src={doctor.image} alt={doctor.name} className="w-1/4 h-1/4 rounded-md bg-primary mr-6" />
            <div>
              <h2 className="text-lg font-bold">{doctor.name}</h2>
              <p className="text-sm text-[gray]">{doctor.speciality}</p>
              <p className="text-sm text-[gray]">{doctor.address.line1}, {doctor.address.line2}</p>
              <p className="text-sm text-gray-500">Fees: ${doctor.fees}</p>
              <p className="text-sm text-[gray] font-semibold">Date & Time: <span className="font-light" > 30 Oct 2024 | 01:00 PM</span>  </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4">
            <button className="bg-primary text-white py-2 px-4 rounded-md " onClick={notify}>
              Pay Online
            </button>
            <button className="bg-[red] text-white py-2 px-4 rounded-md" onClick={notify}>
               cancel
            </button>
          </div>
        </div>)
      })}
    </div>
  )
}

export default Myappoitment
