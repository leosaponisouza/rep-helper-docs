# Caso de Uso: Registrar Gasto

**Descrição**: Permite que um morador registre um novo gasto, incluindo informações como valor, data, categoria e participantes.

**Atores**: Morador

**Pré-condições**: O usuário deve estar logado no aplicativo.

**Pós-condições**: O gasto é registrado no sistema e a divisão entre os participantes é calculada automaticamente.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O usuário acessa a tela de registro de gastos.
2. O usuário preenche os campos com as informações do gasto.
3. O usuário seleciona os participantes que irão dividir o gasto.
4. O usuário confirma o registro do gasto.
5. O sistema registra o gasto e calcula a divisão entre os participantes.

### Fluxos Alternativos

- **FA1. Participantes inválidos**: No passo 3, se o usuário selecionar participantes inválidos (por exemplo, participantes que não fazem parte da república), o sistema deve exibir uma mensagem de erro e solicitar a correção.
- **FA2. Valor inválido**: No passo 2, se o usuário inserir um valor inválido (por exemplo, um valor negativo), o sistema deve exibir uma mensagem de erro e solicitar a correção.
