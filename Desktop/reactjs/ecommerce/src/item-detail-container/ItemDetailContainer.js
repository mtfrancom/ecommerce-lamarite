import { useEffect, useState, useContext } from "react";
import useProducts from "../hooks/useProducts";
import { useParams, Link } from "react-router-dom";
import ItemCounter from "../components/item-counter/ItemCounter"
import { CartContext } from "../context/CartContext";
import { Firestore } from "firebase/firestore";
import "../components/cart/cart.css";

const ItemDetailContainer = () => {

    const {products} = useProducts();
    const {id} = Firestore;
    const [stockSelected, setStockSelected] = useState(0);
    const  { stock, name } = products;
    const [selectedItem, setSelectedItem] = useState(null);
    const { addItem } = useContext(CartContext); 
    const [quantity, setQuantity] = useState(0);

    const onAdd = (counter) => {
        addItem({...selectedItem, cantidad:counter} ) 
        // console.log(selectedItem.id, selectedItem.name)
    };

    useEffect(() => {
      if (products.length > 0) {
          const selectedProduct = products.find((items) => items.id === id);
          setSelectedItem(selectedProduct)
      } 
    }, [products]);

    const handleAddToCart = () => {
        addItem({
          item: selectedItem,
          quantity,
        });
    };

    return (
        <div>
            <h2>Lista de productos</h2>
            <h3>Productos Seleccionados</h3>
            {selectedItem && selectedItem.image && (
                <img className="cartItemInfo" src={selectedItem.image} alt="products"/>
            )}
                <p>{selectedItem && selectedItem.name}</p>
                <p>{selectedItem && selectedItem.price}</p>
                <p>{selectedItem && selectedItem.description}</p>
                <p> Cantidad Seleccionada:  {selectedItem && selectedItem.stock}</p>
            <hr/>
            <ItemCounter stock={selectedItem && selectedItem.stock} setStockSelected={setStockSelected} onAdd={onAdd} />
            <Link to={`/cart/`} >Carrito</Link>
            </div>
    );
};

export default ItemDetailContainer;
