import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const path = require('path');

Given('I am on the file download page', () => {
  cy.visit('https://the-internet.herokuapp.com/download');
});

When('I click on the file {string}', (filename) => {
  cy.get('a').contains(filename).click();
});

Then('the file should be downloaded successfully', (filename) => {
  const downloadsFolder = Cypress.config('downloadsFolder');
  
  // Log values for debugging
  console.log('Downloads Folder:', downloadsFolder);
  console.log('Filename:', filename);

  // Ensure both values are strings
  const filePath = path.join(String(downloadsFolder), String(filename));

  // Wait for the file to be downloaded and verify its existence
  cy.readFile(filePath, { timeout: 15000 }).should('exist');

  // Additional verification step using task
  cy.task('isFileDownloaded', filePath).then((downloaded) => {
    expect(downloaded).to.be.true;
  });
});
