// import React, { useState } from 'react'
// import './App.css';
// import { Button } from 'react-bootstrap';
// import {useNavigate} from 'react-router-dom'
// import ReactPlayer from "react-player"
// import Navbar from './Navbar';
// import Footer from './Footer';
// import Chat from './Chat';



// function App() {
//   const navigate=useNavigate();

//   //use State to change the twitch stream via url params
//   const [streamOne,setStreamOne]=useState("lcs")


//   return (
//     <div className="App">
//       <Navbar/>
//       <div className="video-wrapper">
//       <ReactPlayer className="videos square bg-primary rounded"
//         url="https://www.twitch.tv/lcs"
//         controls
        
//       />
//       <ReactPlayer className="videos"
   
//         url="https://www.twitch.tv/loltyler1"
//         controls
        
//       />
      
//       {/* Add all the streams and just hide them depending on what
//       person clicks */}


//       </div>
//       <Footer></Footer>
      
      
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './Navbar'

function App() {
  

  const {user} =useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home />: <Navigate to="/login"/>}
            />
            <Route 
              path="/login" 
              element={!user ? <Login />: <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup />: <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;