import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    
    MDBBtn
  } from 'mdb-react-ui-kit';
import './pages/Footer.css'

const Footer = () => {
  return (
    <div>


      <div className='textCenter ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
 
    </div>
  )
}

export default Footer