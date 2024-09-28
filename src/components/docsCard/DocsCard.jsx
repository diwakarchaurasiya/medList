import React from 'react'
import { Link } from 'react-router-dom'

const DocsCard = ({doc}) => {
  return (
    <div className="doc-card border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 md:w-1/6  " key={doc.name} onClick={()=>scrollTo(0,0)}>
    <Link to={"/doctor/" + doc.name}>
    <img  className="bg-primary hover:bg-[#045f04]" src={doc.image} alt="" />
    <span className='pl-2 text-center'>
          <h2 className='text-[#262626] text-md font-bold '>{doc.name}</h2>
    <p className='text-[#5C5C5C] text-sm'>{doc.speciality}</p>
        </span>
       <p className='py-2'><span className='text-sm text-[gray]'>Fees-</span>₹{(doc.fees*10)-1}</p>
    </Link>
    </div>
  )
}

export default DocsCard
