import { Given, Then, And, When } from 'cypress-cucumber-preprocessor/steps';
import login from '../Login/login.cy';
import Books from '../Books/books.cy';

let response;

Given('admin logging into the system with authentication', () => {
  login.loginAuth('admin', 'password', { timeout: 10000 }).then((res) => {
    response = res;
    expect(response.status).to.eq(200); // Ensure successful login
  });
});

When('the admin sends a POST request to create a new book with the following details:', (dataTable) => {
  const book = dataTable.hashes()[0]; // Extract the first row of the data table
  cy.log('Sending POST request with book details:', book); // Debugging log
  Books.addBook(book).then((res) => {
    response = res; // Assign response to the global variable
    cy.log('Received response:', response); // Debugging log
  });
});

Then('The response must return a status code of {int}', (statusCode) => {
  cy.log('Validating response status:', response); // Debugging log
  expect(response).to.not.be.null; // Ensure response is not null
  expect(response).to.have.property('status'); // Ensure response has a status property
  expect(response.status).to.eq(statusCode); // Validate status code
});

And('the responses should contain the inserted title and author', (dataTable) => {
  const expectedData = dataTable.hashes()[0]; // Extract the expected data
  cy.log('Validating response body:', response.body); // Debugging log
  expect(response).to.have.property('body'); // Ensure response has a body property
  expect(response.body).to.have.property('title', expectedData.title); // Validate title
  expect(response.body).to.have.property('author', expectedData.author); // Validate author
});

And('the response should show {string}', (expectedStatusText) => {
  cy.log('Validating response status text:', response.statusText); // Debugging log
  expect(response).to.have.property('statusText'); // Ensure response has a statusText property
  expect(response.statusText).to.eq(expectedStatusText); // Validate statusText matches the expected value
});