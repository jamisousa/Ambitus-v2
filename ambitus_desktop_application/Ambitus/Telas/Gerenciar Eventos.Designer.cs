namespace Ambitus.Telas
{
    partial class Gerenciar_Eventos
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
            pbImgEvento = new PictureBox();
            lblDadosEvento = new Label();
            lblNomeEvento = new Label();
            lblDescricaoEvento = new Label();
            lblEnderecoEvento = new Label();
            lblDataEvento = new Label();
            btnAlterarEvento = new Button();
            btnFinalizarEvento = new Button();
            ((System.ComponentModel.ISupportInitialize)pbImgEvento).BeginInit();
            SuspendLayout();
            // 
            // pbImgEvento
            // 
            pbImgEvento.Image = Properties.Resources.pngwing_com;
            pbImgEvento.Location = new Point(231, 104);
            pbImgEvento.Name = "pbImgEvento";
            pbImgEvento.Size = new Size(408, 247);
            pbImgEvento.SizeMode = PictureBoxSizeMode.Zoom;
            pbImgEvento.TabIndex = 19;
            pbImgEvento.TabStop = false;
            // 
            // lblDadosEvento
            // 
            lblDadosEvento.AutoSize = true;
            lblDadosEvento.Font = new Font("Arial", 24F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            lblDadosEvento.ForeColor = Color.FromArgb(111, 146, 0);
            lblDadosEvento.Location = new Point(289, 31);
            lblDadosEvento.Name = "lblDadosEvento";
            lblDadosEvento.Size = new Size(279, 36);
            lblDadosEvento.TabIndex = 26;
            lblDadosEvento.Text = "Dados do Evento";
            // 
            // lblNomeEvento
            // 
            lblNomeEvento.AutoSize = true;
            lblNomeEvento.Font = new Font("Arial", 18F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            lblNomeEvento.ForeColor = Color.FromArgb(111, 146, 0);
            lblNomeEvento.Location = new Point(327, 354);
            lblNomeEvento.Name = "lblNomeEvento";
            lblNomeEvento.Size = new Size(199, 28);
            lblNomeEvento.TabIndex = 27;
            lblNomeEvento.Text = "Nome do Evento";
            // 
            // lblDescricaoEvento
            // 
            lblDescricaoEvento.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblDescricaoEvento.ForeColor = Color.Black;
            lblDescricaoEvento.Location = new Point(61, 410);
            lblDescricaoEvento.Name = "lblDescricaoEvento";
            lblDescricaoEvento.Size = new Size(766, 138);
            lblDescricaoEvento.TabIndex = 28;
            lblDescricaoEvento.Text = "Descrição:";
            // 
            // lblEnderecoEvento
            // 
            lblEnderecoEvento.AutoSize = true;
            lblEnderecoEvento.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblEnderecoEvento.ForeColor = Color.Black;
            lblEnderecoEvento.Location = new Point(231, 559);
            lblEnderecoEvento.Name = "lblEnderecoEvento";
            lblEnderecoEvento.Size = new Size(91, 18);
            lblEnderecoEvento.TabIndex = 29;
            lblEnderecoEvento.Text = "Endereço:";
            // 
            // lblDataEvento
            // 
            lblDataEvento.AutoSize = true;
            lblDataEvento.Font = new Font("Arial Rounded MT Bold", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblDataEvento.ForeColor = Color.Black;
            lblDataEvento.Location = new Point(231, 612);
            lblDataEvento.Name = "lblDataEvento";
            lblDataEvento.Size = new Size(51, 18);
            lblDataEvento.TabIndex = 30;
            lblDataEvento.Text = "Data:";
            // 
            // btnAlterarEvento
            // 
            btnAlterarEvento.BackColor = Color.FromArgb(66, 151, 17);
            btnAlterarEvento.FlatStyle = FlatStyle.Flat;
            btnAlterarEvento.Font = new Font("Arial Rounded MT Bold", 20.25F, FontStyle.Italic, GraphicsUnit.Point);
            btnAlterarEvento.ForeColor = Color.FromArgb(144, 218, 101);
            btnAlterarEvento.Location = new Point(231, 677);
            btnAlterarEvento.Name = "btnAlterarEvento";
            btnAlterarEvento.Size = new Size(139, 43);
            btnAlterarEvento.TabIndex = 31;
            btnAlterarEvento.Text = "Alterar";
            btnAlterarEvento.UseVisualStyleBackColor = false;
            // 
            // btnFinalizarEvento
            // 
            btnFinalizarEvento.BackColor = Color.FromArgb(221, 35, 35);
            btnFinalizarEvento.FlatStyle = FlatStyle.Flat;
            btnFinalizarEvento.Font = new Font("Arial Rounded MT Bold", 20.25F, FontStyle.Italic, GraphicsUnit.Point);
            btnFinalizarEvento.ForeColor = Color.FromArgb(218, 101, 101);
            btnFinalizarEvento.Location = new Point(500, 677);
            btnFinalizarEvento.Name = "btnFinalizarEvento";
            btnFinalizarEvento.Size = new Size(139, 43);
            btnFinalizarEvento.TabIndex = 32;
            btnFinalizarEvento.Text = "Finalizar";
            btnFinalizarEvento.UseVisualStyleBackColor = false;
            btnFinalizarEvento.Click += btnFinalizarEvento_Click;
            // 
            // Gerenciar_Eventos
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.FromArgb(254, 250, 224);
            ClientSize = new Size(892, 752);
            Controls.Add(btnFinalizarEvento);
            Controls.Add(btnAlterarEvento);
            Controls.Add(lblDataEvento);
            Controls.Add(lblEnderecoEvento);
            Controls.Add(lblDescricaoEvento);
            Controls.Add(lblNomeEvento);
            Controls.Add(lblDadosEvento);
            Controls.Add(pbImgEvento);
            Name = "Gerenciar_Eventos";
            Text = "Gerenciar_Eventos";
            ((System.ComponentModel.ISupportInitialize)pbImgEvento).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private PictureBox pbImgEvento;
        private Label lblDadosEvento;
        private Label lblNomeEvento;
        private Label lblDescricaoEvento;
        private Label lblEnderecoEvento;
        private Label lblDataEvento;
        private Button btnAlterarEvento;
        private Button btnFinalizarEvento;
    }
}