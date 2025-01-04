import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import 'cypress-file-upload'

Given('I am on the file upload page', () => {
  cy.visit('https://the-internet.herokuapp.com/upload');
});

When('I select a file {string} to upload', (fileName) => {
  cy.fixture(fileName).then(fileContent => {
    cy.get('input[type="file"]').attachFile({
      fileContent,
      fileName: fileName,
      mimeType: 'text/plain'
    });
  });
});

When('I click the upload button', () => {
  cy.get('button').contains('Upload').click();
});

When('I drag and drop a file {string} into the upload area', (fileName) => {
  cy.fixture(fileName).then(fileContent => {
    cy.get('.dashed-upload-area').attachFile(
      {
        fileContent,
        fileName: fileName,
        mimeType: 'text/plain'
      },
      {
        subjectType: 'drag-n-drop'
      }
    );
  });
});

When('I click the upload button without selecting a file', () => {
      cy.get('#file-submit').click();
});

Then('the file should be uploaded successfully', () => {
  // Add assertions based on your application's success indicators
  cy.get('.success-message').should('be.visible');
  // or check if file appears in list
  cy.get('.uploaded-files-list').should('contain', 'test.txt');
});

Then('I should see an error message', () => {
  cy.get('.error-message')
    .should('be.visible')
    .and('contain', 'No file chosen');
});

// Support commands
beforeEach(() => {
  // Clear any previous uploads
  cy.clearUploadedFiles();
});

// You'll need to add this to cypress/support/commands.js
Cypress.Commands.add('clearUploadedFiles', () => {
  // Implementation depends on your application
  // This could be an API call or database cleanup
});