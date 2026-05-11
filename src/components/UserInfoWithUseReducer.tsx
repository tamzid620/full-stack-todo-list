// user = {name = "Somthing", age = 20, hobbies = ["hobby1", "hobby2"] }

import { useReducer, type ChangeEvent } from "react";

const initialState = { name: "", age: "0", hobbies: [] as string[] };
type action = {
  type: string;
  payload: string;
};

const reducer = (currentState: typeof initialState, action: action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      break;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        type="number"
        placeholder="Age"
      />
      <input
        onChange={(e) =>
          dispatch({ type: "addHobbies", payload: e.target.value })
        }
        type="text"
        placeholder="Hobbies (comma separated)"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInfoWithUseReducer;
