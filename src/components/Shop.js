import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Hero from './Shop/Hero';

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
      <div class="untree_co-section product-section before-footer-section">
        <div class="container">
          <div class="row">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
