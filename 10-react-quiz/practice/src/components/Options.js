import { useQuizContext } from "../contexts/QuizContext";

function Options() {
    const { index, questions, dispatch, answer } = useQuizContext();
    const question = questions[index];
    const hasAnswered = answer !== null;

    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button
                    className={`btn btn-option ${answer === index ? "answer" : ""} ${
                        hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
                    }`}
                    key={option}
                    onClick={() => {
                        dispatch({ type: "newAnswer", payload: index });
                    }}
                    disabled={hasAnswered}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Options;
