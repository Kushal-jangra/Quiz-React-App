import quizCompletedImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers, onClose }) {
  const skippedQuestion = userAnswers.filter((answer) => answer === null);
  const corrected = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const skippedPrecentage = Math.round(
    (skippedQuestion.length / userAnswers.length) * 100
  );
  const correctPrecentage = Math.round(
    (corrected.length / userAnswers.length) * 100
  );
  const wrongPrecentage = 100 - correctPrecentage - skippedPrecentage;

  return (
    <div id="summary">
      <button onClick={onClose} className="btn-shared">
        Close Summary
      </button>
      <img src={quizCompletedImg} alt="Quiz End" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPrecentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctPrecentage}%</span>
          <span className="text">Answered-correctly</span>
        </p>
        <p>
          <span className="number">{wrongPrecentage}%</span>
          <span className="text">Answered-incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>

              <p className={cssClass}>{answer}</p>
              {answer !== QUESTIONS[index].answers[0] && (
                <p className="right-answer">{QUESTIONS[index].answers[0]}</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
