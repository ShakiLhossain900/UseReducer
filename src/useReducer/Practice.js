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





import React,{ useReducer } from 'react';

const initailState = 0;

const reducerFunction = (state, action)=>{
      switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
      }
}


const Practice = () => {
    const [count,dispatch] =useReducer(reducerFunction,5);
    return (
        <div>
            <h1>the resut is = {count}</h1>
            <button onClick={()=>dispatch('increment')} >Increment</button> 
            <button onClick={()=>dispatch('decrement')} >decrement</button>
        </div>
    );
};

export default Practice;