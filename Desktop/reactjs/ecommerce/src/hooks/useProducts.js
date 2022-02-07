import { useEffect, useState } from "react";
import {productsApi} from "../helpers/promises";



const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getProducts() 
      .then(()=> setLoading(false)
      )
    }, []);
    
    const getProducts = async () => {
        try {
            const result = await productsApi
            setProducts(result)
        } catch (error) {
            console.log({error})
            
        } finally {
            console.log("Fin de consumo de Api")
        }
    }

  return {
      getProducts,
      products,
      loading
  };
};

export default useProducts;
