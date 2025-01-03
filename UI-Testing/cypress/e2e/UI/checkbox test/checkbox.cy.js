import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the Checkboxes page', () => {
  cy.visit('https://the-internet.herokuapp.com/checkboxes', { timeout: 10000 });
});

Then('the first checkbox should be unchecked', () => {
  cy.get('input[type="checkbox"]').first().should('not.be.checked');
});

Then('the second checkbox should be checked', () => {
  cy.get('input[type="checkbox"]').eq(1).should('be.checked');
});

When('the user clicks the first checkbox', () => {
  cy.get('input[type="checkbox"]').first().click();
});

When('the user clicks the second checkbox', () => {
  cy.get('input[type="checkbox"]').eq(1).click();
});

Then('the first checkbox should be checked', () => {
  cy.get('input[type="checkbox"]').first().should('be.checked');
});

Then('the second checkbox should be unchecked', () => {
  cy.get('input[type="checkbox"]').eq(1).should('not.be.checked');
});
