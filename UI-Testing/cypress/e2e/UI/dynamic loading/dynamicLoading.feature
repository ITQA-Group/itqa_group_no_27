Feature: Dynamic Loading

  Background:
    Given the user is on the Dynamic Loading page

  Scenario: Verify content appears after clicking "Example 1"
    When the user clicks on the "Example 1" link
    And the user clicks on the "Start" button
    Then the loading spinner should be visible
    And the text "Hello World!" should appear after loading

  Scenario: Verify content appears after clicking "Example 2"
    When the user clicks on the "Example 2" link
    And the user clicks on the "Start" button
    Then the loading spinner should be visible
    And the text "Hello World!" should appear after loading
