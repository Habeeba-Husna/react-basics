// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Pagination() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1); // Track the current page
//   const itemsPerPage = 10;

//   useEffect(() => {
//     axios.get(`http://localhost:3000/products?_page=${page}&_limit=${itemsPerPage}`)
//       .then(response => setProducts(response.data))
//       .catch(error => console.error(error));
//   }, [page]);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//       <button onClick={() => setPage(page - 1)} disabled={page === 1}>
//         Previous
//       </button>
//       <button onClick={() => setPage(page + 1)}>
//         Next
//       </button>
//     </div>
//   );
// }

// export default Pagination;
