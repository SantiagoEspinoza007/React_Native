import { useCounter } from "../hooks/useCounter";

const Counter = () => {
    
    const {count, increaseBy} = useCounter()

  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>
      <div>
        <div>
          <button
            onClick={() => increaseBy(+1)}
            className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-600"
          >
            +1
          </button>
        </div>
        <div>
          <button
            onClick={() => increaseBy(-1)}
            className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-600"
          >
            -1
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
