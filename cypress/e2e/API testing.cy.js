// test 1
describe('reqres GET users tests', () => {
  const request = {
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2',
    failOnStatusCode: false
  };

  it('response code should be 200', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
    })
  })
})

// test 2
describe('reqres POST user tests', () => {
  const bodyData = {
    "name": "morpheus",
    "job": "leader"
  };

  const request = {
    method: 'POST',
    url: 'https://reqres.in/api/users',
    body: bodyData,
    failOnStatusCode: false
  };

  it('complex post test', () => {
    cy.request(request).then(response => {
      assert.equal(201, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    })
  })
})

// test 3
describe('reqres PUT user tests', () => {
  const bodyData = {
    "name": "morpheus",
    "job": "zion resident"
  };

  const request = {
    method: 'PUT',
    url: 'https://reqres.in/api/users/2',
    body: bodyData,
    failOnStatusCode: false
  };

  it('complex put test', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    })
  })
})

// test 4
describe('reqres DELETE user tests', () => {
  const request = {
    method: 'DELETE',
    url: 'https://reqres.in/api/users/2',
    failOnStatusCode: false
  };

  it('complex delete test', () => {
    cy.request(request).then(response => {
      assert.equal(204, response.status);
    })
  })
})

// test 5
describe('reqres GET user wiht data tests', () => {
  const request = {
    url: 'https://reqres.in/api/users/2',
    failOnStatusCode: false
  };

  it('complex get deleted test', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      cy.log(response.body.data);
    })
  })
})

// test 6
describe('reqres GET SINGLE USER tests', () => {
  const request = {
    url: 'https://reqres.in/api/users/2',
    failOnStatusCode: false
  };

  const expectedBody = {
    data: {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg"
    },
    support: {
        url: "https://reqres.in/#support-heading",
        text: "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

  it('complex get deleted test', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.deepEqual(expectedBody, response.body);
      cy.log(response.body);
    })
  })
})

// test 7
describe('httpbin tests', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/headers',
    headers: {
      "customHeader": "customValue"
    },
    failOnStatusCode: false
  };

  it('test that header set correctly', () => {
    cy.request(request).then(response => {
      assert.equal(200, response.status);
      assert.equal("customValue", response.requestHeaders.customHeader);
    })
  })
})

// test 8
describe('reqres GET users tests', () => {
  const request = {
    method: 'GET',
    url: 'https://reqres.in/api/users?page=2',
    failOnStatusCode: false
  };

  it('test duration', () => {
    cy.request(request).then(response => {
      assert.isTrue(response.duration <= 150)
    })
  })
  
})

// test 9


// test 10



