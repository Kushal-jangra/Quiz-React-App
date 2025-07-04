import { useEffect, useState } from "react";

export default function QuestionTimer({ timer, onTimeout, mode, isPaused }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    setRemainingTime(timer);
  }, [timer]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          if (onTimeout) onTimeout();
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isPaused, onTimeout]);
  return (
    <progress
      id="question-timer"
      value={remainingTime}
      max={timer}
      className={mode}
    />
  );
}
