describe('My First Test Suite' , function(){
it('Verify Page Title',function(){
    cy.visit('https://www.nopcommerce.com/en/demo')
    cy.title().should('eq', 'Store Demo - nopCommerce')
    
})
})


