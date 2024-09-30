# Caso de Uso: Visualizar Relatórios

**Descrição**: Permite que um morador visualize relatórios sobre os gastos, tarefas e eventos da república.

**Atores**: Morador

**Pré-condições**: O usuário deve estar logado no aplicativo.

**Pós-condições**: O usuário visualiza os relatórios desejados.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O usuário acessa a tela de relatórios.
2. O usuário seleciona o tipo de relatório desejado (gastos, tarefas, eventos).
3. O usuário seleciona o período de tempo para o relatório.
4. O sistema gera o relatório e o exibe ao usuário.

### Fluxos Alternativos

- **FA1. Período inválido**: No passo 3, se o usuário selecionar um período de tempo inválido (por exemplo, uma data de início posterior à data de término), o sistema deve exibir uma mensagem de erro e solicitar a correção.
