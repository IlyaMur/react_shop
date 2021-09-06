import { Cart } from "./Cart";
import { CartItem } from "./CartItem";

function CartList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity, 0);

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Cart</li>
      {order.length ? (
        order.map((item) => (
          <CartItem key={item.id} {...item} removeFromCart={removeFromCart} />
        ))
      ) : (
        <li className="collection-item"> Cart is empty </li>
      )}

      <li className="collection-item active">Total price: {totalPrice} rub.</li>
      <i className="material-icons cart-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
}

export { CartList };
