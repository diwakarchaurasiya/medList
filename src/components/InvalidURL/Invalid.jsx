import React from 'react'
import { Link } from 'react-router-dom'

const Invalid = () => {
  return (
    <div>
          Entered url is invalid :
          Come back to
          <Link to='/'>
              <button className='bg-red-400'>home</button>
          </Link>
    </div>
  )
}

export default Invalid
