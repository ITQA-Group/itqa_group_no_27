Feature: JavaScript Confirm Testing

  Scenario: Verify "Click for JS Confirm" functionality with automatic OK action
    Given I visit "https://the-internet.herokuapp.com/javascript_alerts"
    When I click the "Click for JS Confirm" button
    Then I should see the alert message "I am a JS Confirm"
    And I accept the alert
    Then I should see the result "You clicked: Ok"
