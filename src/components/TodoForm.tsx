import React from 'react';
import { todoContext } from "../context/TodoProvider";

const TodoForm = () => {
  const { todoTittle } = React.useContext(todoContext);
  console.log(todoTittle);

  return (
    <div>
      <h1>{todoTittle}</h1>
    </div>
  );
};

export default TodoForm;
