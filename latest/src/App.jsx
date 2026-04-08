import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 function but(){
  alert("Hello Hamza")
 }
 const hen= (key)=>{
  alert(key)
 }
  return (
    <>
    <h1>This are my TBT classes commitment</h1>
     <button onClick={but}>Enter</button>
     <button onClick={()=>hen("hello everyone")}>arrow</button>
    </>
  )
}

export default App
