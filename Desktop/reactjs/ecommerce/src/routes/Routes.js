import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemListContainer from '../components/item-list-container/ItemListContainer';
import NotFound from '../components/not-found/NotFound';
import ItemDetailContainer from '../item-detail-container/ItemDetailContainer';
import NavBar from "../components/navbar/NavBar";

const Routes = () => {
  return (
  
    <BrowserRouter>
    <NavBar/>
    <Switch>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:id" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        <Route exact path="*" element={<NotFound/>} />

    </Switch>
    </BrowserRouter>
    );
};

export default Routes;
