import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
    });
    alert("✅ Task Created Successfully!");
  };

  return (
    <div className="mt-8 md:mt-10 max-w-6xl mx-auto bg-white/10 p-6 md:p-10 rounded-2xl shadow-2xl border border-white/20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-emerald-400">
        Create New Task
      </h2>

      <form className="flex flex-col gap-8" onSubmit={submitHandler}>
        <div className="flex flex-col md:flex-row w-full gap-8 md:justify-between">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <h3 className="text-emerald-300 mb-2 font-medium">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Make a UI Design"
                className="w-full p-3 rounded-lg bg-black/40 border border-emerald-400/40 text-white focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h3 className="text-emerald-300 mb-2 font-medium">Date</h3>
                <input
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                  type="date"
                  className="w-full p-3 rounded-lg bg-black/40 border border-emerald-400/40 text-white focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <h3 className="text-emerald-300 mb-2 font-medium">Assign To</h3>
                <input
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                  type="text"
                  placeholder="Employee Name"
                  className="w-full p-3 rounded-lg bg-black/40 border border-emerald-400/40 text-white focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-emerald-300 mb-2 font-medium">Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Design / Dev..."
                className="w-full p-3 rounded-lg bg-black/40 border border-emerald-400/40 text-white focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="text-emerald-300 mb-2 font-medium">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Enter detailed task description..."
              className="w-full h-60 md:h-72 p-4 rounded-lg bg-black/40 border border-emerald-400/40 text-white focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>
          </div>
        </div>

        <div className="w-full flex justify-center mt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 rounded-lg font-semibold shadow-lg hover:shadow-emerald-600/40 text-lg"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;


// 
// import React, { useContext, useState, useEffect } from 'react'
// import { AuthContext } from '../context/AuthProvider'

// const CreateTask = () => {
//   const context = useContext(AuthContext);

// if (!context) {
//   throw new Error("AuthContext is not available. Make sure your component is wrapped in <AuthProvider>.");
// }

// const [userData, setUserData] = context;


//   const [taskTitle, setTaskTitle] = useState('')
//   const [taskDescription, setTaskDescription] = useState('')
//   const [taskDate, setTaskDate] = useState('')
//   const [assignTo, setAssignTo] = useState('')
//   const [category, setCategory] = useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()

//     const newTask = {
//       taskTitle,
//       taskDescription,
//       taskDate,
//       category,
//       active: false,
//       newTask: true,
//       failed: false,
//       completed: false,
//     }

//     // create updated copy of userData
//     const updatedUsers = userData.map((user) => {
//       if (user.firstName === assignTo) {
//         return {
//           ...user,
//           tasks: [...user.tasks, newTask],
//           taskCounts: {
//             ...user.taskCounts,
//             newTask: user.taskCounts.newTask + 1,
//           },
//         }
//       }
//       return user
//     })

//     // update context + localStorage
//     setUserData(updatedUsers)
//     localStorage.setItem('employees', JSON.stringify(updatedUsers))

//     // clear fields
//     setTaskTitle('')
//     setCategory('')
//     setAssignTo('')
//     setTaskDate('')
//     setTaskDescription('')
//   }

//   return (
//     <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//       <form
//         onSubmit={submitHandler}
//         className='flex flex-wrap w-full items-start justify-between'
//       >
//         <div className='w-1/2'>
//           <div>
//             <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//             <input
//               value={taskTitle}
//               onChange={(e) => setTaskTitle(e.target.value)}
//               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//               type='text'
//               placeholder='Make a UI design'
//             />
//           </div>
//           <div>
//             <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//             <input
//               value={taskDate}
//               onChange={(e) => setTaskDate(e.target.value)}
//               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//               type='date'
//             />
//           </div>
//           <div>
//             <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
//             <input
//               value={assignTo}
//               onChange={(e) => setAssignTo(e.target.value)}
//               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//               type='text'
//               placeholder='employee name'
//             />
//           </div>
//           <div>
//             <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//             <input
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
//               type='text'
//               placeholder='design, dev, etc'
//             />
//           </div>
//         </div>

//         <div className='w-2/5 flex flex-col items-start'>
//           <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//             className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400'
//           />
//           <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
//             Create Task
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default CreateTask
