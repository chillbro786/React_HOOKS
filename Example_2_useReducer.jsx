 
//   part A : In part A of code we are implimenting our state using useState hook ;
//part B : In part B of code we are using UseReducer hook which manaage all the individual useState in Once 
 
 
 
 
 
 // ****************************************************************** part A
//  import { useState } from "react";
//  import './App.css'



//  let ExampleTwo =()=>{
   
//     const [count , setCount] = useState(0);
//     const [hidden , setHidden] = useState(false);
//    return<>
//    <hr />
//     <h1>count:{count}</h1>
//     <br />
//     <button onClick={()=>{setCount(count+1)}} >Increment</button>
//     <button onClick={()=>{setCount(count-1)}}       >Decement</button>
//     <button     onClick={()=> {setHidden(!hidden)}} >Hide</button>

//     <br />
//     {hidden?<p>Hidden</p>:<p>Not Hidden</p>}
   
   
//    </>


//  }

//  export default ExampleTwo;

// ****************************************************************** part B

  import { useReducer } from "react";
 import './App.css'

      const reducer=( state,action )=>
      {
            switch(action.type)
            {
                case "INCREMENT":

                return{...state, count:state.count+1};

                case "DECREMENT":

                return{...state, count:state.count-1};

                case "Hide":

                return{...state, hidden: !(state.hidden)};

                default : return state;


            }
      };

 let ExampleTwo =()=>{
 

    const[state,dispatch] = useReducer( reducer ,{count:0,hidden:false});

   return<>
   <hr />
    <h1>count:{state.count}</h1>
    <br />
    <button onClick={()=>{dispatch({type:"INCREMENT"})}} >Increment</button>
    <button onClick={()=>{dispatch({type:"DECREMENT"})}}       >Decement</button>
    <button     onClick={()=> {dispatch({type:"Hide"})}} >Hide</button>

    <br />
    {state.hidden?<p>Hidden</p>:<p>Not Hidden</p>}
   
   
   </>


 }

 export default ExampleTwo;