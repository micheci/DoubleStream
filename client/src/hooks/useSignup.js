
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup=()=>{
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(null)
    const {dispatch}=useAuthContext()

    const signup=async(userName,password)=>{
        setIsLoading(true)
        setError(null)

        const resposne=await fetch('/user/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({userName,password})
        })
        const json= await resposne.json()

        if(!resposne.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(resposne.ok){
            //SAVE USER TO LOCAL STORAGE in frontend
            localStorage.setItem('user',JSON.stringify(json))

            //UPDATE AUTH CONTEXT
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
        }

    }
    return{signup,isLoading,error}
}