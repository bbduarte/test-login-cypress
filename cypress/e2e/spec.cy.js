describe('Testes de Login - Practice Test Automation', () => {
  
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  // ==========================================
  // CASO 1: CLASSE VÁLIDA
  // ==========================================
  it('TC001 - Login com usuário e senha válidos', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    
    cy.url().should('include', '/logged-in-successfully/')
    cy.contains('Congratulations').should('be.visible')
    cy.contains('successfully logged in').should('be.visible')
  })

  // ==========================================
  // CASO 2: CLASSES INVÁLIDAS
  // ==========================================
  it('TC002 - Login com usuário inexistente', () => {
    cy.get('#username').type('usuarioInexistente')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    
    cy.get('#error').should('be.visible')
    cy.get('#error').should('contain', 'Your username is invalid')
  })

  it('TC003 - Login com senha incorreta', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('senhaErrada123')
    cy.get('#submit').click()
    
    cy.get('#error').should('be.visible')
    cy.get('#error').should('contain', 'Your password is invalid')
  })

  // ==========================================
  // CASO 3: VALORES LIMITE
  // ==========================================
  it('TC004 - Login com usuário de 1 caractere', () => {
    cy.get('#username').type('a')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    
    cy.get('#error').should('be.visible')
    cy.get('#error').should('contain', 'Your username is invalid')
  })

  it('TC005 - Login com usuário vazio', () => {
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    
    cy.get('#error').should('be.visible')
    cy.get('#error').should('contain', 'Your username is invalid')
  })

  it('TC006 - Login com senha vazia', () => {
    cy.get('#username').type('student')
    cy.get('#submit').click()
    
    cy.get('#error').should('be.visible')
    cy.get('#error').should('contain', 'Your password is invalid')
  })

  it('TC007 - Login com usuário e senha vazios', () => {
    cy.get('#submit').click()
    
    cy.get('#error').should('be.visible')
    cy.get('#error').should('contain', 'Your username is invalid')
  })
})