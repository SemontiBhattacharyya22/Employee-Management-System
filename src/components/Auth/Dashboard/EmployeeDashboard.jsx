import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskLists from '../tasklist/TaskLists'

const EmployeeDashboard = (props) => {
  //console.log(props)
  return (
    <div className='p-10 bg-[#1C1C1C]  h-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskLists data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard