import { useContext } from 'react'
import { GameStateContext } from '../../helpers/Contexts'
import './index.css'

export default function Menu () {
  const { gameState, setGameState, userName, setUserName } = useContext(GameStateContext)

  return (
    <>
    <div className="Menu">
        <label>Enter Your Name:</label>
        <input type="text" placeholder="Your Response" onChange={(event)=>{
          setUserName(event.target.value)
        }}/>
          <button 
            onClick={()=>{
            setGameState('playing')
          }}
          >
            Start Quiz
          </button>
    </div>
    </>
  )
}