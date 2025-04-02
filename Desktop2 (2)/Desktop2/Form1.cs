namespace Desktop2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if ((string.IsNullOrEmpty(textBox1.Text)) || String.IsNullOrEmpty(textBox2.Text))
            {
                MessageBox.Show("Please enter all fields.", "Validation Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }
            //Hardcode creditentials
            string correctUsername = "admin";
            string correctPassword = "password123";

            //check credentials
            if (textBox1.Text == correctUsername && textBox2.Text == correctPassword)
            {
                Dashbord mt = new Dashbord();
                mt.Show();
                this.Hide();

            }
            else
            {
                MessageBox.Show("Invalid username or password.", "Login Filed", MessageBoxButtons.OK, MessageBoxIcon.Error);

            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Application.Exit();


        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {
            textBox2.UseSystemPasswordChar = !checkBox1.Checked;

        }
    }
}
