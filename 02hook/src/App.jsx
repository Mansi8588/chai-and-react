import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // The React useState Hook allows us to track state in a function component.

  // State generally refers to data or properties that need to be tracking in an application

// setCounter is a method that control counter variable


  let [counter, setCouter] = useState(15)

  const remove= ()=>{
    if(counter>0)
    setCouter(counter-1);
  }
  const addValue=()=>{
    // console.log("value added",Math.random());
    // console.log("value added",counter);  // here value increase in console
    if(counter<20)
    counter+=1;
    // setCouter(counter+1)
    setCouter(counter)
  }
  // let counter=6
  return (
    <>
     <h1>Hook</h1>
     {/* increases value is not show here */}
     <h2>Counter value : {counter}</h2>  
     <button
     onClick={addValue}
     >Add new</button>
     <br />
     <button
     onClick={remove}
     >Reduce </button>
    </>
  )
}

export default App
