import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { CartList } from "./CartList";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);

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
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

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
    </main>
  );
}

export { Shop };
