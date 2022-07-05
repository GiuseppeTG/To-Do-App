import React, { useRef } from 'react'
import { TbTrash } from 'react-icons/tb'
import PropTypes from 'prop-types'

export default function Todo ({ todo, toggleTodo, editTodo, deleteOneTodo, editMode }) {
  const todoContainer = useRef()
  const editDescription = useRef()

  function handleCheckTodo () {
    toggleTodo(todo.id)
  }

  function handleEditTodo () {
    editTodo(todo.id, editDescription.current.value, todo)
  }

  function handleDeleteOneTodo () {
    deleteOneTodo(todo.id, todoContainer)
  }

  function handleQuitEdit () {
    editMode(todo.id)
  }

  return (
    <li className={`todo ${todo.editMode ? 'edit-mode-on' : null}`} ref={todoContainer} >

      <input
      className='checkbox'
      type="checkbox"
      checked={todo.completed}
      onChange={handleCheckTodo} />

      <input
      className={`description todo-text ${todo.completed ? 'completed-todo' : null}`}
      type="text"
      ref={editDescription}
      placeholder={todo.description}
      value={todo.description}
      onBlur={handleQuitEdit}
      onFocus={handleEditTodo}
      onChange={handleEditTodo}/>
      <button
      type='button'
      className='delete-button'
      onClick={handleDeleteOneTodo}
      >
      <TbTrash />
      </button>

    </li>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  toggleTodo: PropTypes.func,
  editTodo: PropTypes.func,
  deleteOneTodo: PropTypes.func,
  editMode: PropTypes.func
}
