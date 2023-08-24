# `Quizzes`

> Voltar para o [`index`](./index.md)

## Quiz - Estrutura da aplicação

1 - O que é o Fastify? **Resposta**: Um microframework web rápido e minimalista para Node.js.

2 - TypeScript pode ser considerado uma linguagem de programação? **Resposta**: Sim, apesar de antes ser considerado apenas um superset, com a presença de runtimes (Deno e Bun) que executam o TypeScript nativamente, ele pode ser considerado uma linguagem.

3 - Qual é a principal vantagem do TypeScript em relação ao JavaScript? **Resposta**: TypeScript fornece tipagem estática, melhorando a qualidade do código e facilitando a manutenção.

4 - O que é uma "interface" em TypeScript? **Resposta**: Um conjunto de tipos que especificam as propriedades e métodos que um objeto deve ter.

5 - É possível usar TypeScript com o Fastify? **Resposta**: Sim, o Fastify tem suporte nativo ao TypeScript

## Quiz - Banco de dados

1 - Qual é a principal vantagem de usar um query builder em vez de um driver nativo no Node.js? **Resposta**: Um query builder é mais fácil de usar e oferece uma API mais intuitiva.

2 - Com um query builder é possível trocar de banco de dados sem modificar as querys? **Resposta**: Depende da documentação e da compatibilidade do query builder com outros bancos de dados.

3 - O que são migrations? **Resposta**: São scripts que modificam o esquema do banco de dados.

4 - Por que é importante usar migrations ao invés de modificar diretamente o esquema do banco de dados? **Respostas**: Todas as opções (ajudam a manter integridade / permite *rollback* de modificações / torna atualização do banco de dados mais fácil / mais rápidas que modificações diretas).

5 - Qual é o comando do Knex para criar uma nova migration? **Resposta**: `knex migrate:make`.

6 - Qual é o comando do Knex para rodar todas as migrations pendentes? **Resposta**: `knex migrate:latest`.

7 - Qual é o comando do Knex para reverter a última migration aplicada? **Resposta**: `knex migrate:rollback`.

8 - Qual é o método do Knex para realizar uma query de inserção em uma tabela? **Resposta**: `knex...insert()`.

9 - Qual é o método do Knex para realizar uma query de seleção de todos os registros de uma tabela? **Resposta**: `knex...select()`.

10 - O que são variáveis ambiente? **Resposta**: Variáveis que só existem em determinado ambiente, como o desenvolvimento ou produção.

11 -  Em que situações é importante usar variáveis ambiente? **Resposta**: Alternativa A e B estão corretas (quando há informações sesíveis como senha ou tokens / quando configurações precisam ser alteradas entre diferentes ambientes sem modificar o código fonte).

12 - Como é possível acessar uma variável ambiente em um programa escrito em JavaScript? **Resposta**: Usando a variável global `process.env`.

13 - Qual é o principal objetivo da biblioteca Zod? **Resposta**: Validar tipos e formatos de dados.

## Quiz - Implementando as rotas

## Quiz - Testes automatizados

> Voltar para o [`index`](./index.md)
