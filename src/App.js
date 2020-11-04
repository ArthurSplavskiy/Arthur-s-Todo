import React, {useState, useEffect} from 'react'

import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  useEffect(() => {
    getLocalTodo()
  },[])

  useEffect(() => {
    const saveLocalTodo = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    saveLocalTodo()
  },[todos])


  const getLocalTodo = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else {
      const localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo)
    }
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const doneTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <div className="App">
      <div className="title-app">
        <h1>Artur's Todo</h1>
      </div>
      <div className="todo-container">
        <TodoForm addTodo={addTodo}/>
        { todos.length ? <TodoList todos={todos} removeTodo={removeTodo} doneTodo={doneTodo}/> : <p className="nothing mt">N O T H I N G</p>}
        
      </div>
    </div>
  );
}

export default App;
