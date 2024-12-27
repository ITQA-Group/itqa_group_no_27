Feature: Checkboxes Functionality

  Scenario: Verify checking the first checkbox
    Given I visit the checkboxes page
    When I check the first checkbox
    Then the second checkbox should be checked

  Scenario: Verify unchecking the second checkbox
    Given I visit the checkboxes page
    When I uncheck the second checkbox
    Then the first checkbox should be unchecked

