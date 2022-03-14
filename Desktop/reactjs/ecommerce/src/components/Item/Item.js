import { useState } from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import  { Link} from "react-router-dom"

const Item = ({p}) => {

  const [stockSelected, setStockSelected] = useState(0);
  const {id, name, price, image, description, stock = 10} = p;
  
  return (
    
   <CardGroup className= "mx-auto">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} alt={name} />
    <Card.Body>
    <Card.Title><h2>{name} </h2></Card.Title>
    <Card.Text>
    <h2>Descripción: {description} </h2>
    </Card.Text>
    <Button variant="outline-success"><Link to={`/item/${id}`} className="text-decoration-none" >Seleccionar Producto </Link></Button>
  </Card.Body>
</Card>
</CardGroup>

 );
};


export default Item;
