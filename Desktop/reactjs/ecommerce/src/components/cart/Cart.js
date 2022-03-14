
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cart.css";
import {CartContext} from '../../context/CartContext';

const Cart = () => {
  const [loading, setLoading] = useState(true)
  const {cart, removeItem, clear, totalCart} = useContext(CartContext)
  
  useEffect(() => {
    setTimeout(()=>{
       setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className=" container pb-5">
       <>
         {!cart.length ? <div>
                       <h2>Tu carrito esta vacio</h2>
                              <Link to='/'>
                                 <Button>Ir al Catalogo </Button>
                               </Link>
                         </div> 
                          :
                    <>
                       <h2 className="container my-2">Tu compra</h2>
                       
                      {cart.map(( itemCart ) => (
                       
                        <div key={itemCart.item.id} className="container my-2">
                          <h5 className="container my-2"> {itemCart.item.name}</h5>
                          <div className="row d-flex align-items-center"> 
                            <div className="imagenProducto col-md-4 "><img className="imagen" src={itemCart.item.image} alt=  {itemCart.item.name}/></div>
                            <h2 className="fs-4 my-2 col-md-8">Descripción: {itemCart.item.description} </h2>
                            <h3> ${itemCart.item.price}</h3>
                          </div>      
                            <Button className="mx-2" variant="outline-danger" size="lg" onClick={()=> removeItem(itemCart.item.id)}> Eliminar del carrito <FontAwesomeIcon icon={faTrash}/></Button>  
                        </div>
                    

                      ))}
                        <div>
                          <p>Total compra: ${totalCart().toFixed(2)}</p>
                        </div>
                        <div className=" container mx-auto">
                
                          <Button className="mx-4"  variant="warning"  onClick={()=> clear()}>Vaciar carrito</Button>
                          
                        
                            <Link className="text-decoration-none"  to={'/Checkout'}>
                               <Button variant="success">Finalizar compra</Button>      
                            </Link>
                                                         
                        </div>
                    </>
             }
          </>
      
      
      
      </div>
  )
  
};

export default Cart;