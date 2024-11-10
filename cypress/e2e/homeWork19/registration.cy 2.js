/// <reference types="cypress"/>  


// 
describe('Registration Tests', () => {
  const email = `test${Date.now()}@example.com`;
  const invalidEmail = 'invalidemail';
  const password = 'Qwerty1@';
  const shortPassword = 'Qw1';
  const noDigitPassword = 'Qwerty@';
  const noUpperCasePassword = 'qwerty1@';
  const noLowerCasePassword = 'QWERTY1@';
  const longPassword = 'Qwerty1234567890@'; 
  const validPassword = 'ValidPass1@'

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
    cy.contains('Sign In').click();
    cy.contains('Registration').click();
  });

  it('Simple registration', () => {
    cy.get('#signupName').type('TestName');
    cy.get('#signupLastName').type('TestLastName');
    cy.get('#signupEmail').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('#signupRepeatPassword').type(password);
    cy.contains('Register').click();
  });

  it('Should show an error if Name is empty', () => {
    cy.get('#signupName').clear();
    cy.contains('Register').click({ force: true });
    cy.get('.invalid-feedback p').should('have.text', 'Name required');
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should show an error if Name length is less than 2 characters', () => {
    cy.get('#signupName').clear().type('A');
    cy.contains('Register').click({ force: true });
    cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should show an error if Name length is more than 20 characters', () => {
    cy.get('#signupName').clear().type('A'.repeat(21));
    cy.contains('Register').click({ force: true });
    cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should show an error if Name contains invalid characters', () => {
    cy.get('#signupName').clear().type('Invalid@Name!');
    cy.contains('Register').click({ force: true });
    cy.contains('Name is invalid').should('be.visible');
    cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should trim spaces in the Name field after submitting', () => {
    cy.get('#signupName').clear().type('  TestName  ');
    cy.contains('Register').click({ force: true });
    cy.wait(1000);
    cy.get('#signupName').invoke('val').should('equal', 'TestName');
  });
  

  it('Should show an error if Last name length is less than 2 characters', () => {
    cy.get('#signupLastName').clear().type('A');
    cy.contains('Register').click({ force: true });
    cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should show an error if Last name length is more than 20 characters', () => {
    cy.get('#signupLastName').clear().type('A'.repeat(21));
    cy.contains('Register').click({ force: true });
    cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should show an error if Last name contains invalid characters', () => {
    cy.get('#signupLastName').clear().type('Invalid@Name!');
    cy.contains('Register').click({ force: true });
    cy.contains('Last name is invalid').should('be.visible');
    cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should trim spaces in the Last name field', () => {
    cy.get('#signupLastName').clear().type('  TestLastName  ');
    cy.get('#signupLastName').invoke('val').should('equal', 'TestLastName');
  });

  it('Should show an error if Email is empty', () => {
    cy.get('#signupEmail').clear();
    cy.contains('Register').click({ force: true });
    cy.contains('Email required').should('be.visible');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should show an error if Email is incorrect (invalid format)', () => {
    cy.get('#signupEmail').clear().type('invalid-email.com');
    cy.contains('Register').click({ force: true });
    cy.contains('Email is incorrect').should('be.visible');
    cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should allow valid email', () => {
    cy.get('#signupEmail').clear().type(email);
    cy.contains('Register').click({ force: true });
    cy.contains('Email required').should('not.exist');
    cy.contains('Email is incorrect').should('not.exist');
    cy.get('#signupEmail').should('not.have.css', 'border-color', 'rgb(220, 53, 69)');
  });
  
    it('Should show an error if password is empty', () => {
      cy.get('#signupPassword').clear();
      cy.contains('Register').click({ force: true });
  
      cy.contains('Password required').should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)'); 
    });
  
    it('Should show an error if password is too short', () => {
      cy.get('#signupPassword').clear().type(shortPassword);
      cy.contains('Register').click({ force: true });
  
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  
    it('Should show an error if password does not contain a digit', () => {
      cy.get('#signupPassword').clear().type(noDigitPassword);
      cy.contains('Register').click({ force: true });
  
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  
    it('Should show an error if password does not contain an uppercase letter', () => {
      cy.get('#signupPassword').clear().type(noUpperCasePassword);
      cy.contains('Register').click({ force: true });
  
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  
    it('Should show an error if password does not contain a lowercase letter', () => {
      cy.get('#signupPassword').clear().type(noLowerCasePassword);
      cy.contains('Register').click({ force: true });
  
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  
    it('Should show an error if password is too long', () => {
      cy.get('#signupPassword').clear().type(longPassword);
      cy.contains('Register').click({ force: true });
  
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  
    it('Should register successfully with a valid password', () => {
      cy.get('#signupPassword').clear().type(validPassword);
      cy.contains('Register').click({ force: true });
    });
  it('Should show error if passwords do not match', () => {
    cy.get('#signupRepeatPassword').type('DifferentPassword');
    cy.get('button[type="button"]').should('be.disabled');
    cy.contains('Register').click({ force: true });
    cy.contains('Register').should('be.disabled');
  });

  it('Should show error if Re-enter password is empty', () => {
    cy.get('#signupRepeatPassword').clear();
    cy.get('button[type="button"]').should('be.disabled');
    cy.contains('Register').click({ force: true }); 
    cy.contains('Re-enter password required').should('be.visible');
    cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  it('Should enable the Register button when all fields are valid', () => {
    cy.get('#signupName').type('TestName');
    cy.get('#signupLastName').type('TestLastName');
    cy.get('#signupEmail').type(email);
    cy.get('#signupPassword').type(password);
    cy.get('#signupRepeatPassword').type(password);
    cy.get('button[type="button"]').should('not.be.disabled');
    cy.contains('Register').click();
  });
});

  

