using MySql.Data.MySqlClient;
using Org.BouncyCastle.Asn1.Cmp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Desktop2
{
    internal class DatabaseConnection
    {
        private MySqlConnection connection;

        public DatabaseConnection()
        {
            string connectionString = "Server=localhost;Database=restaurant2db;Uid = root;Pwd=Edirisinghe2002R;";

            connection = new MySqlConnection(connectionString);
        }
        public MySqlConnection GetConnection()
        {
            return connection;
        }
    }
}
