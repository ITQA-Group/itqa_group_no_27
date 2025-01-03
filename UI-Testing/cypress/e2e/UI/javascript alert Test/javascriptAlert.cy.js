import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit {string}', (url) => {
  cy.visit(url);
});

When('I click the {string} button', (buttonText) => {
  cy.contains('button', buttonText, { matchCase: false }).click();
});

Then('I should see the alert message {string}', (message) => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.eq(message);
  });
});

Then('I accept the alert', () => {
  cy.on('window:alert', () => true); // Automatically accepts the alert
});

Then('I should see the result {string}', (resultText) => {
  cy.get('#result').should('have.text', resultText);
});
