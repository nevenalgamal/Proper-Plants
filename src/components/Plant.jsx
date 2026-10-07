// === Plant Component === 
export default  Plant;
function Plant({ plant, addToCart }) {
return (
    <div>
    <img src = {plant.image} alt= {plant.name}/>
    <p>{plant.name}</p>
    <button onClick= {() =>  addToCart(plant)}> Add to Cart </button>
    </div>
);  
}

