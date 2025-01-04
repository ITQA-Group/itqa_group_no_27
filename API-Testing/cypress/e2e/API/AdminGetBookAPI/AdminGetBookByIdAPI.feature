Feature: get by id admin

  Background:
    Given admin login to the system

  Scenario: get by id admin with valid id
    When admin send get by id 1
    Then response status equal to 200
    And respone should include with id 1