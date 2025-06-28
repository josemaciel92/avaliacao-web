import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ProdutosPage } from "../../pages/produtosPage";

const oProdutosPage = new ProdutosPage();

Then("adicione os produtos no carrinho", () => {
    oProdutosPage.inserirProdutosCarrinho()
})

Then("preencha os dados com as informacoes de envio {string} {string} {string}", (nome, sobrenome, codigoPostal) => {
    oProdutosPage.preenchimentoDadosÇheckout(nome, sobrenome, codigoPostal)
})