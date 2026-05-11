// import CounterWithClass from "./components/CounterWithClassComponent.js";
import TodoForm from "./components/todoForm.js";
import TodoProvider from "./context/TodoProvider.js";

function App() {
  return (
    <TodoProvider>
      <div>
        {/* <CounterWithClass /> */}
        <TodoForm />
      </div>
    </TodoProvider>
  );
}

export default App;
