using ApiGeotec.Modelos;
using ApiGeotec.Sistema;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGeotec.Logica
{
    public class ClsProducto
    {
        public List<Producto> GetProductos(string busqueda)
        {
            List<Producto> listaProductos = new List<Producto>();
            using (var db = new SqlConnection(BDConexion.Conexion(BDParametros.BDAplicacion)))
            {
                try
                {
                    if (db.State == ConnectionState.Closed)
                        db.Open();

                    var p = new DynamicParameters();
                    p.Add("Busqueda", busqueda, dbType: DbType.String);

                    var sql = $"SP_ListaProductos";
                    listaProductos = db.Query<Producto>(sql, p, commandType: CommandType.StoredProcedure).ToList();

                    db.Close();
                }
                catch (Exception e)
                {
                    listaProductos = new List<Producto>();
                }
                finally
                {
                    ((IDisposable)db).Dispose();
                }
            }
            return listaProductos;
        }
        public Producto GetProducto(int IdProducto)
        {
            Producto producto = new Producto();
            using (var db = new SqlConnection(BDConexion.Conexion(BDParametros.BDAplicacion)))
            {
                try
                {
                    if (db.State == ConnectionState.Closed)
                        db.Open();

                    var p = new DynamicParameters();
                    p.Add("IdProducto", IdProducto, dbType: DbType.Int32);

                    var sql = $"SP_BuscaProducto";
                    producto = db.Query<Producto>(sql, p, commandType: CommandType.StoredProcedure).FirstOrDefault();

                    db.Close();
                }
                catch (Exception e)
                {
                    producto = null;
                }
                finally
                {
                    ((IDisposable)db).Dispose();
                }
            }
            return producto;
        }
    }
}
