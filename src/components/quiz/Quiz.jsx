import { useState } from 'react'
import { Questions } from '../../helpers/Questions'
import './index.css'

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')

    const chooseOption = (option) => {
        setOptionChosen(option)
    }

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            // setScore(score + 1)
            console.log('Correct Answer!')
        } else{
            // setCurrentQuestion(currentQuestion + 1)
                console.log('Wrong Answer!')
        }

        setCurrentQuestion(currentQuestion + 1)
    }

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
        <div className="questions">

            <button 
                onClick={()=>{
                    chooseOption('optionA')
                }}
            >
                {Questions[currentQuestion].optionA}
            </button>
            <button 
                onClick={()=>{
                    chooseOption('optionB')
                }}
            >
                {Questions[currentQuestion].optionB}
            </button>
            <button 
                onClick={()=>{
                    chooseOption('optionC')
                }}
            >
                {Questions[currentQuestion].optionC}
            </button>
            <button 
                onClick={()=>{
                    chooseOption('optionD')
                }}
            >
                {Questions[currentQuestion].optionD}
            </button>

        </div>
        <button 
            className='nxtQstnBtn'
            onClick={nextQuestion}
        >
            Next Question
        </button>
    </div>
  )
}