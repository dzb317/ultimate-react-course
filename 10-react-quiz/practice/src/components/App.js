import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuizContext } from "../contexts/QuizContext";

function App() {
    const {
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        dispatch,
        numQuestions,
        maxPossiblePoints,
    } = useQuizContext();

    return (
        <div className="app">
            <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && <StartScreen dispatch={dispatch} numQuestions={numQuestions} />}
                {status === "active" && (
                    <>
                        <Progress
                            numQuestions={numQuestions}
                            index={index}
                            answer={answer}
                            points={points}
                            maxPossiblePoints={maxPossiblePoints}
                        />
                        <Question question={questions[index]} dispatch={dispatch} answer={answer} />
                        <Footer>
                            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
                            <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index} />
                        </Footer>{" "}
                    </>
                )}
                {status === "finished" && (
                    <FinishScreen
                        points={points}
                        maxPossiblePoints={maxPossiblePoints}
                        highscore={highscore}
                        dispatch={dispatch}
                    />
                )}
            </Main>
        </div>
    );
}

export default App;
