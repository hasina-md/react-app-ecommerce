import { useEffect, useState } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { API_ENDPOINTS } from './components/Constants';

function App() {
   const [products, setProducts] = useState([]);

   useEffect(() => {
     fetch(API_ENDPOINTS.PRODUCTS)
      .then(res => res.json())
      .then(res => {
        console.log("::API_ENDPOINTS.PRODUCTS::", res);
        setProducts(res.products);
      })
   }, [])

  return (
    <div className="App">
      <h1>PRODUCTS OF ECOMMERCE APP</h1>
      <AppRouter products={products} />
    </div>
  );
}

export default App;
