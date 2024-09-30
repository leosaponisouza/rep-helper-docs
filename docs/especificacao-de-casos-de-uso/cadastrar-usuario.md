# Caso de Uso: Cadastrar Usuário

**Descrição**: Permite que um novo usuário crie uma conta no aplicativo, fornecendo informações pessoais básicas.

**Atores**: Novo Usuário

**Pré-condições**: Nenhuma.

**Pós-condições**: O usuário é cadastrado no sistema e pode fazer login.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O usuário acessa a tela de cadastro.
2. O usuário preenche os campos com suas informações pessoais (nome, e-mail, senha, etc.).
3. O usuário confirma o cadastro.
4. O sistema verifica se o e-mail já está cadastrado.
5. Se o e-mail estiver disponível, o sistema cria a conta do usuário e envia um e-mail de confirmação.
6. O usuário recebe o e-mail de confirmação e clica no link para ativar sua conta.

### Fluxos Alternativos

- **FA1. E-mail já cadastrado**: No passo 4, se o e-mail já estiver cadastrado, o sistema deve exibir uma mensagem de erro e solicitar que o usuário utilize outro e-mail ou recupere sua senha.
- **FA2. Senha fraca**: No passo 2, se o usuário inserir uma senha fraca, o sistema deve exibir uma mensagem de alerta e solicitar que o usuário crie uma senha mais forte.
