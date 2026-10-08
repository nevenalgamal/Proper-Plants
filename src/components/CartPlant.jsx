 export  default function CartPlant ( {cartPlant, increaseQuantity, decreaseQuanity}  ) {
    return(
        <div>
            <img src = {cartPlant.image} alt = {cartPlant.name}/>
            <p> {cartPlant.name}</p>
            <p> {cartPlant.quantity}</p>
            <button onClick={() => increaseQuantity(cartPlant)}>+</button>
            <button onClick={() => decreaseQuanity(cartPlant)} >-</button>
        </div>
    );
}