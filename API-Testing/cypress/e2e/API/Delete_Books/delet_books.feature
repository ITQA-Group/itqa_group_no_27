Feature: Delete API Testing

  As a system, I want to allow only admin users to delete books while regular users are restricted.

  Scenario: Admin can delete a book
    Given I am an "admin" user
    And I have a valid book ID
    When I send a DELETE request to the API
    Then the response status code should be 200

  Scenario: User cannot delete a book
    Given I am a "user" user
    And I have a valid book ID
    When I send a DELETE request to the API
    Then the response status code should be 403
