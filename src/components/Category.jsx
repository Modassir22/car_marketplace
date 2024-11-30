import data from '@/Shared/data'
import React from 'react'

function Category() {
  return (
    <div className='mt-40'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>
      <div  className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20 '>
        {data.category.map((category,index)=>(
          <div className='border rounded-xl hover:shadow-md cursor-pointer p-3 items-center flex flex-col'>
            <img src={category.icon} width={40} height={40} />
            <h2 className='m-2'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category