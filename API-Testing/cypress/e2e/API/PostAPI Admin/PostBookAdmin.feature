Feature: API Testing to Insert Books Data

  Background:
    Given admin is logged into the system

    Scenario: Successfully adding a new book
    When the admin sends a POST request to create a new book with the following details:
      | id  | title    | author |
      | 1   | madolduwa     | martin|
    Then the response status should be 201 
    And the responses should contain the inserted title and author
      | id  | title          | author          |
      | 1   | madolduwa     | martin    |

  Scenario: Adding book with missing data
  When the admin sends a POST request to create a new book with the following details:
    | id  | title | author |
    | 2   |   |   |
  Then the response status should be 400
  And the responses should contain the inserted title and author
    | id | title | author |
    | 2  |       |  |


Scenario: Adding a book with invalid data format
    When the user sends a POST request to create a new book with the following details:
      | id  | title       | author        |
      | rrr | 2  | Wasity  |
    Then the response status should be 400
