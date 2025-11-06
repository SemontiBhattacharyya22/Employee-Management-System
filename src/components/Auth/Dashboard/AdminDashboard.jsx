// import React from 'react'
// import Header from '../others/Header'
// const AdminDashboard = () => {
  
//   return (
//     <div className='h-screen w-full p-10'>
//     <Header />
     
//     <div>
//       <form className='flex flex-wrap  w-full bg-red-200 items-start justify-between '>
//         <div className='w-1/2'>
//           <h3>Task Title</h3>
//         <input className='bg-white'type="text" placeholder='Make a UI Design' />
//         <div>
//           <h3>Date</h3>
//         <input type="date" />
//         </div>
//         <div>
//           <h3>Assign to</h3>
//         <input type="text" placeholder='Employee Name' />
//         </div>
//         <div>
//           <h3>Category</h3>
//         <input type="text" placeholder='Design/Dev...'/>
//         </div>
        
      
//         </div>
//         <div className='w-1/2'>
//           <h3>Description</h3>
//         <textarea className='bg-white' name="" id=""></textarea>
//         </div>
//             <button>Create Task</button>
      
//       </form>
//     </div>

//     </div>
//   )
// }

// export default AdminDashboard


import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-black/85 text-white p-6 md:p-10 backdrop-blur-md">
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;