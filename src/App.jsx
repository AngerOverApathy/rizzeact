import { useState, useContext } from 'react'
import { GameStateContext } from './helpers/Contexts'
import Menu from './components/menu/Menu'
import Quiz from './components/quiz/Quiz'
import EndScreen from './components/endScreen/EndScreen'
import './App.css'

function App() {
  const [gameState, setGameState] = useState('menu')
  const [userName, setUserName] = useState('')
  const [score, setScore] = useState(0)

  return (
    <>
    <div className='App'>
        <h1>Quiz App</h1>
          <GameStateContext.Provider 
            value={{ 
              gameState, 
              setGameState, 
              userName, 
              setUserName, 
              score, 
              setScore 
            }}
          >
            {gameState === 'menu' && <Menu />}
            {gameState === 'playing' && <Quiz />}
            {gameState === 'endScreen' && <EndScreen />}
          </GameStateContext.Provider>
    </div>
    </>
  )
}

export default App
