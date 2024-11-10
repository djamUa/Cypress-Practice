/// <reference types="cypress"/>
class HomePage {
    get signInButton() {
        return cy.get('.header_signin');
    }

    open() {
        cy.visit('/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
    }

    openSignInForm() {
        this.signInButton.click();
        cy.contains('Login').should('have.text', 'Login');
    }
}

export default new HomePage();
