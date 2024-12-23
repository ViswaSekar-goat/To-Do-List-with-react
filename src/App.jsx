/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {Routes , Route} from "react-router-dom"
import Content from "./Content.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AddTask from "./AddTask.jsx";
import { use } from "react";
import Search from "./Search.jsx";

function App() {

  const [newTask , setnewTask] = useState('')
  const [isSearched,setisSearched] = useState(false)
  const [searchValue ,setsearchValue] = useState('');

  const [data,setData] = useState(JSON.parse(localStorage.getItem('data')) || [])

  const handleClick = (id) =>{
    const newData = data.map(task=> task.id === id ? {...task , checked:!task.checked} : task)
    setData(newData)
    localStorage.setItem('data',JSON.stringify(newData))
  }

  function handleDelete(id){
    const newData = data.filter(task => task.id != id)
    setData(newData)
    localStorage.setItem('data',JSON.stringify(newData))
  }
  function handleSubmit(e){
    e.preventDefault();
    const newTaskData = {
      id: !data.length ? 1 : data[data.length-1].id + 1,
      checked:false,
      task: newTask
    }
    console.log(newTaskData);
    console.log(data);
    const newDataArray = [...data , newTaskData]
    setData(newDataArray)
    localStorage.setItem('data',JSON.stringify(newDataArray))
    setnewTask('');
  }

  return (
    <>
    <div className="App">
      <Header/>
      <AddTask setnewTask={setnewTask} newTask={newTask} handleSubmit={handleSubmit}/>
      <Search searchValue={searchValue} setsearchValue={setsearchValue} isSearched={isSearched} setisSearched={setisSearched}/>
      <Content data={data.filter(tasks => tasks.task.includes(searchValue.toLowerCase()))} setData={setData} handleClick={handleClick} handleDelete={handleDelete} isSearched={isSearched}/>
      <Footer length={data.length} searchValue={searchValue} data={data} isSearched={isSearched}/>
    </div>
    </>
  );
}

export default App
