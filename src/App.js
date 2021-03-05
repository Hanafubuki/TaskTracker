import {useState} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import About from './components/About'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Footer from './components/Footer'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id:1, 
      text: "Hi", 
      date: "today",
      done: true
    },
    {
      id:2, 
      text: "Nice", 
      date: "today",
      done: false
    },
  ])

  const addTask = (task) => {
    const id = tasks.length + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) //it will update automatically
  }

  const toggleDone = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? {...task, done: !task.done}
      : task
    ))
  }
  return (
    <Router>
      <div className="d-flex justify-content-center">
        <div className="container ">        
          <Header title="Task Tracker" onAdd={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
          <Route path='/' exact render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              <div className="mt-2">
                { tasks.length > 0 
                  ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleDone} />
                  : 'No Tasks'
                }
              </div>
            </>
          )} />
            
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
