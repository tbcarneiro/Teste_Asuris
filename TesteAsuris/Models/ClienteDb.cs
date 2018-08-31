using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TesteAsuris.Models
{
    public class ClienteDb : DbContext
    {
        public DbSet<Cliente> Clientes { get; set; }
    }
}