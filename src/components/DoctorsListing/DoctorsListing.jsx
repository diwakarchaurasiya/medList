import React, { useEffect, useState } from 'react'
import { doctors } from '../../assets/assets_frontend/assets'
import { specialityData } from '../../assets/assets_frontend/assets'
import DocsCard from '../docsCard/docsCard'
import { Link, Navigate, useParams } from 'react-router-dom'

const DoctorsListing = () => {
  let { speciality } = useParams();
  let [specialists, setSpecialists] = useState([]);
  let [showFilter, setShowFilter] = useState(false);
  const applyFilter = () => {
    
    if (speciality) {
      if (speciality === 'all') {
        setSpecialists(doctors)
      }
      else {
        setSpecialists(doctors.filter(doc => doc.speciality === speciality))
    }
      }
  }
  useEffect(() => {
    applyFilter();
 },[speciality])
  return (
    <>
      <button className={`w-1/2 rounded-md block md:hidden bg-[transparent] py-2 px-4 border  border-primary text-center text-md transition-all shadow-md hover:shadow-lg mt-4 ml-4 ${showFilter?"bg-white text-primary":" bg-primary text-white "} `} onClick={()=>setShowFilter(!showFilter)}>Filters</button>
      {showFilter?"":<div className="  specialization p-4 flex justify-between flex-nowrap flex-col md:flex-row md:flex-wrap gap-4">
        
        <Link to='/doctors/all'>
          <button className={` w-full rounded-md bg-[transparent] py-2 px-4 border  border-primary text-center text-md text-primary transition-all shadow-md hover:shadow-lg ${speciality=="all"?" bg-primary text-white":""}`}  type="button" >
                All
            </button>
            </Link>
          {specialityData.map((specs) => {
            return (
              <Link to={'/doctors/'+specs.speciality}>
                <button className={` w-full rounded-md bg-[transparent] py-2 px-4 border  border-primary text-center text-md text-primary transition-all shadow-md hover:shadow-lg ${speciality==specs.speciality?" bg-primary text-white":""}` }type="button" >
                {specs.speciality}
                </button>
              </Link>
            )
          })}
        </div>}
    <div className="docsSection w-full flex flex-wrap gap-8 items-center  px-3 sm:px-0 my-10 text-center">
            {specialists.map((doc) => {
                  return (
                     <DocsCard doc={doc}/>
              )})
              }
      </div>
   <p className='text-center'> We don't have more {speciality}...🙏</p>
    </>
  )
}

export default DoctorsListing
