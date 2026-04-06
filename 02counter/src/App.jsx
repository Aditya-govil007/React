import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter , setCounter]=useState(0)
  // let counter=15

  const addValue = () =>{
    counter=counter+1;
    setCounter(counter)
    console.log("clicked" , counter);
  }

  const removeValue = ()=>{
    console.log("removed" , counter);
    counter=counter-1;
    setCounter(counter)
    
  }


  return (
    <>
      <h1>Badmos Gang</h1>
      <h2>Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
