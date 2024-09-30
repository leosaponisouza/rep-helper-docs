# Caso de Uso: Registrar Problema no Imóvel

**Descrição**: Permite que um morador registre um problema no imóvel, incluindo informações como descrição, fotos e urgência.

**Atores**: Morador

**Pré-condições**: O usuário deve estar logado no aplicativo.

**Pós-condições**: O problema é registrado no sistema e notificado à imobiliária ou ao proprietário.

## Fluxo de Eventos

### Fluxo Básico (Principal)

1. O usuário acessa a tela de registro de problemas.
2. O usuário preenche os campos com as informações do problema.
3. O usuário anexa fotos (opcional).
4. O usuário seleciona a urgência do problema.
5. O usuário confirma o registro do problema.
6. O sistema registra o problema e notifica a imobiliária ou o proprietário.

### Fluxos Alternativos

- **FA1. Fotos inválidas**: No passo 3, se o usuário tentar anexar fotos inválidas (por exemplo, fotos muito grandes ou em formatos não suportados), o sistema deve exibir uma mensagem de erro e solicitar a correção.
