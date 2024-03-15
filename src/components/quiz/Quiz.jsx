import { useState } from 'react'
import { Questions } from '../helpers/Questions'
import './index.css'

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')

    const chooseOption = (option) => {
        setOptionChosen(option)
    }

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
        <div className="questions">
            <button onClick={}>{Questions[currentQuestion].optionA}</button>
            <button>{Questions[currentQuestion].optionB}</button>
            <button>{Questions[currentQuestion].optionC}</button>
            <button>{Questions[currentQuestion].optionD}</button>
        </div>
    </div>
  )
}