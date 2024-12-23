/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Footer = ({length,data,searchValue,isSearched}) => {

  const filteredDataLength = data.filter(tasks => tasks.task.includes(searchValue.toLowerCase())).length

  return (
    <>
      {isSearched && <div className='footer'>
        {filteredDataLength} search {filteredDataLength ==1 ? "item" : "items"}
      </div>}

      { !isSearched && <div className='footer'>
        {length} {length ==1 ? "item" : "items"}
      </div>}
    </>
  )
}

export default Footer