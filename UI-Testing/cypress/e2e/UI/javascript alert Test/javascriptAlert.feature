Feature: JavaScript Alerts Testing

  Scenario: Verify "Click for JS Alert" functionality
    Given I visit "https://the-internet.herokuapp.com/javascript_alerts"
    When I click the "Click for JS Alert" button
    Then I should see the alert message "I am a JS Alert"
    And I accept the alert
    Then I should see the result "You successfully clicked an alert"
