
import React from 'react';
import PomodoroClock from './components/PomodoroClock';
import TodoList from './components/TodoList';
import PomodoroInformation from './components/PomodoroInformation';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <div className="container">
      <nav className='nav-bar'>
        <NavBar />
      </nav>
      <header className='Header'>
        <h1>Pomodoro App</h1>
      </header>
      <main>
        <section id="pomodoroClock">
          <PomodoroClock />
        </section>
        <section id="todoList">
          <TodoList />
        </section>
      </main>
      <section id="pomodoroInfromation">
        <PomodoroInformation/>
      </section>
      <footer>
        <p>© 2024 Satvik Sawhney</p>
      </footer>
    </div>
    </>
  );
}

export default App;
