let currentQuestion = {
    id: 0,
    question: "What is your current educational qualification?",
    choices: [
        "10th",
        "12th",
        "UG",
        "PG",
    ]
}

function submitAndloadNextQuestion(){}

function App() {
    return (
        <Questionaire question={currentQuestion} />
    );
}

function Questionaire({question}) {
    const [selectedChoice, setSelectedChoice] = React.useState(null)
    return (
        <div className="questionaire">
            <Question text={question.question} />
            <Choices choices={question.choices} onChoiceSelected={choice => setSelectedChoice(choice)} />
            <button className="submit" onClick={
                submitAndloadNextQuestion(question.id, selectedChoice)
            }>Submit</button>
        </div>
    );
}

function Question({text}) {
    return (
        <p className="question">{text}</p>
    )
}

function Choices({choices}) {
    return (
        <div className="choices">
            {choices.map(choice => <button className="choice">{choice}</button>)}
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));