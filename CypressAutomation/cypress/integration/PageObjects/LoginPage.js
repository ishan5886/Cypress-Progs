/// <reference types="Cypress" />

class LoginPage
{

    visit()
    {
        cy.visit("http://www.way2automation.com/angularjs-protractor/banking/#/login")

    }

    email(useremail)
    {
        const e1 = cy.get('input[name=Email]')
        e1.clear()
        e1.type(useremail)
        return this  // means this method belongs to the class
        
    }

    password(userpwd)
    {
        const p1 = cy.get('input[name=Password]')
        p1.clear()
        p1.type(userpwd)
        return this
    }

    loginBtn()
    {
        const button = cy.get('button[ng-click="manager()"]')
        
        //cy.get('button[type=submit]')
        button.click()
    }
}

    export default LoginPage
