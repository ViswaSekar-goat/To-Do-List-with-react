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

function App() {
  
  const API_URL = 'http://localhost:3500/items'
  const [newTask , setnewTask] = useState('')
  const [isSearched,setisSearched] = useState(false)
  const [searchValue ,setsearchValue] = useState('');
  const [data,setData] = useState([])
  const [isLoading,setisLoading] = useState(true)

  useEffect(()=>{
    async function getData(){
      try{
        const request = await fetch(API_URL);
        const dataRecieved = await request.json();
        setData(dataRecieved)
      }catch(err){
        console.log(err.stack);
      }finally{
        setisLoading(false)
      }
    }

    const timeout = setTimeout(getData,1500)

    return ()=> clearInterval(timeout)

  },[])

  const handleClick = (id) =>{
    const newData = data.map(task=> task.id === id ? {...task , checked:!task.checked} : task)
    setData(newData)
    const selectedTask = newData.filter(task => task.id === id)
    const optionsObj = {
      method : 'PATCH',
      headers : {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({checked:selectedTask[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const request = apiReq(reqUrl,optionsObj)
  }

  async function handleDelete(id){
    const newData = data.filter(task => +task.id != id)
    setData(newData)
    const optionsObj = {
      method : 'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiReq(reqUrl,optionsObj)
  }
  async function handleSubmit(e){
    e.preventDefault();
    const newTaskData = {
      id: (data.length === 0 ? 1 : +data[data.length-1].id + 1).toString(),
      checked:false,
      task: newTask
    }

    const newDataArray = [...data,newTaskData]
    setData(newDataArray)

    setnewTask('');

    const optionsObj = {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body:JSON.stringify(newTaskData)
    }

    const result = await apiReq(API_URL,optionsObj)
  }

  return (
    <>
    <div className="App">
      <Header/>
      <AddTask setnewTask={setnewTask} newTask={newTask} handleSubmit={handleSubmit}/>
      <Search searchValue={searchValue} setsearchValue={setsearchValue} isSearched={isSearched} setisSearched={setisSearched}/>
      <main>
        {
          isLoading && <p style={{
            color:"#0760fb",
            marginLeft:"120px",
          }}>loading data</p>
        }
        {
          !isLoading && <Content data={data.filter(tasks => tasks.task.includes(searchValue.toLowerCase()))} setData={setData} handleClick={handleClick} handleDelete={handleDelete} isSearched={isSearched}/>
        }
        
      </main>
      <Footer length={data.length} searchValue={searchValue} data={data} isSearched={isSearched}/>
    </div>
    </>
  );
}

export default App
