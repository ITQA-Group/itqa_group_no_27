Feature: API Testing For Delete Book

    Scenario: Delete book by admin
        Given The Delete API request "http://localhost:7081/api/books/5" and user role "admin"
        When I send DELETE request
        Then The response status must be 200

    Scenario: Delete book by user
        Given The Delete API request "http://localhost:7081/api/books/6" and user role "user"
        When I send DELETE request
        Then The response status must be 403