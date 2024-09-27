import React from 'react'
import { doctors } from '../../assets/assets_frontend/assets'
import DocsCard from '../docsCard/docsCard'

const DoctorsListing = () => {
  return (
    <> 
    <div className="docsSection w-full flex flex-wrap gap-8 items-center justify-center px-3 sm:px-0 my-10 text-center">
            {doctors.map((doc) => {
                  return (
                     <DocsCard doc={doc}/>
              )})
              }
    </div></>
  )
}

export default DoctorsListing
