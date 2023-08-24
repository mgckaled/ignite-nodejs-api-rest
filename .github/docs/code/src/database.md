# `src/database.ts`

## Função

Arquivo de configurações do banco de dados.

## Anotações Relevantes

- `import setupKnex from 'knex'` - exportado de forma *default* na lib

- `Knex.Config` - importação da interface de configurações do Knex

- `connection: {filename: env.DATABASE_URL,}` - variáveis de ambiente validadas pelo `zod`

> Voltar para o [`index`](../../index.md)
