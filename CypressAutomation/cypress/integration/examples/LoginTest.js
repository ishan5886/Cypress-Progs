/// <reference types="Cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('Custom Command Suite' , function(){
    it('Login Test',function()
    {
        const lp=new LoginPage()
        lp.visit()
        lp.email('admin@yourstore.com')
        lp.password('admin')
        lp.loginBtn()
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
        
    })
})