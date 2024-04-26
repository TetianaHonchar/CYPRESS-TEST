// describe("Our first block of tests", () => {
// //     it("LMS Site development test", () => {
// //   // cypress code
// //     cy.visit("https://www.edu.goit.global/account/login");
// //     // Знаходимо інпут з поштою та вводимо email
// //     cy.get("#user_email").type("user888@gmail.com");
// //     // Знаходимо інпут з паролем та вводимо пароль
// //     cy.get("#user_password").type("1234567890");
// //     // Натискаємо кнопку "Log in"
// //     cy.get("[type=submit]").click();
// //     // Перевіряємо, що кнопка має текст "Log in"
// //     cy.get('[type="submit"]').should("have.text", "Log in");
// //     // Перевіряємо колір кнопки
// //     cy.get('[type="submit"]').should("have.css", "background-color", "rgb(255, 107, 10)");
// //     });

//     // it("scrollIntoView test", () => {
//     //     cy.visit("https://www.edu.goit.global/account/login");

//     //     cy.get('#user_email').type("user888@gmail.com");

//     //     cy.get("#user_password").type("1234567890");

//     //     cy.get("[type='submit']").click();

//     //     cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
//     // });

//   });

// describe("login test", () => {
//     it("admin login", () => {
//       cy.visit("https://www.edu.goit.global/account/login");
  
//       cy.signIn("user888@gmail.com", "1234567890");
//     });
  
//       it("user login", () => {
//       cy.visit("https://www.edu.goit.global/account/login");
  
//       cy.signIn("nadia.tsomko.98@gmail.com", "Nadia_Tsomko78");
//     });
  
//       it("manager login", () => {
//       cy.visit("https://www.edu.goit.global/account/login");
  
//       cy.signIn("mrdusty@duniakeliling.com", "mrdusty@duniakeliling.com");
//     });
//   });

//ДЗ1
// describe("login test", () => {
//     it("user login", () => {
//       cy.visit("https://www.edu.goit.global/account/login");
  
//       cy.signIn("user888@gmail.com", "1234567890");

//       cy.get("[type='submit']").click();

//       cy.get("[data-element-type='burger-menu']").click();

//       cy.contains("Log out").click();

//     });  
//   });

// //ДЗ2
// describe("login test", () => {
//   it("user login", () => {
//     cy.visit("https://www.edu.goit.global/account/login");

//     cy.signIn("testowyqa@qa.team", "QA!automation-1");

//     cy.get("[type='submit']").click();

//     cy.get("[data-element-type='burger-menu']").click();

//     cy.contains("Log out").click();

//   });  
// });
  


// import { Login } from "../pages/Login";

// const LoginPage = new Login();

// describe("Page object example", () => {
//   it("login page test", () => {
// // visit page
//     LoginPage.navigate();
// // check title
//     LoginPage.validateLoginTitle();
// // check inputs
//     LoginPage.validateInputs();
// // check button
//     LoginPage.validateButton();
// // check link
//     LoginPage.validatePasswordLink();
//   });
// });

//ДЗ3
// import { Login } from "../pages/Login";
// import { Logout } from "../pages/Logout";

// const LoginPage = new Login();
// const LogoutPage = new Logout();

// describe("login test", () => {
//   it("user login", () => {
//     LoginPage.navigate();

//     LoginPage.userLogin();

//     LogoutPage.getLogout ();
    
//     LogoutPage.userLoguot ();
//   });  
// });


// ТЕСТУВАННЯ API
// describe('httpbin tests', () => {
//   it('response code should be 200', () => {
//     cy.request('https://httpbin.org').then(response => {
//       const status = response.status;

//       assert.equal(200, status);
//     })
//   })
// })
// Приклад зафейленого тесту
// describe('httpbin tests', () => {
//   const request = {
//     url: 'https://httpbin.org/non-existing-url',
//     failOnStatusCode: false
//   };

//   it('response code should be 200', () => {
//     cy.request(request).then(response => {
//       const status = response.status;

//       assert.equal(200, status);
//     })
//   })
// })
// describe('httpbin tests', () => {
//   const request = {
//     method: 'POST',
//     url: 'https://httpbin.org/post',
//     failOnStatusCode: false
//   };

//   it('response code should be 200', () => {
//     cy.request(request).then(response => {
//       assert.equal(200, response.status);
//     })
//   })
// })
// describe('httpbin tests', () => {
//   const request = {
//     method: 'GET',
//     url: 'https://httpbin.org/post',
//     failOnStatusCode: false
//   };

//   it('response code should be 405', () => {
//     cy.request(request).then(response => {
//       assert.equal(405, response.status);
//     })
//   })
// })
// describe('httpbin tests', () => {
//   const request = {
//     url: 'https://httpbin.org/get',
//     qs: {
//       "key": "value"
//     },
//     failOnStatusCode: false
//   };

//   it('response value should be value', () => {
//     cy.request(request).then(response => {
//       assert.equal("value", response.body.args.key);
//     })
//   })
// })

// // Тіло запиту у форматі JSON
// describe('httpbin tests', () => {
//   const bodyData = {
//     bodyKey: "bodyValue"
//   };

//   const request = {
//     method: 'POST',
//     url: 'https://httpbin.org/post',
//     body: bodyData,
//     failOnStatusCode: false
//   };

//   it('complex post test', () => {
//     cy.request(request).then(response => {
//       assert.equal(200, response.status);
//       assert.notStrictEqual(bodyData, response.body.data);
//     })
//   })
// })

// // Додавання заголовків
// describe('httpbin tests', () => {
//   const request = {
//     method: 'GET',
//     url: 'https://httpbin.org/headers',
//     headers: {
//       "customHeader": "customValue"
//     },
//     failOnStatusCode: false
//   };

//   it('test that header set correctly', () => {
//     cy.request(request).then(response => {
//       assert.equal(200, response.status);
//       assert.equal("customValue", response.requestHeaders.customHeader);
//     })
//   })
// })

// // Рандомізація даних
// describe('httpbin tests', () => {

//   it('test random ids', () => {
//     for(let i = 0; i < 10; i++) {
//       const randomId = getRandomInt(10000000);

//       const request = {
//         url: 'https://httpbin.org/headers',
//         id: randomId
//       }

//       cy.request(request).then(response => {
//         assert.isTrue(response.status == 200)
//       })
//     }
//   })
// })

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
