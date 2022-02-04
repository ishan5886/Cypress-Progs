/// <reference types="Cypress" />

describe('Locating Elements' , function(){
    it('Verify Types of Locators',function(){
        
        cy.visit('https://frontend.nopcommerce.com/')
        // cy.title().should('eq', 'Store Demo - nopCommerce')

        cy.get(' body > main > div > iframe').within(fr => {

            const [myIFrame] = fr.get()
            myIFrame.contentDocument.querySelector('input[id="small-searchterms"]').value = "Apple Macbook Pro 13-inch"
            myIFrame.contentDocument.querySelector('button[class="button-1 search-box-button"]').click();
        // cy.get(".product-box-add-to-cart-button").click()
        // cy.get('#product_enteredQuantity_4').clear().type('1')
        // cy.get('#add-to-cart-button-4').click()
        // cy.get('#topcartlink > a > .cart-label').click()
        // cy.wait(3000)
        // cy.get(".product-subtotal").contains("$7,200.00");
        })
        
    })

    //cy.get('locator').should('be.visible').should('be.enabled') -verfiy if elements is visible and enabled
    //cy.title() - get title of the page
    //cy.title().should('eq', 'page title to be verified')  - Verify page title

    // Radio Button :-  
    //should('be.checked')  - Verify if radio button is checked or not
    // should('not.be.checked') - Verify if radio button is unchecked
    // cy.get('locator').click() - Select radio button



    //Checkboxes :- 
    
    // cy.get('checkbox-locator').check() - check checkbox
    // cy.get('checkbox-locator').check().should('be.checked').and('have.value','Cricket') //Additional validational conditions
    // cy.get('checkbox-locator').uncheck().should('not.be.checked')
    // cy.get('checkbox-locator').check(['C1', 'C2', 'C3'])  //If multiple checkboxes to select


    //Dropdowns:-

    // cy.get('dropdown locator').select('dropdown value').should('have.value', 'Android')

    //Multi Select Dropdown:-

    // cy.get('drpdwn locator').click()
    // cy.get('common locator value in all elements like classname').contains('English(value1)').click()
    // cy.get('common locator value in all elements like classname').contains('Japanese(value2)').click()

    // Dropdown where Type and select value- Searchable dropdown

    // cy.get('drpdwn locator').click({force: true}) - click dropdown - force click if element hidden by another element
    //cy.get('search field locator').type('value') - Locate search field and type in value
    // cy.get('search field locator').type('{enter}') - Press ENTER KEY


    // Alerts:-

    // General Validation Alert

        // cy.get('input[type=submit]').click() - Click on Go Button
        // cy.on('window:alert', (str) => {

         //   expect(str).to.equal('Alert Message')
       // })

    // Confirmation Alert

     // cy.on('window:confirm', (str) => {

         //   expect(str).to.equal('Alert Message')
       // })


    // Navigate forward :- cy.go('forward')
    // Navigate backward :- cy.go('back')

    
    //MouseOver
    // cy.contains('').trigger('mouseover')
     // cy.contains('').should.('be.hidden').invoke('show')



})