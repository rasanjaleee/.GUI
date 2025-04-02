using System;
using System.Data;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace Desktop2
{
    public partial class Reservations : Form
    {
        public Reservations()
        {
            InitializeComponent();
        }

        private void btnInsert_Click(object sender, EventArgs e)
        {
            try
            {
                int tableId = int.Parse(textBox1.Text);
                string tnumber = textBox2.Text;
                string customer_name = textBox3.Text;

                // Validate and parse reservation_time
                if (!DateTime.TryParse(textBox4.Text, out DateTime reservationTime))
                {
                    MessageBox.Show("Invalid date/time format. Please enter a valid date and time (e.g., 2025-03-06 14:30:00).");
                    return;
                }

                string query = "INSERT INTO reserve (id, table_number, customer_name, reservation_time) VALUES (@id, @table_number, @customer_name, @reservation_time)";

                using (MySqlConnection conn = new DatabaseConnection().GetConnection())
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("@id", tableId);
                        cmd.Parameters.AddWithValue("@table_number", tnumber);
                        cmd.Parameters.AddWithValue("@customer_name", customer_name);
                        cmd.Parameters.AddWithValue("@reservation_time", reservationTime.ToString("yyyy-MM-dd HH:mm:ss")); // Corrected format

                        cmd.ExecuteNonQuery();
                    }
                }
                MessageBox.Show("Record Inserted Successfully");
                ReserveData();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        private void ReserveData()
        {
            try
            {
                string query = "SELECT * FROM reserve";
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
                        dataGridView1.Refresh();
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            try
            {
                int tableId = int.Parse(textBox1.Text);
                string tnumber = textBox2.Text;
                string customer_name = textBox3.Text;

                // Validate and parse reservation_time
                if (!DateTime.TryParse(textBox4.Text, out DateTime reservationTime))
                {
                    MessageBox.Show("Invalid date/time format. Please enter a valid date and time.");
                    return;
                }

                string query = "UPDATE reserve SET table_number=@table_number, customer_name=@customer_name, reservation_time=@reservation_time WHERE id=@id";

                using (MySqlConnection conn = new DatabaseConnection().GetConnection())
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("@id", tableId);
                        cmd.Parameters.AddWithValue("@table_number", tnumber);
                        cmd.Parameters.AddWithValue("@customer_name", customer_name);
                        cmd.Parameters.AddWithValue("@reservation_time", reservationTime.ToString("yyyy-MM-dd HH:mm:ss"));

                        cmd.ExecuteNonQuery();
                    }
                }
                MessageBox.Show("Record Updated Successfully");
                ReserveData();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            try
            {
                int tableId = int.Parse(textBox1.Text);

                string query = "DELETE FROM reserve WHERE id=@id";

                using (MySqlConnection conn = new DatabaseConnection().GetConnection())
                {
                    conn.Open();
                    using (MySqlCommand cmd = new MySqlCommand(query, conn))
                    {
                        cmd.Parameters.AddWithValue("@id", tableId);
                        cmd.ExecuteNonQuery();
                    }
                }
                MessageBox.Show("Record Deleted Successfully");
                ReserveData();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error: {ex.Message}");
            }
        }

        private void btnNew_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
        }

        private void Reservations_Load(object sender, EventArgs e)
        {
            ReserveData();
        }
    }
}
