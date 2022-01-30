import { useState } from "react";
import ItemCounter from "../item-counter/ItemCounter"


const Item = ({nombre, precio, id, setSelectedItem, stock, description}) => {

    const [stockSelected, setStockSelected] = useState(0);
    const selecItem = () => setSelectedItem({nombre, precio, id, stock:stockSelected, description });

  return (
  <div>
      <h2>Nombre del producto: {nombre} </h2>
      <h2>Precio del producto: {precio}</h2>
      <h2>Descripcion: {description} </h2>
      <h2>Stock: {stock} </h2>
      <ItemCounter stock={stock} setStockSelected={setSelectedItem} />
      <button onClick={selecItem}>Seleccionar Producto </button>
      <hr/>
  </div>

  );
};

export default Item;
