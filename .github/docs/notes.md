# Anotações

## Dicas

- `"knex": "node --loader tsx ./node_modules/knex/bin/cli.js"` - é comando recomendado dentro de `package.json` para rodar o knex no windows

## Conceitos

### O que é um Query Builder?

Um Query Builder, em termos gerais, é uma ferramenta ou biblioteca de software que permite construir consultas a bancos de dados de forma programática e mais intuitiva, em vez de escrever as consultas manualmente em linguagem SQL (Structured Query Language). Essa abordagem é especialmente útil quando se trabalha com consultas complexas ou dinâmicas, pois pode simplificar o processo de construção e modificação das consultas.

Em vez de lidar diretamente com a sintaxe de SQL, um Query Builder oferece uma interface visual ou uma API que permite criar consultas de maneira mais interativa, geralmente utilizando construções de programação mais próximas à linguagem natural ou orientadas a objetos. Isso pode ser especialmente útil para desenvolvedores que não são especialistas em SQL ou que desejam criar consultas dinâmicas com base em condições variáveis.

Por meio de um Query Builder, os usuários podem selecionar tabelas, colunas, condições, ordenações e outros elementos da consulta usando uma interface gráfica ou código em uma linguagem de programação específica. A ferramenta se encarrega de traduzir essas ações em consultas SQL válidas e executáveis.

No entanto, é importante observar que a eficiência e a otimização das consultas geradas por um Query Builder podem variar. Em algumas situações, consultas manuais escritas por especialistas em SQL podem ser mais eficientes em termos de desempenho, especialmente quando se lida com consultas complexas ou volumes significativos de dados.

### O que são **Migrations**?

Migrations (ou migrações) em bancos de dados são um conceito utilizado no contexto de desenvolvimento de software e gerenciamento de bancos de dados. Elas são um conjunto de instruções ou scripts que descrevem as alterações estruturais que devem ser aplicadas a um banco de dados, permitindo que ele evolua ao longo do tempo de maneira controlada e consistente.

Quando um aplicativo é desenvolvido, é comum que o esquema do banco de dados (tabelas, colunas, índices, etc.) precise ser modificado ao longo do tempo devido a novos requisitos, correções de bugs ou melhorias. As migrations são uma abordagem para gerenciar essas mudanças de maneira organizada, rastreável e colaborativa.

As principais vantagens das migrations são:

1. **Controle de Versão:** As migrations são normalmente versionadas junto com o código-fonte do aplicativo. Isso permite que as alterações no banco de dados sejam rastreáveis e reversíveis, facilitando a colaboração entre desenvolvedores e a manutenção do histórico de alterações.

2. **Consistência:** As migrations garantem que todos os desenvolvedores e ambientes de desenvolvimento tenham a mesma estrutura de banco de dados, evitando problemas de incompatibilidade ou erros de configuração.

3. **Automatização:** Muitas ferramentas e frameworks de desenvolvimento oferecem suporte a migrations, permitindo que as alterações no banco de dados sejam aplicadas automaticamente com um comando simples.

4. **Deploy em Ambientes Diferentes:** As migrations facilitam a implantação em diferentes ambientes (desenvolvimento, teste, produção) porque as alterações no banco de dados podem ser aplicadas de maneira consistente em cada ambiente.

5. **Rollbacks:** Se uma migração causar problemas ou erros, é possível reverter para uma versão anterior do esquema do banco de dados, desde que a migração anterior também tenha sido registrada.

As implementações práticas de migrations variam dependendo da linguagem de programação e do sistema de gerenciamento de banco de dados utilizado. Por exemplo, em frameworks web como Ruby on Rails, Django (Python) e Laravel (PHP), as migrations são uma parte integral do processo de desenvolvimento e são usadas para controlar as mudanças no esquema do banco de dados de maneira eficiente.

## Liçoes

### Quais são as recomendações de configurações do arquivo `tsconfig`?

informações relevantes em [`Node-Target-Mapping`](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping).

### `QueryBuilders` **vs** `ORMs`, quando utilizar?

A escolha entre um Query Builder e um ORM (Object-Relational Mapper) depende das necessidades e preferências específicas do projeto. Vou explicar brevemente as diferenças entre os dois e, em seguida, abordar quando utilizar cada um deles.

Query Builders são bibliotecas que permitem construir consultas SQL de forma programática, usando uma abordagem baseada em métodos encadeados ou construção de objetos. Eles fornecem uma interface maPis flexível para escrever consultas SQL e lidar com o banco de dados. Com um Query Builder, você escreve consultas SQL diretamente, mas de forma mais conveniente, usando métodos e objetos da biblioteca.

Por outro lado, os ORMs são bibliotecas que mapeiam automaticamente objetos de um modelo de domínio para tabelas em um banco de dados relacional. Eles permitem que você trabalhe com objetos em seu código, sem se preocupar diretamente com a geração de consultas SQL. O ORM cuida da tradução dos objetos para o SQL necessário para interagir com o banco de dados.

Agora, em relação a quando utilizar cada um...

Use um Query Builder quando:

Desejar ter mais controle direto sobre as consultas SQL, personalizando-as ou otimizando-as de forma mais granular.
Precisar lidar com casos complexos que não são facilmente abordados por um ORM.
Desejar trabalhar com consultas SQL em um nível mais baixo, aproveitando recursos específicos do banco de dados.
Use um ORM quando:

Desejar um mapeamento automático entre objetos e tabelas do banco de dados.
Quiser uma abstração de banco de dados mais elevada, lidando com objetos em vez de consultas SQL.
Pretender aumentar a produtividade, permitindo que o ORM cuide de tarefas como geração de SQL, controle de transações e gerenciamento do ciclo de vida dos objetos.
Quanto à sua pergunta sobre utilizar um ORM ao invés do Knex, isso é perfeitamente possível. Mas recomendamos que siga conforme está na aulas até terminar o módulo e ai, sim, implementar mudanças e melhorias. Dessa forma você tiraria mais proveito do que está sendo passado nas aulas e caso enfrente alguma dificuldade seria mais fácil conseguir ajuda aqui no fórum, entende? E no módulo seguinte nós utilizaremos o ORM Prisma!
