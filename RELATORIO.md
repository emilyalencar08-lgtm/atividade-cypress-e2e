# Relatório da atividade prática: Testes E2E com Cypress

**Nome:** ______________________________  
**Turma:** ______________________________  
**Atividade:** Testes end-to-end (E2E) para garantir a qualidade

## 1. Objetivo
Verificar o funcionamento do fluxo de cadastro de usuários usando testes automatizados end-to-end com Cypress.

## 2. Configuração do ambiente
Foi preparado um projeto Node.js com uma página de cadastro contendo nome, e-mail, senha e botão **Cadastrar**. O Cypress foi configurado no arquivo `cypress.config.js`, com endereço da aplicação `http://localhost:3000` e testes armazenados em `cypress/e2e/cadastro.cy.js`.

**Comandos para executar:**
```bash
npm install
npm start
```
Com o servidor ligado, em outro terminal:
```bash
npx cypress open
```
Também é possível executar diretamente com `npm run test:e2e`.

## 3. Testes implementados
| Cenário | Resultado esperado |
| --- | --- |
| Dados válidos | Mostrar `Cadastro realizado com sucesso!` |
| E-mail inválido | Mostrar `E-mail inválido.` |
| Campos vazios | Mostrar `Preencha todos os campos.` |
| Senha curta | Mostrar aviso de senha com no mínimo 6 caracteres |

## 4. Integração CI/CD
Foi criado o fluxo `.github/workflows/cypress.yml` para execução automatizada dos testes pelo GitHub Actions ao publicar alterações e abrir pull requests.

## 5. Execução e análise dos logs
**Preencher após executar os testes de verdade:**

- Data da execução: ____________________
- Total de testes aprovados: ___________ de 4
- Falhas encontradas (se houver): ____________________
- Soluções aplicadas: ____________________
- Evidência (captura de tela da execução): ____________________
- Resultado do GitHub Actions: ____________________

## 6. Conclusão
Os testes foram preparados para verificar o cadastro de dados válidos e a exibição de mensagens de erro diante de entradas inválidas. A configuração de CI/CD permite que os testes sejam executados automaticamente ao enviar o projeto para o GitHub. A comprovação final depende da execução dos testes e do registro dos resultados acima.

**Observação:** Este relatório descreve a configuração entregue; não declara que os testes já foram executados ou aprovados.
