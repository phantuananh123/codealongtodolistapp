import React from 'react'

function AddTaskForm({newTask,handleInputchange,handleSubmit}) {
  return (
    <form onSubmit={handleSubmit} className="form">
            <label htmlFor="newitem">Add to the todo list</label>
            <input type="text" id="newitem" value={newTask} onChange={handleInputchange}/>
            <button type="submit">Add Item</button>
    </form>
  )
}

export default AddTaskForm
