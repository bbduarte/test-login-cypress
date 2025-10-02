# Automação de Testes com Cypress - Atividade de Testes de Software

## 📋 Informações do Projeto

**Disciplina:** FGA0314 - TESTES DE SOFTWARE - Turma 01 - 2025/2  
**Professora:** Elaine Venson  
**Aluno:** Bruno Bernardes Duarte  
**Matrícula:** 242034483

## 🎯 Objetivos

- Introdução às ferramentas de automação de testes
- Desenvolver habilidades práticas de gravação, execução e validação de testes funcionais em interface web
- Aplicar técnicas de particionamento de equivalência e análise de valor limite

## 🛠️ Ferramenta Escolhida

**Cypress** - Framework de testes end-to-end em JavaScript que oferece:

- Interface visual e interativa
- Execução em tempo real dos testes
- Debugging facilitado
- Sintaxe clara e intuitiva

## 🌐 Site de Teste

URL: <https://practicetestautomation.com/practice-test-login/>

Este site oferece um formulário de login simples para prática de automação de testes.

## 📁 Estrutura do Projeto

```
test-login-cypress/
├── cypress/
│   ├── e2e/
│   │   └── spec.cy.js          # Casos de teste implementados
│   ├── fixtures/
│   │   └── example.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js           # Configuração do Cypress
├── package.json               # Dependências do projeto
└── README.md                  # Este arquivo
```

## 🧪 Casos de Teste Implementados

### 1. Classes Válidas

- **TC001** - Login com usuário e senha válidos
  - Usuário: `student`
  - Senha: `Password123`
  - Resultado esperado: Login realizado com sucesso

### 2. Classes Inválidas

- **TC002** - Login com usuário inexistente

  - Usuário: `usuarioInexistente`
  - Senha: `Password123`
  - Resultado esperado: Erro "Your username is invalid"

- **TC003** - Login com senha incorreta
  - Usuário: `student`
  - Senha: `senhaErrada123`
  - Resultado esperado: Erro "Your password is invalid"

### 3. Valores Limite

- **TC004** - Login com usuário de 1 caractere

  - Usuário: `a`
  - Senha: `Password123`
  - Resultado esperado: Erro "Your username is invalid"

- **TC005** - Login com usuário vazio

  - Usuário: (vazio)
  - Senha: `Password123`
  - Resultado esperado: Erro "Your username is invalid"

- **TC006** - Login com senha vazia

  - Usuário: `student`
  - Senha: (vazia)
  - Resultado esperado: Erro "Your password is invalid"

- **TC007** - Login com usuário e senha vazios
  - Usuário: (vazio)
  - Senha: (vazia)
  - Resultado esperado: Erro "Your username is invalid"

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/bbduarte/test-login-cypress

# Navegue até o diretório
cd test-login-cypress

# Instale as dependências
npm install
```

### Execução dos Testes

#### Modo Interativo (Interface Gráfica)

```bash
npm run cypress:open
```

#### Modo Headless (Terminal)

```bash
npm run cypress:run
```

## 📊 Verificações Implementadas

### Para Casos Válidos

- Verificação da URL de redirecionamento (`/logged-in-successfully/`)
- Verificação da presença da mensagem "Congratulations"
- Verificação da mensagem "successfully logged in"

### Para Casos Inválidos

- Verificação da visibilidade do elemento de erro (`#error`)
- Verificação do conteúdo das mensagens de erro específicas
- Validação de que o login não foi realizado

## 🎯 Técnicas de Teste Aplicadas

### Particionamento de Equivalência

- **Classe Válida:** Credenciais corretas (usuário: student, senha: Password123)
- **Classes Inválidas:**
  - Usuário inexistente
  - Senha incorreta
  - Campos vazios

### Análise de Valor Limite

- **Limite inferior:** Usuário com 1 caractere
- **Valor mínimo:** Campos vazios
- **Combinações:** Ambos os campos vazios

## 📈 Benefícios do Cypress

1. **Visualização em Tempo Real:** Permite ver os testes sendo executados
2. **Time Travel:** Possibilidade de voltar em qualquer passo do teste
3. **Debug Facilitado:** Screenshots automáticos em caso de falha
4. **Sintaxe Intuitiva:** Comandos claros e fáceis de entender
5. **Espera Automática:** Aguarda automaticamente elementos aparecerem

## 🔍 Estrutura dos Testes

Cada teste segue o padrão AAA (Arrange, Act, Assert):

```javascript
it("Descrição do teste", () => {
  // Arrange: Preparação (beforeEach já navega para a página)

  // Act: Ação
  cy.get("#username").type("valor");
  cy.get("#password").type("valor");
  cy.get("#submit").click();

  // Assert: Verificação
  cy.get("#error").should("be.visible");
  cy.get("#error").should("contain", "mensagem esperada");
});
```

## 📝 Conclusão

Esta atividade demonstrou a aplicação prática de técnicas de teste em um ambiente automatizado, utilizando o Cypress para validar diferentes cenários de login. Os testes cobrem tanto casos de sucesso quanto de falha, aplicando os conceitos de particionamento de equivalência e análise de valor limite de forma sistemática.

A automação destes testes garante que qualquer alteração futura no sistema de login seja validada rapidamente, mantendo a qualidade e confiabilidade da aplicação.
