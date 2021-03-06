import React from 'react'
import TodoItem from './todo-item.jsx'
import TodoAdd from './todo-add.jsx'

const TodoList = ({todos, dummyTodo, callbacks: {update, add, remove}}) => (
  <div className="todo list">
    <ul className="todo list">
      {
      Object.keys(todos).map(id => (
      <TodoItem
        key={id.toString()}
        todo={todos[id]}
        updateCallback={x => update(id, x)}
        removeCallback={x => remove(id)}
      />
      ))
      }
    </ul>
    <TodoAdd callback={add} />
  </div>
)

export default TodoList
