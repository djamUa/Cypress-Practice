/// <reference types="cypress" />

describe('Home Page', () => {
    it.only ('test 1'), () => {
  cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  cy.get ('nav').type('button');
}});

