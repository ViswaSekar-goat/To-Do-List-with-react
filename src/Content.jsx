/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { MdDelete } from "react-icons/md";
import SingleTask from './SingleTask';

const Content = ({data,setData,handleClick,handleDelete,isSearched}) => {
  return (
    <div className='contentDiv'>
      <ul className='taskList'>
        {
          data.map((element)=>{
            return(
              <SingleTask key={element.id} element={element} handleClick={handleClick} handleDelete={handleDelete} isSearched={isSearched}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Content