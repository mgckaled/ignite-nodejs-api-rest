# `src/env/index.ts`

## Função

Arquivo de validação de dados das variáveis de ambiente, utilizando a lib `zod`.

## Anotações Relevantes

- `if (process.env.NODE_ENV === 'test') {config({ path: '.env.test' })} else {config()}` - caso o ambiente seja de testes, o método `config()` do pacote `dotenv` direciona a url do banco de dados especifica para testes
- `NODE_ENV: z.enum()` - enumeração das propriedade específicas para todas as variáveis de ambiente
- `DATABASE_URL: z.string()` - a variável do path do banco de dados deve ser obrigatoriamente uma string
- `PORT: z.number().default(3333),` - o `port` do ambiente de desemvolvimento deve ser obrigatoriamente um número. 3333 será informado em caso inexistência
- `const _env = envSchema.safeParse(process.env)` - validação do objeto dentro do arquivo com as variáveis de ambiente. Caso haja erro, o método irá automaticamente disparar um erro
- `if (_env.success === false)` - criação da tratativa de erro. Caso contrário o próprio `zod` faria essa tratativa

> Voltar para o [`index`](../../../index.md)
