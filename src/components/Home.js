import { Link } from 'react-router-dom';
import couchImage from '../assets/images/couch.png';
import CrossImage from '../assets/images/cross.svg';

import { useEffect, useState } from 'react';
import Help from './Home/Help';
import WhyChooseUs from './Home/WhyChooseUs';
import Testimonials from './Home/Testimonials';
import MainHero from './MainHero';
import FeaturedProductsList from './FeaturedProductsList';
import FeaturedBlogs from './Home/FeaturedBlogs';
import ProductList from './ProductList';
const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        const featuredProducts = products.filter(
          (product) => product.featured === true
        );
        setProducts(featuredProducts);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <MainHero
        title={['Modern Interior ', <span clsas="d-block">Design Studio</span>]}
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique."
      />

      <FeaturedProductsList />
      <WhyChooseUs />
      <Help />
      {/* Start Popular Product */}
      <div className="popular-product">
        <div className="container">
          <div className="row">
            <ProductList products={products} HomePage={true} />
          </div>
        </div>
      </div>
      {/* End Popular Product */}
      {/* <Testimonials /> */}
      <FeaturedBlogs />
    </>
  );
};

export default Home;
