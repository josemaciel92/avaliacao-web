/// <reference types="cypress" />


export class MenuPage {

    elements = {
        txtMenu: "(//div[@id='rightPanel']//h1[@class='title'])[1]"
    }

    navegacaoMenu(menu) {
        cy.xpath(this.elements.txtMenu, { timeout: 30000 }).should('be.visible')

        switch (menu) {
            case 'Update Contact Info':
                cy.log(`Clicando no item de menu: ${menu}`)
                cy.xpath(`//a[contains(text(),'${menu}')]`)
                    .should('be.visible')
                    .click()
                break
            case 'Find Transactions': // Exemplo de outro item de menu
                cy.log(`Clicando no item de menu: ${menu}`);
                cy.xpath(`//a[contains(text(),'${menu}')]`)
                    .should('be.visible')
                    .click()
                break
        }
    }

}