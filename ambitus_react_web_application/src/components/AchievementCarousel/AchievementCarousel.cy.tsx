import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "../../utils/contexts/globalThemeContext";
import AchievementCarousel from "./AchievementCarousel";

describe("AchievementCarousel", ()=>{ it("Should render the achievement Iniciante Ambiental.", () => {
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

describe("AchievementCarousel", ()=>{ it("Should render the achievement Ativista Compromissado.", () => {
  cy.mount(
    <ThemeProvider>
      <Router>
        <AchievementCarousel  />
      </Router>
    </ThemeProvider>
  );

  cy.contains("Ativista Compromissado").should("exist");
});
})

describe("AchievementCarousel", ()=>{ it("Should render the achievement Ecológico Experiente.", () => {
  cy.mount(
    <ThemeProvider>
      <Router>
        <AchievementCarousel  />
      </Router>
    </ThemeProvider>
  );

  cy.contains("Ecológico Experiente").should("exist");
});
})

describe("AchievementCarousel", ()=>{ it("Should render the achievement Protetor da Floresta.", () => {
  cy.mount(
    <ThemeProvider>
      <Router>
        <AchievementCarousel  />
      </Router>
    </ThemeProvider>
  );

  cy.contains("Protetor da Floresta").should("exist");
});
})

describe("AchievementCarousel", ()=>{ it("Should render the achievement Explorador Nato.", () => {
  cy.mount(
    <ThemeProvider>
      <Router>
        <AchievementCarousel  />
      </Router>
    </ThemeProvider>
  );

  cy.contains("Explorador Nato").should("exist");
});
})

describe("AchievementCarousel", ()=>{ it("Should render the achievement Consciente sempre.", () => {
  cy.mount(
    <ThemeProvider>
      <Router>
        <AchievementCarousel  />
      </Router>
    </ThemeProvider>
  );

  cy.contains("Consciente sempre").should("exist");
});
})

describe("AchievementCarousel", ()=>{ it("Should render the achievement Reciclagem de respeito.", () => {
  cy.mount(
    <ThemeProvider>
      <Router>
        <AchievementCarousel  />
      </Router>
    </ThemeProvider>
  );

  cy.contains("Reciclagem de respeito").should("exist");
});
})



