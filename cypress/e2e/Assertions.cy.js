/// <reference types="cypress"/>

// Validation Or Checking

it('Assertions', () => {
    
  
   cy.visit('https://example.cypress.io') 
   cy.contains("get").click() 
   
   cy.get('#query-btn').should('contain', 'Button')
}); 










