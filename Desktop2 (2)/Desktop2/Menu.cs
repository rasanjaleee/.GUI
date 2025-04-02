using System;
using System.Data;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace Desktop2
{
    public partial class Menu : Form
    {
        public Menu()
        {
            InitializeComponent();
        }

        private void Menu_Load(object sender, EventArgs e)
        {
            MenuData();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (!int.TryParse(textBox1.Text, out int menuId))
            {
                MessageBox.Show("Invalid menu ID format.");
                return;
            }
            if (!decimal.TryParse(textBox4.Text, out decimal price))
            {
                MessageBox.Show("Invalid price format.");
                return;
            }

            string menuName = textBox2.Text;
            string category = textBox3.Text;

            string query = "INSERT INTO menu(menuID, menuName, category, price) VALUES (@MenuID, @MenuName, @Category, @Price)";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@MenuID", menuId);
                    cmd.Parameters.AddWithValue("@MenuName", menuName);
                    cmd.Parameters.AddWithValue("@Category", category);
                    cmd.Parameters.AddWithValue("@Price", price);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Inserted Successfully");
            MenuData();
        }

        private void MenuData()
        {
            string query = "SELECT * FROM menu";
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                using (MySqlDataAdapter adapter = new MySqlDataAdapter(cmd))
                {
                    DataTable dataTable = new DataTable();
                    adapter.Fill(dataTable);
                    dataGridView1.DataSource = dataTable;
                }
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (!int.TryParse(textBox1.Text, out int menuId))
            {
                MessageBox.Show("Invalid menu ID format.");
                return;
            }
            if (!decimal.TryParse(textBox4.Text, out decimal price))
            {
                MessageBox.Show("Invalid price format.");
                return;
            }

            string menuName = textBox2.Text;
            string category = textBox3.Text;

            string query = "UPDATE menu SET menuName=@MenuName, category=@Category, price=@Price WHERE menuID=@MenuID";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@MenuID", menuId);
                    cmd.Parameters.AddWithValue("@MenuName", menuName);
                    cmd.Parameters.AddWithValue("@Category", category);
                    cmd.Parameters.AddWithValue("@Price", price);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Updated Successfully");
            MenuData();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (!int.TryParse(textBox1.Text, out int menuId))
            {
                MessageBox.Show("Invalid menu ID format.");
                return;
            }

            string query = "DELETE FROM menu WHERE menuID=@MenuID";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@MenuID", menuId);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Deleted Successfully");
            MenuData();
        }

        private void btnNew_Click(object sender, EventArgs e)
        {
            textBox1.Clear();
            textBox2.Clear();
            textBox3.Clear();
            textBox4.Clear();
        }
    }
}