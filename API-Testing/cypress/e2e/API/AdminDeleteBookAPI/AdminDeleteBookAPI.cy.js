import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const baseUrl = Cypress.config('baseUrlAPI');

let response;

Given("The user authenticated as {string}", (username) => {
  const authHeader = `Basic ${btoa(username + ':' + "password")}`; // Create Basic Auth header

  return cy.request({
    method: 'OPTIONS', // Adjust this method based on your API
    url: `${baseUrl}`, // Adjust the URL if necessary
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false, // Continue even if the status code is not 2xx
  }).then((res) => {
    response = res; // Assign response to the variable
  });
});

When("The Post API request with fields", (dataTable) => {
  console.log(dataTable);
  const data = dataTable.hashes()[0];
  return cy.request({
    method: 'POST',
    url: `${baseUrl}/api/books`,
    body: data,
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false, 
  }).then((res) => {
    response = res;
    console.log(response)
    // Assign response to the variable
  });
});

When("The user send DELETE request following id {int}", (bookId) => {
  return cy.request({
    method: 'DELETE',
    url: `${baseUrl}/api/books/${bookId}`,
    failOnStatusCode: false // Continue even if the status code is not 2xx
  }).then((res) => {
    response = res; // Assign response to the variable after the DELETE request
  });
});

Then("The response status must be {int}", (statusCode) => {
  expect(response.status).to.eq(statusCode); // Ensure the response status is correct
});