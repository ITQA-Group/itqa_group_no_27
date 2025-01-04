Feature: API Testing to Admin data

  Background:
    Given admin logging into the system with authentication

  Scenario: Successfully adding a new book
    When the admin sends a POST request to create a new book with the following details:
      | id  | title           | author       |
      | 5   | lion | tilwin  |
    Then The response must return a status code of 201
    And the responses should contain the inserted title and author
      | id  | title           | author       |
      | 5   | lion | tilwin  |

  Scenario: Adding book with missing values
    When the admin sends a POST request to create a new book with the following details:
      | id  | title           | author       |
      | 6   |                 | tilwin  |
    Then The response must return a status code of 400
    And the responses should contain the inserted title and author
      | id  | title           | author       |
      | 6   |                 | tilwin  |


    Scenario: Adding book with invalid values
    When the admin sends a POST request to create a new book with the following details:
      | id  | title           | author       |
      | true   |   3              | tilwin  |
    Then The response must return a status code of 400
    And the response should show "Bad Request"