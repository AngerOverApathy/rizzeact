import { useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu'

function App() {
  const [gameState, setGameState] = useState('menu')

  return (
    <>
    <div className='App'>
        <h1>Quiz App</h1>
        {gameState === 'menu' && <Menu />}
    </div>
    </>
  )
}

export default App
