import "./App.css";
import Todo from "./components/ToDo/Todo";

function App() {
  return (
    <div className="App">
      <Todo appName="Todo" styleClass="todo-container" />
    </div>
  );
}

export default App;
