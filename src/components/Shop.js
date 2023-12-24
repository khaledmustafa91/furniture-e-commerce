import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Hero from './Shop/Hero';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from '../utils/constants';

const Shop = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
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
