import Chip from './Chip';

describe('<Chip />', () => {
  const defaultProps = {
    title: 'Sample Chip',
    clickAction: cy.stub(),
    showCancelIcon: true,
    showBackground: true,
    isSelected: false,
  };

  it('Should render the chip with the provided props', () => {
    mount(<Chip {...defaultProps} />);
    cy.get('.chipsection').should('exist');
    cy.get('.chipbutton').should('exist').contains('Sample Chip');
    cy.get('.fa-xmark').should('exist');
  });

  it('Should call clickAction when the button is clicked', () => {
    mount(<Chip {...defaultProps} />);
    cy.get('.chipbutton').click().should(() => {
      expect(defaultProps.clickAction).to.be.calledOnce;
    });
  });

  it('Should apply background styles if showBackground prop is true', () => {
    mount(<Chip {...defaultProps} />);
    cy.get('.chipsection').should('have.class', 'chipbackground');
  });

  it('Should not apply background styles if showBackground prop is false', () => {
    const propsWithoutBackground = { ...defaultProps, showBackground: false };
    mount(<Chip {...propsWithoutBackground} />);
    cy.get('.chipsection').should('not.have.class', 'chipbackground');
  });

  it('Should be selected if isSelected prop is true', () => {
    const propsSelected = { ...defaultProps, isSelected: true };
    mount(<Chip {...propsSelected} />);
    cy.get('.chipbutton').should('have.class', 'selected');
  });

  it('Should not be selected if isSelected prop is false', () => {
    mount(<Chip {...defaultProps} />);
    cy.get('.chipbutton').should('not.have.class', 'selected');
  });
});
