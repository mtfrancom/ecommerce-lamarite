import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./cart.css";

const CartWidge = () => {
    const {cart, totalCart} = useContext(CartContext)

  return <div>                
            <Link to="/cart" className={cart.length > 0 ? 'nav_cart nav_cart--show' : 'nav_cart'}>
              <FontAwesomeIcon icon={faShoppingCart} className="nav_carrito"/>                    
              <span>{Number(cart.reduce((acc, el) => acc + el.quantity, 0))}</span>
              <p className='cartW-precio'>${totalCart()}</p>
            </Link>
         </div>
}

export default CartWidge