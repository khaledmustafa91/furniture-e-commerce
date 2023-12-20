import { Link } from 'react-router-dom';
import CrossImage from '../assets/images/cross.svg';

const ProductList = ({ products, HomePage }) => {
  return (
    products &&
    products.map((product) => {
      if (HomePage) {
        return (
          <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <h2 class="mb-4 section-title">{product.title}</h2>
            <p class="mb-4">{product.description}</p>
            <p>
              <Link to="/shop" className="btn">
                Explore
              </Link>
            </p>
          </div>
        );
      } else {
        return (
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src={product.photo}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">{product.title}</h3>
              <strong className="product-price">${product.price}</strong>
              <span className="icon-cross">
                <img src={CrossImage} className="img-fluid" />
              </span>
            </a>
          </div>
        );
      }
    })
  );
};

export default ProductList;
