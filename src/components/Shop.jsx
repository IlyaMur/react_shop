import { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from "./Alert";

function Shop() {
  const { alertName, isCartShow, order, loading, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v1/shop?lang=en", {
      headers: {
        Authorization: process.env.REACT_APP_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });

    // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isCartShow && <CartList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
