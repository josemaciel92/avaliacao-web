import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MenuPage } from "../../pages/menuPage";

const oMenuPage = new MenuPage();

Then("navego ate pagina do menu {string}", (menu) => {
    oMenuPage.navegacaoMenu(menu)
})