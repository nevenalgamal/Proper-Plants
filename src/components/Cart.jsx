import CartPlant from "./CartPlant";
export default function Cart({ cart, increaseQuantity, decreaseQuantity }) {
  return (
    <div>
      {cart.map((cartplant) => (
        <CartPlant
          key={cartplant.id}
          cartplant={cartplant}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </div>
  );
}
