import { useState } from 'react'
import Home from './components/Home' 


function App() {

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-slate'>
        <div className='mb-8'>Header</div>
      
        <Home />
      
        <div className='mt-8'>Footer</div>
      </div>      
    </>
  )
}

export default App
