Feature: API Testing to Insert Books Data

  Background:
<<<<<<< HEAD:API-Testing/cypress/e2e/API/PostAPI/PostBookAPI.feature
    Given user logging into the system with authentication
=======
    Given admin is logged into the system
>>>>>>> devtest-praveen:API-Testing/cypress/e2e/API/PostAPI Admin/PostBookAdmin.feature

    Scenario: Successfully adding a new book
    When the admin sends a POST request to create a new book with the following details:
      | id  | title    | author            |
<<<<<<< HEAD:API-Testing/cypress/e2e/API/PostAPI/PostBookAPI.feature
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
    
    
=======
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
    
  
>>>>>>> devtest-praveen:API-Testing/cypress/e2e/API/PostAPI Admin/PostBookAdmin.feature
