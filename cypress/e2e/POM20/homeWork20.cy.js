import HomePage from "../../pageObjects/HomePage";
import SignInForm from "../../pageObjects/SignInForm";
import garagePage from "../../pageObjects/garagePage";
import expensesPage from "../../pageObjects/expensesPage";

describe('Hillel Auto Sign In Form', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentionals('vdtestqa@gmail.com', 'Qwerty1@');
    });
    it('Should add a car to the garage', () => {
        garagePage.addCar();
        cy.get('ul.car-list').should('exist');
    });

    it('expanses Fuel',() =>{
        expensesPage.addExpense();
    })
})
