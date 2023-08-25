# `src/middlewares/check-session-id-exists.ts`

## Função

Middleware de verificação de existência de uma `sessionId`

## Anotações Relevantes

`checkSessionIdExists(request: FastifyRequest,reply: FastifyReply,)` - tipagem do fastify
`if (!sessionId) {return reply.status(401).send({ error: 'Unauthorized.', })` - caso a sessionId não exista, a resposta enviará um erro de 401, com uma mensagem de erro.

> Voltar para o [`index`](../../../index.md)
