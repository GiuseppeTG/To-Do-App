import React from 'react'
import Todo from './todo'
import PropTypes from 'prop-types'

export default function TodoList ({ todos, toggleTodo, editTodo, deleteOneTodo, editMode }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => {
        return <Todo
        editMode={editMode}
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteOneTodo={deleteOneTodo} />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  editTodo: PropTypes.func,
  deleteOneTodo: PropTypes.func,
  editMode: PropTypes.func
}
