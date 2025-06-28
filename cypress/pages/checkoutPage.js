/// <reference types="cypress" />
export class CheckoutPage {

    elements = {
        txtCheckout: "//span[contains(text(),'Checkout: Overview')]",
        btnCheckout: "button[name='finish']",
        txtVlrBackPackCheckout: "(//div[contains(text(),'Sauce Labs Backpack')]//following::div[@class='inventory_item_price'])[1]",
        txtVlrBikeLightCheckout: "(//div[contains(text(),'Sauce Labs Bike Light')]//following::div[@class='inventory_item_price'])[1]",
        txtSubtotal: "//div[@class='summary_subtotal_label']",
        txtTaxa: "//div[@class='summary_tax_label']",
        txtTotalCompra: "//div[@class='summary_total_label']"

    }

    validarPaginaCheckout() {
        cy.xpath(this.elements.txtCheckout, { timeout: 30000 }).should("have.text", 'Checkout: Overview')
        cy.xpath(this.elements.txtVlrBackPackCheckout).invoke('text').then((texto) => {
            Cypress.env('vlrBackPackCheckout', this.getPriceReal(texto.trim()))
        })

        cy.xpath(this.elements.txtVlrBikeLightCheckout).invoke('text').then((texto) => {
            Cypress.env('vlrBikeLightCheckout', this.getPriceReal(texto.trim()))
            let somaVlrItens = this.somarValoresReal(Cypress.env('vlrBackPackCheckout'), Cypress.env('vlrBikeLightCheckout'))

            cy.xpath(this.elements.txtSubtotal).invoke('text').then((texto) => {
                Cypress.env('vlrSubtotalCompra', this.getPriceReal(texto.trim()))
                expect(parseFloat(Cypress.env('vlrSubtotalCompra'))).to.equal(somaVlrItens)
            })
        })

        cy.xpath(this.elements.txtTaxa).invoke('text').then((texto) => {
            Cypress.env('vlrTaxa', this.getPriceReal(texto.trim()))

            cy.xpath(this.elements.txtTotalCompra).invoke('text').then((texto) => {
                Cypress.env('txtTotalCompraComImpostos', this.getPriceReal(texto.trim()))

                let somaSubTotalMaisTaxa = this.somarValoresReal(Cypress.env('vlrSubtotalCompra'), Cypress.env('vlrTaxa'))
                expect(parseFloat(Cypress.env('txtTotalCompraComImpostos'))).to.equal(somaSubTotalMaisTaxa)
            })
        })
    }

    prosseguirCheckout() {
        cy.get(this.elements.btnCheckout).click()
    }

    getPriceReal(price) {
        let valorregex = price.match(/\d+\.\d{2}/gm)

        if (valorregex == undefined) {
            return '0,00'
        } else {
            return valorregex[0]
        }
    }

    somarValoresReal(valor1, valor2) {
        let numero1 = parseFloat(valor1)
        let numero2 = parseFloat(valor2)

        let resultado = numero1 + numero2

        if (resultado == 0) {
            return '0'
        }

        return resultado
    }

}