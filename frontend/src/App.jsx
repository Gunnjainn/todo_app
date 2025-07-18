import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")            //not the right way to do it, it will give cors error-> you can not hit one backend url from frontend url unless your backend actually allows that frontend
  //   .then(async function(res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App

  
