import React, { useState } from 'react'
import { assets } from '../../assets/assets_frontend/assets';
import './myProfile.css'
import { toast } from 'react-toastify';


const MyProfile = () => {
    const notify = () => toast.success("Details updated Successfully");
    let [isEditable, setIsEditable] = useState(false);
    let [userData, setUserData] = useState({
        name: "Richard Zoe",
        image: assets.profile_pic,
        gender: "Male",
        dob: "2005-01-01",
        email: "richardzoe56@gmail.com",
        mo_no: 1234567890,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    });
  return (
    <div className=" profile flex justify-center items-center my-8">
      <div className="bg-white rounded-lg p-6 w-96">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={userData.image} // Link to profile image
            alt={userData.name}
            className="w-24 h-24 rounded-md border-2 border-primary"
          />
        </div>

        {/* UserData Info */}
        <div className="mt-4 text-center md:text-left text-md">
                  {isEditable ?
                      <input className="text-2xl font-semibold " type="text" id="" onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} value={userData.name}  autoFocus/>
                  : <h2 className="text-2xl font-semibold ">{userData.name}</h2>
                    }
                  

          <div className="mt-4">
                      <h3 className="text-sm text-[gray]">Contact Information</h3>
                      <p className="mt-2">
                      <strong>Email: </strong>
                      {isEditable ?
                          <input type="text" id="" onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))}  value={userData.email}/>
                          : 
                              <a href={`mailto:${userData.email}`} className="text-primary hover:underline">
                                  {userData.email}
                              </a>
                          }
                          </p>
            <p>
                <strong>Phone:</strong>{isEditable ?
                              <input type="text" id="" onChange={e => setUserData(prev => ({ ...prev, mo_no: e.target.value }))} value={userData.mo_no} />
                              :
                              <span>{ userData.mo_no }</span>
                              
                          }
            </p>
            <p>
              <strong>Address: </strong>
              {userData.address.line1}, {userData.address.line2}
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-sm  text-[gray]">Basic Information</h3>
            <p>
                          <strong>Gender: </strong>
                          {isEditable ?
                              <input type="text" id="" onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} />
                              : <p>{userData.gender}</p>}
            </p>
            <p>
                          <strong>Birthday: </strong> {isEditable ?
                              <input type="date" id="" onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} placeholder='2000-01-01' value={userData.dob} />
                              : <p>{userData.dob}
                              </p>}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6 flex justify-center md:justify-start">
                  {isEditable ? <button className="px-4 py-2 bg-green-500 text-white rounded-md bg-primary" onClick={() => {
                      setIsEditable(!isEditable)
                      notify()
                  }
                
                  }>
                      Save
                  </button> : <button className="px-4 py-2 bg-green-500 text-white rounded-md bg-primary" onClick={() => setIsEditable(!isEditable)
                
            }>
                Edit
            </button> }
        </div>
          </div>
    </div>
  )
}

export default MyProfile
