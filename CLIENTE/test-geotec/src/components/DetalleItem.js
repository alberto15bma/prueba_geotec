import { Button } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import React from 'react';
import { useNavigate } from 'react-router-dom';


function DetalleItem({productos}) {
  const navigate = useNavigate()
  return (
    productos &&
    productos.map((item) => (
      <div className="item-producto" key={item.id}>
        <div className="item-titulo">{item.nombre}</div>
        <div className="item-contenido">
          <div className="item-detalle">
            <div>
              <b>Talla: </b> <span>{item.talla}</span>
              <span> - </span>
              <span>${item.precio}</span>
            </div>
            <p className="item-descripcion">{item.descripcion}</p>
          </div>
          <div className="item-imagen">
            <img src={item.imagen} alt={item.nombre} />
          </div>
        </div>
        <div>
          <Button
            type="link"
            icon={<SearchOutlined />}
            onClick={() => navigate(`/items/${item.id}`)}
          >
            Ver detalle
          </Button>
        </div>
      </div>
    ))
  );
}

export default DetalleItem;