import 'bootstrap/dist/css/bootstrap.min.css';
import Routes  from "./routes/Routes";
import "./App.css";
import { CartProvider } from './context/CartContext';
import { useEffect } from 'react';


 function App() {

    return (
      <CartProvider>
      <div className="App">
        {/* <ResizeComponent /> */}
        <Routes/>
      </div>
      </CartProvider>
    );
  }
  
export default App;
