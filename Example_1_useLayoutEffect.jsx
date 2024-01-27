import React ,{useEffect,useLayoutEffect} from 'react'
import './App.css'

// useEffect and useLayoutEffect look same but actually useEffect called after rendering but useLayoutEffect call before rendering occure

 
function Example_one_useLayout_effect()
{
  useLayoutEffect(()=>{
    console.log("useLayoutEffect");
   },[]);

   useEffect(()=>{
    console.log("useEffect");
   },[]);
   


   return <div></div>
}

export default Example_one_useLayout_effect;