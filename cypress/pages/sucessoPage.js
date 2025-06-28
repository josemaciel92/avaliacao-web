/// <reference types="cypress" />


export class SucessoPage {

    elements = {
        txtCheckout: "//h2[contains(text(),'Thank you for your order!')]"
    }

    validarMsgSucessoEcommerce(msg) {
        cy.xpath(this.elements.txtCheckout, { timeout: 30000 }).should("have.text", msg)
    }

}