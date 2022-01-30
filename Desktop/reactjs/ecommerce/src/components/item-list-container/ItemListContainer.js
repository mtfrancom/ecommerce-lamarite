import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { productosApi } from "../../helpers/promises";
import { productos } from "../../data/producto";

const ItemListContainer = () => {
    const [selectedItem, setSelectedItem ] =useState(null);
    const [productos, setProductos ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() =>{
        getProductos()
    },[]);

  const getProductos = async () => {
      try {
          const result = await productosApi;
          setProductos(result);
    
      } catch(error) {
          console.log({error});
      } finally {
          setLoading(false);
          console.log("finaliza el consumo de la api")
      }

  }


if( loading) {
    return <h2>Cargando</h2>;
}

 return (
     <div>
         <h3>Productos Seleccionados</h3>
         <ul>
             <li>
                {selectedItem && selectedItem.nombre}
             </li>
             <li>
                {selectedItem && selectedItem.description}
             </li>
             <li>
                Cantidad Seleccionada
                {selectedItem && selectedItem.stock}
             </li>
         </ul>
         <hr/>
         {productos.map((productos)=> (
             <Item key={productos.id} {...productos} setSelectedItem = {setSelectedItem} />
         ))}
     </div>
 );
};

export default ItemListContainer;
