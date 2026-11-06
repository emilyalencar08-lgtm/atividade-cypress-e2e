describe('Teste de Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/cadastro');
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.get('input[name="nome"]').type('João Silva');
    cy.get('input[name="email"]').type('joao@example.com');
    cy.get('input[name="senha"]').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });

  it('Deve mostrar erro para e-mail inválido', () => {
    cy.get('input[name="nome"]').type('Maria Silva');
    cy.get('input[name="email"]').type('email-invalido');
    cy.get('input[name="senha"]').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('E-mail inválido.').should('be.visible');
  });

  it('Deve informar quando os campos estiverem vazios', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Preencha todos os campos.').should('be.visible');
  });

  it('Deve rejeitar uma senha muito curta', () => {
    cy.get('input[name="nome"]').type('Ana Souza');
    cy.get('input[name="email"]').type('ana@example.com');
    cy.get('input[name="senha"]').type('123');
    cy.get('button[type="submit"]').click();
    cy.contains('A senha deve ter pelo menos 6 caracteres.').should('be.visible');
  });
});
