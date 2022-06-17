// // basic useReducer funciton 
// import React,{useReducer} from 'react';

// const initailState =0;
// const reducer =(state, action)=>{
//     switch(action){
//         case 'increment':
//             return state+1;
//         case 'decrement':
//             return state-1;
//         default:
//             return state;
//     }
// }

// const Counter = () => {
//    const [count , dispatch]= useReducer(reducer, initailState);
//     return (
//         <div>
//             <h1>the result is  {count}</h1>
//             <button onClick={()=>dispatch('increment')}>increment</button>
//             <button onClick={()=>dispatch('decrement')}>
//             decrement</button>

//         </div>
//     );
// };

// export default Counter;