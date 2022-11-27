import React, { useState } from 'react'
import '../App.css';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import ReactPlayer from "react-player"
import Navbar from '../Navbar';
import Footer from '../Footer'




function Home() {
  const navigate=useNavigate();

  //use State to change the twitch stream via url params
  const [streamOne,setStreamOne]=useState("lcs")


  return (
    <div className="home-wrapper">
      
      <div className="video-wrapper">
      <ReactPlayer className="videos square bg-primary rounded"
        url="https://www.twitch.tv/lcs"
        controls
        
      />
      <ReactPlayer className="videos"
   
        url="https://www.twitch.tv/loltyler1"
        controls
        
      />
      
      {/* Add all the streams and just hide them depending on what
      person clicks */}


      </div>
      <Footer></Footer>
      
      
    </div>
  );
}

export default Home;
