import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {

  const [count ,stcount]=useState(0)

  let myObj={
    username:" badmos",
    age:21
  }

  let newARR=[1,2,3]

  return (
    <>
      <h1 className="bg-green-400 ✅ text-red p-4 rounded-xl">Tailwind Test

      </h1>
      <Card username = "badmos" btnText="clickme"/>

      <Card username="mota" btntext="visitme" />
    </>
  )
}

export default App
