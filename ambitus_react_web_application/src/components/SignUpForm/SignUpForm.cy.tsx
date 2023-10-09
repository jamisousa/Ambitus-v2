import { BrowserRouter as Router } from 'react-router-dom';
import SignUpForm from './SignUpForm';

describe('<SignUpForm />', () => {
  it('Should render accordingly', () => {
    cy.mount(
      <Router>
        <SignUpForm />
      </Router>
    );
  });

  it('Should verify if information on screen was rendered correctly', ()=>{
    cy.mount(
      <Router>
        <SignUpForm />
      </Router>
    );
    cy.contains("Cadastrar").should('exist');
    cy.contains("Cadastrar com Google").should('exist');
  });

  it('Should toggle password visibility', () => {
    cy.mount(
      <Router>
        <SignUpForm />
      </Router>
    );

    //Validate if password field is there
    cy.get('[data-test="password-input"]').should('have.attr', 'type', 'password');

    //Simulate click on Faicon
    cy.get('[data-test="password-second-toggle"]').click();

    //Validate if password field is text
    cy.get('[data-test="password-input"]').should('have.attr', 'type', 'text');

    //Simulate another click on Faicon
    cy.get('[data-test="password-toggle"]').click();

    //Validate if password field is now a password field again
    cy.get('[data-test="password-input"]').should('have.attr', 'type', 'password');
  });

});
