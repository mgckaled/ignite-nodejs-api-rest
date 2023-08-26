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

1 - O que são requisitos funcionais? **Resposta**: Características do sistema que devem ser atendidas para atingir seus objetivos

2 - No Fastify, como configuramos rotas com um path em comum? **Resposta**: Utilizando o método `register` para registrar um plugin que contém todas as rotas com o mesmo path

3 - Para que serve o termo `declare module` no TypeScript? **Resposta**: Para declarar módulos personalizados

4 - Como você pode criar tipos personalizados para representar suas tabelas e colunas no TypeScript? **Resposta**: Escrevendo manualmente as definições de tipos

5 - Como podemos acessar os cookies enviados por um cliente no Fastify? **Resposta**: `request.cookies`

6 - Seguindo as aulas, como podemos definir um cookie no Fastify? **Resposta**: `reply.cookie`

7 - É possível configurar opções para os Cookies, como o tempo de expiração, ao escrever um cookie no Fastify? **Resposta**: Sim, passando um objeto com as opções como terceiro parâmetro da função

8 - O que é o `preHandler` no Fastify? **Resposta**: Uma função que é executada antes de uma rota

9 - Os contextos dentro de um plugin no Fastify são isolados entre eles. **Resposta**: Verdadeiro

10 - O que são Hooks no contexto do Fastify? **Resposta**: Funções que são executadas de acordo ao hook configurado.

## Quiz - Testes automatizados

1 - O que é a pirâmide de testes? **Resposta**: Uma representação gráfica das quantidades de diferentes tipos de testes na aplicação

2 - Qual é a finalidade dos testes unitários? **Resposta**: Testar uma pequena unidade de código de forma isolada

3 - Qual é a finalidade dos testes de integração? **Resposta**: Testar a integração entre diferentes módulos da aplicação

4 - Qual é a finalidade dos testes e2e (end-to-end)? **Resposta**: Testar o sistema completo de uma só vez, simulando a interação do usuário

5 - Qual método é executado uma única vez antes de todos os testes em um bloco de teste? **Resposta**: `beforeAll`

6 - Qual método é executado antes de cada teste em um bloco de teste? **Resposta**: `beforeEach`

7 - Qual método é executado depois de todos os testes em um bloco de teste? **Resposta**: `afterAll`

8 - Qual método é executado depois de cada teste em um bloco de teste? **Resposta**: `afterEach`

9 - Qual método é utilizado para preparar o ambiente antes de todos os testes? **Resposta**: `beforeAll`

10 - Qual é o objetivo do supertest no contexto de testes e2e? **Resposta**: Realizar requisições HTTP para uma aplicação e validar suas respostas

11 - É possível fazer verificações no corpo da resposta de uma requisição HTTP feita com o supertest? **Resposta**: Sim, usando o método `.expect()`

12 - Como você pode enviar dados em uma requisição HTTP feita com o supertest? **Resposta**: Usando o método `.send()`

13 - Qual a função principal do "describe" em testes automatizados? **Resposta**: Criar uma categoria de testes para que eles sejam agrupados

> Voltar para o [`index`](./index.md)
