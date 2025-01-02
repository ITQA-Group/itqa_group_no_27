import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit the login page", () => {
  cy.visit("https://the-internet.herokuapp.com/login");
});

When("I enter valid credentials", () => {
  cy.get("#username").type("tomsmith"); // Enter valid username
  cy.get("#password").type("SuperSecretPassword!"); // Enter valid password
  cy.get(".radius").click(); // Click the login button
});

Then("I should see a success message", () => {
  cy.get("#flash").should("contain.text", "You logged into a secure area!");
});

When("I enter invalid credentials", () => {
  cy.get("#username").type("invalidUser"); // Enter invalid username
  cy.get("#password").type("invalidPass"); // Enter invalid password
  cy.get(".radius").click(); // Click the login button
});

Then("I should see an error message", () => {
  cy.get("#flash").should("contain.text", "Your username is invalid!");
});
