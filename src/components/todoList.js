import React from 'react'
import Todo from './todo'


export default function TodoList({todos, toggleTodo, editTodo}) {
  return (
    <ul className="todo-list">
      {todos.map(todo => {
        console.log(todo)
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo}/>
      })}
    </ul>
  )
}
