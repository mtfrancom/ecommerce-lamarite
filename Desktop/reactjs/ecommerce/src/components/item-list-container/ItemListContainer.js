import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemList from "./ItemList"
import Item from "../Item/Item";

const ItemListContainer = () => {

    const { id } = useParams();
    const {getProducts, products } = useProducts();


    useEffect (() =>{
        getProducts(); 
    }, []);

    const filterProducts = products.filter(({category}) => category === id)

 return (
     <div>
         <h2>Lista de productos</h2>
        
         {!id &&
         products.map((product)=> {

             if (product.id === "1") {
                console.log(product);
             } 
         return (
            <Item key={product.id} 
            {...product} 
           />
         );
    })}
    {id &&
    filterProducts.map((product)=> {

        if (product.id === "1") {
            console.log(product);
        } 
    return (
       <Item key={product.id} 
       {...product} 
        />
        );
    })} 
    
     </div>
 );
};

export default ItemListContainer;
