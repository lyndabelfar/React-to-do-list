import {useState} from 'react'
import Form from './Form'
import TodoList from './TodoList'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])


  const removeItem=(id)=>{
    setTodos(todos.filter((todo)=>todo.id !== id))
  }
  

  const handleSubmit =(e)=>{
    e.preventDefault();
    const newItem = {id: new Date().getTime().toString(), text:value, completed:false}
    setTodos([...todos, newItem])
    setValue('')

  }


  const handleInputChange =(e)=>{
    setValue(e.target.value)
  }


  return (
    <div className="container">
      
      <div className="container-header">
        <h1 className="logo">TODO</h1>
        <button className="bg-theme-btn">Btn</button>
      </div>
      <Form handleSubmit={handleSubmit}  value={value} handleInputChange={handleInputChange}/>      
      
      <TodoList todos={todos}  setTodos={setTodos}/>
      
        
      
      <div className="bottom-btns">
        
        <div className="items-left">{todos.length} items left</div>
        
        <div className="main-btns">
          <button className="all">All</button>
          <button className="active">Active</button>
          <button className="completed">Completed</button>
        </div>

        <button className="clear-completed-btn">Clear completed</button>
      
      </div>
    
    </div>
  );
}

export default App;
