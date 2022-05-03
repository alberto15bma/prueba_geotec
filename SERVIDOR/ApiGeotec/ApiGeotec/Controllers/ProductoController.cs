using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using ApiGeotec.Logica;
using ApiGeotec.Sistema;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ApiGeotec.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        [HttpPost]
        [Route("lista")]
        public IActionResult GetProductos([FromBody]object data)
        {
            Respuesta respuesta = new Respuesta();
            var producto = new ClsProducto();
            var obj =  (dynamic)data;
            var listaProductos = producto.GetProductos(Convert.ToString(obj.busqueda));
            respuesta.Mensaje = "OK";
            respuesta.Estado = true;
            respuesta.Data = listaProductos;
            return Ok(respuesta);
        }

        [HttpPost]
        [Route("buscar")]
        public IActionResult GetProducto([FromBody]object data)
        {
            Respuesta respuesta = new Respuesta();
            var producto = new ClsProducto();
            var obj = (dynamic)data;
            var res = producto.GetProducto(Convert.ToInt32(obj.id_producto));
            respuesta.Mensaje = "OK";
            respuesta.Estado = true;
            respuesta.Data = res;
            return Ok(respuesta);
        }
    }
}