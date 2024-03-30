import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Timer({ timeLeft }) {
  return (
    <div className="timer">
      <div className="timer-display">
        {`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}`}
      </div>
    </div>
  );
}

function SessionHistory({ sessionHistory }) {
  return (
    <div className="session-history">
      <h3>Session History</h3>
      <ListGroup>
        {sessionHistory.map((lap, index) => (
          <ListGroup.Item key={index}>{lap}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

const PomodoroClock = () => {
  const [defaultPomodoroTime, setDefaultPomodoroTime] = useState(25); // Default Pomodoro time in minutes
  const [defaultLongBreak, setDefaultLongBreak] = useState(15); // Default long break time in minutes
  const [defaultShortBreak, setDefaultShortBreak] = useState(5); // Default short break time in minutes
  const [timeLeft, setTimeLeft] = useState(defaultPomodoroTime * 60); // Initial time left (in seconds)
  const [isRunning, setIsRunning] = useState(false);
  const [lapTitle, setLapTitle] = useState('');
  const [sessionHistory, setSessionHistory] = useState([]);
  const [customPomodoroTime, setCustomPomodoroTime] = useState('');
  const [customLongBreak, setCustomLongBreak] = useState('');
  const [customShortBreak, setCustomShortBreak] = useState('');

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      addToSessionHistory(lapTitle);
      setTimeLeft(defaultPomodoroTime * 60);
      setLapTitle('');
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft, lapTitle, defaultPomodoroTime]);

  const startPauseTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimeLeft(defaultPomodoroTime * 60);
    setIsRunning(false);
    setLapTitle('');
  };

  const addToSessionHistory = (title) => {
    if (title.trim() !== '') {
      setSessionHistory([...sessionHistory, title]);
    }
  };

  const handleTitleChange = (e) => {
    setLapTitle(e.target.value);
  };

  const handleCustomTimeSubmit = () => {
    if (customPomodoroTime !== '') {
      setDefaultPomodoroTime(parseInt(customPomodoroTime));
      setTimeLeft(parseInt(customPomodoroTime) * 60);
    }
    if (customLongBreak !== '') {
      setDefaultLongBreak(parseInt(customLongBreak));
    }
    if (customShortBreak !== '') {
      setDefaultShortBreak(parseInt(customShortBreak));
    }
  };

  const handleLongBreak = () => {
    setTimeLeft(defaultLongBreak * 60);
  };

  const handleShortBreak = () => {
    setTimeLeft(defaultShortBreak * 60);
  };

  return (
    <div className="pomodoro-clock">
      <Timer timeLeft={timeLeft} />
      <br />
      <br />
      <ProgressBar className="custom-progress" now={100 - ((timeLeft / (defaultPomodoroTime * 60)) * 100)} />
      <br />
      <br />

      <div className="button-group">
        <Button className="button" variant="primary" onClick={startPauseTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>{" "}
        <Button className="button" variant="danger" onClick={resetTimer}>Reset</Button>{" "}
        <Button className="button" variant="success" onClick={handleLongBreak}>Long Break</Button>{" "}
        <Button className="button" variant="warning" onClick={handleShortBreak}>Short Break</Button>{" "}
      </div>

      <br />
      <div className="custom-time mt-3">
        <div>
          <label>Pomodoro Time: &nbsp; &nbsp; </label>
          <input
            placeholder="25 minutes"
            type="number"
            min="1"
            value={customPomodoroTime}
            onChange={(e) => setCustomPomodoroTime(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label>Short Break:&nbsp; &nbsp;</label>
          <input
            placeholder="5 minutes"
            type="number"
            min="1"
            value={customShortBreak}
            onChange={(e) => setCustomShortBreak(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label>Long Break:&nbsp; &nbsp;</label>
          <input
            placeholder="15 minutes"
            type="number"
            min="1"
            value={customLongBreak}
            onChange={(e) => setCustomLongBreak(e.target.value)}
          />
        </div>
        <br/>
        <Button className="button" variant="primary" onClick={handleCustomTimeSubmit}>Set Custom Time</Button>
      </div>

      <br/>

      <div className="lap-input mt-3">
        <input
          type="text"
          placeholder="Enter lap title"
          value={lapTitle}
          onChange={handleTitleChange}
        />
        <Button className="button" variant="success" onClick={() => addToSessionHistory(lapTitle)}>Add Lap</Button>
      </div>

      <br />

      <SessionHistory sessionHistory={sessionHistory} />
    </div>
  );
};

export default PomodoroClock;
