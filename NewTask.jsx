import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl mr-10'>
           <div className='flex justify-between items-center'>
             <h3 className='bg-red-600  text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
           </div>
           <h2 className='mt-5 text-xl font-semibold '>{data.title}</h2>
           <p className='text-sm mt-2'>{data.description}</p>
          <div className='mt-2'>
             <button className='bg-blue-700 py-3 px-2'>
            Accept Task
           </button>
          </div>
      </div>

  )
}

export default NewTask