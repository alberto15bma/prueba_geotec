import { Button } from "antd";
import React, { useContext, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import ProductoContext from '../context/ProductoContext';

function Busqueda(props) {
    const { consultarProductos } =
      useContext(ProductoContext);
    
    const inputBusqueda = useRef();
  return (
    <header>
      <div className="contenido-busqueda">
        <input
          type="text"
          ref={inputBusqueda}
          placeholder="Buscar producto"
          //value={busqueda}
          //onChange={(e) => setBusqueda(e.target.value)}
        />
        <Button
          type="link"
          icon={<SearchOutlined />}
          style={{ color: "#fff", position: "absolute", right:0 }}
          onClick={() => consultarProductos(inputBusqueda.current.value)}
        ></Button>
      </div>
    </header>
  );
}

export default Busqueda;