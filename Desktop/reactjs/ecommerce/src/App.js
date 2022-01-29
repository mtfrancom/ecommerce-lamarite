import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import ItemListContainer from "./components/item-list-container/ItemListContainer"

 function App() {
    return (
      <div classname="App">
        <NavBar/>
        <h1>Inicio del e-commerce</h1>
        <hr/>
        <ItemListContainer/>
        
      </div>
      
    );
  }


export default App;
