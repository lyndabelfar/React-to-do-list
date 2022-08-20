import React from 'react'

function Todo({todo, setTodos, todos, id , text}) {
    const handleCompleted =()=>{
        setTodos(todos.map((item)=>{
            console.log(item)
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }

            }
            return item;
  
        }))
    }
  return (
    <div className='list-div'>
        <button className={`${todo.completed? 'check-btn completed-btn': 'check-btn'}`} onClick={handleCompleted}>&#x2713;</button>
        <li key={id}><p className={`${todo.completed? 'completed-p list': 'list'}`}>{text}</p></li>
    </div>

  )
}

export default Todo