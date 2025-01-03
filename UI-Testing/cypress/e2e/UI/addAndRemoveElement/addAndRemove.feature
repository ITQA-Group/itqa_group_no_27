Feature: Add and Delete Elements

  Scenario: Add a new element
    Given I visit the test page
    When I click the "Add Element" button
    Then I should see a new "Delete" button

  Scenario: Delete an element
    Given I have added an element
    When I click the "Delete" button
    Then the "Delete" button should be removed
