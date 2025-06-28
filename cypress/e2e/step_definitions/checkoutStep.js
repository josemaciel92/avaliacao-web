import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CheckoutPage } from "../../pages/checkoutPage";

const oCheckoutPage = new CheckoutPage();

Given("validar os valores no resumo do checkout", () => {
   oCheckoutPage.validarPaginaCheckout()
})

Given("realizar o checkout", () => {
   oCheckoutPage.prosseguirCheckout()
})