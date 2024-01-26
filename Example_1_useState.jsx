import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //####### This function will not refelect any changes in screen [core javascript]
  //  let counter = 1 ;
  //  let update =()=>{
  //        console.log("counter before update ");
  //      console.log(counter);
  //      console.log("counter After update ");
  //      counter = counter+1 ;
  //      console.log(counter);
  //  }




      // Here is the Hooks come into play using useState hook we can change the state of your UI .
           let[counter , setCounter ]= useState(0);
         let update = ()=>
         {
                setCounter(
                  counter = counter+1 
                )
         }

  return (
    <>
         <div>
              {counter}
         </div>
         <br></br>
         <button   onClick={update}   >click me to update counter!</button>
     
    </>
  )
}

export default App
