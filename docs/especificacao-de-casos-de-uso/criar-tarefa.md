# Caso de Uso: Criar Tarefa

**Descrição**: Permite que um morador crie uma nova tarefa doméstica, incluindo informações como nome, descrição, data de vencimento e responsável.

**Atores**: Morador

**Pré-condições**: O usuário deve estar logado no aplicativo.

**Pós-condições**: A tarefa é criada e atribuída ao responsável.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O usuário acessa a tela de criação de tarefas.
2. O usuário preenche os campos com as informações da tarefa.
3. O usuário seleciona o responsável pela tarefa.
4. O usuário confirma a criação da tarefa.
5. O sistema cria a tarefa e notifica o responsável.

### Fluxos Alternativos

- **FA1. Responsável inválido**: No passo 3, se o usuário selecionar um responsável inválido (por exemplo, um participante que não faz parte da república), o sistema deve exibir uma mensagem de erro e solicitar a correção.
- **FA2. Data de vencimento inválida**: No passo 2, se o usuário inserir uma data de vencimento inválida (por exemplo, uma data no passado), o sistema deve exibir uma mensagem de erro e solicitar a correção.
