import React from "react";
import TodoList from "./components/todoList";
import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { IoMdAdd } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import { Route, Routes, Switch } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);
  const descriptionRef = useRef();

  // Get todos from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) setTodos(storedTodos)
  }, [])
  
  // Store todos in local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const checkTodo = newTodos.find(todo => todo.id === id)
    checkTodo.completed = !checkTodo.completed
    setTodos(newTodos)
  }

  function deleteOneTodo(id) {
    let newTodos = [...todos]
    newTodos = newTodos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  
  function handleAddTodo() {
    const prevTodos = todos;
    // remove spaces, capitalize first letter, don't allow empti string.
    let description = descriptionRef.current.value.trim();
    description = description.charAt(0).toUpperCase() + description.slice(1);
    if (description === '') return
    setTodos([...prevTodos, {id: uuidv4(), description: description, completed: false}])
    descriptionRef.current.value = '';
  }
  
  function handleClearTodo() {
    const notCompletedTodos = todos.filter(todo => !todo.completed)
    setTodos(notCompletedTodos)
  }

  function editTodo(id, editText, todo) {
    editText = editText.trim().charAt(0).toUpperCase() + editText.slice(1);
    const newTodos = [...todos]
    const editedTodo = newTodos.find(todo => todo.id === id)
    editedTodo.description = editText
    todo.editMode = true;
    setTodos(newTodos) 
    console.log(todos)
  }

  function quitEditMode(id) {
    const newTodos = [...todos]
    const editedTodo = newTodos.find(todo => todo.id === id)
    editedTodo.editMode = false;
    setTodos(newTodos)
  }

  return (
        <React.Fragment>
          <h1 className="title">TO DO LIST</h1> 
          <div className="app-container">
            <form className="add-container" action="#">
              <input ref={descriptionRef} type="text" placeholder="Add a task..." className="add-input" />
              <button type="submit" className="add-button" onClick={handleAddTodo}><IoMdAdd /></button>
            </form>
            <div className="restart"><VscDebugRestart /></div>      
            <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            editMode={quitEditMode}
            deleteOneTodo={deleteOneTodo} />
            <button type="button" className="clear-button" onClick={handleClearTodo}>CLEAR ALL COMPLETED</button>
            <p className="left-todos">{todos.filter(todo => todo.completed === false).length} to do left</p>
          </div>      
        </React.Fragment>   
  );
}

export default App;
