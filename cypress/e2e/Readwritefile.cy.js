/// <reference types="cypress"/>

before (function() {
    cy.fixture('example.json').as('test_data') 
})

it ('Read and write file', function() {

    cy.fixture('example.json').then((data) => {
        cy.log (data.name)
        cy.log (data.email)
    })

})







