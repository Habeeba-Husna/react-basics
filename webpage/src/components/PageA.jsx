// // PageA.js
// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { DataContext } from './Context';

// function PageA() {
//     const { setData } = useContext(DataContext);
//     const [input, setInput] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         setData(input); // Update the context data
//         navigate('/pageB'); // Navigate to Page B
//     };

//     return (
//         <div>
//             <h2>Page A</h2>
//             <input
//                 type="text"
//                 placeholder="Enter something..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <button onClick={handleSubmit}>Go to Page B</button>
//         </div>
//     );
// }

// export default PageA;
