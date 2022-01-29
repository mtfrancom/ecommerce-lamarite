
const Item = ({nombre, precio, id, setSelectedItem}) => {
    const selecItem = () => setSelectedItem({nombre, precio, id});

  return (
  <div>
      <h2>Nombre del producto: {nombre} </h2>
      <h2>Precio del producto: {precio}</h2>
      <button onClick={selecItem}>Seleccionar Producto </button>
  </div>
  );
};

export default Item;
