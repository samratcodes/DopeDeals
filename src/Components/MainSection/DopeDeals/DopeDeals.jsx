import React from 'react'
import DopestDeals from '../Home/DopestDeals'
import Recommended from '../Home/Recommended'

const DopeDeals = () => {
  return (
    <div className='flex  flex-col items-center'>
      <DopestDeals/>
      <Recommended/>
    </div>
  )
}

export default DopeDeals
