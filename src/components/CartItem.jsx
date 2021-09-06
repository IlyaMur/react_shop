function CartItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromCart = Function.prototype,
    decreaseAmount = Function.prototype,
    increaseAmount = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name}
      <i
        className="material-icons cart-quantity"
        onClick={() => decreaseAmount(id)}
      >
        remove
      </i>
      x{quantity}
      <i
        className="material-icons cart-quantity"
        onClick={() => increaseAmount(id)}
      >
        add
      </i>
      = {price * quantity} rub.
      <span className="secondary-content" onClick={() => removeFromCart(id)}>
        <i className="material-icons cart-delete">close</i>
      </span>
    </li>
  );
}

export { CartItem };
