Feature: Cookies feature in Creatio CRM application
    As a user of the Creatio CRM application, I want to use this feature file to verify all the test scenarios related to the cookies page.

    Scenario: Verify the cookies page is displayed correctly.
        Given Launch the Createio CRM application
        Then Cookies page should be displayed

    Scenario: Verify cookies pop-up content.
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Cookies pop-up content should be displayed as below
            """
            We may use cookies and similar technologies to collect information about the ways you interact with and use the website, to support and enhance features and functionality, to monitor performance, to personalize content and experiences, for marketing and analytics, and for other lawful purposes
            """
    Scenario: Verify cookies pop-up logos.
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify Cookies pop-up logos

    Scenario: Verify cookies pop-up switch buttons.
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify Cookies pop-up switch buttons

    Scenario: Verify cookies pop-up selection buttons
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify Cookies pop-up selection buttons

    Scenario: Verify the Show Details link in the cookies pop-up.
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify show details link is displayed
        When User clicks on the show details link
        Then Cookies pop-up should be displayed in expanded view

    Scenario: Verify the cookies pop-up is closed.
        Given Launch the Createio CRM application
        Then Cookies page should be displayed
        And Verify Cookies pop-up selection buttons
        When User clicks on the "allow all" button
        Then Cookies pop-up should be closed
