import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //  ----- HOOOK ------ 

  // The React useState Hook allows us to track state in a function component.

  // State generally refers to data or properties that need to be tracking in an application

// setCounter is a method that control counter variable


  // let [counter, setCouter] = useState(15)

  // const remove= ()=>{
  //   if(counter>0)
  //   setCouter(counter-1);
  // }
  // const addValue=()=>{
  //   // console.log("value added",Math.random());
  //   // console.log("value added",counter);  // here value increase in console
  //   if(counter<20)
  //   counter+=1;
  //   // setCouter(counter+1)
  //   setCouter(counter)
  // }
  // // let counter=6


  return (
    <>

    <h1 className='bg-blue-400 p-4 rounded-xl'>Tailwind</h1>
  
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/25561070/pexels-photo-25561070/free-photo-of-white-flowers-in-the-sun-with-the-sun-shining.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"></img>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slat">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>












 
    </>
  )
}

export default App


/*  //    <h1>Hook</h1>
increases value is not show here 
//    <h2>Counter value : {counter}</h2>  
//    <button
//    onClick={addValue}
//    >Add new</button>
//    <br />
//    <button
//    onClick={remove}
//    >Reduce </button> 
*/

