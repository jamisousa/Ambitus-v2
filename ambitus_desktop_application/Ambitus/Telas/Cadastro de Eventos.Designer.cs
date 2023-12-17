namespace Ambitus.Telas
{
    partial class Cadastro_de_Eventos
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
            pnCupom = new Panel();
            dtpValidadeCupom = new DateTimePicker();
            lblValidade = new Label();
            txtCodigoCupom = new TextBox();
            lblCodigo = new Label();
            lblNomeCupom = new Label();
            txtNomeCupom = new TextBox();
            txtDescricaoCupom = new TextBox();
            lblDescricaoCupom = new Label();
            pnCadEvento = new Panel();
            label3 = new Label();
            cbbTipos = new ComboBox();
            ckbCupom = new CheckBox();
            lblNomeEvento = new Label();
            txtNomeEvento = new TextBox();
            txtDescricaoEvento = new TextBox();
            lblDescricaoEvento = new Label();
            lblImgEvento = new Label();
            txtEnderecoEvento = new TextBox();
            pbImgEvento = new PictureBox();
            lblEnderecoEvento = new Label();
            dtpDataEvento = new DateTimePicker();
            lblDataEvento = new Label();
            lblCadastrar = new Label();
            btnCriarEvento = new Button();
            ofdEvento = new OpenFileDialog();
            lblEvento = new Label();
            lblCupom = new Label();
            pnCupom.SuspendLayout();
            pnCadEvento.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pbImgEvento).BeginInit();
            SuspendLayout();
            // 
            // pnCupom
            // 
            pnCupom.Controls.Add(dtpValidadeCupom);
            pnCupom.Controls.Add(lblValidade);
            pnCupom.Controls.Add(txtCodigoCupom);
            pnCupom.Controls.Add(lblCodigo);
            pnCupom.Controls.Add(lblNomeCupom);
            pnCupom.Controls.Add(txtNomeCupom);
            pnCupom.Controls.Add(txtDescricaoCupom);
            pnCupom.Controls.Add(lblDescricaoCupom);
            pnCupom.Enabled = false;
            pnCupom.Location = new Point(631, 139);
            pnCupom.Name = "pnCupom";
            pnCupom.Size = new Size(431, 273);
            pnCupom.TabIndex = 27;
            pnCupom.Visible = false;
            // 
            // dtpValidadeCupom
            // 
            dtpValidadeCupom.CustomFormat = "dd/MM/yyyy";
            dtpValidadeCupom.Format = DateTimePickerFormat.Short;
            dtpValidadeCupom.Location = new Point(99, 222);
            dtpValidadeCupom.Name = "dtpValidadeCupom";
            dtpValidadeCupom.Size = new Size(101, 23);
            dtpValidadeCupom.TabIndex = 23;
            dtpValidadeCupom.Value = new DateTime(2023, 12, 4, 20, 39, 5, 0);
            // 
            // lblValidade
            // 
            lblValidade.AutoSize = true;
            lblValidade.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblValidade.ForeColor = Color.Black;
            lblValidade.Location = new Point(11, 222);
            lblValidade.Name = "lblValidade";
            lblValidade.Size = new Size(82, 18);
            lblValidade.TabIndex = 27;
            lblValidade.Text = "Validade:";
            // 
            // txtCodigoCupom
            // 
            txtCodigoCupom.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            txtCodigoCupom.Location = new Point(11, 174);
            txtCodigoCupom.Multiline = true;
            txtCodigoCupom.Name = "txtCodigoCupom";
            txtCodigoCupom.Size = new Size(408, 30);
            txtCodigoCupom.TabIndex = 24;
            // 
            // lblCodigo
            // 
            lblCodigo.AutoSize = true;
            lblCodigo.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblCodigo.ForeColor = Color.Black;
            lblCodigo.Location = new Point(11, 153);
            lblCodigo.Name = "lblCodigo";
            lblCodigo.Size = new Size(69, 18);
            lblCodigo.TabIndex = 25;
            lblCodigo.Text = "Código:";
            // 
            // lblNomeCupom
            // 
            lblNomeCupom.AutoSize = true;
            lblNomeCupom.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblNomeCupom.ForeColor = Color.Black;
            lblNomeCupom.Location = new Point(11, 13);
            lblNomeCupom.Name = "lblNomeCupom";
            lblNomeCupom.Size = new Size(143, 18);
            lblNomeCupom.TabIndex = 21;
            lblNomeCupom.Text = "Nome do Cupom:";
            // 
            // txtNomeCupom
            // 
            txtNomeCupom.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            txtNomeCupom.Location = new Point(11, 34);
            txtNomeCupom.Name = "txtNomeCupom";
            txtNomeCupom.Size = new Size(408, 29);
            txtNomeCupom.TabIndex = 20;
            // 
            // txtDescricaoCupom
            // 
            txtDescricaoCupom.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            txtDescricaoCupom.Location = new Point(11, 101);
            txtDescricaoCupom.Multiline = true;
            txtDescricaoCupom.Name = "txtDescricaoCupom";
            txtDescricaoCupom.Size = new Size(408, 30);
            txtDescricaoCupom.TabIndex = 22;
            // 
            // lblDescricaoCupom
            // 
            lblDescricaoCupom.AutoSize = true;
            lblDescricaoCupom.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblDescricaoCupom.ForeColor = Color.Black;
            lblDescricaoCupom.Location = new Point(11, 80);
            lblDescricaoCupom.Name = "lblDescricaoCupom";
            lblDescricaoCupom.Size = new Size(95, 18);
            lblDescricaoCupom.TabIndex = 23;
            lblDescricaoCupom.Text = "Descrição:";
            // 
            // pnCadEvento
            // 
            pnCadEvento.Controls.Add(label3);
            pnCadEvento.Controls.Add(cbbTipos);
            pnCadEvento.Controls.Add(ckbCupom);
            pnCadEvento.Controls.Add(lblNomeEvento);
            pnCadEvento.Controls.Add(txtNomeEvento);
            pnCadEvento.Controls.Add(txtDescricaoEvento);
            pnCadEvento.Controls.Add(lblDescricaoEvento);
            pnCadEvento.Controls.Add(lblImgEvento);
            pnCadEvento.Controls.Add(txtEnderecoEvento);
            pnCadEvento.Controls.Add(pbImgEvento);
            pnCadEvento.Controls.Add(lblEnderecoEvento);
            pnCadEvento.Controls.Add(dtpDataEvento);
            pnCadEvento.Controls.Add(lblDataEvento);
            pnCadEvento.Location = new Point(131, 139);
            pnCadEvento.Name = "pnCadEvento";
            pnCadEvento.Size = new Size(427, 739);
            pnCadEvento.TabIndex = 26;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            label3.ForeColor = Color.Black;
            label3.Location = new Point(244, 325);
            label3.Name = "label3";
            label3.Size = new Size(47, 18);
            label3.TabIndex = 22;
            label3.Text = "Tipo:";
            // 
            // cbbTipos
            // 
            cbbTipos.FormattingEnabled = true;
            cbbTipos.Location = new Point(244, 349);
            cbbTipos.Name = "cbbTipos";
            cbbTipos.Size = new Size(172, 23);
            cbbTipos.TabIndex = 21;
            // 
            // ckbCupom
            // 
            ckbCupom.AutoSize = true;
            ckbCupom.Location = new Point(150, 402);
            ckbCupom.Name = "ckbCupom";
            ckbCupom.Size = new Size(120, 19);
            ckbCupom.TabIndex = 20;
            ckbCupom.Text = "Adicionar Cupom";
            ckbCupom.UseVisualStyleBackColor = true;
            ckbCupom.CheckedChanged += ckbCupom_CheckedChanged;
            // 
            // lblNomeEvento
            // 
            lblNomeEvento.AutoSize = true;
            lblNomeEvento.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblNomeEvento.ForeColor = Color.Black;
            lblNomeEvento.Location = new Point(8, 5);
            lblNomeEvento.Name = "lblNomeEvento";
            lblNomeEvento.Size = new Size(143, 18);
            lblNomeEvento.TabIndex = 9;
            lblNomeEvento.Text = "Nome do Evento:";
            // 
            // txtNomeEvento
            // 
            txtNomeEvento.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            txtNomeEvento.Location = new Point(8, 26);
            txtNomeEvento.Name = "txtNomeEvento";
            txtNomeEvento.Size = new Size(408, 29);
            txtNomeEvento.TabIndex = 8;
            // 
            // txtDescricaoEvento
            // 
            txtDescricaoEvento.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            txtDescricaoEvento.Location = new Point(8, 93);
            txtDescricaoEvento.Multiline = true;
            txtDescricaoEvento.Name = "txtDescricaoEvento";
            txtDescricaoEvento.Size = new Size(408, 152);
            txtDescricaoEvento.TabIndex = 12;
            // 
            // lblDescricaoEvento
            // 
            lblDescricaoEvento.AutoSize = true;
            lblDescricaoEvento.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblDescricaoEvento.ForeColor = Color.Black;
            lblDescricaoEvento.Location = new Point(8, 72);
            lblDescricaoEvento.Name = "lblDescricaoEvento";
            lblDescricaoEvento.Size = new Size(95, 18);
            lblDescricaoEvento.TabIndex = 13;
            lblDescricaoEvento.Text = "Descrição:";
            // 
            // lblImgEvento
            // 
            lblImgEvento.AutoSize = true;
            lblImgEvento.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblImgEvento.ForeColor = Color.Black;
            lblImgEvento.Location = new Point(8, 450);
            lblImgEvento.Name = "lblImgEvento";
            lblImgEvento.Size = new Size(160, 18);
            lblImgEvento.TabIndex = 19;
            lblImgEvento.Text = "Imagem do Evento:";
            // 
            // txtEnderecoEvento
            // 
            txtEnderecoEvento.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            txtEnderecoEvento.Location = new Point(8, 276);
            txtEnderecoEvento.Name = "txtEnderecoEvento";
            txtEnderecoEvento.Size = new Size(408, 29);
            txtEnderecoEvento.TabIndex = 14;
            // 
            // pbImgEvento
            // 
            pbImgEvento.BorderStyle = BorderStyle.FixedSingle;
            pbImgEvento.Image = Properties.Resources.pngwing_com;
            pbImgEvento.Location = new Point(8, 480);
            pbImgEvento.Name = "pbImgEvento";
            pbImgEvento.Size = new Size(408, 247);
            pbImgEvento.SizeMode = PictureBoxSizeMode.Zoom;
            pbImgEvento.TabIndex = 18;
            pbImgEvento.TabStop = false;
            pbImgEvento.Click += pbImgEvento_Click;
            // 
            // lblEnderecoEvento
            // 
            lblEnderecoEvento.AutoSize = true;
            lblEnderecoEvento.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblEnderecoEvento.ForeColor = Color.Black;
            lblEnderecoEvento.Location = new Point(8, 255);
            lblEnderecoEvento.Name = "lblEnderecoEvento";
            lblEnderecoEvento.Size = new Size(175, 18);
            lblEnderecoEvento.TabIndex = 15;
            lblEnderecoEvento.Text = "Endereço do Evento:";
            // 
            // dtpDataEvento
            // 
            dtpDataEvento.CustomFormat = "dd/MM/yyyy  hh:mm";
            dtpDataEvento.Format = DateTimePickerFormat.Custom;
            dtpDataEvento.Location = new Point(8, 349);
            dtpDataEvento.Name = "dtpDataEvento";
            dtpDataEvento.Size = new Size(200, 23);
            dtpDataEvento.TabIndex = 17;
            dtpDataEvento.Value = new DateTime(2023, 12, 4, 20, 39, 5, 0);
            // 
            // lblDataEvento
            // 
            lblDataEvento.AutoSize = true;
            lblDataEvento.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblDataEvento.ForeColor = Color.Black;
            lblDataEvento.Location = new Point(8, 325);
            lblDataEvento.Name = "lblDataEvento";
            lblDataEvento.Size = new Size(51, 18);
            lblDataEvento.TabIndex = 16;
            lblDataEvento.Text = "Data:";
            // 
            // lblCadastrar
            // 
            lblCadastrar.AutoSize = true;
            lblCadastrar.Font = new Font("Arial", 24F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            lblCadastrar.ForeColor = Color.FromArgb(111, 146, 0);
            lblCadastrar.Location = new Point(428, 31);
            lblCadastrar.Name = "lblCadastrar";
            lblCadastrar.Size = new Size(318, 36);
            lblCadastrar.TabIndex = 25;
            lblCadastrar.Text = "Cadastro de Evento";
            // 
            // btnCriarEvento
            // 
            btnCriarEvento.BackColor = Color.FromArgb(66, 151, 17);
            btnCriarEvento.FlatStyle = FlatStyle.Flat;
            btnCriarEvento.Font = new Font("Arial Rounded MT Bold", 20.25F, FontStyle.Italic, GraphicsUnit.Point);
            btnCriarEvento.ForeColor = Color.FromArgb(144, 218, 101);
            btnCriarEvento.Location = new Point(262, 904);
            btnCriarEvento.Name = "btnCriarEvento";
            btnCriarEvento.Size = new Size(139, 43);
            btnCriarEvento.TabIndex = 28;
            btnCriarEvento.Text = "Criar";
            btnCriarEvento.UseVisualStyleBackColor = false;
            btnCriarEvento.Click += btnCriarEvento_Click;
            // 
            // ofdEvento
            // 
            ofdEvento.FileName = "Imagem_Do_Evento";
            // 
            // lblEvento
            // 
            lblEvento.AutoSize = true;
            lblEvento.Font = new Font("Arial Narrow", 18F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            lblEvento.ForeColor = Color.FromArgb(111, 146, 0);
            lblEvento.Location = new Point(297, 106);
            lblEvento.Name = "lblEvento";
            lblEvento.Size = new Size(79, 29);
            lblEvento.TabIndex = 29;
            lblEvento.Text = "Evento";
            // 
            // lblCupom
            // 
            lblCupom.AutoSize = true;
            lblCupom.Font = new Font("Arial Narrow", 18F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            lblCupom.ForeColor = Color.FromArgb(111, 146, 0);
            lblCupom.Location = new Point(810, 106);
            lblCupom.Name = "lblCupom";
            lblCupom.Size = new Size(81, 29);
            lblCupom.TabIndex = 30;
            lblCupom.Text = "Cupom";
            // 
            // Cadastro_de_Eventos
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.FromArgb(254, 250, 224);
            ClientSize = new Size(1192, 985);
            Controls.Add(lblCupom);
            Controls.Add(lblEvento);
            Controls.Add(btnCriarEvento);
            Controls.Add(pnCupom);
            Controls.Add(pnCadEvento);
            Controls.Add(lblCadastrar);
            MaximizeBox = false;
            Name = "Cadastro_de_Eventos";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "Cadastro_de_Eventos";
            Load += Cadastro_de_Eventos_Load;
            pnCupom.ResumeLayout(false);
            pnCupom.PerformLayout();
            pnCadEvento.ResumeLayout(false);
            pnCadEvento.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)pbImgEvento).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Panel pnCupom;
        private Label lblNomeCupom;
        private TextBox txtNomeCupom;
        private TextBox txtDescricaoCupom;
        private Label lblDescricaoCupom;
        private Panel pnCadEvento;
        private CheckBox ckbCupom;
        private Label lblNomeEvento;
        private TextBox txtNomeEvento;
        private TextBox txtDescricaoEvento;
        private Label lblDescricaoEvento;
        private Label lblImgEvento;
        private TextBox txtEnderecoEvento;
        private PictureBox pbImgEvento;
        private Label lblEnderecoEvento;
        private DateTimePicker dtpDataEvento;
        private Label lblDataEvento;
        private Label lblCadastrar;
        private Button btnCriarEvento;
        private OpenFileDialog ofdEvento;
        private Label lblEvento;
        private Label lblCupom;
        private Label label3;
        private ComboBox cbbTipos;
        private DateTimePicker dtpValidadeCupom;
        private Label lblValidade;
        private TextBox txtCodigoCupom;
        private Label lblCodigo;
    }
}