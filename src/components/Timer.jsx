import React from 'react';

const Timer = ({ timeLeft }) => {
  // Calculate the percentage of time left
  const percentage = (timeLeft / (25 * 60)) * 100;

  // Calculate minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Convert minutes and seconds to string format
  const minutesStr = String(minutes).padStart(2, '0');
  const secondsStr = String(seconds).padStart(2, '0');

  // Generate dynamic style for the timer
  const timerStyle = {
    clipPath: `polygon(50% 0%, 50% 100%, ${percentage}% 100%, ${percentage}% 0%)`
  };

  return (
    <>
    <div className="timer-container">
      <div className="timer">
        <div className="timer-circle" style={timerStyle}></div>
        <div className="timer-display">
          {minutesStr}:{secondsStr}
        </div>
      </div>
    </div>
    </>
  );
};

export default Timer;
