import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    
    const {products} = useProducts();
    const {id} = useParams();
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
      if (products.length > 0) {
          const selectedProduct = products.find((product) => product.id === id);
          setSelectedItem(selectedProduct)
      } 
    }, [products]);

    return (
        <div>
            <h2>Lista de productos</h2>
            <h3>Productos Seleccionados</h3>
            {selectedItem && selectedItem.image && (
                <img src={selectedItem.image} alt="products"/>
            )}
                <p>{selectedItem && selectedItem.name}</p>
                <p>{selectedItem && selectedItem.price}</p>
                <p>{selectedItem && selectedItem.description}</p>
                <p> Cantidad Seleccionada:  {selectedItem && selectedItem.stock}</p>
            <hr/>
            </div>
    );
};

export default ItemDetailContainer;
