# `src/server.ts`

## Função

## Anotações Importantes

- `app.register(transactionsRoutes)` - vem antes dos outros plugins. No framework web Fastify, o método register() é usado para adicionar plugins ao aplicativo. O Fastify é conhecido por sua arquitetura modular e de baixo overhead, e os plugins desempenham um papel importante nisso. Os plugins permitem que você adicione funcionalidades específicas ao seu aplicativo de maneira modular e reutilizável.
- `prefix: 'transactions',` - todas as rotas `transactions` irão ser direcionadas para o plugin

> Voltar para o [`index`](../../index.md)
