namespace Ambitus.Telas
{
    partial class MenuPrincipal
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MenuPrincipal));
            label1 = new Label();
            pictureBox1 = new PictureBox();
            panel2 = new Panel();
            btnCriarEvento = new Button();
            panel1 = new Panel();
            dgvEventos = new DataGridView();
            lblCadastrar = new Label();
            btnGerenciarEventos = new Button();
            label2 = new Label();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dgvEventos).BeginInit();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Arial Rounded MT Bold", 72F, FontStyle.Italic, GraphicsUnit.Point);
            label1.ForeColor = Color.FromArgb(111, 146, 0);
            label1.Location = new Point(761, 28);
            label1.Name = "label1";
            label1.Size = new Size(431, 111);
            label1.TabIndex = 11;
            label1.Text = "Ambitus";
            // 
            // pictureBox1
            // 
            pictureBox1.Image = (Image)resources.GetObject("pictureBox1.Image");
            pictureBox1.Location = new Point(619, 19);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new Size(136, 135);
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBox1.TabIndex = 10;
            pictureBox1.TabStop = false;
            // 
            // panel2
            // 
            panel2.Location = new Point(1060, 199);
            panel2.Name = "panel2";
            panel2.Size = new Size(832, 688);
            panel2.TabIndex = 26;
            // 
            // btnCriarEvento
            // 
            btnCriarEvento.BackColor = Color.FromArgb(66, 151, 17);
            btnCriarEvento.FlatStyle = FlatStyle.Flat;
            btnCriarEvento.Font = new Font("Arial Rounded MT Bold", 20.25F, FontStyle.Italic, GraphicsUnit.Point);
            btnCriarEvento.ForeColor = Color.FromArgb(144, 218, 101);
            btnCriarEvento.Location = new Point(36, 918);
            btnCriarEvento.Name = "btnCriarEvento";
            btnCriarEvento.Size = new Size(361, 43);
            btnCriarEvento.TabIndex = 29;
            btnCriarEvento.Text = "Cadastrar Eventos";
            btnCriarEvento.UseVisualStyleBackColor = false;
            btnCriarEvento.Click += btnCriarEvento_Click;
            // 
            // panel1
            // 
            panel1.Controls.Add(dgvEventos);
            panel1.Location = new Point(39, 196);
            panel1.Name = "panel1";
            panel1.Size = new Size(849, 691);
            panel1.TabIndex = 27;
            // 
            // dgvEventos
            // 
            dgvEventos.BackgroundColor = Color.White;
            dgvEventos.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dgvEventos.Location = new Point(3, 3);
            dgvEventos.Name = "dgvEventos";
            dgvEventos.RowTemplate.Height = 25;
            dgvEventos.Size = new Size(843, 685);
            dgvEventos.TabIndex = 0;
            // 
            // lblCadastrar
            // 
            lblCadastrar.AutoSize = true;
            lblCadastrar.Font = new Font("Arial", 24F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            lblCadastrar.ForeColor = Color.FromArgb(111, 146, 0);
            lblCadastrar.Location = new Point(1060, 157);
            lblCadastrar.Name = "lblCadastrar";
            lblCadastrar.Size = new Size(195, 36);
            lblCadastrar.TabIndex = 30;
            lblCadastrar.Text = "Premiações";
            // 
            // btnGerenciarEventos
            // 
            btnGerenciarEventos.BackColor = Color.FromArgb(66, 151, 17);
            btnGerenciarEventos.FlatStyle = FlatStyle.Flat;
            btnGerenciarEventos.Font = new Font("Arial Rounded MT Bold", 20.25F, FontStyle.Italic, GraphicsUnit.Point);
            btnGerenciarEventos.ForeColor = Color.FromArgb(144, 218, 101);
            btnGerenciarEventos.Location = new Point(524, 918);
            btnGerenciarEventos.Name = "btnGerenciarEventos";
            btnGerenciarEventos.Size = new Size(361, 43);
            btnGerenciarEventos.TabIndex = 31;
            btnGerenciarEventos.Text = "Gerenciar Eventos";
            btnGerenciarEventos.UseVisualStyleBackColor = false;
            btnGerenciarEventos.Click += button1_Click;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Font = new Font("Arial", 24F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            label2.ForeColor = Color.FromArgb(111, 146, 0);
            label2.Location = new Point(39, 157);
            label2.Name = "label2";
            label2.Size = new Size(140, 36);
            label2.TabIndex = 32;
            label2.Text = "Eventos";
            // 
            // MenuPrincipal
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.FromArgb(254, 250, 224);
            ClientSize = new Size(1904, 1041);
            Controls.Add(label2);
            Controls.Add(btnGerenciarEventos);
            Controls.Add(lblCadastrar);
            Controls.Add(panel1);
            Controls.Add(btnCriarEvento);
            Controls.Add(panel2);
            Controls.Add(label1);
            Controls.Add(pictureBox1);
            MinimizeBox = false;
            Name = "MenuPrincipal";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Menu Principal";
            WindowState = FormWindowState.Maximized;
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            panel1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)dgvEventos).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private Label label1;
        private PictureBox pictureBox1;
        private Panel panel2;
        private Button btnCriarEvento;
        private Panel panel1;
        private Label lblCadastrar;
        private Button btnGerenciarEventos;
        private Label label2;
        private DataGridView dgvEventos;
    }
}