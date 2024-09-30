# Caso de Uso: Agendar Evento

**Descrição**: Permite que um morador agende um evento nos espaços compartilhados da república, incluindo informações como nome, data, horário e participantes.

**Atores**: Morador

**Pré-condições**: O usuário deve estar logado no aplicativo.

**Pós-condições**: O evento é agendado no sistema e os participantes são notificados.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O usuário acessa a tela de agendamento de eventos.
2. O usuário preenche os campos com as informações do evento.
3. O usuário seleciona os participantes.
4. O usuário confirma o agendamento do evento.
5. O sistema agenda o evento e notifica os participantes.

### Fluxos Alternativos

- **FA1. Conflito de horários**: No passo 4, se o horário selecionado para o evento conflitar com outro evento já agendado, o sistema deve exibir uma mensagem de erro e solicitar a correção.
