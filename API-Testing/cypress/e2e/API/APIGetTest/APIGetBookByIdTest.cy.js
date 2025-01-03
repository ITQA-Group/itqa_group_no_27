import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from '../Login/login.cy';
import Books from '../Books/books.cy';

let response;

Given('user is logged into the service', () => {
  login.loginAuth('user', 'password').then((res) => {
    response = res;
    expect(response.status).to.eq(200); 
  });
});

When('user sends a GET request to retrieve a book with ID {int}', (bookId) => {
    Books.getBookById(bookId).then((res) => {
      response = res;
    });
  });


Then('the response status should {int}', (statusCode) => {
  expect(statusCode).to.eq(response.status);
});

And('the response should contain the book data with ID {int}', (bookId) => {
  expect(response.body).to.have.property('id', bookId);
  expect(response.body).to.have.property('title'); 
  expect(response.body).to.have.property('author'); 
});

And('the response should contain the error message {string}', (expectedErrorMessage) => {
  expect(response.body).to.eq(expectedErrorMessage);
});