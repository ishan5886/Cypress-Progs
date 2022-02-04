Feature: Bank Manager Login

    I want to validate Banking Scenarios

    Background:
        Given I navigate to the website


    Scenario: Login as Bank Manager
        
        When I click on Bank Manager Login Button
        And validate the page title


    Scenario: Add a Customer
        When I click on Bank Manager Login Button
        And validate the page title
        And I click on Add Customer Button
        And I entered
            |firstname | lastname | postcode |
            | Ishan    | Dhaliwal | 122017   |
        And I click on Submit Button
        And I validate Alert Text
    
        

