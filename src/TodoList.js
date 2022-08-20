import React, { useState } from 'react'
import Todo from './Todo'
function TodoList({todos, setTodos}) {
    
  return (
    <>
      {todos.map((todo)=>{
          return (
            <ul>
              <Todo todo={todo} id={todo.id} text={todo.text} todos={todos}  setTodos={setTodos}/>          
          </ul>
          )
      })}
    </>
  )
}

export default TodoList