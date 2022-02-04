/// <reference types="Cypress" />

describe('Custom Command Suite' , function(){
    it('Login Test',function()
    {

        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')



    })

    it('Add Customer Test',function()
    {
        // Login Script

        cy.login('admin@yourstore.com','admin')
      
        // Script for Add Customer

        cy.log("Customer added...")


    })

    it('Edit Customer Test',function()
    {
        //Login Script

        cy.login('admin@yourstore.com','admin')

        // Script for editing cutomer

        cy.log(" Customer Edited.....")


    })
})