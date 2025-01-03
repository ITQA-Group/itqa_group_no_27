import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the Dynamic Loading page', () => {
  cy.visit('https://the-internet.herokuapp.com/dynamic_loading');
});

When('the user clicks on the {string} link', (exampleLink) => {
  cy.contains(exampleLink).click();
});

When('the user clicks on the "Start" button', () => {
  cy.get('#start button').click();
});

Then('the loading spinner should be visible', () => {
  cy.get('#loading').should('be.visible');
});

Then('the text "Hello World!" should appear after loading', () => {
    cy.get('#finish', { timeout: 10000 }) // Increase timeout to 10 seconds
      .should('be.visible')
      .and('contain', 'Hello World!');
  });
