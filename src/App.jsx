import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "4/10/2023",
    },
    {
      name: "Go to college",
      duedate: "4/10/2023",
    },
    {
      name: "Like this",
      duedate: "rightnow",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App
