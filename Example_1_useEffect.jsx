import{useState ,useEffect ,useReducer} from 'react'
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

let Example_effect= ()=>{
    const [state ,dispatch] = useReducer( reducer ,{value:0 , showText:false});

    // useEffect Hook takes two argument callback function and array of dependencies on which change depend
     // here is no dependencies
     useEffect(()=>{
        console.log("value Mounted")
     },[]);
     
       
     // here is the dependencies 
     useEffect(()=>{
        console.log("this function run on change in state of value variable")
     },[state.value]);


     // this code run on unmounting 

     useEffect(()=>{
        console.log("code of unmounted");
       
        return function()
        {
            console.log("unmounted element")
        }
         
     },[]);

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

export default Example_effect;