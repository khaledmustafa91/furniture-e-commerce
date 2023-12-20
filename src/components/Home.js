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
            {products &&
              products.map((product) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                    <div className="product-item-sm d-flex">
                      <div className="thumbnail">
                        <img
                          src={product.photo}
                          alt="Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="pt-3">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>
                          <Link to={`/products/${product.id}`}>Read More</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
