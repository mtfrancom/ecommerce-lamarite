import { createContext, useState } from "react";

 export const CartContext = createContext([]);

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
