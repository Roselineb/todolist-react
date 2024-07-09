import { useState } from "react"


function ToDoComponent() {
  const [todos,setTodos]=useState([]);
  const [inputValue,setInputValue]=useState('');
  function handlechange(e){
    setInputValue(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  }
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" value={inputValue} onChange={handlechange} />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul className="list">
        {
          todos.map((todos,index)=>(
            <li  key={todos}>{todos}
            <button  onClick={()=>handleDelete(index)}>Delect</button>

            </li>
          ))
        }
      </ul>
    </div>
    
    </>
  )
}

export default ToDoComponent