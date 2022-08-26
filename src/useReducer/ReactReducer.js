// import React from 'react';

// const ReactReducer = () => {
//     const array1 = [1,2,3,4];
//     const reducer =(accumulator, currentValue) => accumulator + currentValue;

//     const number=array1.reduce(reducer,10)
//     return (
//         <div>
//             <h1>Array.prototype.reducer()</h1>
//             <h4>the array of sum is = {number}</h4>
//         </div>
//     );
// };

// export default ReactReducer;




import React from 'react';

const ReactReducer = () => {
    const numbers = [10,20,30];
 const sum =   numbers.reduce((prevValue, currentValue)=>{
      return prevValue - currentValue;
    },100)   // akta function return kore and and oi funciton er value golo array er 
                //initial value golo minues kore
    return (
        <div>
        <h1>the array result is = {sum}</h1>
        </div>
    );
};

export default ReactReducer;



// import React from 'react';

// const ReactReducer = () => {

//     const numbers =[1,2,3,4,5]
   
//     const reducer = (accumulator , currentValue) =>{
//         return accumulator - currentValue;
//     }
//       const result = numbers.reduce(reducer,20)
//     return (
//         <div>
//             <h1>the result is = { result }</h1>
//         </div>
//     );
// };

// export default ReactReducer;