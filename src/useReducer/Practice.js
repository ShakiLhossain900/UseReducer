// //first program of React readucer
// import React from "react";

// const Practice = () => {
//   const arr = [1, 2, 3, 4];
//   const reducer = (accumulator, currentValue) => {
//     const theValueIwantToReturn = accumulator + currentValue;
//     return theValueIwantToReturn;
//   };

//   const number = arr.reduce(reducer, 10);

//   return (
//     <div>
//       <h2>the sum of arry is = {number}</h2>
//     </div>
//   );
// };

// export default Practice;

// import React,{ useReducer } from 'react';

// const initailState = 0;

// const reducerFunction = (state, action)=>{
//       switch(action){
//         case 'increment':
//             return state+1;
//         case 'decrement':
//             return state-1;
//         default:
//             return state;
//       }
// }

// const Practice = () => {
//     const [count,dispatch] =useReducer(reducerFunction,5);
//     return (
//         <div>
//             <h1>the resut is = {count}</h1>
//             <button onClick={()=>dispatch('increment')} >Increment</button>
//             <button onClick={()=>dispatch('decrement')} >decrement</button>
//         </div>
//     );
// };

// export default Practice;

//useReducer akta object use kore

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

const Practice = () => {
    const [count, dispatch] = useReducer(reducer, initailState);

  return (
    <div>
      <h2>the result is = {count}</h2>

      <button onClick={() => dispatch({ type: "increment", value: 2 })}>
        increment by 2
      </button>
      <button onclick={() => dispatch({ type: "decrement", value: 2 })}>
        decrement by 2
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

export default Practice;
