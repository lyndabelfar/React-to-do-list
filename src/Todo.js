import React, { useState } from 'react'

function Todo({todos}) {
   
    
  return (
    <>
    {todos.map((todo)=>{
        const {id, text} = todo;
        return (
            <li key={id}>
                <button className='check-btn'>&#x2713;</button>
                <p className="todo">{text}</p>
            </li>

        )
    })}
    
    </>
  )
}

export default Todo