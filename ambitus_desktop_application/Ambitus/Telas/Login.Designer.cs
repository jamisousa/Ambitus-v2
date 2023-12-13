namespace Ambitus.Telas
{
    partial class Login
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Login));
            pictureBox1 = new PictureBox();
            label1 = new Label();
            txtUsuario = new TextBox();
            txtSenha = new TextBox();
            btnLogin = new Button();
            lblNoAccount = new Label();
            lblCadastrar = new Label();
            lblNome = new Label();
            lblSenha = new Label();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            SuspendLayout();
            // 
            // pictureBox1
            // 
            pictureBox1.Image = (Image)resources.GetObject("pictureBox1.Image");
            pictureBox1.Location = new Point(293, 41);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new Size(136, 135);
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBox1.TabIndex = 0;
            pictureBox1.TabStop = false;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Arial Rounded MT Bold", 72F, FontStyle.Italic, GraphicsUnit.Point);
            label1.ForeColor = Color.FromArgb(111, 146, 0);
            label1.Location = new Point(435, 50);
            label1.Name = "label1";
            label1.Size = new Size(431, 111);
            label1.TabIndex = 1;
            label1.Text = "Ambitus";
            // 
            // txtUsuario
            // 
            txtUsuario.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            txtUsuario.Location = new Point(495, 276);
            txtUsuario.Name = "txtUsuario";
            txtUsuario.Size = new Size(323, 29);
            txtUsuario.TabIndex = 2;
            // 
            // txtSenha
            // 
            txtSenha.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            txtSenha.Location = new Point(495, 338);
            txtSenha.Name = "txtSenha";
            txtSenha.PasswordChar = '*';
            txtSenha.Size = new Size(323, 29);
            txtSenha.TabIndex = 3;
            // 
            // btnLogin
            // 
            btnLogin.Font = new Font("Arial Rounded MT Bold", 14.25F, FontStyle.Italic, GraphicsUnit.Point);
            btnLogin.ForeColor = Color.FromArgb(111, 146, 0);
            btnLogin.Location = new Point(588, 431);
            btnLogin.Name = "btnLogin";
            btnLogin.Size = new Size(139, 60);
            btnLogin.TabIndex = 4;
            btnLogin.Text = "Entrar";
            btnLogin.UseVisualStyleBackColor = true;
            btnLogin.Click += btnLogin_Click;
            // 
            // lblNoAccount
            // 
            lblNoAccount.AutoSize = true;
            lblNoAccount.Font = new Font("Arial Rounded MT Bold", 11.25F, FontStyle.Regular, GraphicsUnit.Point);
            lblNoAccount.ForeColor = Color.Black;
            lblNoAccount.Location = new Point(523, 381);
            lblNoAccount.Name = "lblNoAccount";
            lblNoAccount.Size = new Size(177, 17);
            lblNoAccount.TabIndex = 5;
            lblNoAccount.Text = "Não possui uma conta?";
            // 
            // lblCadastrar
            // 
            lblCadastrar.AutoSize = true;
            lblCadastrar.Font = new Font("Arial", 11.25F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            lblCadastrar.ForeColor = Color.FromArgb(111, 146, 0);
            lblCadastrar.Location = new Point(697, 381);
            lblCadastrar.Name = "lblCadastrar";
            lblCadastrar.Size = new Size(97, 17);
            lblCadastrar.TabIndex = 6;
            lblCadastrar.Text = "Cadastre-se!";
            lblCadastrar.Click += lblCadastrar_Click;
            // 
            // lblNome
            // 
            lblNome.AutoSize = true;
            lblNome.Font = new Font("Arial Rounded MT Bold", 10F, FontStyle.Regular, GraphicsUnit.Point);
            lblNome.ForeColor = Color.Black;
            lblNome.Location = new Point(495, 257);
            lblNome.Name = "lblNome";
            lblNome.Size = new Size(53, 16);
            lblNome.TabIndex = 7;
            lblNome.Text = "E-mail:";
            // 
            // lblSenha
            // 
            lblSenha.AutoSize = true;
            lblSenha.Font = new Font("Arial Rounded MT Bold", 10F, FontStyle.Regular, GraphicsUnit.Point);
            lblSenha.ForeColor = Color.Black;
            lblSenha.Location = new Point(495, 319);
            lblSenha.Name = "lblSenha";
            lblSenha.Size = new Size(52, 16);
            lblSenha.TabIndex = 8;
            lblSenha.Text = "Senha:";
            // 
            // Login
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.FromArgb(254, 250, 224);
            ClientSize = new Size(1313, 642);
            Controls.Add(lblSenha);
            Controls.Add(lblNome);
            Controls.Add(lblCadastrar);
            Controls.Add(lblNoAccount);
            Controls.Add(btnLogin);
            Controls.Add(txtSenha);
            Controls.Add(txtUsuario);
            Controls.Add(label1);
            Controls.Add(pictureBox1);
            FormBorderStyle = FormBorderStyle.Fixed3D;
            MaximizeBox = false;
            Name = "Login";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Ambitus";
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private PictureBox pictureBox1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtUsuario;
        private System.Windows.Forms.TextBox txtSenha;
        private System.Windows.Forms.Button btnLogin;
        private System.Windows.Forms.Label lblNoAccount;
        private System.Windows.Forms.Label lblCadastrar;
        private Label lblNome;
        private Label lblSenha;
    }
}