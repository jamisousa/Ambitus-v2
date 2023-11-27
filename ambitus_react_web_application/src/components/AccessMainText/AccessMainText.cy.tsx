import { BrowserRouter as Router } from 'react-router-dom';
import AccessMainText from './AccessMainText';
import { ThemeProvider } from '../../utils/contexts/globalThemeContext';

describe("<AccessMainText />", () => {
  it("Should render accordingly", () => {
    cy.mount(
      <ThemeProvider><Router>
      <AccessMainText formType={["login"]} />
    </Router></ThemeProvider>
    );
  });

  it("Should verify if information on screen was rendered correctly", () => {
    cy.mount(
      <ThemeProvider><Router>
            <AccessMainText formType={["signup"]} />
    </Router></ThemeProvider>
    );
    cy.contains("Cadastrar").should("exist");
    cy.contains("Cadastrar com Google").should("exist");
  });

  
  });

