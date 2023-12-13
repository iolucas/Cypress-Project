import loc from "./locators";

Cypress.Commands.add("login", (user, passwd) => {
  cy.visit("https://barrigareact.wcaquino.me/");
  cy.get(loc.LOGIN.USER).type(user);
  cy.get(loc.LOGIN.PASSWORD).type(passwd);
  cy.get(loc.LOGIN.BTN_LOGIN).click();
  cy.get(loc.MESSAGE).should("contain", "Bem vindo");
});

Cypress.Commands.add("resetApp", () => {
  cy.get(loc.MENU.SETTINGS).click();
  cy.get(loc.MENU.RESET).click();
});

Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: user,
            redirecionar: false,
            senha: passwd
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            return token
        })
})

Cypress.Commands.add("resetAPIRest", () => {
  cy.getToken("yonore2792@newcupon.com", "96523345").then(token => {
    cy.request({
      method: "GET",
      url: "/reset",
      headers: { Authorization: `JWT ${token}`},
    }).its('status').should('be.equal', 200)
  });
});
