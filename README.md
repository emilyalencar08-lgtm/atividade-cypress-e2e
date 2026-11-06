# Atividade: Testes end-to-end (E2E) com Cypress

Projeto escolar com aplicação de cadastro, testes E2E e pipeline de CI/CD com GitHub Actions.

## Como executar no VS Code

1. Instale Node.js (versão LTS) se ainda não estiver instalado.
2. Abra esta pasta no VS Code e abra o terminal (menu **Terminal > Novo Terminal**).
3. Execute `npm install`.
4. Execute `npm start` para manter a aplicação rodando.
5. Confira `http://localhost:3000/cadastro` no navegador.
6. Em **outro terminal**, execute `npx cypress open` para abrir a interface do Cypress. Selecione E2E Testing e execute `cadastro.cy.js`.
7. Alternativamente, rode os testes sem interface com `npm run test:e2e` (com o servidor do passo 4 ligado).

## Testes implementados

- Cadastro com nome, e-mail e senha válidos, mostrando `Cadastro realizado com sucesso!`.
- E-mail inválido, mostrando `E-mail inválido.`.
- Campos vazios, mostrando `Preencha todos os campos.`.
- Senha curta, mostrando a mensagem de validação.

## CI/CD

O arquivo `.github/workflows/cypress.yml` executa os testes quando o projeto é enviado ao GitHub (push) ou recebe um pull request. A execução real deve ser verificada na aba **Actions** do repositório.

## Observação

O projeto é uma demonstração didática: o cadastro registra somente nome e e-mail no `sessionStorage` do navegador e **não cria conta em banco de dados**. Não use senhas reais. Os testes ainda precisam ser executados no seu computador ou no GitHub para comprovar aprovação.
