import { useEffect, useState } from "react";

export default function QuestionTimer({ timer, onTimeout, mode }) {
  const [remainingTime, setReamainingTime] = useState(timer);
  useEffect(() => {
    const Timer = setTimeout(onTimeout, timer);
    return () => {
      clearTimeout(Timer);
    };
  }, [timer, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReamainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-timer"
      value={remainingTime}
      max={timer}
      className={mode}
    />
  );
}
