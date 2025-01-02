Feature: Login functionality testing

  Scenario: Successful login
    Given I visit the login page
    When I enter valid credentials
    Then I should see a success message

  Scenario: Failed login
    Given I visit the login page
    When I enter invalid credentials
    Then I should see an error message