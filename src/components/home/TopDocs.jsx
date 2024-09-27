import React from 'react'
import { doctors } from '../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
import DocsCard from '../docsCard/docsCard'

const TopDocs = () => {
  return (
    <div className='text-center mt-14'>
          <h1 className='text-3xl font-medium my-6'>Top Doctors to Book</h1>
          <p className=' text-sm'>Simply browse through our extensive list of trusted doctors.</p>
          <div className="docsSection w-full flex flex-wrap gap-8 items-center justify-center px-3 sm:px-0 my-10">
              {doctors.slice(5).map((doc) => {
                  return (
                     <DocsCard doc={doc}/>
              )})
              }
          </div>
          <Link to='/doctors'> 
          <button className="rounded-md bg-primary py-2 px-8  border-none text-center text-md text-white transition-all shadow-md hover:shadow-lg" type="button">More
              </button>
          </Link>
    </div>
  )
}

export default TopDocs
