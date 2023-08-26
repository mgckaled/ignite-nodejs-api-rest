# `test/transactions.spec.ts`

## Função

Arquivos com os testes dos requisitos funcionais do aplicativo de registro de transações.

## Testes

- `should be able to create a new transaction`
- `should be able to list all transactions`
- `should be able to get a specific transaction`
- `should be able to get the summary`

## Anotações Relevantes

- `beforeAll` -  É uma função que é executada uma única vez antes de todos os testes. É útil para inicializar recursos compartilhados que serão utilizados pelos testes (plugins). `beforeAll(async () => {await app.ready()})`
- `beforeEach` - É uma função que é executada antes de cada teste. É útil para preparar o ambiente antes da execução de cada teste, por exemplo, inicializar variáveis ou limpar o banco de dados.
- `afterAll` - É uma função que é executada uma única vez após todos os testes terem sido executados. É útil para limpar recursos compartilhados ou fechar conexões abertas. `afterAll(async () => {await app.close()})` (remover a aplicação da memória)
- `afterEach` - É uma função que é executada após cada teste. É útil para limpar o ambiente depois da execução de cada teste, por exemplo, limpar variáveis ou fechar conexões com o banco de dados.
- `app.server` - servidor do Node (HTTP server) como parâmetro
- `expect(201)` - valida o código. equivale a `expect(response.statusCode).toEqual(201)`
- `execSync` - executa qualquer comando dentro da aplicação node

> Voltar para o [`index`](../../index.md)
