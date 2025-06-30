# Automação de Testes de API com Cypress

##### 
  * A arquitetura do projeto foi criada para um reaproveitamento de código, foi utilizado o padrão de automação [Page Object](https://www.alura.com.br/artigos/page-object-o-que-e). 
Onde conseguimos realizar a criação de casos de teste de API e WEB, utilizando o framework Cypress. 

### Estrutura do projeto

##### 
A estrutura do projeto foi realizada em 3 camadas (packages):
  
- `Features`
    * O pacote onde todas os BDDs devem estar, utilizando a linguagem Gherkin.
    * Em todas as criações de novos casos de testes, devem ser alinhados previamente se já existe uma frase que podemos reutilizar, sem a necessidade de duplicação de frase.
    * Se necessário alteração de uma frase, deve ser alinhado e conversado com todos da equipe técnica prevendo os impactos e _refactoring_.
    * Devemos sempre utilizar o ***Scenario Outline*** e ***Examples***, pensando em a massa ser dinâmica e reaproveitamento de códigos.
       
    **Exemplo:** 
        
     ```gherkin
        Scenario Outline: Realizar compra de produto com sucesso
        Given que realizo o login na aplicacao '<usuario>' '<senha>'
        And adicione os produtos no carrinho
        And preencha os dados com as informacoes de envio '<nome>' '<sobrenome>' '<codigoPostal>'
        And validar os valores no resumo do checkout
        And realizar o checkout
        Then devera validar a mensagem de sucesso '<msg>'

        Examples:
            | usuario       | senha        | nome  | sobrenome | codigoPostal | msg                       |
            | standard_user | secret_sauce | Teste | Teste     | 07768-895    | Thank you for your order! |
     ```
     
 - `Step Definitions`
    * A classe onde possuem todos os steps, chama **APENAS** as classes de pages. 
    * Não podemos realizar validações ou lógicas nesta classe.
    * O nome da step definition deve se referir a feature.
    
    **Exemplo:**

      ```javascript
         Then("adicione os produtos no carrinho", () => {
           oProdutosPage.inserirProdutosCarrinho()
         })

Then("preencha os dados com as informacoes de envio {string} {string} {string}", (nome, sobrenome, codigoPostal) => {
      oProdutosPage.preenchimentoDadosÇheckout(nome, sobrenome, codigoPostal)
    })
   })
      ```
    
 - `Pages`  
    * É o pacote onde são agrupadas as funções e ações comuns para serem reutilizadas nos steps.
    * A page deve ser sobre uma funcionalidade do sistema e os métodos devem ser condizentes a mesma. 
      
    **Exemplo:**
    
     ```javascript

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
    ```
      
 
# Pré-requisitos

  ### Node
  - [Node](https://nodejs.org/en) >= 20.17.0

## Installation

Utilizar o comando abaixo para instalar todas as dependências listadas no package.json

```bash
  npm install
```
