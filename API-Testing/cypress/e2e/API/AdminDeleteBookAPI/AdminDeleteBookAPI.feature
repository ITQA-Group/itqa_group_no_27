Feature: API Testing For Delete Book Operations

  Scenario: delete a non-existing book by admin

    Given The user authenticated as "admin"
    When The Post API request with fields
      | id  | title       | author     |
      | 5   | Test Book   | Admin User |
    When The user send DELETE request following id 99
    Then The response status must be 400