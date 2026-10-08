// === Plant Component ===
export default Plant;
function Plant({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <p>{plant.name}</p>
      <button className="add-cart-but" onClick={() => addToCart(plant)}>
        {" "}
        Add to Cart{" "}
      </button>
    </div>
  );
}
