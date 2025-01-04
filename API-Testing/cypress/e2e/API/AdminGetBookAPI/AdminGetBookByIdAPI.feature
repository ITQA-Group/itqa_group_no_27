Feature: get by id admin

  Background:
    Given admin login to the system

  Scenario: get by id admin with valid id
    When admin send get by id 1
    Then response status equal to 200
    And respone should include with id 1

  Scenario: Attempt to retrieve a book with an invalid ID
    When admin send get by id 9999
    Then response status equal to 404
    And respone should include error message "Book not found"