import React from "react";
import { todoContext } from "../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = React.useContext(todoContext);
  const [task, setTask] = React.useState("");
  
  console.log("state", state);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

const todo = {
  id: Math.random().toString().substring(2, 7),
  tittle: task,
  isCompleted: false,
}
console.log("todo", todo);


dispatch({ type: "addTodo", payload: todo });
}

  return (
    <div className="w-1/2 mx-auto mt-10">
      <h1 className="text-center">Add TODO</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="todo">TODO Title</label> <br />
        <input 
        type="text" 
        id="todo" 
        className="border border-black "
        placeholder="type something todo" 
        onBlur={(e) => setTask(e.target.value)}
        /> <br />
        <button type="submit" className="mt-5 bg-green-500 rounded-sm text-black">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
