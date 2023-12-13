/// <reference types="cypress" />

describe("Should test at a functional level", () => {
  let token;
  before(() => {
    cy.getToken("yonore2792@newcupon.com", "96523345").then(tkn => {
      token = tkn;
    });
  });
  beforeEach(() => {
    cy.resetAPIRest()
  });

  it("Should create an account", () => {
    cy.request({
      url: "https://barrigarest.wcaquino.me/contas",
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
      },
      body: {
        nome: "Conta via APIrest",
      },
    }).as("response");
    cy.get("@response").then((res) => {
      expect(res.status).to.be.equal(201);
      expect(res.body).to.have.property("id");
      expect(res.body).to.have.property("nome", "Conta via APIrest");
    });
  });

  it("Should update an account", () => {});

  it("Alterar uma conta", () => {});

  it("Should not create an account with same name", () => {});

  it("Should create a transaction", () => {});

  it("Should get balance", () => {});

  it("Should remove a transaction", () => {});
});
