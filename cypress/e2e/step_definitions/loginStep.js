import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import { LoginPage } from "../../pages/loginPage";

const oLoginPage = new LoginPage();

Given("que acesso o portal OrangeHRM", () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

Given("que realizo o login com credenciais validas {string} {string}", (usuario, senha) => {
    oLoginPage.realizarLoginOrangeHRM(usuario, senha)
})

Given("devo ser redirecionado para a home logada da aplicacao OrangeHRM {string}", (headerLogado) => {
    oLoginPage.validarLoginComSucesso(headerLogado)
})

Given("que acesso o portal saucedemo", () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit("https://www.saucedemo.com/")
})

Given("que realizo o login na aplicacao {string} {string}", (usuario, senha) => {
    oLoginPage.realizarLoginSaucedemo(usuario, senha)
})




