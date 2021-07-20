import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Parents meeting at school",
      day: "feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "groceries shopping",
      day: "feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //add task
  const addTask = (task) => {
    console.log(task);
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
