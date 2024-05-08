/// <reference types="cypress"/>

before (function() {
    cy.fixture('example.json').as('test_data') 
})

it ('Read and write file', function() {

    cy.fixture('example.json').then((data) => {
        cy.log (data.name)
        cy.log (data.email)
    })

    cy.log(this.test_data.name)

})

// This will be use for read the file or Url

it('Read file using readFile()', function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })

})



// This will be use for write the file

it('Write file using writeFile()', function(){

   cy.writeFile

})

    
       









