let userType = '';
let bookId = null;
let response = null;

Given('I am an {string} user', (type) => {
  userType = type; 
});

Given('I have a valid book ID', () => {
  bookId = 3; 
});

When('I send a DELETE request to the API', () => {
  let username = '';
  let password = '';

  // Set credentials based on user type
  if (userType === 'admin') {
    username = 'admin';
    password = 'password';
  } else if (userType === 'user') {
    username = 'user';
    password = 'password';
  }

  cy.request({
    method: 'DELETE',
    url: `http://localhost:7081/api/books${bookId}`,
    auth: {
      username: username,
      password: password,
    },
    failOnStatusCode: false, 
  }).then((res) => {
    response = res; 
  });
});

Then('the response status code should be {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode); 
});
