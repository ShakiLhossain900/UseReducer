// // redux use useReducer akta counter object use kore
// import React, { useReducer } from "react";

// const initailState = {
//   counter: 0,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + action.value };
//     case "decrement":
//       return { counter: state.counter - action.value };
//     default:
//       return state;
//   }
// };

// const ComplexCounter = () => {
//   const [count, dispatch] = useReducer(reducer, initailState);
//   return (
//     <div>
//       <h1>the result is = {count.counter}</h1>
//       <button onClick={() => dispatch({ type: "increment", value: 1 })}>
//         Increment by 1
//       </button>
//       <button onClick={() => dispatch({ type: "increment", value: 5 })}>
//         Increment by 5
//       </button>
//       <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
//         Decrement by 1
//       </button>
//       <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
//         Decrement by 5
//       </button>
//     </div>
//   );
// };

// export default ComplexCounter;

// redux use useReducer 2 ta counter object use kore

// import React, { useReducer } from "react";

// const initailState = {
//   counter: 0,
//   counter2: 0,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {...state, counter: state.counter + action.value };
//     case "decrement":
//       return {...state, counter: state.counter - action.value };
//       case "increment2":
//         return { ...state, counter2: state.counter2 + action.value };
//       case "decrement2":
//         return {...state, counter2: state.counter2 - action.value };  
//     default:
//       return state;
//   }
// };

// const ComplexCounter = () => {
//   const [count, dispatch] = useReducer(reducer, initailState);
//   return (
//     <React.Fragment>
//       <div>
//         <h2>the result is = {count.counter}</h2>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "increment",
//               value: 1,
//             })
//           }
//         >
//           increment by 1
//         </button>
//         <button
//           onClick={() =>
//             dispatch({
//               type: "decrement",
//               value: 2,
//             })
//           }
//         >
//           decrement by 2
//         </button>
//       </div>
//       <div>
//       {/* here the counter 2 code */}

//       <h2>the result is = {count.counter2}</h2>
//       <button
//         onClick={() =>
//           dispatch({
//             type: "increment2",
//             value: 3,
//           })
//         }
//       >
//         increment by 3
//       </button>
//       <button
//         onClick={() =>
//           dispatch({
//             type: "decrement2",
//             value: 4,
//           })
//         }
//       >
//         decrement by 4
//       </button>
//     </div>
//     </React.Fragment>
//   );
// };

// export default ComplexCounter;
