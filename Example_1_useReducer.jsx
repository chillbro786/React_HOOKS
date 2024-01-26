import { useReducer, useState } from 'react'

import './App.css'

  const reducer =( state ,action)=>
       {
               switch(action.type)
               {
                case "INCREMENT":
                    {
                        return {value:state.value+1 , showText:state.showText}
                    }
                    
                    
                case "Hide":
                {
                    return {value:state.value , showText:!state.showText}
                }



                default: return state;
               }
              
           }




    
let Example1 =()=>
{
    
     


     const [state ,dispatch] = useReducer( reducer ,{value:0 , showText:false});

    

     return<>
     
           <hr></hr>

           <h1>{state.value}</h1>
           <br />
           <button   onClick={()=>{
             dispatch({type:"INCREMENT"});
             dispatch({type:"Hide"});
           }}>
             click here !
           </button>
           <br />
         {state.showText && <p>This is a text!</p>}

     
     
     </>


}





  export default Example1