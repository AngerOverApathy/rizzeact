import { useContext } from 'react'
import { GameStateContext } from '../../helpers/Contexts'
import { Questions } from '../../helpers/Questions'
import './index.css'

const EndScreen = () => {

    const { score, setScore, gameState, setGameState } = useContext(
        GameStateContext
    )

    return (
        <div className="EndScreen">
            <h1>Quiz Complete</h1>
            <h1>{score} / {Questions.length}</h1>
        </div>
    )
}

export default EndScreen;