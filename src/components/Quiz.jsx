import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);
  const handleSkip = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  const handlePrevious = () => {
    if (userAnswers.length === 0) return;
    setUserAnswers((prev) => prev.slice(0, -1)); // Removes last answer, resets current question
  };

  if (quizCompleted) {
    return (
      <Summary
        userAnswers={userAnswers}
        onClose={() => setShowSummary(false)}
      />
    );
  }

  return (
    <div id="quiz">
      {!showSummary && (
        <div className="button-container">
          <button
            onClick={handlePrevious}
            className="btn-shared summary-btn"
            disabled={userAnswers.length === 0}
          >
            Previous
          </button>
          <h2 style={{ color: "#c1b2dd" }}>
            Total questions - {QUESTIONS.length}
          </h2>

          <button
            onClick={() => setShowSummary(true)}
            className="btn-shared summary-btn"
          >
            View Summary
          </button>
        </div>
      )}
      {!showSummary && (
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onTimeout={handleSkip}
          onSelectAnswer={handleSelectAnswer}
          onPause={showSummary}
        />
      )}

      {showSummary && (
        <Summary
          userAnswers={userAnswers}
          onClose={() => setShowSummary(false)}
        />
      )}
    </div>
  );
}
