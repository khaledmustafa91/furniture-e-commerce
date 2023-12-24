import { Link } from 'react-router-dom';
import CrossImage from '../assets/images/cross.svg';
import { useContext } from 'react';
import { CartContext } from '../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = ({ products, HomePage }) => {
  const { cart, setCart } = useContext(CartContext);

  const MergeOldItems = (product_id) => {
    return cart.map((item) => {
      if (item.id === product_id) {
        item.quantity += 1;
      }
      return item;
    });
  };

  const handleAddItem = (product_id) => {
    fetch(`http://localhost:4000/products/${product_id}`)
      .then((res) => res.json())
      .then((data) => {
        const old_item = cart.find((item) => item.id === product_id);
        let newCart = cart;
        if (old_item) {
          newCart = MergeOldItems(product_id);
        } else {
          data['quantity'] = 1;
          cart.push(data);
        }
        setCart(newCart);
        ToastAddedSuccessfully();
      });
  };

  const ToastAddedSuccessfully = () => {
    toast.success('Successfully added to your cart', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    products &&
    products.map((product) => {
      if (HomePage) {
        return (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0"
            key={product.id}
          >
            <h2 className="mb-4 section-title">{product.title}</h2>
            <p className="mb-4">{product.description}</p>
            <p>
              <Link to="/shop" className="btn">
                Explore
              </Link>
            </p>
          </div>
        );
      } else {
        return (
          <div className="col-12 col-md-4 col-lg-3 mb-5" key={product.id}>
            <Link
              onClick={() => handleAddItem(product.id)}
              className="product-item"
              to=""
            >
              <img
                src={product.photo}
                alt={`product-${product.id}`}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">{product.title}</h3>
              <strong className="product-price">${product.price}</strong>
              <span className="icon-cross">
                <img src={CrossImage} alt="cross" className="img-fluid" />
              </span>
            </Link>
          </div>
        );
      }
    })
  );
};

export default ProductList;
