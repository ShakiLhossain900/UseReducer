// redux use useReducer akta counter object use kore
import React, { useReducer } from "react";

const initailState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initailState);
  return (
    <div>
      <h1>the result is = {count.counter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
    </div>
  );
};

export default ComplexCounter;



