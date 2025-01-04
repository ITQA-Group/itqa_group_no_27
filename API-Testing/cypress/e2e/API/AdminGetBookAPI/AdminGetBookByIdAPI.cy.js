import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from '../Login/login.cy';
import Books from '../Books/books.cy';

let response;

Given('admin login to the system', () => {
  login.loginAuth('admin', 'password').then((res) => {
    response = res;
    expect(response.status).to.eq(200); 
  });
});

When('admin send get by id {int}', (bookId) => {
    Books.getBookById(bookId).then((res) => {
      response = res;
    });
  });


Then('response status equal to {int}', (statusCode) => {
  expect(statusCode).to.eq(response.status);
});

And('respone should include with id {int}', (bookId) => {
  expect(response.body).to.have.property('id', bookId);
  expect(response.body).to.have.property('title'); 
  expect(response.body).to.have.property('author'); 
});
