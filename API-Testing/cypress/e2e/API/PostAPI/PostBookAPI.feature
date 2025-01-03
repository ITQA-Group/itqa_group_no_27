Feature: API Testing to Insert Books Data

  Background:
    Given user logging into the system with authentication

    Scenario: Successfully adding a new book
    When the user sends a POST request to create a new book with the following details:
      | id  | title    | author            |
      | 1   | Harry Potter     | JK Rowling|
    Then the response status should be 201 
    And the responses should contain the inserted title and author
      | id  | title          | author          |
      | 1   | Harry Potter    | JK Rowling   |

  Scenario: Adding book with empty value
  When the user POST following details:
    | id  | title | author |
    | 2   |   | JK Rowling  |
  Then the response status should be 400
  And the responses should contain the inserted title and author
    | id | title | author |
    | 2  |       | JK Rowling |
 
Scenario: Adding a book with invalid data format
    When the user sends a POST request to create a new book with the following details:
      | id  | title       | author        |
      | abc | 3  | WA silva  |
    Then the response status should be 400