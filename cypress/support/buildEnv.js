const buildEnv = () => {
  //"Burlando" a API
  cy.intercept("POST", "/signin", {
    body: {
      id: 1000,
      nome: "Fake user",
      token: "Uma string muito grande que nao deveria ser aceita, mas vai",
    },
  }).as("signin");

  cy.intercept("GET", "/saldo", {
    body: [
      { conta_id: 999, conta: "Conta falsa 1", saldo: "100.00" },
      { conta_id: 9999, conta: "Conta falsa 2", saldo: "1000000.00" },
    ],
  }).as("saldo");
  cy.intercept("GET", "/contas", {
    body: [
      {id: 1, nome: "Conta falsa 1", visivel: true, usuario_id: 1},
      {id: 2, nome: "Conta falsa 2", visivel: true, usuario_id: 1},
    ],
  }).as("contas");

  cy.intercept('GET','/extrato/**', {
    body: [
      {
        "conta": "Conta para movimentacoes",
        "id": 1875487,
        "descricao": "Movimentacao para exclusao",
        "envolvido": "AAA",
        "observacao": null,
        "tipo": "DESP",
        "data_transacao": "2023-12-18T03:00:00.000Z",
        "data_pagamento": "2023-12-18T03:00:00.000Z",
        "valor": "-1500.00",
        "status": true,
        "conta_id": 2000641,
        "usuario_id": 44851,
        "transferencia_id": null,
        "parcelamento_id": null
      },
      {
        "conta": "Conta com movimentacao",
        "id": 1875488,
        "descricao": "Movimentacao de conta",
        "envolvido": "BBB",
        "observacao": null,
        "tipo": "DESP",
        "data_transacao": "2023-12-18T03:00:00.000Z",
        "data_pagamento": "2023-12-18T03:00:00.000Z",
        "valor": "-1500.00",
        "status": true,
        "conta_id": 2000642,
        "usuario_id": 44851,
        "transferencia_id": null,
        "parcelamento_id": null
      },
      {
        "conta": "Conta para saldo",
        "id": 1875489,
        "descricao": "Movimentacao 1, calculo saldo",
        "envolvido": "CCC",
        "observacao": null,
        "tipo": "REC",
        "data_transacao": "2023-12-18T03:00:00.000Z",
        "data_pagamento": "2023-12-18T03:00:00.000Z",
        "valor": "3500.00",
        "status": false,
        "conta_id": 2000643,
        "usuario_id": 44851,
        "transferencia_id": null,
        "parcelamento_id": null
      },
      {
        "conta": "Conta para saldo",
        "id": 1875490,
        "descricao": "Movimentacao 2, calculo saldo",
        "envolvido": "DDD",
        "observacao": null,
        "tipo": "DESP",
        "data_transacao": "2023-12-18T03:00:00.000Z",
        "data_pagamento": "2023-12-18T03:00:00.000Z",
        "valor": "-1000.00",
        "status": true,
        "conta_id": 2000643,
        "usuario_id": 44851,
        "transferencia_id": null,
        "parcelamento_id": null
      },
      {
        "conta": "Conta para saldo",
        "id": 1875491,
        "descricao": "Movimentacao 3, calculo saldo",
        "envolvido": "EEE",
        "observacao": null,
        "tipo": "REC",
        "data_transacao": "2023-12-18T03:00:00.000Z",
        "data_pagamento": "2023-12-18T03:00:00.000Z",
        "valor": "1534.00",
        "status": true,
        "conta_id": 2000643,
        "usuario_id": 44851,
        "transferencia_id": null,
        "parcelamento_id": null
      },
      {
        "conta": "Conta para extrato",
        "id": 1875492,
        "descricao": "Movimentacao para extrato",
        "envolvido": "FFF",
        "observacao": null,
        "tipo": "DESP",
        "data_transacao": "2023-12-18T03:00:00.000Z",
        "data_pagamento": "2023-12-18T03:00:00.000Z",
        "valor": "-220.00",
        "status": true,
        "conta_id": 2000644,
        "usuario_id": 44851,
        "transferencia_id": null,
        "parcelamento_id": null
      },
      {
        "conta": "Conta para extrato",
        "id": 1875492,
        "descricao": "Movimentacao para extrato 2",
        "envolvido": "GGG",
        "observacao": null,
        "tipo": "DESP",
        "data_transacao": "2023-12-18T03:00:00.000Z",
        "data_pagamento": "2023-12-18T03:00:00.000Z",
        "valor": "-220.00",
        "status": true,
        "conta_id": 2000644,
        "usuario_id": 44851,
        "transferencia_id": null,
        "parcelamento_id": null
      }
  ]
  })
};
export default buildEnv;
