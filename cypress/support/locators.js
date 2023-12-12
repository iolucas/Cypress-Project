const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME: '[data-test="menu-home"]',
        SETTINGS: '[data-test="menu-settings"]',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test="menu-movimentacao"]',
        EXTRATO: '[data-test="menu-extrato"]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SALVAR: '.btn',
        BTN_EDITAR: ':nth-child(1) > :nth-child(2) > :nth-child(1) > .far',
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        CONTA: '[data-test="conta"]',
        STATUS: '[data-test=status]',
        BTN_SALVAR: '.btn-primary'
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(., '${desc}')]/following-sibling::small[contains(., '${value}')]`,
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`,
        FN_XP_ALTERAR_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`,
        FN_XP_LINHA: desc => `//span[contains(., '${desc}')]/../../../..`
    },
    SALDO: 'tbody',
    MESSAGE: '.toast-message',
}

export default locators;