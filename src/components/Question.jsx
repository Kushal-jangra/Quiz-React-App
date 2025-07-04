import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./Question-timer";
import QUESTIONS from "../questions";

export default function Question({
  index,
  onTimeout,
  onSelectAnswer,
  onPause,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswers: "",
    isCorrect: null,
  });
  let timer = 10000;
  if (answer.selectedAnswers) {
    timer = 1000;
  }
  if (answer.isCorrect != null) {
    timer = 1500;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswers: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswers: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 1500);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswers && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswers) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timer={timer}
        onTimeout={answer.selectedAnswers == "" ? onTimeout : null}
        mode={answerState}
        isPaused={onPause}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        onSelect={handleSelectAnswer}
        answerState={answerState}
        answers={QUESTIONS[index].answers}
        selectedAnswers={answer.selectedAnswers}
      />
    </div>
  );
}
import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./Question-timer";
import QUESTIONS from "../questions";

export default function Question({ index, onTimeout, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswers: "",
    isCorrect: null,
  });
  let timer = 10000;
  if (answer.selectedAnswers) {
    timer = 1000;
  }
  if (answer.isCorrect != null) {
    timer = 1500;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswers: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswers: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 1500);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswers && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswers) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timer={timer}
        onTimeout={answer.selectedAnswers == "" ? onTimeout : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        onSelect={handleSelectAnswer}
        answerState={answerState}
        answers={QUESTIONS[index].answers}
        selectedAnswers={answer.selectedAnswers}
      />
    </div>
  );
}
