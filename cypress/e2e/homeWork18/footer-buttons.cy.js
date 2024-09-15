/// <reference types="cypress"/>  

describe('Footer Buttons and Links Tests', () => {  
    it.only('social button-link', () => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
      cy.get('.contacts_socials>a').eq(0);
      cy.get('.contacts_socials>a').eq(1);
      cy.get('.contacts_socials>a').eq(2);
      cy.get('.contacts_socials>a').eq(3);
      cy.get('.contacts_socials>a').eq(4);
    });
    it.only('social-link', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('ithillel.ua').should('be.visible');
        cy.contains('support@ithillel.ua').should('be.visible');

});
})