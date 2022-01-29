import { useState } from "react";
import Item from "../Item/Item";

const items = [
    { id: "1", nombre: "Ron Cacique", precio: "3000"},
    { id: "2", nombre: "Carta Roja", precio: "2000"},
    { id: "3", nombre: "Cocuy de Penca", precio: "1000"},
    { id: "4", nombre: "Macondo", precio: "800"},

];

const ItemListContainer = () => {
    const [selectedItem, setSelectedItem ] =useState(null);

  return <div>
      <h1>Lista productos</h1>
      <h3>Producto Seleccionado</h3>
      <p>{selectedItem ? selectedItem.nombre : "ninguno" }</p>
      <p>{selectedItem ? selectedItem.precio : "ninguno" }</p>
      <hr/>
      {items.map(({id, nombre, precio }) => ( 
          <Item 
          key= {id} 
          id= {id} 
          nombre={nombre} 
          precio={precio} 
          setSelectedItem= {setSelectedItem}/>
      ))}
  </div>;
};

export default ItemListContainer;
