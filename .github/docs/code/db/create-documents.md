# `db/migratons/create-documents.ts`

## Função

Criar ou deletar tabela *transactions*

- uuid - id
- text - title
- decimal - amount
- timestamp - created_at

## Anotações Relevantes

- `knex.fn.now()` - forma universal do knex de criação de timestamp no momento exato

> Voltar para o [`index`](../../index.md)
