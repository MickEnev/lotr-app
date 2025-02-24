import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <img src="https://img.goodfon.com/original/1920x1080/0/bf/art-the-lord-of-the-rings-1338.jpg" alt="lotr-background-image" className= "bg-image"/>
        <Dashboard/>
      </main>
    </div>
  )
}

export default App
