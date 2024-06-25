import { useEffect, useState } from "react";

function Timer() {
  const [timerValue, setTimerValue] = useState(0);
  const [isTimerActive, setisTimerActive] = useState(false);

  useEffect(() => {
    if (!isTimerActive) return;
    const timer = setTimeout(() => {
      setTimerValue(timerValue + 1);
    }, 1000)

    return () => clearTimeout(timer);
  }, [timerValue, isTimerActive])

  function handleResetButton() {
    setTimerValue(() => 0);
    setisTimerActive(false);
  }

  function handelStartStopButton() {
    setisTimerActive(!isTimerActive);
  }

  return (
    <div>
      Timer : {timerValue}
      <div>
        <button onClick={handelStartStopButton}>
          {isTimerActive ? "Stop" : "Start"}
        </button>
        <button onClick={handleResetButton}>Reset</button>
      </div>
    </div>
  )
}

export default Timer;