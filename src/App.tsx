import { useState } from 'react'
import LittleMap from './components/LittleMap'
import GlobalProvider from './components/Provider'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <GlobalProvider>
      <div className='w-screen h-screen relative'>
        <Home />
      </div>
    </GlobalProvider>
  )
}

export default App
