using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGeotec.Sistema
{
    public class BDConexion
    {
        public static string Conexion(string db)
        {
            return $"Data Source=.;Initial Catalog={db};User ID={BDParametros.BDUsuario};Password={BDParametros.BDPassword}";

        }
    }
}
