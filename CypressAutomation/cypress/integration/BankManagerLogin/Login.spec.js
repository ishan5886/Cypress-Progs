/// <reference types="Cypress" />

/* ..............USING PAGE OBJECTS...................*/

import LoginPage from '../PageObjects/LoginPage'
const lp =  new LoginPage()

import AddCustPage from '../PageObjects/AddCustomer'
const ac =  new AddCustPage()



Given('I navigate to the website', () =>{

    lp.visit()    
    //cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
})

When('I click on Bank Manager Login Button', () =>{

    lp.loginBtn()
    // cy.get("button[type=submit]").click()



})

And('validate the page title', () =>{

    cy.title().should('be.equal', 'Protractor practice website - Banking App')

})

And('I click on Add Customer Button', () =>{

    ac.addCustbtnclick()

   
})

And('I entered', (datatable) =>{

    datatable.hashes().forEach(element => {

        ac.firstname(element.firstname)
        ac.lastname(element.lastname)
        ac.postcode(element.postcode)
        
    });

    

})

And('I click on Submit Button', () =>{

    ac.addCustBtn()

})

And('I validate Alert Text', () =>{

    cy.on('window:alert', (str) => {

           expect(str).to.contain('Customer added successfully')
    

})


})