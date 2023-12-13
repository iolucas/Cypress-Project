/// <reference types="cypress" />

describe("Should test at a functional level", () => {
  before(() => {});
  beforeEach(() => {});

  it("Should create an account", () => {
    cy.request({
      method: "POST",
      url: "https://barrigarest.wcaquino.me/signin",
      body: {
        email: "yonore2792@newcupon.com",
        redirecionar: false,
        senha: "96523345",
      },
    }).its("body.token").should("not.be.empty")
      .then((token) => {
        cy.request({
          url: "https://barrigarest.wcaquino.me/contas",
          method: "POST",
          headers: {
            Authorization: `JWT ${token}`
          },
          body: {
            nome: "Conta via APIrest",
          },
        }).then((res) => console.log(res));
      });
  });

  it("Should update an account", () => {});

  it("Alterar uma conta", () => {});

  it("Should not create an account with same name", () => {});

  it("Should create a transaction", () => {});

  it("Should get balance", () => {});

  it("Should remove a transaction", () => {});
});
