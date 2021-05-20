import React,{useState, useEffect,} from 'react'
import Header from "./components/Header";
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] =useState("");
  const [todos,setTodos] =useState(initialState);
  const [editTodo,setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <div className="container1 container-fluid">
    <div className="app-wrapper">
     <div>
        <Header/>
     </div>
     <div id="formdata">
       <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
       />
     </div>
     <hr></hr>
     <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
     </div>
     
    </div>
  </div>
}

export default App;
