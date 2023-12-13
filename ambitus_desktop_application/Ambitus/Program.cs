namespace Ambitus.Telas
{
    internal static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            ApplicationConfiguration.Initialize();

            Login login = new();
            Menu_Principal menu = new Menu_Principal();

            DialogResult loginResult = login.ShowDialog();

            while (loginResult == DialogResult.OK)
            {
                // The login was successful; show the main menu form
                login.Hide(); // Hide the login form
                menu.ShowDialog(); // Show the main menu as a dialog
                login.Close(); // Close the login form

                // Reopen the login form to allow another login
                login = new();
                loginResult = login.ShowDialog();
            }

            if (loginResult == DialogResult.OK)
            {
                menu.Show();
            }
        }
    }
}