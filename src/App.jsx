import { useState } from "react";

import "./App.css";
import Cal from "./components/Cal";

import UserForm from "./components/UserForm";
// import Calculator from './components/Calculator'

function App() {
  const [state, setState] = useState({ taskState: false, calState: false });
  const handleClick = (e) => {
    const { id } = e.target;
    console.log(id);
    if (id === "task-btn") {
      setState((prevState) => {
        return { ...prevState, taskState: !state.taskState };
      });
    } else {
      setState((prevState) => {
        return { ...prevState, calState: !state.calState };
      });
    }
  };
  return (
    <div className="main-wrraper">
      <h1>UserState Task Overview </h1>
      <p>
        This task involves two distinct exercises designed to practice using the
        useState hook in React, including modifying state using{" "}
        <strong>prevState</strong>. Below is a detailed explanation of each
        exercise:
      </p>
      <h2>1. User Form with Delete Functionality</h2>
      <p>
        In this task, you will create a user form that allows users to input and
        submit their details. The submitted user information will be displayed
        below the form as individual cards. Each card will include a delete
        button, enabling the removal of specific user entries. The useState hook
        is used with <strong>prevState</strong> to ensure state updates are
        handled efficiently and correctly.
      </p>
      <h2>2. Calculator Using useState</h2>
      <p>
        The second task requires building a functional calculator. The
        calculator should handle basic arithmetic operations and use the
        useState hook to manage the input and calculation states effectively.
        Additionally,<strong> prevState</strong> is utilized to ensure accurate
        state updates during operations.
      </p>
      <h2>Launching the Applications</h2>
      <p>
        At the bottom of the page, two buttons are provided to launch each
        application task.These button have <strong>toggle</strong>{" "}
        functionality.
      </p>
      <div className="main-btn-wrapper">
        <button id="task-btn" onClick={handleClick}>
          UserForm
        </button>
        <button id="cal-btn" onClick={handleClick}>
          Calculator
        </button>
      </div>
      {state.taskState ? <UserForm /> : ""}
      {state.calState ? <Cal /> : ""}
    </div>
  );
}

export default App;
