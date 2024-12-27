Feature: Dropdown Functionality

  Scenario: Verify selecting an option from the dropdown
    Given I visit the dropdown page
    When I select Option 2
    Then the dropdown should display "Option 2"
