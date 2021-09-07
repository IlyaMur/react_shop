import { useState, useEffect } from "react";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";
import { Alert } from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const addToCart = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: ++orderItem.quantity,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const decreaseAmount = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: --item.quantity > 0 ? --item.quantity : 0,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setOrder(newOrder);
  };
  const increaseAmount = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: ++item.quantity,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setOrder(newOrder);
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  useEffect(function getGoods() {
    fetch("https://fortniteapi.io/v1/shop?lang=en", {
      headers: {
        Authorization: process.env.REACT_APP_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <main className="container content">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          decreaseAmount={decreaseAmount}
          increaseAmount={increaseAmount}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
