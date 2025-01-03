let bookId;
let response;

function getBasicAuthHeader(username, password) {
  const credentials = `${username}:${password}`;
  const encodedCredentials = btoa(credentials); 
  return `Basic ${encodedCredentials}`;
}

// Scenario 1: Admin/user can delete a book successfully with valid ID
Given('I have a valid book ID', function () {
  bookId = 5;
});

When('I send a DELETE request to the API', function () {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:7081/api/books/${bookId}`,
    headers: {
      Authorization: getBasicAuthHeader('user', 'password'), 
    },
    failOnStatusCode: false, 
  }).then((res) => {
    response = res; 
  });
});

Then('I should see a 200 status code', function () {
  expect(response.status).to.eq(200); 
});

// Scenario 2: Admin cannot delete a book with invalid ID
Given('I have an invalid book ID', function () {
  bookId = 999999; 
});

When('I send a DELETE request to the API', function () {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:7081/api/books/${bookId}`, 
    headers: {
      Authorization: getBasicAuthHeader('user', 'password'), 
    },
    failOnStatusCode: false, 
  }).then((res) => {
    response = res; 
  });
});

Then('I should see a 404 status code', function () {
  expect(response.status).to.eq(404); 
});
