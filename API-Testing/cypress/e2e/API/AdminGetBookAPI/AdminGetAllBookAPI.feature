Feature: API Testing to Retrieve All Books

  Background:
    Given user is logged into the service

  Scenario: get all books by admin
    When admin sends GET all request
    Then response status can be 200
    And response should include