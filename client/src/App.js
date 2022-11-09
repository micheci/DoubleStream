import React, { useState } from 'react'
import './App.css';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import ReactPlayer from "react-player"
import Navbar from './Navbar';



function App() {
  const navigate=useNavigate();

  //use State to change the twitch stream via url params
  const [streamOne,setStreamOne]=useState("lcs")


  return (
    <div className="App">
      <Navbar/>
      <Button onClick={()=>console.log(streamOne)}>Stream 1</Button>
      <Button onclick={()=>navigate("login")}>Stream 2</Button>
      <div className="flex">
      <ReactPlayer className="videos"
        url="https://www.twitch.tv/lcs"
        controls
        width="55rem"
        height="35rem"
      />
      <ReactPlayer className="videos"
      
        url="https://www.twitch.tv/loltyler1"
        controls
        width="50rem"
        height="35rem"
       
      />


      </div>
      
      <h1>Home Page</h1>
      
    </div>
  );
}

export default App;
