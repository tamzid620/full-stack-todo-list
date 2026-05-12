import React from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const todoContext = React.createContext < { state: Tdo[]; dispatch: React.Dispatch<Taction> } | undefined > (undefined);

type todoProviderProps = {
    children: React.ReactNode;
};

type Tdo = {
    id: string
    tittle: string;
    isCompleted: boolean;
};

type Taction = {
    type: string;
    payload: Tdo;
};

const initialState: Tdo[] = [];

const reducer = (currentState: Tdo[], action: Taction) => {
    switch (action.type) {
        case "addTodo":
            return [...currentState, action.payload];
        case "taskComplete":
            return currentState.map((item) => 
              item.id === action.payload.id ?
                     { ...item, isCompleted: !item.isCompleted }
                               : item
            );
        default:
            return currentState;
    }
};

const TodoProvider = ({ children }: todoProviderProps) => {

const [state, dispatch] = React.useReducer(reducer,initialState);

    const values = {
        state,
        dispatch,
    };
    
    return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default TodoProvider;
