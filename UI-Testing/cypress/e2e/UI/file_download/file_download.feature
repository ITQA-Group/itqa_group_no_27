Feature: File Download Functionality
  As a user
  I want to download files from the file downloader page
  So that I can access the documents I need

  Scenario: Successfully download a specific file
    Given I am on the file download page
    When I click on the file "LakshmiResume.docx"
    Then the file should be downloaded successfully

  Scenario Outline: Download different file types
    Given I am on the file download page
    When I click on the file "<filename>"
    Then the file should be downloaded successfully

    Examples:
      | filename                        |
      | some-file.txt                   |
      | scan.doc.pdf                    |
      | random_data.txt                 |
      | Watermelon Radish_November.pdf  |