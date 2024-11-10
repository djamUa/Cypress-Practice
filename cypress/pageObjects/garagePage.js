class GaragePage {
  
  addCar() {
      cy.contains('Add car').should('be.visible').click();
      cy.get('#addCarMileage').type('150000');
      cy.get(".modal-footer .btn-primary").contains('Add').click();
  }
}

export default new GaragePage();
