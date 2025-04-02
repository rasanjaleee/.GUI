using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Desktop2
{
    public partial class Dishes : Form
    {
        public Dishes()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void Menu_Load(object sender, EventArgs e)
        {
            Display1();

        }
        private void Display1()
        {
            string connectionString = "Server=localhost; Database=Tutorial2DB; User ID=root; Password=Sanduni2001#;";
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                try
                {
                    connection.Open();

                    string query = @"
                SELECT 
                    (SELECT COUNT(*) FROM users) AS TotalUsers,
                    (SELECT COUNT(*) FROM videos) AS TotalVideos,
                    (SELECT COUNT(*) FROM tutes) AS TotalTutes;";

                    using (MySqlCommand cmd = new MySqlCommand(query, connection))
                    using (MySqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            label3.Text = reader["TotalUsers"].ToString();
                            label1.Text = reader["TotalMovies"].ToString();
                            label2.Text = reader["TotalTVSeries"].ToString();
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show("Error: " + ex.Message, "Database Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }
    }
}
