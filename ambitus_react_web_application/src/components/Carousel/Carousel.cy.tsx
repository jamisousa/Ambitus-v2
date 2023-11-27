import { BrowserRouter as Router } from 'react-router-dom';
import IntroCarousel from './Carousel';
import { ThemeProvider } from '../../utils/contexts/globalThemeContext';

describe('<IntroCarousel />', () => {
  it('Should render accordingly', () => {
    cy.mount(
      <ThemeProvider>
        <Router>
          <IntroCarousel />
        </Router>
      </ThemeProvider>
    );
  });

  it('Should display correct texts.', () => {
    cy.mount(
      <ThemeProvider>
        <Router>
          <IntroCarousel />
        </Router>
      </ThemeProvider>
    );

    cy.contains('Encontre eventos e ações da comunidade!').should('exist');
    cy.contains('Encontre os eventos e ações da comunidade que estão acontecendo perto de você e participe daqueles que mais te engajam.').should('exist');

  });

  it('Should navigate to "/login" after the last slide', () => {
    cy.mount(
      <ThemeProvider>
        <Router>
          <IntroCarousel />
        </Router>
      </ThemeProvider>
    );

    cy.wait(1000); 
  });
});
