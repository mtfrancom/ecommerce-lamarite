import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div>{products.map(p => <Item key={p.id} p={p} /> )} </div>
  )
}

export default ItemList