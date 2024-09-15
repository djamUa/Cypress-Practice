/// <reference types="cypress"/>  

describe('Header Buttons Tests', () => {  
  it.only('test1', () => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    cy.get ('nav').find('button');
    cy.get ('.header-link').not('a');
    cy.get ('.header_signin');
    cy.contains('Sign up');

  })
})