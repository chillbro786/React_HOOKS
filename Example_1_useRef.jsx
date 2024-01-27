import React ,{useRef} from 'react'
import './App.css'

// use of useRef: this hooks is used to easly manipulate DOM.don't have to manually access the element just use useRef

 function Example_one_ref()
 {
     
   const inputRef = useRef(null);

     const onClick = ()=>{
    //  console.log(inputRef.current.value);
        //   inputRef.current.focus(); // when you click on the button it start focusing on field 

        // to make field empty while clicking 
        inputRef.current.value="";

     };

   return<>
   <hr></hr>
   <div>
    <h1>Perro</h1>
    <input type="text"  placeholder='Ex.........'    ref={inputRef}/> 
    <button onClick={onClick}>change Name </button>
   </div>
   
   </>








 }



 export  default Example_one_ref


