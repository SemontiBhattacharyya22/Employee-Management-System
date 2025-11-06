import React from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useContext } from 'react';

const AllTask = () => {
  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1C1C1C] p-5 rounded mt-5  '>
      
        <div className='bg-red-400 mb-2  py-2 px-4 flex justify-between items-center rounded-xl'>
            <h3 className='w-1/5 text-lg font-medium justify-between items-center  '>Employee Name</h3>
            <h2 className='w-1/5 text-lg font-medium justify-between items-center'>New Task</h2>
            <h5 className='w-1/5  text-lg font-medium justify-between items-center  '>Active Task</h5>
            <h5 className='w-1/5 text-lg font-medium justify-between items-center  '>Completed Task</h5>
            <h5 className='w-1/5 text-lg font-medium justify-between items-center  '>Failed Task</h5>
        </div>
  
        <div className='  overflow-auto'>
          {authData.employees.map(function(elem, index){
            return (
              <div key={index} className='mb-2 border-2 border-emerald-600 bg-transparent py-2 px-4 flex justify-between rounded-xl'>
                <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCount.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
              </div>
            )
          })} 
        </div>
        
    </div>
  )
}

export default AllTask
