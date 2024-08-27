import React, { useEffect } from 'react';

function Product() {
  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.restful-api.dev/objects')
      .then((response) => response.json())
      .then((data) => {
        // Extract and log the names
        data.forEach((item) => {
          console.log(item.name);
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <p>Check the console for the names fetched from the API.</p>
    </div>
  );
}

export default Product;
