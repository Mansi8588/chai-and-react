import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(11)
  const [numberAllowed, setNumberAllowed] = useState(false)

  const [charAllowed, setcharAllowed] = useState(false)
  const [password,setPassword] =useState("")

  const passwordRef=useRef(null)


  // useCallback -- is a react hook that lets you chche a function definition between re-renders
// useEffect -- is a React Hook that lets you synchronize a component with an external system
// useRef


const PasswordGenerator =useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"

  for(let i=1;i<=length;i++){
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char)
  }

  setPassword(pass)

},[length,numberAllowed,charAllowed,setPassword])
// PasswordGenerator() -- useEffect is better way


const copyRef=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,5)
  window.navigator.clipboard.writeText(password)
},[password] )
useEffect(()=>{
PasswordGenerator()
},[length,numberAllowed,charAllowed,PasswordGenerator])
  return (
    <>

     <div className='w-full max-w-md mx-auto shadow-md rounded-lg text-pink-200 px-4 my-8 bg-gray-500'>
     <h1 className="text-2xl text-center text-white my-3">Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3 my-3 rounded-lg'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyRef}
        className='outline-none bg-violet-500 text-pink-400 px-3 py-0 my-3 shrink-0 rounded-lg'
        >copy</button>

      </div>

      <div className='flex text-sm gap-x-2 py-5'>
<div className='flex items-center gap-x-1'>
  <input type="range" 
  min={6}
  max={50}
  value={length}
  className='cursor-pointer'
  onChange={(e)=>{
   setlength(e.target.value) 
  }}
  
  />
  <label>length: {length}</label>
</div>
<div className='flex items-center gap-x-1'>
  <input
  type="checkbox"
  defaultChecked={charAllowed}
  id="characterInput"
  onChange={()=>{
    setcharAllowed((prev)=>
      !prev);
    }}
  
  />
  <label htmlFor="characterInput">Characters</label>
</div>
<div className='flex items-center gap-x-1'>
  <input
  type="checkbox"
  defaultChecked={numberAllowed}
  id="numberInput"
  onChange={()=>{
    setNumberAllowed((prev)=>
      !prev);
    }}
  
  />
  <label htmlFor="numberInput">Numbers</label>
</div>
      </div>
     </div>
    </>

  )
}

export default App

