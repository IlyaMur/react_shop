import { useContext } from "react";
import { ShopContext } from "../context";
import { CartItem } from "./CartItem";

function CartList() {
  const { order = [], handleCartShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity, 0);

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Cart</li>
      {order.length ? (
        order.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item"> Cart is empty </li>
      )}

      <li className="collection-item active">Total price: {totalPrice} rub.</li>
      <li className="collection-item right">
        <button className="btn"> Make order </button>
      </li>

      <i className="material-icons cart-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
}

export { CartList };
