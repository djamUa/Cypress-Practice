class ExpensesPage {
  
    addExpense() {
      cy.contains('Add fuel expense').click();

    }
}
  export default new ExpensesPage();
  