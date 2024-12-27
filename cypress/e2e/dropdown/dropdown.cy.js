import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit the dropdown page", () => {
  cy.visit('https://the-internet.herokuapp.com/dropdown');
});

When("I select Option 2", () => {
  cy.get("#dropdown").select("Option 2"); 
});

Then("the dropdown should display {string}", (option) => {
  cy.get("#dropdown").should("have.value", "2"); 
});