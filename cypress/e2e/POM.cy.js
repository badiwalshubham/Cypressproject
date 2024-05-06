/// <reference types="cypress"/>

// Page Object Model Design Principle in Cypress
// Here is an example of POM by doing Login in an MongoDb Login Page.

// import { LoginPage } from  './pages/login_page.cy'

// const loginPage = new LoginPage() // LoginPage function is called here for taking the data.


it('Page Object Model', () => {
 
    // using the functions from LoginPage class

    // cy.visit('https://account.mongodb.com/account/login?signedOut=true')

    // loginPage.enterUsername(username)
    // loginPage.clickNext()
    // loginPage.enterPassword(password )
    // loginPage.clickLogin()


    // Below is the code for the same functionality without using POM

    cy.visit('https://account.mongodb.com/account/login?signedOut=true')  

    cy.get('#username').type('shubhambadiwal8520@gmail.com')

    cy.get('footer > .lg-ui-button-0000 > .leafygreen-ui-16tr4y').click()

    cy.get('#lg-passwordinput-1').type('Wealth@778899')

    cy.get('footer > .lg-ui-button-0000 > .leafygreen-ui-16tr4y').click()
    
});


