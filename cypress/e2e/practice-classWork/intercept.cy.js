describe
cy.intercept('GET', '/api/todos').as('getTodos');
cy.visit('/dashboard');
cy.wait('@getTodos').its('response.statusCode').should('eq', 200);