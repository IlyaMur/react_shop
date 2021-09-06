import { Cart } from "./Cart";
import { CartItem } from "./CartItem";

function CartList(props) {
  const { order = [] } = props;

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Cart</li>
      {order.length ? (
        order.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item active"> Cart is empty </li>
      )}

      <li className="collection-item">Total price:</li>
    </ul>
  );
}

export { CartList };
