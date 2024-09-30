# Caso de Uso: Realizar Pagamento

**Descrição**: Permite que um morador realize o pagamento de sua parte em um gasto compartilhado.

**Atores**: Morador

**Pré-condições**: O usuário deve estar logado no aplicativo e ter um gasto pendente.

**Pós-condições**: O pagamento é registrado no sistema e o gasto é atualizado.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O usuário acessa a tela de gastos pendentes.
2. O usuário seleciona o gasto que deseja pagar.
3. O usuário seleciona a forma de pagamento.
4. O usuário confirma o pagamento.
5. O sistema processa o pagamento e atualiza o status do gasto.

### Fluxos Alternativos

- **FA1. Pagamento recusado**: No passo 5, se o pagamento for recusado pela instituição financeira, o sistema deve exibir uma mensagem de erro e solicitar que o usuário tente novamente ou utilize outra forma de pagamento.
