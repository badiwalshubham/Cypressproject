/// <reference types="cypress"/>

// This will upload the file

it('FIle Upload Test', function(){

    cy.visit('https://trytestingthis.netify.app/')

    cy.get('#myfile').attachFile('example.json') // This will upload the file

})

// This will download the file

it('File Download Test', function(){

    cy.downloadFile('https://www.example.com/example.json', 'mydownloads', 'example.jpg')

})






