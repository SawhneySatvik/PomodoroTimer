import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const Timer = ({ timeLeft }) => {
  return (
    <div className="timer">
      <div className="timer-display">
        {`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}`}
      </div>
    </div>
  );
};

const SessionHistory = ({ sessionHistory }) => {
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
};

const PomodoroClock = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTitle, setLapTitle] = useState('');
  const [sessionHistory, setSessionHistory] = useState([]);
  const [is24HourFormat, setIs24HourFormat] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      addToSessionHistory(lapTitle);
      setTimeLeft(25 * 60);
      setLapTitle('');
    }
    return () => clearTimeout(timer);
  }, [isRunning, timeLeft, lapTitle]);

  const startPauseTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimeLeft(25 * 60);
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

  const handleLongBreak = () => {
    setTimeLeft(15 * 60); // Set time for long break (15 minutes)
  };

  const handleShortBreak = () => {
    setTimeLeft(5 * 60); // Set time for short break (5 minutes)
  };

  return (
    <div className="pomodoro-clock">
      <Timer timeLeft={timeLeft} />

      <ProgressBar className="custom-progress" now={100 - ((timeLeft / (25 * 60)) * 100)} />
      <br/>
      <br />
      
      <div className="button-group">
        <Button className="button" variant="primary" onClick={startPauseTimer}>Start/Pause</Button>{" "}
        <Button className="button" variant="danger" onClick={resetTimer}>Reset</Button>{" "}
        <Button className="button" variant="success" onClick={handleLongBreak}>Long Break</Button>{" "}
        <Button className="button" variant="warning" onClick={handleShortBreak}>Short Break</Button>{" "}
      </div>
      
      <br />
      
      <div className="lap-input mt-3">
        <Form.Control type="text" placeholder="Enter lap title" value={lapTitle} onChange={handleTitleChange} />
        <br/>
        <Button className="button" variant="success" onClick={() => addToSessionHistory(lapTitle)}>Add Lap</Button>
      </div>

      <br />
      
      <SessionHistory sessionHistory={sessionHistory} />
    </div>
  );
};

export default PomodoroClock;
