namespace TesteAsuris.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<TesteAsuris.Models.ClienteDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(TesteAsuris.Models.ClienteDb context)
        {
            context.Clientes.AddOrUpdate(
                  p => p.Nome,
                  new Models.Cliente { Nome = "José Miguel", Telefone = "(41)30402456", Endereco = "Rua das Flores 2019", Email = "josemiguel@yahoo.com.br" },
                  new Models.Cliente { Nome = "Maria Antonia", Telefone = "(41)23450968", Endereco = "Rua das Nações 2344", Email = "maria_antonia@google.com" },
                  new Models.Cliente { Nome = "Luis Fernando", Telefone = "(41)34549857", Endereco = "Avenida dos Estados 344", Email = "luis_fer@globo.com.br" },
                  new Models.Cliente { Nome = "Pedro Augusto", Telefone = "(41)32339944", Endereco = "Rua Antonio da Veiga 323", Email = "pedro_aug@terra.com.br" },
                  new Models.Cliente { Nome = "Sandra Helena", Telefone = "(41)34843637", Endereco = "Rua 25 de Março", Email = "helena_sandra@gmail.com" }
                );
        }
    }
}
