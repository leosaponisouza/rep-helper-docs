# Caso de Uso: Gerenciar Usuários (Administrador)

**Descrição**: Permite que um administrador adicione, remova ou edite as informações dos usuários da república.

**Atores**: Administrador

**Pré-condições**: O usuário deve estar logado como administrador.

**Pós-condições**: As informações dos usuários são atualizadas no sistema.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O administrador acessa a tela de gerenciamento de usuários.
2. O administrador seleciona a ação desejada (adicionar, remover ou editar usuário).
3. O administrador preenche as informações do usuário (nome, e-mail, etc.).
4. O administrador confirma a ação.
5. O sistema atualiza as informações dos usuários.

### Fluxos Alternativos

- **FA1. E-mail inválido**: No passo 3, se o administrador inserir um e-mail inválido, o sistema deve exibir uma mensagem de erro e solicitar a correção.
- **FA2. Remover usuário com débitos**: No passo 2, se o administrador tentar remover um usuário com débitos pendentes, o sistema deve exibir uma mensagem de alerta e solicitar a confirmação.
