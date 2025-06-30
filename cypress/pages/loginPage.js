/// <reference types="cypress" />


export class LoginPage {

    elements = {
        inpUsuario: "input[name='username']",
        inpSenha: "input[name='password']",
        btnLogin: "input[type='submit']",
        txtWelcome: "//b[contains(text(),'Welcome')]",
        inpUsuarioSauceDemo: "input[name='user-name']",
        inpSenhaSauceDemo: "input[name='password']",
        btnLoginSauceDemo: "input[name='login-button']"

    }

    realizarLoginParabank(usuario, senha) {
        cy.get(this.elements.inpUsuario, { timeout: 60000 }).type(usuario)
        cy.get(this.elements.inpSenha).type(senha)
        cy.get(this.elements.btnLogin).click()
    }

    validarLoginComSucesso(dadoHeaderLogado) {
        cy.xpath(this.elements.txtWelcome, { timeout: 30000 }).should("have.text", dadoHeaderLogado)
    }

    realizarLoginSaucedemo(usuario, senha) {
        cy.get(this.elements.inpUsuarioSauceDemo, { timeout: 30000 }).type(usuario)
        cy.get(this.elements.inpSenhaSauceDemo).type(senha)
        cy.get(this.elements.btnLoginSauceDemo).click()
    }
}