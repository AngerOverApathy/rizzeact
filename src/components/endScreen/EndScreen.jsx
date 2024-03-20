

const EndScreen = () => {
    const { score } = useContext(GameStateContext)

    return (
        <div className="EndScreen">
            <h1>Your score is {score} / 5 correct answers</h1>
        </div>
    )
}