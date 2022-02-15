import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemList from "./ItemList"
import Item from "../Item/Item";

const ItemListContainer = () => {

    const { idCategory } = useParams();
    const { products, loading } = useProducts();


    const filterProducts = idCategory ? products.filter(({ category }) => category === idCategory) : products

 return (
     <div>
         <h2>Lista de productos</h2>
         {
        !loading ? <ItemList products={filterProducts}/> : <h1>cargando productos...</h1>
      }
    
     </div>
 );
};

export default ItemListContainer;
