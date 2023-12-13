import { BrowserRouter as Router } from 'react-router-dom';
import AccessNavbar from './AccessNavbar';
import { ThemeProvider } from '../../utils/contexts/globalThemeContext';

describe("<AccessNavbar />", () => {
  it("Should render the navigation bar with login links", () => {
    cy.mount(
      <ThemeProvider>
        <Router>
          <AccessNavbar navbarType={"clean"} />
        </Router>
      </ThemeProvider>
    );

    cy.contains("Login").should("exist");
    cy.contains("Sign Up").should("exist");
  });

  it("Should render the navigation bar with other links", () => {
    cy.mount(
      <ThemeProvider>
        <Router>
          <AccessNavbar navbarType={"clean"} />
        </Router>
      </ThemeProvider>
    );

    cy.contains("Home").should("exist");
    cy.contains("About").should("exist");
    cy.contains("Contact").should("exist");
  });
});
