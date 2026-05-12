// import CounterWithClass from "./components/CounterWithClassComponent.js";
import TodoForm from "./components/todoForm.js";
import TodoList from "./components/TodoList.js";
import TodoProvider from "./context/TodoProvider.js";

function App() {
  return (
    <TodoProvider>
      <div>
        {/* <CounterWithClass /> */}
        <TodoForm />
        <TodoList/>
      </div>
    </TodoProvider>
  );
}

export default App;
