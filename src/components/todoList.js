import React from 'react'
import Todo from './todo'

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
