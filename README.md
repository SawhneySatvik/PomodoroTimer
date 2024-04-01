# Pomodoro App

## Overview

The Pomodoro App is a productivity tool designed to help users manage their time effectively using the Pomodoro Technique. The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It involves breaking work into intervals, traditionally 25 minutes in length, separated by short breaks.

The Pomodoro App provides a digital implementation of the Pomodoro Technique, allowing users to set customizable timers for work sessions and breaks. It includes features such as session history tracking and a todo list.

## Features

- **Customizable Timer:** Users can set the duration of the main pomodoro timer, as well as short and long breaks.
- **Session History:** Tracks previous work sessions, allowing users to review their productivity over time.
- **Todo List:** Provides a simple todo list for keeping track of tasks during work sessions.
- **Responsive Design:** The app is responsive and adapts to different screen sizes, ensuring a consistent user experience across devices.
- **Sticky Navbar:** The navigation bar remains fixed at the top of the screen as the user scrolls, providing easy access to different sections of the app.

## Components

The Pomodoro App consists of the following components:

1. **Pomodoro Clock**
   - Displays the main timer for work sessions.
   - Includes controls for starting/pausing the timer, resetting the timer, and adding session laps.
   - Allows users to customize the duration of the main timer, short breaks, and long breaks.
2. **Todo List**
   - Provides a simple todo list for managing tasks.
   - Allows users to add, update, and finish tasks.
   - Displays timestamps for each task to track when they were added.
3. **About Page**
   - Provides information about the Pomodoro Technique and its benefits.
   - Includes a brief overview of how to use the Pomodoro App effectively.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Bootstrap: UI library for building responsive web applications.
- HTML5: Markup language for structuring web pages.
- CSS: Styling language for designing the app's appearance.
- JavaScript: Programming language for adding interactivity and functionality to the app.
- Vite: React+Vite template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

##Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation

To run the Pomodoro App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/SawhneySatvik/PomodoroTimer/`
2. Navigate to the project directory: `cd pomodoro-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the app in your web browser: [http://localhost:3000](http://localhost:3000)

## Usage

1. Set the main timer duration using the input field provided in the Pomodoro Clock section.
2. Customize the durations of short breaks and long breaks if desired.
3. Click the "Start" button to begin the work session timer. Click again to pause/resume the timer.
4. Use the "Reset" button to reset the timer to its initial state.
5. Add session laps by entering a title in the input field and clicking the "Add Lap" button.
6. Manage tasks in the Todo List section by adding, updating, and finishing tasks as needed.
7. Navigate between different sections of the app using the links in the navigation bar.

- This Pomodoro App project was created by Satvik Sawhney.
