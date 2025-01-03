import { Given, Then, And } from 'cypress-cucumber-preprocessor/steps';
import login from '../Login/login.cy';
import Books from '../Books/books.cy';

let response;

Given('user logging into the system with authentication', () => {
  login.loginAuth('user', 'password').then((res) => {
    response = res;
    expect(response.status).to.eq(200);  
  });
});


When('the user POST following details:', (dataTable) => {
  const book = dataTable.hashes()[0]; 
  Books.addBook(book).then((res) => {
    response = res;
  });
  console.log("data",response)
});

Then('the response status should be {int}', (statusCode) => {
  console.log("data",statusCode)
  expect(statusCode).to.eq(response.status);
});

And('the responses should contain the inserted title and author', (dataTable) => {
  const expectedData = dataTable.hashes()[0];
  expect(response.body.title).to.eq(expectedData.title);
  expect(response.body.author).to.eq(expectedData.author);
});

When('the user sends a POST request to create a new book with the following details:', (dataTable) => {
  const book = dataTable.hashes()[0]; 
  Books.addBook(book).then((res) => {
    response = res;
  });
  console.log("data",response)
});


Then('the response status should be 400', () => {
  expect(response.status).to.equal(400);
});