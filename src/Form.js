import React from 'react'

function Form ({handleSubmit,value ,handleInputChange}) {
  return (
    <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        placeholder='Create a new todo...' 
        className='todo-input' 
        value={value}
        onChange={handleInputChange}
        />
      </form>
  )
}

export default Form;