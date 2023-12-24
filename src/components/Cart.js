import { useContext } from 'react';
import MainHero from './MainHero';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const total_price = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const handleChangeQuantity = (id, value) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity = value;
      }
      return item;
    });
    console.log(newCart, 'NewCart');
    setCart(newCart);
  };

  const handlePlusButton = (id) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.quantity = parseInt(item.quantity) + 1;
        }
        return item;
      })
    );
  };

  const handleMinusButton = (id) => {
    const newCart = cart.map((item) => {
      if (item.quantity > 1 && item.id === id) {
        item.quantity = parseInt(item.quantity) - 1;
      }
      return item;
    });
    setCart(newCart);
  };
  return (
    <>
      <MainHero title="Cart" />
      <div className="untree_co-section before-footer-section">
        {cart.length > 0 ? (
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart &&
                        cart.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td className="product-thumbnail">
                                <img
                                  src={item.photo}
                                  alt={`product-${item.id}`}
                                  className="img-fluid"
                                />
                              </td>
                              <td className="product-name">
                                <h2 className="h5 text-black">{item.title}</h2>
                              </td>
                              <td>${item.price}</td>
                              <td>
                                <div
                                  className="input-group mb-3 d-flex align-items-center quantity-container"
                                  style={{ maxWidth: 120 }}
                                >
                                  <div className="input-group-prepend">
                                    <button
                                      className="btn btn-outline-black decrease"
                                      type="button"
                                      onClick={() => handleMinusButton(item.id)}
                                    >
                                      −
                                    </button>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control text-center quantity-amount"
                                    value={item.quantity}
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                    min="0"
                                    onChange={(e) =>
                                      handleChangeQuantity(
                                        item.id,
                                        e.target.value
                                      )
                                    }
                                  />
                                  <div className="input-group-append">
                                    <button
                                      className="btn btn-outline-black increase"
                                      type="button"
                                      onClick={() => handlePlusButton(item.id)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td>${item.price * item.quantity}</td>
                              <td>
                                <Link
                                  onClick={() => {
                                    setCart(
                                      cart.filter((a) => a.id !== item.id)
                                    );
                                  }}
                                  className="btn btn-black btn-sm"
                                >
                                  X
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <div className="col-md-6">
                    <Link
                      to="/shop"
                      className="btn btn-outline-black btn-sm btn-block"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">
                          Cart Totals
                        </h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">{total_price}</strong>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">{total_price}</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Link
                          to="/checkout"
                          className="btn btn-black btn-lg py-3 btn-block"
                        >
                          Proceed To Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="text-center" style={{ 'font-size': '20px' }}>
            No items added
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
