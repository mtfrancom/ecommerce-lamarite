import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../firebase/config";

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

            const catalogo = []
            const result = await getDocs(collection(db, "items"))
            result.forEach((doc) => {
                catalogo.push(doc.data())
                console.log(doc.data())
            })
            setProducts(catalogo)
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
