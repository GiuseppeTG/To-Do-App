import React from 'react'
import Todo from './todo'


export default function TodoList({todos, toggleTodo, editTodo, deleteOneTodo}) {
  return (
    <ul className="todo-list">
      {todos.map(todo => {
        return <Todo
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteOneTodo={deleteOneTodo} />
      })}
    </ul>
  )
}
