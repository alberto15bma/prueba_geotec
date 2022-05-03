import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SERVER, { ENDPOINTS } from "../sistema/server";

const ProductoContext = createContext();

const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  let navigate = useNavigate();

  const consultarProductos = async (busqueda = "") => {
    if (busqueda !== "") {
      navigate(`/items?search=${busqueda}`);
    }
    else{
      navigate(`/items`);
    }
    let res = await SERVER.consulta(ENDPOINTS.LISTA_PRODUCTO, { busqueda });
    if (res.estado) {
      setProductos(res.data);
    }
  };

  const data = {
    productos,
    consultarProductos,
  };
  return (
    <ProductoContext.Provider value={data}>{children}</ProductoContext.Provider>
  );
};

export { ProductoProvider };
export default ProductoContext;
