// import React, { useReducer } from 'react';

// // Step 1: Define the reducer function
// function reducer(state, action) {
//     switch(action.type) {
//         case 'increment':
//             return { count: state.count + 1 };
//         case 'decrement':
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }
// }

// function CountReducer() {
//     // Step 2: Initialize useReducer with reducer and initial state
//     const [state, dispatch] = useReducer(reducer, { count: 0 });

//     return (
//         <div>
//             <p>Count: {state.count}</p>
//             <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//             <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//         </div>
//     );
// }
// export default CountReducer;