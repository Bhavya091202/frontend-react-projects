import { Header } from "./components/Header";
import {Tasks} from "./components/Tasks";
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(saved);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTasks(taskTitle) {
    setTasksAndSave([
      ...tasks, 
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function deleteTaskById(taskId) {
    const newTask = tasks.filter(task => task.id!== taskId);
    setTasksAndSave(newTask);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
         ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }
  return (
    <>
      <Header onAddTasks={addTasks} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

export default App
