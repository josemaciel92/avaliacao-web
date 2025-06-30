import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import { LoginPage } from "../../pages/loginPage";

const oLoginPage = new LoginPage();

Given("que acesso o portal Parabank", () => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})

Given("que realizo o login com credenciais validas {string} {string}", (usuario, senha) => {
    oLoginPage.realizarLoginParabank(usuario, senha)
})

Given("devo ser redirecionado para a home logada da aplicacao Parabank {string}", (headerLogado) => {
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




