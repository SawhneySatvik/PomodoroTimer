import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(), 
        text: newTask,
        finished: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const handleUpdateTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          text: prompt('Update task:', task.text) || task.text
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleFinishTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const renderTasks = () => {
    return tasks.map(task => (
      <>
      <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
        <div>
          <span>{task.text}</span>
          <span className="timestamp ml-2">{task.timestamp}</span>
        </div>
        <div>
          <Button variant="info" size="sm" className="mr-2" onClick={() => handleUpdateTask(task.id)}>Update</Button> {' '}
          {!task.finished && <Button variant="success" size="sm" onClick={() => handleFinishTask(task.id)}>Finish</Button>}
        </div>
      </ListGroup.Item>
      <br/>
      </>
    ));
  };

  return (
    <div>
      <h2 className="TodoH2">Todo List</h2>
      <br />
      <div className="add-task d-flex">
        <Form.Control type="text" placeholder="Enter task" value={newTask} onChange={handleNewTaskChange} />
        <Button className="button ml-2" variant="primary" onClick={handleAddTask}>Add Task</Button>
      </div>
      <br />
      <ListGroup>
        {renderTasks()}
      </ListGroup>
    </div>
  );
};

export default TodoList; 
