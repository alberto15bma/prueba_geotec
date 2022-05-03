import { BrowserRouter, Route, Routes } from "react-router-dom";
import Busqueda from "./components/Busqueda";
import DetalleProducto from "./components/DetalleProducto";
import Producto from "./components/Productos";
import { ProductoProvider } from "./context/ProductoContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductoProvider>
          <Busqueda />
          <Routes>
            <Route path="/items/*" element={<Producto />}></Route>
            <Route path="/items/:id" element={<DetalleProducto />}></Route>
          </Routes>
        </ProductoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
