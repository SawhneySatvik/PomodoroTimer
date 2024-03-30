import React, { useState, useEffect } from 'react';

const Clock = ({ is24HourFormat }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let formattedHours = hours;
    const amPm = hours >= 12 ? 'PM' : 'AM';

    if (!is24HourFormat) {
      formattedHours = hours % 12 || 12;
    }

    return `${formattedHours < 10 ? '0' : ''}${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${is24HourFormat ? '' : amPm}`;
  };

  return (
    <>
    <div className="clock">
      <span>{formatTime(currentTime)}</span>
    </div>
    </>
    
  );
};

export default Clock;
