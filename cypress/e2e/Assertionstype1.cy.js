/// <reference types="cypress"/>

// Validation Or Checking 
// Assertion type 1: Implicit Assertion
 


it('Assertions Implicit', () => {
    
   cy.visit('https://example.cypress.io') 
   cy.contains("get").click() 
   
//    cy.get('#query-btn')
//    .should('contain', 'Button')
//    .should('have.class', 'query-btn')
//    .should('be.visible')
//    .should('be.enabled')

// we can use and also for multiple assertions instaed of using should multiple times

   cy.get('#query-btn')
   .should('contain', 'Button')
   .and('have.class', 'query-btn')
   .and('be.visible')
   .and('be.enabled')
});  










