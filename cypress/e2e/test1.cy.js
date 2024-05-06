/// <reference types="cypress" />

// What we have Learned 
// 1. How to visit a page
//  Using cy.visit() we can navigate throiugh the pages.
// 2. How to interact with elements
//  Using cy.get() we can interact with elements on the page.
// 3. How to type in input fields
//  Using cy.get().type() we can type in input fields.
// 4. How to click on elements
//  Using cy.contains().click() we can click on elements.
// 5. How to use assertions
//  Using cy.contains() we can assert if an element is present on the page.

// Here is an exapmple down below.  Using basic concepts of Cypress.

it('Google Search', () => {
    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Automation Step by Step{Enter}')

    cy.contains('Google Search').click()
 });

