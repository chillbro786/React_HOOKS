import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Example_1_useState.jsx'
import Example2 from './Example_2_useState.jsx'
import Example1 from './Example_1_useReducer.jsx'
import ExampleTwo from './Example_2_useReducer.jsx'
import Example_effect from './Example_1_useEffect.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Example2></Example2>
    <Example1></Example1>
    <ExampleTwo></ExampleTwo>
    <Example_effect></Example_effect>
  </React.StrictMode>,
)
