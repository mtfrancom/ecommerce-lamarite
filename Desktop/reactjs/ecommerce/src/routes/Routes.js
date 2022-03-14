import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemListContainer from '../components/item-list-container/ItemListContainer';
import NotFound from '../components/not-found/NotFound';
import ItemDetailContainer from '../item-detail-container/ItemDetailContainer';
import NavBar from "../components/navbar/NavBar";
import Cart from '../components/cart/Cart';

const Routes = () => {
  return (
  
    <BrowserRouter>
    <NavBar/>
    <Switch>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/cart" element={<Cart />}/>        
        <Route exact path="/category/:idCategory" element={<ItemListContainer/>}/> 
        <Route exact path="/detail/:idDetail" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        <Route exact path="*" element={<NotFound/>} />

    </Switch>
    </BrowserRouter>
    );
};

export default Routes;
