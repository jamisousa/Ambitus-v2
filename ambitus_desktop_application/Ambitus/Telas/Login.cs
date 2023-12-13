using Entidades;
using System.Text;
using System.Text.Json;

namespace Ambitus.Telas
{
    public partial class Login : Form
    {
        #region Constructor

        public Login()
        {
            InitializeComponent();
        }

        #endregion

        #region Attributes

        Dados_Usuario cad = new();
        //string responseContent = string.Empty;
        string url = "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/usuario/login";
        HttpClient httpClient = new();
        //HttpResponseMessage response = new();

        #endregion

        private void lblCadastrar_Click(object sender, EventArgs e)
        {
            Cadastro cadastro = new();
            cadastro.ShowDialog();
        }

        public bool Preencher_Campos()
        {
            cad.email = txtUsuario.Text;
            cad.senha = txtSenha.Text;

            if (cad.email == string.Empty ||
                cad.senha == string.Empty)
            {
                MessageBox.Show("Verifique os campos e tente novamente!", "Aviso",
                MessageBoxButtons.OK, MessageBoxIcon.Error);

                return false;
            }
            else
            {
                return true;
            }
        }

        public async void Log_In()
        {
            try
            {
                if (Preencher_Campos())
                {
                    var data = new
                    {
                        cad.email,
                        cad.senha
                    };

                    string jsonData = JsonSerializer.Serialize(data);

                    using (httpClient)
                    {
                        //HttpContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                        var response = await httpClient.PostAsync(url, new StringContent(jsonData, Encoding.UTF8, "application/json"));

                        if (response.IsSuccessStatusCode)
                        {
                            MessageBox.Show("Login realizado!");

                            this.Close();

                            Menu_Principal menu = new Menu_Principal();
                            menu.ShowDialog();
                        }
                        else
                        {
                            MessageBox.Show("Erro: " + response.ReasonPhrase);
                        }
                    }
                }
                else
                {
                    return;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
                return;
            }


        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            Log_In();
        }
    }
}