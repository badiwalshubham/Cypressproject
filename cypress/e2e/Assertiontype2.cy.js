/// <reference types="cypress"/>

// Validation Or Checking 
// Assertion type 1: Explicit Assertion

it('Assertions Explicit', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

   cy.get('#query-btn')
   .should('contain', 'Button')
   .and('have.class', 'query-btn')
   .and('be.visible')
   .and('be.enabled')

   expect(true).to.be.true

   assert.equal(4, '4' , 'NOT EQUAL')
   assert.notEqual(4, '5' , 'NOT EQUAL')
});

 
