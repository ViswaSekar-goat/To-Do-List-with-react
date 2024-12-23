/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IoMdAdd } from "react-icons/io";


const AddTask = ({newTask , setnewTask , handleSubmit}) => {
  return (
    <div className='addTaskDiv'>
      <form className='addForm' onSubmit={handleSubmit}>
        <input type="text" id='inputData'
          autoFocus
          placeholder='enter your new task'
          required
          value={newTask}
          onChange={(e)=>setnewTask(e.target.value)}
        />
        <button type='submit'>
          <IoMdAdd />
        </button>
      </form>
    </div>
  )
}

export default AddTask