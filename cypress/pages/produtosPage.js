/// <reference types="cypress" />
export class ProdutosPage {

    elements = {
        txtProduto: "//span[contains(text(),'Products')]",
        btnProdutoBackpack: "button[name='add-to-cart-sauce-labs-backpack']",
        txtVlrBackPack: "(//div[@class='inventory_item_price'])[1]",
        btnProdutoBikeLight: "button[name='add-to-cart-sauce-labs-bike-light']",
        txtVlrBikeLight: "(//div[@class='inventory_item_price'])[2]",
        lblQtdCarrinho: "//span[@class='shopping_cart_badge']",
        btnCarrinho: "div[id='shopping_cart_container']",
        txtBackPack: "//div[contains(text(),'Sauce Labs Backpack')]",
        txtBikeLight: "//div[contains(text(),'Sauce Labs Bike Light')]",
        txtVlrBackPackCarrinho: "(//div[contains(text(),'Sauce Labs Backpack')]//following::div[@class='inventory_item_price'])[1]",
        txtVlrBikeLightCarrinho: "(//div[contains(text(),'Sauce Labs Bike Light')]//following::div[@class='inventory_item_price'])[1]",
        btnCheckout: "button[name='checkout']",
        inpNome: "input[name='firstName']",
        inpSobrenome: "input[name='lastName']",
        inpCodigoPostal: "input[name='postalCode']",
        inpContinue: "input[name='continue']"

    }

    inserirProdutosCarrinho() {
        cy.xpath(this.elements.txtProduto, { timeout: 30000 })
        cy.get(this.elements.btnProdutoBackpack).click()
        cy.xpath(this.elements.txtVlrBackPack).invoke('text').then((texto) => {
            Cypress.env('vlrBackPack', this.getPriceReal(texto.trim()))
         })
      
        cy.get(this.elements.btnProdutoBikeLight).click()
        cy.xpath(this.elements.txtVlrBikeLight).invoke('text').then((texto) => {
            Cypress.env('vlrBikeLight', this.getPriceReal(texto.trim()))
        })

        cy.xpath(this.elements.lblQtdCarrinho).should('have.text', '2')
        cy.get(this.elements.btnCarrinho).click()
        cy.xpath(this.elements.txtBackPack, { timeout: 30000 }).should("have.text", 'Sauce Labs Backpack')
        cy.xpath(this.elements.txtVlrBackPackCarrinho).invoke('text').then((texto) => {
            Cypress.env('vlrBackPackCarrinho', this.getPriceReal(texto.trim()))
            expect(Cypress.env('vlrBackPack')).to.equal(Cypress.env('vlrBackPackCarrinho'))
        })
        
        cy.xpath(this.elements.txtBikeLight).should("have.text", 'Sauce Labs Bike Light')
        cy.xpath(this.elements.txtVlrBikeLightCarrinho).invoke('text').then((texto) => {
            Cypress.env('vlrBikeLightCarrinho', this.getPriceReal(texto.trim()))
            expect(Cypress.env('vlrBikeLight')).to.equal(Cypress.env('vlrBikeLightCarrinho'))
        })
        
        cy.get(this.elements.btnCheckout).click()
    }

    preenchimentoDadosÇheckout(nome, sobrenome, codigoPostal) {
        cy.get(this.elements.inpNome, { timeout: 30000 }).type(nome)
        cy.get(this.elements.inpSobrenome).type(sobrenome)
        cy.get(this.elements.inpCodigoPostal).type(codigoPostal)
        cy.get(this.elements.inpContinue).click()
    }

    getPriceReal(price) {
        let valorregex = price.match(/\d+\.\d{2}/gm)

        if (valorregex == undefined) {
            return '0,00'
        } else {
            return valorregex[0]
        }
    }
}