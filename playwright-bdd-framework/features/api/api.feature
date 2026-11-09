Feature: API testing in GitHub application
  As a User of GitHub, I want to validate all the Git repository-related API validations in this feature file.

  Background: Initialize API request context.
    Given API request context is initialized

  Scenario: Request to create a duplicate repository within GitHub
    When User sends a "POST" request with an endpoint "/user/repos" to create a repository with the name "PlaywrightRepo"
    Then User should receive a response with status code 422
    And User should receive status message "Unprocessable Entity"
    And User should receive a body having a "message" as "Repository creation failed."
    And User should receive a body having "message" datatype as "string"

  Scenario: Request to create a valid repository within GitHub
    When User sends a "POST" request with an endpoint "/user/repos" to create a repository with the name "ValidPlaywrightRepo"
    Then User should receive a response with status code 201
    And User should receive status message "Created"
    And User should receive a body having a "name" as "ValidPlaywrightRepo"
    And User should receive a body having "name" datatype as "string"

  Scenario: Request to update a valid repository within GitHub
    When User sends a "PATCH" request with an endpoint "/repos/bharathtechacademy05/ValidPlaywrightRepo" to update the repository description as "Updated description"
    Then User should receive a response with status code 200
    And User should receive status message "OK"
    And User should receive a body having a "description" as "Updated description"
    And User should receive a body having "description" datatype as "string"

  Scenario: Request to get a valid repository within GitHub
    When User sends a "GET" request with an endpoint "/repos/bharathtechacademy05/ValidPlaywrightRepo"
    Then User should receive a response with status code 200
    And User should receive status message "OK"
    And User should receive a body having a "name" as "ValidPlaywrightRepo"
    And User should receive a body having "name" datatype as "string"

  Scenario: Request to delete a valid repository within GitHub
    When User sends a "DELETE" request with an endpoint "/repos/bharathtechacademy05/ValidPlaywrightRepo"
    Then User should receive a response with status code 204
    And User should receive status message "No Content"