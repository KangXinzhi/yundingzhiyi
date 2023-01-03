import { useState } from 'react'
import classNames from 'classnames'

import LittleMap from '@/components/LittleMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen relative font-14'>
      <button className="bg-red hover:bg-blue-700 text-3xl text-red-500 ">
        Hover me
      </button>
      <LittleMap />
  
    </div>
  )
}

export default App
