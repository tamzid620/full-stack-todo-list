import { useState } from "react";

const CounterWithFuncComponent = () => {

const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>
                {count}
            </button>
        </div>
    );
};

export default CounterWithFuncComponent;