import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from '../Login/login.cy';
import Books from '../Books/books.cy';

let response;

Given('user is logged into the service', () => {
  login.loginAuth('admin', 'password').then((res) => {
    response = res;
    expect(response.status).to.eq(200); 
  });
});

When('admin sends GET all request', () => {
  Books.getAllBooks().then((res) => {
    response = res;
  });
});

Then('response status can be {int}', (statusCode) => {
  //expect(response.status).to.eq(statusCode);
});

And('response should include', () => {
  expect(response.body).to.be.an('array').that.is.not.empty;
});