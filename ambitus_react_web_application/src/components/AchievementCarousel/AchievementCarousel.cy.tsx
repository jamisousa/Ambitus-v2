import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "../../utils/contexts/globalThemeContext";
import AchievementCarousel from "./AchievementCarousel";

describe("AchievementCarousel", ()=>{ it("Should render the navigation bar with login links", () => {
    cy.mount(
      <ThemeProvider>
        <Router>
          <AchievementCarousel  />
        </Router>
      </ThemeProvider>
    );

    cy.contains("Iniciante Ambiental").should("exist");
  });
})