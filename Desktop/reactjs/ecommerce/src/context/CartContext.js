import { createContext, useState } from "react";
import ItemListContainer from "../components/item-list-container/ItemListContainer";
import Item from "../components/Item/Item";

export const CartContext = createContext();

export const CartProvider = ({childen}) => {
    const [items, setItems] = useState([]);

    const addItem = (currentItem) => {
        if (items.some(({item}) => item.id === currentItem.item.id) ) return;
        setItems([...items, currentItem]);
    }

    return (
        <CartContext.Provider value={{items,addItem}}>{childen}</CartContext.Provider>
    );
}
