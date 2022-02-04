/// <reference types="Cypress" />

describe('WebTable Ops' , function(){
    it('WeBDriver Operations ',function(){

        cy.visit("http://testautomationpractice.blogspot.com/")

        //Check value presence anywhere in table
        cy.get('table[name=BookTable]').scrollIntoView().contains('td','Learn Selenium').should('be.visible')

        // Check value presence in specific row and column

        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($ele,index,$list) => 
        {

            const text=$ele.text()
            if(text.includes("Amod"))
            {

                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname)
                {

                    const bookName = bname.text()
                    expect(bookName).to.equal("Master In Java")
                })
            }
        })

    })

})


// table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)

