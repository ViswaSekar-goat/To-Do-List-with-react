/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { MdDelete } from "react-icons/md";

const SingleTask = ({element,handleClick,handleDelete,isSearched}) => {
  return (
    <>
      <li>
        <input type="checkBox" checked={element.checked} onChange={()=>{handleClick(element.id)}}/>
        <label 
        onDoubleClick={()=>handleDelete(element.id)}
        style={element.checked ? {textDecoration:"line-through"} : {textDecoration:"none"}} 
        >
          {element.task}
        </label>
        <MdDelete className='deleteButton' role='button' onClick={()=>handleDelete(element.id)}/>
      </li>
    </>
  )
}

export default SingleTask