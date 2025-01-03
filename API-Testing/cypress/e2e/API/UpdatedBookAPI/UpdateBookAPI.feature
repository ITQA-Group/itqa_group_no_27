Feature: API Testing to Update Books Data

  Background:
    And user logs in to the system with username "admin" and password "password" and authenticated

  Scenario: Successfully updating a book's title and author
    Given the user post book data along with an ID 1
    When the user updates the following data:
      | id | title       | author       |
      | 1  | New Title 1 | New Author 1 |
    Then the response status should be 200 status
    And the responses should contain the updated title and author
      | id | title       | author       |
      | 1  | New Title 1 | New Author 1 |

  Scenario:Updating a book with empty values
    Given the user post book data along with an ID 1
    When the user updates the following data:
      | id | title | author       |
      | 1  |       | New Author 1 |
    Then the response status should be 400 status
    And the response body show "Mandatory parameters must not be null"

  Scenario: Updating a book with the same title but a different author
    Given the user post book data along with an ID 1
    When the user updates the following data:
      | id | title       | author       |
      | 1  | Sample Book | Changed Author |
    Then the response status should be 200 status
    And the response body show "Updated Successfully"
