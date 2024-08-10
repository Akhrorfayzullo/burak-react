import { CardItem } from "../../lib/types/search";
import { useState } from "react";


const UseBasket = () => {
    const cartJson: string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];
  const [cartItems, setCartItems] = useState<CardItem[]>(currentCart);

  // Handlers

  const onAdd = (input: CardItem) => {
    console.log("working.....");
    const exist: any = cartItems.find(
      (item: CardItem) => item._id === input._id
    );
    if (exist) {
      console.log("exist");
      const cartUpdate = cartItems.map((item: CardItem) => {
        return item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item;
      });
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
      console.log("not exist");
      const cartUpdate = [...cartItems, { ...input }];
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };
  const onRemove = (input: CardItem) => {
    const exist: any = cartItems.find(
        (item: CardItem) => item._id === input._id
      );
      if (exist.quantity === 1) {
        const cartUpdate = cartItems.filter(
            (item: CardItem) => item._id !== input._id 
        );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
      } else {
        const cartUpdate = cartItems.map((item: CardItem) => 
            item._id === input._id 
                ? {...exist, quantity: exist.quantity - 1}
                : item
        );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
      }

  };

  const onDelete = (input: CardItem) => {

    const cartUpdate = cartItems.filter(
        (item: CardItem) => item._id !== input._id 
    );
    setCartItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cartData")

  }

  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  }

}

export default UseBasket