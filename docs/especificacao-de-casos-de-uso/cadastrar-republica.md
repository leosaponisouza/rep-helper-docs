# Caso de Uso: Cadastrar República (Proprietário)

**Descrição**: Permite que um proprietário de imóvel cadastre uma nova república no aplicativo.

**Atores**: Proprietário

**Pré-condições**: O usuário deve estar logado como proprietário.

**Pós-condições**: A república é cadastrada no sistema e o proprietário se torna o administrador da república.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O proprietário acessa a tela de cadastro de república.
2. O proprietário preenche os campos com as informações da república (nome, endereço, número de quartos, etc.).
3. O proprietário confirma o cadastro.
4. O sistema cria a república e atribui o proprietário como administrador.

### Fluxos Alternativos

- **FA1. Endereço inválido**: No passo 2, se o proprietário inserir um endereço inválido, o sistema deve exibir uma mensagem de erro e solicitar a correção.
