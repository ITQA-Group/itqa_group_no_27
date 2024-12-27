import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Cypress.config("defaultCommandTimeout", 10000); // In milliseconds

Given("I visit the checkboxes page", () => {
  cy.visit('https://the-internet.herokuapp.com/checkboxes');
});

When("I check the first checkbox", () => {
    cy.get("input[type='checkbox']").first().check();
  });
  
  Then("the second checkbox should be checked", () => {
    // Intentional bug: Assert the state of the second checkbox instead of the first
    cy.get("input[type='checkbox']").last().should("be.checked");
  });
  
  When("I uncheck the second checkbox", () => {
    cy.get("input[type='checkbox']").last().uncheck();
  });
  
  Then("the first checkbox should be unchecked", () => {
    // Intentional bug: Assert the state of the first checkbox instead of the second
    cy.get("input[type='checkbox']").first().should("not.be.checked");
  });

