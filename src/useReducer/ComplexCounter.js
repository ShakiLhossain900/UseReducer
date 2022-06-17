// redux use useReducer
import React, { useReducer } from "react";

const initailState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initailState);
  return (
    <div>
      <h1>the result is = {count.counter}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
    </div>
  );
};

export default ComplexCounter;
