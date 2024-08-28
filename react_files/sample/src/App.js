import React, { useState } from 'react';
import Product from './Product';
import UserList from './Userlist';


function App() {
  const [currentPage, setCurrentPage] = useState('product');

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('Product')}>Product Page</button>
        <button onClick={() => setCurrentPage('Userlist')}>User List Page</button>
      </nav>

      <div>
        {currentPage === 'Product' && <Product />}
        {currentPage === 'Userlist' && <UserList />}
      </div>
    </div>
  );
}

export default App;
