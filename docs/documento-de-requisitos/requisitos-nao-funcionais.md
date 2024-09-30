# Requisitos Não-Funcionais

## 4.1 Performance

### 4.1.1 - [RNF001] Tempo de Resposta

O tempo de resposta de uma consulta de um usuário deve ser de no máximo 5 segundos.

---

### 4.1.2 - [RNF002] Erros por Dia

O sistema deve ser capaz de funcionar com um número de erros inferior a 3 por dia.

---

## 4.2 Usabilidade

### 4.2.1 - [RNF003] Interface Gráfica com o Usuário

A interface deverá ser amigável, simples e intuitiva. As mensagens de erro devem ser explicativas, mostrando ao usuário como ele deve agir.

---

### 4.2.2 - [RNF004] Existência de Help

O sistema deve disponibilizar um help para esclarecer eventuais dúvidas dos usuários.

---

## 4.3 Confiabilidade

### 4.3.1 - [RNF005] Disponibilidade

O sistema tem que estar sempre disponível (24 horas por dia).

---

### 4.3.2 - [RNF006] Consistência dos Dados

Caso ocorra algum erro no processamento de uma transação, o programa deve retornar para um estado anterior consistente, sem comprometer a coerência dos dados armazenados.

---

## 4.4 Segurança

### 4.4.1 - [RNF007] Restrições de Acesso

A confidencialidade dos dados é garantida por um servidor de banco de dados seguro e acesso autorizado com login e senha. Cada ator terá acesso a funcionalidades personalizadas.

---

## 4.5 Corretude

### 4.5.1 - [RNF008] Correção dos Dados

O sistema deve sempre retornar dados válidos para o usuário.

---

## 4.6 Requisitos de Hardware e Software

### 4.6.1 - [RNF009] Hardware

Os computadores que acessarem o programa RepHelper devem ter no mínimo um processador Pentium 200MHz ou compatível e 32MB de memória RAM.

---

### 4.6.2 - [RNF010] Software

O sistema será implementado usando a linguagem JavaScript no front-end e Java no back-end. O React + Spring Boot serão as ferramentas usadas para implementar o mesmo. O sistema de banco de dados utilizado será PostgreSQL.
