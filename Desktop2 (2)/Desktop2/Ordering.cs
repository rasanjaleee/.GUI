using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace Desktop2
{
    public partial class Ordering : Form
    {
        public Ordering()
        {
            InitializeComponent();
        }

        private void btnInsert_Click(object sender, EventArgs e)
        {
            string customer_name = textBox2.Text;
            DateTime orderDate;
            decimal total_price;

            // Validate date input format (YYYY-MM-DD HH:mm:ss)
            if (!DateTime.TryParseExact(textBox3.Text, "yyyy-MM-dd HH:mm:ss",
                null, System.Globalization.DateTimeStyles.None, out orderDate))
            {
                MessageBox.Show("Invalid date format! Use YYYY-MM-DD HH:mm:ss");
                return;
            }

            // Validate price input
            if (!decimal.TryParse(textBox4.Text, out total_price))
            {
                MessageBox.Show("Invalid Price! Please enter a valid number.");
                return;
            }

            // Corrected query (order_id should be AUTO_INCREMENT)
            string query = "INSERT INTO orders (customer_name, order_date, total_price) VALUES (@customer_name, @order_date, @total_price)";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@customer_name", customer_name);
                    cmd.Parameters.AddWithValue("@order_date", orderDate);
                    cmd.Parameters.AddWithValue("@total_price", total_price);

                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Inserted Successfully");
            OrderData();
        }

        private void OrderData()
        {
            string query = "SELECT * FROM orders";
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    using (MySqlDataAdapter adapter = new MySqlDataAdapter(cmd))
                    {
                        DataTable dataTable = new DataTable();
                        adapter.Fill(dataTable);
                        dataGridView1.DataSource = dataTable;
                    }
                }
            }
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            int orderId;
            string customer_name = textBox2.Text;
            DateTime orderDate;
            decimal total_price;

            // Validate order ID
            if (!int.TryParse(textBox1.Text, out orderId))
            {
                MessageBox.Show("Invalid Order ID! Please enter a valid integer.");
                return;
            }

            // Validate date input
            if (!DateTime.TryParseExact(textBox3.Text, "yyyy-MM-dd HH:mm:ss",
                null, System.Globalization.DateTimeStyles.None, out orderDate))
            {
                MessageBox.Show("Invalid date format! Use YYYY-MM-DD HH:mm:ss");
                return;
            }

            // Validate price input
            if (!decimal.TryParse(textBox4.Text, out total_price))
            {
                MessageBox.Show("Invalid Price! Please enter a valid number.");
                return;
            }

            string query = "UPDATE orders SET customer_name=@customer_name, order_date=@order_date, total_price=@total_price WHERE order_id=@order_id";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@order_id", orderId);
                    cmd.Parameters.AddWithValue("@customer_name", customer_name);
                    cmd.Parameters.AddWithValue("@order_date", orderDate);
                    cmd.Parameters.AddWithValue("@total_price", total_price);

                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Updated Successfully");
            OrderData();
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            int orderId;

            // Validate order ID
            if (!int.TryParse(textBox1.Text, out orderId))
            {
                MessageBox.Show("Invalid Order ID! Please enter a valid integer.");
                return;
            }

            string query = "DELETE FROM orders WHERE order_id=@order_id";

            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@order_id", orderId);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Deleted Successfully");
            OrderData();
        }

        private void Ordering_Load(object sender, EventArgs e)
        {
            OrderData();
        }

        private void btnNew_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
        }
    }
}
