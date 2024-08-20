import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import { RemoveTodo } from './features/todo/TodoSlice'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <h1>Learn About Redux Toolkit</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
