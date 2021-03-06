import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <>
    <CardGroup>
      {products.map(p => <Item key={p.id} p={p} /> )} 
    </CardGroup>
    
    </>
    )
  
}

export default ItemList