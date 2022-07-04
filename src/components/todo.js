import React from 'react'
import { useRef } from 'react'

export default function Todo({ todo, toggleTodo, editTodo, deleteOneTodo }) {

  const editDescription = useRef()

  function handleCheckTodo() {
    toggleTodo(todo.id)
  }

  function handleEditTodo() {
    editTodo(todo.id, editDescription.current.value)
  }

  function handleDeleteOneTodo() {
    deleteOneTodo(todo.id)
  }

  return (
    <li className='todo'>
      <input className='checkbox' type="checkbox" checked={todo.completed} onChange={handleCheckTodo} />
      <input className='description todo-text' ref={editDescription} type="text" placeholder={todo.description} onSubmit={handleEditTodo} onChange={handleEditTodo}/>  
      <button type='button' className='delete-button'onClick={handleDeleteOneTodo}>DEL</button>   
    </li>
  )
}
 