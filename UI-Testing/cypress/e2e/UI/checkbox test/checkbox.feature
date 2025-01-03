Feature: Checkboxes
  As a user
  I want to interact with the checkboxes on the page
  So that I can verify and toggle their states

  Scenario: Verify the default state of checkboxes
    Given the user is on the Checkboxes page
    Then the first checkbox should be unchecked
    And the second checkbox should be checked

  Scenario: Toggle the state of checkboxes
    Given the user is on the Checkboxes page
    When the user clicks the first checkbox
    Then the first checkbox should be checked
    When the user clicks the second checkbox
    Then the second checkbox should be unchecked
