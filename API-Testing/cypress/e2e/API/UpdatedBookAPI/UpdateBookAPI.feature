Feature: API Testing to Update Books Data

  Background:
    And user logs in to the system with username "admin" and password "password" and authenticated

  Scenario: Successfully updating a book's title and author
    Given user post book details with ID 1
    When the user sends following details:
      | id | title       | author       |
      | 1  | New Title 1 | New Author 1 |
    Then the response status should be 200 status
    And the responses should contain the updated title and author
      | id | title       | author       |
      | 1  | New Title 1 | New Author 1 |

  Scenario:Updating a book with empty values
    Given user post book details with ID 1
    When the user sends following details:
      | id | title | author       |
      | 1  |       | New Author 1 |
    Then the response status should be 400 status
    And the response body show "Mandatory parameters should not be null"

  Scenario: Updating a book with the same title but a different author
    Given user post book details with ID 1
    When the user sends following details:
      | id | title       | author       |
      | 1  | Sample Book | New Author 2 |
    Then the response status should be 200 status
    And the response body show "Updated Successfully"
