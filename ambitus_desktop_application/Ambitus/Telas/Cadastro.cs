using Entidades;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace Ambitus.Telas
{
    public partial class Cadastro : Form
    {
        #region Constructor

        public Cadastro()
        {
            InitializeComponent();
        }

        #endregion

        #region Attributes

        Dados_Usuario cad = new();
        string responseContent = string.Empty;
        string url = "http://ec2-18-223-44-43.us-east-2.compute.amazonaws.com:8082/ambitus-ms/usuario/cadastro";
        HttpClient httpClient = new();
        //HttpResponseMessage response = new();

        #endregion

        public bool Preencher_Campos()
        {
            cad.nome = txtUsuario.Text;
            cad.idade = (DateTime.Now.Year - DateTime.Parse(dtpNascimento.Text).Year);
            cad.sexo = ckbFeminino.Checked ? "F" : "M";
            cad.email = txtEmail.Text;
            cad.senha = txtSenha.Text;

            if (cad.nome == string.Empty ||
                cad.idade == 0 ||
                cad.sexo == string.Empty ||
                cad.email == string.Empty ||
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

        public async void Cadastrar()
        {
            try
            {
                if (Preencher_Campos())
                {
                    using (httpClient)
                    {
                        var data = new
                        {
                            cad.nome,
                            cad.idade,
                            cad.sexo,
                            cad.email,
                            cad.senha
                        };

                        var jsonData = JsonSerializer.Serialize(data);
                        //HttpContent content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                        httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                        var response = await httpClient.PostAsync(url, new StringContent(jsonData, Encoding.UTF8, "application/json"));

                        //response = await httpClient.PostAsync(url, content);

                        if (response.IsSuccessStatusCode)
                        {
                            MessageBox.Show("Usuário cadastrado com sucesso!");

                            this.Close();
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

        private void btnCadastrar_Click(object sender, EventArgs e)
        {
            Cadastrar();
        }
    }
}
