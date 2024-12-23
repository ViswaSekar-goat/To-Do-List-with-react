

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {Routes , Route} from "react-router-dom"
import Content from "./Content.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AddTask from "./AddTask.jsx";
import { use } from "react";
import Search from "./Search.jsx";
import apiReq from "./api.js";
import {NavLink} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
      <ul className='navList'>
        <li className='list'><NavLink className='navComponent' to='/' exact="true" activeclassname = 'active'>
        All tasks
        </NavLink></li>
        <li className='list'><NavLink className='navComponent' to='/open' activeclassname='active'>Open</NavLink></li>
        <li className='list'><NavLink className='navComponent' to='/closed' activeclassname='active'>Closed</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar