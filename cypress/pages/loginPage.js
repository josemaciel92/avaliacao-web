/// <reference types="cypress" />


export class LoginPage {

    elements = {
        inpUsuario: "input[name='username']",
        inpSenha: "input[name='password']",
        btnLogin: "button[type='submit']",
        txtHeader: "//*[@class='oxd-topbar-header-title']//h6",
        avatarLogado: "img[class='oxd-userdropdown-img']",
        inpUsuarioSauceDemo: "input[name='user-name']",
        inpSenhaSauceDemo: "input[name='password']",
        btnLoginSauceDemo: "input[name='login-button']"

    }

    realizarLoginOrangeHRM(usuario, senha) {
        cy.get(this.elements.inpUsuario, { timeout: 30000 }).type(usuario)
        cy.get(this.elements.inpSenha).type(senha)
        cy.get(this.elements.btnLogin).click()
    }

    validarLoginComSucesso(dadoHeaderLogado) {
        cy.xpath(this.elements.txtHeader, { timeout: 30000 }).should("have.text", dadoHeaderLogado)
        cy.get(this.elements.avatarLogado).should("be.visible")
    }

    realizarLoginSaucedemo(usuario, senha) {
        cy.get(this.elements.inpUsuarioSauceDemo, { timeout: 30000 }).type(usuario)
        cy.get(this.elements.inpSenhaSauceDemo).type(senha)
        cy.get(this.elements.btnLoginSauceDemo).click()
    }
}