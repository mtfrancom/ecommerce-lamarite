import React, { useEffect, useState} from 'react';

const ItemCounter = ( {stock, setStockSelected, onAdd } ) => {

    const [counter, setCounter] = useState(0);

    useEffect (() => {
      setStockSelected(counter);
    }, [counter])
   
    const menosCounter = () => {
        if (counter <= 0) return;
        setCounter(counter -1);
    };

    const masCounter = () => {
        if (counter >= stock) return;
        setCounter(counter +1);
    }
  return (
    <div>
    <button onClick={menosCounter}>-</button>
    <span>{counter}</span>
    <button onClick={masCounter}>+</button>
    <button onClick={() => onAdd(counter) }>Agregar al carrito</button>
    </div>
    
  ); 
};

export default ItemCounter;
