Feature: Book deletion functionality

  Scenario: Book can be deleted with a valid ID
    Given I have a valid book ID
    When I send a DELETE request to the API
    Then I should see a 200 status code

  Scenario: Book cannot be deleted with an invalid ID
    Given I have an invalid book ID
    When I send a DELETE request to the API
    Then I should see a 404 status code
