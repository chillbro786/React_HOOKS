 import{useState} from 'react'
 import './App.css'


    
 // this example is based on the concept that what ever you write in input field will reflect on scree using useState hook.
 let Example2 = ()=>{

   let [name , setName] = useState("Display")

    let changes = (event)=>
    {
             let content = event.target.value;

             setName(
                 content
             )

    }

    return<>


     <div>
             {name}
             <br />
             <input  onChange={changes} type="text" placeholder='Enter what u want  !!' />
     </div>

    
    </>


}

export default Example2;