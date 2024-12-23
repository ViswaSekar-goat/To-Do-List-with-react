/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const SingleTask = ({element,handleClick,handleDelete,isSearched}) => {
  return (
    <>
      <li className='taskComponent' style={isSearched ? {backgroundColor : "#E2EBFA"} : {backgroundColor : "white"}}>
        <input type="checkBox" checked={element.checked} onChange={()=>{handleClick(element.id)}}/>
        <label 
        onDoubleClick={()=>handleDelete(element.id)}
        style={element.checked ? {textDecoration:"line-through"} : {textDecoration:"none"}} 
        >
          {element.task}
        </label>
        <FaPen role='button' className='editButton'/>
        <MdDelete className='deleteButton' role='button' onClick={()=>handleDelete(element.id)}/>
      </li>
    </>
  )
}

export default SingleTask