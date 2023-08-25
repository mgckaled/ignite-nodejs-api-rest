# `src/routes/transactions.ts`

## Função

Funciona como um plugin e especifica e separa as requisições em rotas

## Anotações Relevantes

- `async function transactionsRoutes(app: FastifyInstance)` - função assíncrona (ogrigatoriedade), cujo parâmetro é o próprio aplicativo (`app`), com tipagem definida dentro do pacote do *Fastify*
- `const createTransactionBodySchema = z.object({})` - validação do corpo da requisição: todos os tipos de dados que podem ser inseridos através do `POST`. O requeste body sempre é um objeto.
- `type: z.enum(['credit', 'debit']),` - espeficação dos tipos: somente estes poderão ser registrados no banco de dados.
- `const { title, amount, type } = createTransactionBodySchema.parse(request.body)` - cruzamento dos dados com o schema definido. Caso não haja correspondencia em todos, o `zod` irá enviar uma mensagem de erro.
- `amount: type === 'credit' ? amount : amount * -1,` - multiplicação por -1 nos tipos 'debit'.
- `return reply.status(201).send()` - envio de resposta vazia. É possivel adicionar mensagens
- `where('id', id).first()` - espera-se que haja apenas um resultado.
- `const summary = await knex('transactions').sum('amount', { as: 'amount' }).first()` - rota que retorna a soma das transações, considerando o resultado dos débitos e créditos. É basicamente a soma de todas as colunas. O `as:` serve para formatar o resultado da consulta em json.
- `let sessionId = request.cookies.sessionId` - busca dentro dos cookies da requisoção (metadados) do `sessionId`
- `maxAge: 1000 * 60 * 60 * 24 * 7,` - em milisegundos = 7 dias
- os cookies são enviados automaticamente em todas as requisições, anotando informações de contexto dos das sessões dos usuários.

> Voltar para o [`index`](../../../index.md)
