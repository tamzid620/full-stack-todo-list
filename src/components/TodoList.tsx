import React from 'react';
import { todoContext } from '../context/TodoProvider';

type TTodo = {  
    id: string;
    tittle: string;
    isCompleted: boolean;
}

const TodoList = () => {

const { state , dispatch} = React.useContext(todoContext);  


    return (
        <div>
            {
                state.map((item: TTodo) => < p
                 key={item.id}
                 className={` cursor-pointer ${item.isCompleted ? " line-through" : ""}`}
                 onClick={()=> dispatch({type: "taskComplete", payload: item.id})}
                >{item.tittle}</p>)
            }
        </div>
    );
};

export default TodoList;