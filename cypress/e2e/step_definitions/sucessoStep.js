import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SucessoPage } from "../../pages/sucessoPage";

const oSucessoPage = new SucessoPage();

Then("devera validar a mensagem de sucesso {string}", (msg) => {
   oSucessoPage.validarMsgSucessoEcommerce(msg)
})