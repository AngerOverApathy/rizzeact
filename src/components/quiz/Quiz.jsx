import { useState } from 'react'
import { Questions } from '../helpers/Questions'
import './index.css'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
        <div className="questions">
            <button>{Questions[currentQuestion].optionA}</button>
            <button>{Questions[currentQuestion].optionB}</button>
            <button>{Questions[currentQuestion].optionC}</button>
            <button>{Questions[currentQuestion].optionD}</button>
        </div>
    </div>
  )
}