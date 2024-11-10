/// <reference types="cypress"/>
class SignInForm {
    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get loginButton() {
        return cy.contains('Login');
    }

    loginWithCredentionals(email,password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.loginButton.click();
    }
    triggerErrorOnEmailField() {
        this.emailField.focus().blur();
    }
    triggerErrorOnPasswordField() {
        this.passwordField.focus().blur();
    }
}

export default new SignInForm();