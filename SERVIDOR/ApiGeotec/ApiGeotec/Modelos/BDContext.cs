using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiGeotec.Modelos
{
    public class BDContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("data source=.;initial catalog=GEOTEC;user id=sa;password=12345678;");
        }
        public DbSet<Producto> Producto { get; set; }
    }
}
