import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskLists = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] w-full flex items-center overflow-x-auto  mt-10 rounded-xl '>
      
      {data?.tasks?.length > 0 ? (
  data.tasks.map((elem, idx) => {
    if (elem.active) return <AcceptTask key={idx} data={elem} />;
    if (elem.newTask) return <NewTask key={idx} data={elem} />;
    if (elem.completed) return <CompleteTask key={idx} data={elem} />;
    if (elem.failed) return <FailedTask key={idx} data={elem} />;
    return null;
  })
) : (
  <p>No tasks available</p>
)}

      {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl mr-10'>
           <div className='flex justify-between items-center'>
             <h3 className='bg-red-600  text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>9 Oct 2025</h4>
           </div>
           <h2 className='mt-5 text-xl font-semibold '>Make a youtube video for client </h2>
           <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam dolores minima qui dolor unde at eum accusantium officia ipsum!</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl mr-10'>
           <div className='flex justify-between items-center'>
             <h3 className='bg-red-600  text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>9 Oct 2025</h4>
           </div>
           <h2 className='mt-5 text-xl font-semibold '>Make a youtube video for client </h2>
           <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam dolores minima qui dolor unde at eum accusantium officia ipsum!</p>
      </div> */}

    </div>
  )
}

export default TaskLists