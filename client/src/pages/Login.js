import React, { useState } from 'react'
import { redirect } from 'react-router-dom'
import {useLogin} from '../hooks/useLogin'
import './Logincss.css'


const Login = () => {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {login,error,isLoading}=useLogin()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await login(userName,password)
        
    }


  return (
    
        <form onSubmit={handleSubmit} className="form-container">
            <h3 className='formTitle'>Log in</h3>

            <label className='text' >Username</label>
            <input 
                type="text"
                onChange={(e)=>setUserName(e.target.value)}
                value={userName} />
                <br></br>
            
            <label  className='text'>Password</label>
            <input 
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password} />
            <br></br>
            <button disabled={isLoading}>Log in</button>
            {error &&<div className="error">{error}</div>}
            
        </form >
  )
}

export default Login



























// import React, { useState } from 'react'
// import Axios from 'axios'
// import { useEffect } from 'react'




// //Log in request Outdated cus doesnt coonect to backend correclty



// const LogIn = () => {
//   const [userName,setUserName]=useState('')

//   useEffect(()=>{
//     const fetchUsers=async()=> {
//       //display usernames
//       console.log("HE")
//         const response=await fetch('/login')
//         const json=await response.json()
  
//         if(response.ok){
//             setUsers(json)
            
//         }
//     }
//     fetchUsers()
//   },[])
  

 
 
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log("submiited")

//     const body={userName};
//     console.log({body})
//     fetch("http://localhost:3001/login", {
//       method: "POST",
//       headers:{"Content-Type":"application/json"},
//       body: JSON.stringify(body)
//     }).then((response) => {
//       console.log(response);
//       return response.json(); // do something with response JSON
//     });
    
// }

//  const [users,setUsers]=useState(null)




//   return (
//     <div>
//         <form onSubmit={(e) => {handleSubmit(e)}}>
//           <label>
//             UserName:
//             <input type="text" name="userName" value={userName} id="userName" onChange={(e)=>setUserName(e.target.value)}/>
//           </label>
//           <input type='submit' value='submit'/>
//           </form>
//         <p>{userName}</p>
//         {users && users.map((user)=>
//         <h1>{user.userName}</h1>)}
//     </div>
//   )
// }

// export default LogIn