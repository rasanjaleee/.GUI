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
    public partial class Dashbord : Form
    {
        public Dashbord()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            Menu pt = new Menu();
            pt.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            Ordering cr = new Ordering();
            cr.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Reservations iy = new Reservations();
            iy.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            this.Hide();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            Dishes or = new Dishes();
             or.Show();
        }
    }
}
