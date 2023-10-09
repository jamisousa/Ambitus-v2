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
});
