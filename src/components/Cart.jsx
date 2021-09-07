import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const { order, handleCartShow = Function.prototype } =
    useContext(ShopContext);

  return (
    <div className="cart blue darken-4 white-text" onClick={handleCartShow}>
      <i className="material-icons">shopping_cart</i>
      {order.length ? (
        <span className="cart-quantity">{order.length} </span>
      ) : null}
    </div>
  );
}

export { Cart };
