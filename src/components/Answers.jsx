import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswers,
  onSelect,
  answerState,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswers === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (isSelected) {
          if (answerState === "correct") {
            cssClass = "correct";
          } else if (answerState === "wrong") {
            cssClass = "wrong";
          }
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState != ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
