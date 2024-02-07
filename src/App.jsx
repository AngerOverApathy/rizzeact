import { useState, useContext } from 'react'
import { GameStateContext } from './helpers/Contexts'
import Menu from './components/menu/Menu'
import Quiz from './components/quiz/Quiz'
import './App.css'

function App() {
  const [gameState, setGameState] = useState('menu')
  const [userName, setUserName] = useState('')

  return (
    <>
    <div className='App'>
        <h1>Quiz App</h1>
          <GameStateContext.Provider 
            value={{ gameState, setGameState, userName, setUserName }}
          >
            {gameState === 'menu' && <Menu />}
            {gameState === 'playing' && <Quiz />}
          </GameStateContext.Provider>
    </div>
    </>
  )
}

export default App
