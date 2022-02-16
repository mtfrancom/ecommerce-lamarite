import { useState } from "react";
import  { Link} from "react-router-dom"
import ItemCounter from "../item-counter/ItemCounter"

const Item = ({p}) => {

  const [stockSelected, setStockSelected] = useState(0);
  const {id, name, price, image, description, stock = 10} = p;
  
  return (
  <div>
      <h2>Nombre del producto: {name} </h2>
      <h2>Precio del producto: {price}</h2>
      <h2>Descripción: {description} </h2>
      <div><img src={image} alt="image of product"/></div>
      <h2>Stock: {stock} </h2>
      <ItemCounter stock={stock} setStockSelected={setStockSelected} />
      <Link to={`/item/${id}`}>Seleccionar Producto </Link>
      <hr/>
  </div>

  );
};

export default Item;
