import React, { useEffect, useState } from "react";
import { Button, Tooltip } from "antd";
import { ArrowLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import SERVER, { ENDPOINTS } from "../sistema/server";

function DetalleProducto() {
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();
  let {id} = useParams();
  useEffect(() => {
    const buscarProducto = async () => {
      let res = await SERVER.consulta(ENDPOINTS.BUSCAR_PRODUCTO, {
        id_producto: id,
      });
      if (res.estado) {
        setProducto(res.data);
      }
    };
    buscarProducto();
  }, [id]);

  

  return (
    <div className="productos">
      <div className="content-detalle">
        <div className="barra-atras">
          <Tooltip title="Atrás">
            <Button
              type="primary"
              shape="circle"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate("/items")}
            />
          </Tooltip>
        </div>
        <div className="detalle-cabecera-detalle">
          {producto !== null ? (
            <section>
              <div className="item-titulo">{producto.nombre}</div>
              <b>Talla: </b> <span>{producto.talla}</span>
              <div className="item-contenido-detalle">
                <div className="item-imagen">
                  <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className="item-detalle">
                  <h3>Descripción</h3>
                  <p className="item-descripcion">{producto.descripcion}</p>
                  <br />
                  <b>Precio: </b> <span>${producto.precio}</span>
                  <br />
                  <Button
                    type="primary"
                    className="btn-comprar"
                    icon={<ShoppingCartOutlined />}
                  >
                    Comprar
                  </Button>
                </div>
              </div>
            </section>
          ) : (
            <div className="error">
              No existe información relacionada al producto
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
