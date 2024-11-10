describe('Hillel Auto Sign In Form', () => {
    beforeEach(() => {
        cy.visit('/', {
            auth: {
              username: 'guest',
              password: 'welcome2qauto',
            }
        });
        cy.contains('Sign In').click();
    });

    it('Successful login', () => {
        cy.get('#signinEmail').type('vdtestqa@gmail.com');
        cy.get('#signinPassword').type('Qwerty1@');
        cy.contains('Login').click();
        cy.get('h1').should('have.text', 'Garage');
    });

    it.only('Add Car', () => {
        cy.get('#signinEmail').type('vdtestqa@gmail.com');
        cy.get('#signinPassword').type('Qwerty1@');
        cy.contains('Login').click();
        cy.get('h1').should('have.text', 'Garage');
        cy.contains('Add car').should('be.visible').click(); 
        cy.get('#addCarMileage').type('150000');
        cy.get(".modal-footer .btn-primary").contains('Add').click();
    });

after(() => {
cy.get('.car-item').each((item) => {
    cy.wrap(item).find('.icon-edit').click();
    cy.get('.btn-outline-danger').click();
    cy.get('.btn-danger').click();
})
})
});
