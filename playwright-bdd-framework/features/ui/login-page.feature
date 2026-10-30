Feature: Login feature in Createio CRM application
    As a user of the Creatio CRM application, I want to use this feature file to verify all the test scenarios related to the login page.

    Scenario: Verify login pages launched successfully
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify Cookies pop-up selection buttons
        When User clicks on the "allow all" button
        Then Cookies pop-up should be closed
        And Login page should be displayed

    Scenario Outline: Verify login functionality with a "<scenario>"
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify Cookies pop-up selection buttons
        When User clicks on the "allow all" button
        Then Cookies pop-up should be closed
        And Login page should be displayed
        When User enters "<username>" and "<password>"
        And User clicks on the "login" button
        Then Login should be "<result>"

        Examples:
            | scenario | username                       | password                | result  |
            | valid    | bharattechacademy5@outlook.com | BharathTechAcademy#1234 | success |
            | invalid  | invalid@test.com               | invalid123              | failure |

    Scenario: Verify the forgot password feature
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify Cookies pop-up selection buttons
        When User clicks on the "allow all" button
        Then Cookies pop-up should be closed
        And Login page should be displayed
        When User enters username "bharattechacademy5@outlook.com"
        And Click on the forgot Password link
        Then Forgot password confirmation message should be displayed

    Scenario: Verify social media login options available on the login page
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify Cookies pop-up selection buttons
        When User clicks on the "allow all" button
        Then Cookies pop-up should be closed
        And Login page should be displayed
        Then Social media login options should be available




