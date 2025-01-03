Feature: API Testing For Delete Book Operations

  Scenario: delete a book by admin

    Given The user authenticated as "admin"
    When The Post API request with fields
      | id  | title       | author     |
      | 8   | Test Book   | Admin User |
    When The user send DELETE request following id 8
    Then The response status must be 200

    Scenario: delete a book by user

    Given The user authenticated as "user"
    When The Post API request with fields
      | id  | title       | author     |
      | 9   | Test Book2   | Admin User2 |
    When The user send DELETE request following id 9
    Then The response status must be 200