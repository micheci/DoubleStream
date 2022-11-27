// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import LogIn from './pages/Login';
// import Signup from './pages/Signup';
// import { AuthContextProvider } from './context/AuthContext';
// import Home from './pages/Home';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/Login" element={<LogIn/>}/>
//         <Route path="/Signup" element={<Signup/>}/>
//       </Routes>
//     </BrowserRouter>
//     </AuthContextProvider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </React.StrictMode>
);