# UserState Task Overview  

This project demonstrates the use of the `useState` hook in React by implementing two tasks: a user form with delete functionality and a functional calculator. Both tasks utilize `useState` with `prevState` to handle state updates efficiently.

## Features  

### 1. User Form with Delete Functionality  

- A user form allows users to input their details (e.g., name, email, etc.).
- Submitted user information is displayed below the form as individual cards.
- Each card includes a delete button to remove specific user entries.
- State management is handled using the `useState` hook, leveraging `prevState` to ensure smooth updates when adding or removing users.

### 2. Calculator Using useState  

- A fully functional calculator is implemented to handle basic arithmetic operations.
- The calculator uses `useState` to manage inputs and calculation results.
- State updates are managed using `prevState` for accurate operation handling.

## How to Use  

### Launching the Applications  

At the bottom of the application, you will find two buttons to launch each task:

1. **User Form Application**: Allows you to add and manage user details.
2. **Calculator Application**: Provides a functional calculator interface for basic arithmetic.

## Technical Details  

- React's `useState` hook is used extensively in both tasks.
- The `prevState` feature ensures that state updates are efficient and consistent, especially in scenarios where the new state depends on the previous one.

