import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit the test page", () => {
  cy.visit("https://the-internet.herokuapp.com/add_remove_elements/"); // Replace with the actual path to your HTML file
});

When("I click the {string} button", (buttonText) => {
  cy.contains("button", buttonText).click();
});

Then("I should see a new {string} button", (buttonText) => {
  cy.get("#elements").find("button").contains(buttonText).should("be.visible");
});

Given("I have added an element", () => {
  cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
  cy.contains("button", "Add Element").click();
});

Then("the {string} button should be removed", (buttonText) => {
  cy.contains("button", buttonText).should("not.exist");
});
