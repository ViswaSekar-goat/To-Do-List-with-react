/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Search = ({searchValue,setsearchValue , setisSearched , isSearched ,handleSearch}) => {
  return (
    <div className='searchBox'>
      <input placeholder='Search for tasks' type="text" value={searchValue} onChange={(e)=>{
        setsearchValue(e.target.value)
        e.target.value.length !=0 ? setisSearched(true) : setisSearched(false);
      }}/>
    </div>
  )
}

export default Search