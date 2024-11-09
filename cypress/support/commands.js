// cypress/support/commands.js

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  
    cy.contains('Sign In').click();
  
    // Вводим email и пароль
    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password);
  
    // Нажимаем кнопку входа
    cy.contains('Sign In').click();
  
    // Проверка на успешный логин, например по URL или наличию элемента на странице
    cy.url().should('include', '/dashboard');
  });
  