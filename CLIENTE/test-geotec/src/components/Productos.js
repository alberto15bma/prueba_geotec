import React, { useContext, useEffect } from "react";
import ProductoContext from '../context/ProductoContext';
import DetalleItem from "./DetalleItem";

function Productos(props) {
  const { productos, consultarProductos } = useContext(ProductoContext);
   useEffect(() => {
     consultarProductos();
   }, []);

  return (
    <div className="productos">
      <div className="content-detalle">
        <DetalleItem productos={productos} />
      </div>
    </div>
  );
}

export default Productos;