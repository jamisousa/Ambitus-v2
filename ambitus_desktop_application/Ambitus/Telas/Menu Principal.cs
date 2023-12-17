using Entidades;
using Newtonsoft.Json;
using System.Configuration;
using System.Data;
using System.Net.Http.Headers;

namespace Ambitus.Telas
{
    public partial class MenuPrincipal : Form
    {
        #region Constructor

        public MenuPrincipal()
        {
            InitializeComponent();
        }

        #endregion

        #region Attributes

        Dados_Evento evento = new();
        List<Dados_Cupom> cupons = new();
        string urlEventos = "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/eventos/meuseventos";
        string token = ConfigurationManager.AppSettings["APIToken"];
        HttpClient httpClient = new();

        #endregion

        #region Load

        private void MenuPrincipal_Load(object sender, EventArgs e)
        {
            Popular_dgvEventos();
        }

        #endregion

        #region Methods

        public void Formatar_dgvEventos()
        {
            dgvEventos.Columns["titulo"].HeaderText = "Título";
            dgvEventos.Columns["tipo"].HeaderText = "Tipo";
            dgvEventos.Columns["descricao"].HeaderText = "Descrição";
            dgvEventos.Columns["data"].HeaderText = "Data";
            dgvEventos.Columns["titulo"].AutoSizeMode = DataGridViewAutoSizeColumnMode.DisplayedCells;
            dgvEventos.Columns["tipo"].AutoSizeMode = DataGridViewAutoSizeColumnMode.DisplayedCells;
            dgvEventos.Columns["descricao"].AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            dgvEventos.Columns["descricao"].MinimumWidth = 150;
        }

        private async void Popular_dgvEventos()
        {
            try
            {
                httpClient.DefaultRequestHeaders.Clear();
                httpClient.DefaultRequestHeaders.Add("Authorization", token);
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = await httpClient.GetAsync(urlEventos);

                if (response.IsSuccessStatusCode)
                {
                    var responseContent = await response.Content.ReadAsStringAsync();

                    var eventos = JsonConvert.DeserializeObject<List<Dados_Evento>>(responseContent);

                    dgvEventos.DataSource = eventos.Select(e => new
                    {
                        e.titulo,
                        e.tipo,
                        e.descricao,
                        e.data
                    }).ToList();

                    cupons = eventos.Where(e => e.cupom != null).Select(e => e.cupom).ToList();

                    foreach (Dados_Cupom cupom in cupons)
                    {
                        pnRecompensas.Controls.Add(CriarPanelCupom(cupom));
                    }

                    Formatar_dgvEventos();
                }
                else
                {
                    MessageBox.Show("Erro: " + response.ReasonPhrase, "Erro",
                        MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro: " + ex.Message, "Erro",
                MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private Panel CriarPanelCupom(Dados_Cupom cupom)
        {
            // Crie um novo Panel
            Panel panelCupom = new Panel();
            panelCupom.BorderStyle = BorderStyle.FixedSingle;
            panelCupom.Width = 800;
            panelCupom.Height = 100;

            // Adicione Labels ao Panel para exibir informações do cupom
            Label lblTitulo = new Label();
            lblTitulo.Width = 800;
            lblTitulo.Text = "Título: " + cupom.titulo;

            Label lblDescricao = new Label();
            lblDescricao.Width = 800;
            lblDescricao.Text = "Descrição: " + cupom.descricao;

            Label lblCodigo = new Label();
            lblCodigo.Width = 800;
            lblCodigo.Text = "Código: " + cupom.codigo;

            Label lblValidade = new Label();
            lblValidade.Width = 800;
            lblValidade.Text = "Validade: " + cupom.validade;

            // Defina as posições dos Labels dentro do Panel
            lblTitulo.Location = new Point(10, 10);
            lblDescricao.Location = new Point(10, 30);
            lblCodigo.Location = new Point(10, 50);
            lblValidade.Location = new Point(10, 70);

            // Adicione os Labels ao Panel
            panelCupom.Controls.Add(lblTitulo);
            panelCupom.Controls.Add(lblDescricao);
            panelCupom.Controls.Add(lblCodigo);
            panelCupom.Controls.Add(lblValidade);

            return panelCupom;
        }

        #endregion

        #region Events

        private void btnGerenciarEventos_Click(object sender, EventArgs e)
        {

        }

        private void btnCriarEvento_Click(object sender, EventArgs e)
        {
            Cadastro_de_Eventos cadEventos = new();
            cadEventos.Show();
        }



        #endregion

        private void btnReload_Click(object sender, EventArgs e)
        {
            Popular_dgvEventos();
        }
    }
}
