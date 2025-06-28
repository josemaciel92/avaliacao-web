/// <reference types="cypress" />


export class MenuPage {

    elements = {
     
    }

    validarNavegacaoMenu(menu) {
        cy.xpath(`//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and text()='${menu}']`, { timeout: 30000 }).click()
        cy.xpath(`//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module' and text()='${menu}']`, { timeout: 30000 }).should("have.text", menu)
    }

}