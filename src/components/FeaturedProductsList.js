import { Link } from 'react-router-dom';
import CrossImage from '../assets/images/cross.svg';
import { useEffect, useState } from 'react';

const FeaturedProductsList = () => {
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
      {/* Start Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{' '}
              </p>
              <p>
                <a href="shop.html" className="btn">
                  Explore
                </a>
              </p>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            {products &&
              products.map((product) => {
                return (
                  <div
                    className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
                    key={product.id}
                  >
                    <Link to="/cart" className="product-item">
                      <img
                        src={product.photo}
                        className="img-fluid product-thumbnail"
                      />
                      <h3 className="product-title">Nordic Chair</h3>
                      <strong className="product-price">$50.00</strong>
                      <span className="icon-cross">
                        <img
                          src={CrossImage}
                          alt="cross"
                          className="img-fluid"
                        />
                      </span>
                    </Link>
                  </div>
                );
              })}
            {/* End Column 2 */}
          </div>
        </div>
      </div>
      {/* End Product Section */}
    </>
  );
};

export default FeaturedProductsList;
