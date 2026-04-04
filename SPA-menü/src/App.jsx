import { useState } from 'react'
import ToDoApp from './todo/todoapp';
import Bill from './bill/AApp';
import './App.css'


function App() {
  const [page, setPage] = useState(true);

  return (
    <>
    <header>
        <h1>React SPA megvalósítás</h1>
    </header>
    <main>
    <button onClick={( )=>{setPage(true);}} class="todo">ToDo</button>
    <button onClick={( )=>{setPage(false);}} class="bill">Bill</button>
    {
      page && <ToDoApp/>
    }
    {
      !page && <Bill/>
    }
    </main>
    <footer>Nyikos Diána - CU4KRP || Makai Andor - AKYY5Z</footer>
    </>
  )
}

export default App
