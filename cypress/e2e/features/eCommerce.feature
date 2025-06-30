Feature: Ecommerce

    Background: Acessar url da aplicacao
        Given que acesso o portal saucedemo

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