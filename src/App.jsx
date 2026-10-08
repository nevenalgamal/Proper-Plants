import { useState } from "react";
import PLANTS from "./data";
import Plants from "./components/Plants";
import Cart from "./components/Cart";
export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Plants plants={PLANTS} addToCart={() => {}} />
      <Cart
        cart={cart}
        increaseQuantity={() => {}}
        decreaseQuantity={() => {}}
      />
    </>
  );
}
