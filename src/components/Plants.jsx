import Plant from "./Plant"
// ==== Plants Component ===
 export default function Plants ( {plants, addToCart}) {
 return(
    //  return = JSX Start to represents what the component displays
   <div>
    {plants.map((plant) => (
    <Plant  
    key={plant.id}
    plant = {plant}
    addToCart ={addToCart}
    />
    ))}
   </div>
 );
}