import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'


const Signup = () => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {signup,error,isLoading}=useSignup()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await signup(userName,password)
    }


  return (
        <form onSubmit={handleSubmit} className="form-container">
            <h3 className='formTitle'>Sign up</h3>

            <label className='text'>Username</label>
            <input 
                type="text"
                onChange={(e)=>setUserName(e.target.value)}
                value={userName} />
            <br></br>
            <label className='text'>Password</label>
            <input 
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password} />
            <br></br>
            <button disabled={isLoading} >Sign Up</button>
            {error&& <div>{error}</div>}
        </form >
  )
}

export default Signup