namespace Ambitus.Telas
{
    partial class Cadastro
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Cadastro));
            label1 = new Label();
            pictureBox1 = new PictureBox();
            txtUsuario = new TextBox();
            txtEmail = new TextBox();
            txtSenha = new TextBox();
            txtSenha2 = new TextBox();
            label2 = new Label();
            btnCadastrar = new Button();
            label3 = new Label();
            lblEmail = new Label();
            lblSenha = new Label();
            lblSenha2 = new Label();
            dtpNascimento = new DateTimePicker();
            lblData = new Label();
            ckbMasculino = new CheckBox();
            ckbFeminino = new CheckBox();
            lblSexo = new Label();
            ckbOutro = new CheckBox();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Arial Rounded MT Bold", 36F, FontStyle.Italic, GraphicsUnit.Point);
            label1.ForeColor = Color.FromArgb(111, 146, 0);
            label1.Location = new Point(271, 50);
            label1.Name = "label1";
            label1.Size = new Size(216, 55);
            label1.TabIndex = 3;
            label1.Text = "Ambitus";
            // 
            // pictureBox1
            // 
            pictureBox1.Image = (Image)resources.GetObject("pictureBox1.Image");
            pictureBox1.Location = new Point(188, 37);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new Size(77, 80);
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBox1.TabIndex = 2;
            pictureBox1.TabStop = false;
            // 
            // txtUsuario
            // 
            txtUsuario.Font = new Font("Segoe UI", 14.25F, FontStyle.Regular, GraphicsUnit.Point);
            txtUsuario.Location = new Point(188, 224);
            txtUsuario.Name = "txtUsuario";
            txtUsuario.Size = new Size(323, 33);
            txtUsuario.TabIndex = 1;
            // 
            // txtEmail
            // 
            txtEmail.Font = new Font("Segoe UI", 14.25F, FontStyle.Regular, GraphicsUnit.Point);
            txtEmail.Location = new Point(188, 298);
            txtEmail.Name = "txtEmail";
            txtEmail.Size = new Size(323, 33);
            txtEmail.TabIndex = 2;
            // 
            // txtSenha
            // 
            txtSenha.Font = new Font("Segoe UI", 14.25F, FontStyle.Regular, GraphicsUnit.Point);
            txtSenha.Location = new Point(188, 418);
            txtSenha.Name = "txtSenha";
            txtSenha.PasswordChar = '*';
            txtSenha.Size = new Size(323, 33);
            txtSenha.TabIndex = 6;
            // 
            // txtSenha2
            // 
            txtSenha2.Font = new Font("Segoe UI", 14.25F, FontStyle.Regular, GraphicsUnit.Point);
            txtSenha2.Location = new Point(188, 490);
            txtSenha2.Name = "txtSenha2";
            txtSenha2.PasswordChar = '*';
            txtSenha2.Size = new Size(323, 33);
            txtSenha2.TabIndex = 7;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Font = new Font("Arial Rounded MT Bold", 24F, FontStyle.Italic, GraphicsUnit.Point);
            label2.Location = new Point(200, 141);
            label2.Name = "label2";
            label2.Size = new Size(320, 37);
            label2.TabIndex = 25;
            label2.Text = "Informe seus dados";
            // 
            // btnCadastrar
            // 
            btnCadastrar.Font = new Font("Arial Rounded MT Bold", 14.25F, FontStyle.Italic, GraphicsUnit.Point);
            btnCadastrar.ForeColor = Color.FromArgb(111, 146, 0);
            btnCadastrar.Location = new Point(286, 569);
            btnCadastrar.Name = "btnCadastrar";
            btnCadastrar.Size = new Size(118, 62);
            btnCadastrar.TabIndex = 8;
            btnCadastrar.Text = "Cadastrar";
            btnCadastrar.UseVisualStyleBackColor = true;
            btnCadastrar.Click += btnCadastrar_Click;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Font = new Font("Arial Rounded MT Bold", 9F, FontStyle.Italic, GraphicsUnit.Point);
            label3.ForeColor = Color.FromArgb(111, 146, 0);
            label3.Location = new Point(188, 206);
            label3.Name = "label3";
            label3.Size = new Size(100, 14);
            label3.TabIndex = 10;
            label3.Text = "Nome Completo";
            // 
            // lblEmail
            // 
            lblEmail.AutoSize = true;
            lblEmail.Font = new Font("Arial Rounded MT Bold", 9F, FontStyle.Italic, GraphicsUnit.Point);
            lblEmail.ForeColor = Color.FromArgb(111, 146, 0);
            lblEmail.Location = new Point(188, 280);
            lblEmail.Name = "lblEmail";
            lblEmail.Size = new Size(43, 14);
            lblEmail.TabIndex = 11;
            lblEmail.Text = "E-mail";
            // 
            // lblSenha
            // 
            lblSenha.AutoSize = true;
            lblSenha.Font = new Font("Arial Rounded MT Bold", 9F, FontStyle.Italic, GraphicsUnit.Point);
            lblSenha.ForeColor = Color.FromArgb(111, 146, 0);
            lblSenha.Location = new Point(188, 400);
            lblSenha.Name = "lblSenha";
            lblSenha.Size = new Size(43, 14);
            lblSenha.TabIndex = 12;
            lblSenha.Text = "Senha";
            // 
            // lblSenha2
            // 
            lblSenha2.AutoSize = true;
            lblSenha2.Font = new Font("Arial Rounded MT Bold", 9F, FontStyle.Italic, GraphicsUnit.Point);
            lblSenha2.ForeColor = Color.FromArgb(111, 146, 0);
            lblSenha2.Location = new Point(188, 472);
            lblSenha2.Name = "lblSenha2";
            lblSenha2.Size = new Size(104, 14);
            lblSenha2.TabIndex = 13;
            lblSenha2.Text = "Confirmar Senha";
            // 
            // dtpNascimento
            // 
            dtpNascimento.Format = DateTimePickerFormat.Short;
            dtpNascimento.Location = new Point(189, 361);
            dtpNascimento.Name = "dtpNascimento";
            dtpNascimento.Size = new Size(105, 23);
            dtpNascimento.TabIndex = 3;
            // 
            // lblData
            // 
            lblData.AutoSize = true;
            lblData.Font = new Font("Arial Rounded MT Bold", 9F, FontStyle.Italic, GraphicsUnit.Point);
            lblData.ForeColor = Color.FromArgb(111, 146, 0);
            lblData.Location = new Point(189, 344);
            lblData.Name = "lblData";
            lblData.Size = new Size(124, 14);
            lblData.TabIndex = 15;
            lblData.Text = "Data de Nascimento";
            // 
            // ckbMasculino
            // 
            ckbMasculino.AutoSize = true;
            ckbMasculino.Location = new Point(346, 361);
            ckbMasculino.Name = "ckbMasculino";
            ckbMasculino.Size = new Size(81, 19);
            ckbMasculino.TabIndex = 4;
            ckbMasculino.Text = "Masculino";
            ckbMasculino.UseVisualStyleBackColor = true;
            // 
            // ckbFeminino
            // 
            ckbFeminino.AutoSize = true;
            ckbFeminino.Location = new Point(346, 382);
            ckbFeminino.Name = "ckbFeminino";
            ckbFeminino.Size = new Size(76, 19);
            ckbFeminino.TabIndex = 5;
            ckbFeminino.Text = "Feminino";
            ckbFeminino.UseVisualStyleBackColor = true;
            // 
            // lblSexo
            // 
            lblSexo.AutoSize = true;
            lblSexo.Font = new Font("Arial Rounded MT Bold", 9F, FontStyle.Italic, GraphicsUnit.Point);
            lblSexo.ForeColor = Color.FromArgb(111, 146, 0);
            lblSexo.Location = new Point(346, 344);
            lblSexo.Name = "lblSexo";
            lblSexo.Size = new Size(35, 14);
            lblSexo.TabIndex = 18;
            lblSexo.Text = "Sexo";
            // 
            // ckbOutro
            // 
            ckbOutro.AutoSize = true;
            ckbOutro.Location = new Point(433, 361);
            ckbOutro.Name = "ckbOutro";
            ckbOutro.Size = new Size(57, 19);
            ckbOutro.TabIndex = 26;
            ckbOutro.Text = "Outro";
            ckbOutro.UseVisualStyleBackColor = true;
            // 
            // Cadastro
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.FromArgb(254, 250, 224);
            ClientSize = new Size(734, 711);
            Controls.Add(ckbOutro);
            Controls.Add(lblSexo);
            Controls.Add(ckbFeminino);
            Controls.Add(ckbMasculino);
            Controls.Add(lblData);
            Controls.Add(dtpNascimento);
            Controls.Add(lblSenha2);
            Controls.Add(lblSenha);
            Controls.Add(lblEmail);
            Controls.Add(label3);
            Controls.Add(btnCadastrar);
            Controls.Add(label2);
            Controls.Add(txtSenha2);
            Controls.Add(txtSenha);
            Controls.Add(txtEmail);
            Controls.Add(txtUsuario);
            Controls.Add(label1);
            Controls.Add(pictureBox1);
            FormBorderStyle = FormBorderStyle.Fixed3D;
            Name = "Cadastro";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Cadastro";
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label label1;
        private PictureBox pictureBox1;
        private TextBox txtUsuario;
        private TextBox txtEmail;
        private TextBox txtSenha;
        private TextBox txtSenha2;
        private Label label2;
        private Button btnCadastrar;
        private Label label3;
        private Label lblEmail;
        private Label lblSenha;
        private Label lblSenha2;
        private DateTimePicker dtpNascimento;
        private Label lblData;
        private CheckBox ckbMasculino;
        private CheckBox ckbFeminino;
        private Label lblSexo;
        private CheckBox ckbOutro;
    }
}