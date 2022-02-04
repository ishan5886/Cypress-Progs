/// <reference types="Cypress" />

class AddCustPage
{


    addCustbtnclick()
    {
        const e1 = cy.get('button[ng-click="addCust()"]')
        e1.click()
        return this  // means this method belongs to the class
        
    }

    firstname(fname)
    {
        const fn = cy.get('input[ng-model="fName"]')
        
        fn.type(fname)
        return this
    }



    lastname(lname)
    {
        const ln = cy.get('input[ng-model="lName"]')
        
        ln.type(lname)
        return this
    }

    postcode(pcode)
    {
        const pc = cy.get('input[ng-model="postCd"]')
        
        pc.type(pcode)
        return this
    }

    addCustBtn()
    {
        const button = cy.get('button[type=submit]')
        
        //cy.get('button[type=submit]')
        button.click()
    }
}

    export default AddCustPage
