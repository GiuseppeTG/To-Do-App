import React from 'react'
import { useRef } from 'react'

export default function Todo({ todo, toggleTodo, editTodo }) {

  const editDescription = useRef()

  function handleCheckTodo() {
    toggleTodo(todo.id)
  }

  function handleEditTodo() {
    editTodo(todo.id, editDescription.current.value)
  }

  return (
    <li className='todo'>
      <input className='checkbox' type="checkbox" checked={todo.completed} onChange={handleCheckTodo} />
      <form action="#">
        <input className='description todo-text' ref={editDescription} type="text" placeholder={todo.description} onSubmit={handleEditTodo} onChange={handleEditTodo}/>
      </form>
      
    </li>
  )
}
 