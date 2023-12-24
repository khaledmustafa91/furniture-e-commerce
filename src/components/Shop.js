import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Hero from './Shop/Hero';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        setProducts(products);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Hero />
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            <ProductList products={products} />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Shop;
