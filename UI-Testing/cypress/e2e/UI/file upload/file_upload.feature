Feature: File Upload Functionality
  As a user of the application
  I want to upload files
  So that I can share documents in the system

  Scenario: Successfully upload a valid file
    Given I am on the file upload page
    When I select a file "test.txt" to upload
    And I click the upload button
    Then the file should be uploaded successfully

  Scenario: Upload file using drag and drop
    Given I am on the file upload page
    When I drag and drop a file "test.txt" into the upload area
    Then the file should be uploaded successfully

  Scenario: Attempt to upload without selecting a file
    Given I am on the file upload page
    When I click the upload button without selecting a file
    Then I should see an error message