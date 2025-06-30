Feature: login

    Background: Acessar url da aplicacao
        Given que acesso o portal Parabank

    Scenario Outline: Realizar login com sucesso
        Given que realizo o login com credenciais validas '<usuario>' '<senha>'
        And devo ser redirecionado para a home logada da aplicacao Parabank '<headerLogado>'
        Then navego ate pagina do menu '<menu>'

        Examples:
            | usuario | senha | headerLogado | menu                |
            | john    | demo  | Welcome      | Update Contact Info |
            | john    | demo  | Welcome      | Find Transactions   |