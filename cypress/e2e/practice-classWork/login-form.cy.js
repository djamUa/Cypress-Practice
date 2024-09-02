/// <reference types="cypress" />

describe('example to-do app', () => {
 

        it ('display two'), () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get ('[data-test="password"]').type('qwerty');
      cy.contains('Login').click();
    }});
  
    