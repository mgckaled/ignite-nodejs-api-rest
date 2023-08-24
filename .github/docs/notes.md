# Anotações

## Dicas

- `"knex": "node --loader tsx ./node_modules/knex/bin/cli.js"` - é o comando recomendado dentro de `package.json` para rodar o knex no windows
- informações relevantes para a configuração do `tsconfig` em [`Node-Target-Mapping`](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping).

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

### O que é UUID?

UUID significa "Universally Unique Identifier" (Identificador Universalmente Único, em português). É um valor alfanumérico de 128 bits usado para identificar exclusivamente informações em sistemas de computadores. UUIDs são frequentemente representados em forma de string, composta por 32 caracteres hexadecimais separados por hifens em cinco grupos: 8-4-4-4-12, por exemplo: `550e8400-e29b-41d4-a716-446655440000`.

A principal característica dos UUIDs é a sua probabilidade extremamente baixa de colisões, o que significa que é altamente improvável que dois UUIDs gerados em diferentes momentos e por diferentes sistemas sejam iguais. Isso os torna muito úteis para identificação exclusiva de entidades em sistemas distribuídos, bancos de dados, aplicativos web e muitos outros contextos.

Os UUIDs são amplamente utilizados em aplicações para:

1. **Identificação Única:** Quando você precisa criar identificadores únicos para registros em bancos de dados, como IDs de usuário, IDs de pedidos, IDs de produtos, etc.

2. **Sincronização de Dados:** Em sistemas distribuídos ou aplicativos móveis, os UUIDs são usados para evitar conflitos ao sincronizar dados entre dispositivos.

3. **Segurança:** Em alguns casos, UUIDs podem ser usados para criar tokens de acesso temporários ou para identificar sessões de usuário.

4. **Rastreamento de Atividades:** Em registros de logs e sistemas de rastreamento, os UUIDs podem ser usados para acompanhar diferentes eventos e ações.

5. **Identificação em APIs:** Quando você projeta APIs, usar UUIDs como identificadores exclusivos pode evitar expor informações sensíveis ou previsíveis.

Existem várias versões de UUIDs, cada uma com diferentes métodos de geração e focadas em diferentes requisitos. Por exemplo, o UUID v4 é frequentemente usado e é gerado de maneira aleatória, enquanto outras versões podem ser baseadas em timestamps ou outros critérios.

Em linguagens de programação, frameworks e bibliotecas, geralmente existem funções ou módulos específicos para gerar UUIDs de acordo com a versão necessária. Por exemplo, em JavaScript, você pode usar a biblioteca `uuid` para gerar UUIDs facilmente.

Lembre-se de que enquanto os UUIDs são altamente improváveis de colidir, eles ainda são finitos, e a geração excessiva de UUIDs em curtos períodos de tempo pode teoricamente levar a colisões. No entanto, para a maioria dos casos práticos, a probabilidade de colisão é extremamente baixa e, portanto, os UUIDs são considerados seguros para identificação exclusiva.

## Liçoes

### Knex

A `knex.schema` é uma função `getter` , que retorna um objeto com estado contendo a consulta. Portanto, certifique-se de obter uma nova instância `knex.schema` para cada consulta. Esses métodos retornam `promisses`. Ver mais sobre o consultor e seus métodos de criação de banco de dados [AQUI](https://knexjs.org/guide/schema-builder.html).

#### Método `up()`

O método `up()` é usado para aplicar as alterações no esquema do banco de dados. Isso pode incluir a criação de tabelas, a adição de colunas, a definição de índices, entre outras alterações estruturais. Quando você executa uma migração "up", o Knex aplica as alterações definidas no arquivo de migração ao banco de dados.

#### Método `down()`

O método `down()` é usado para reverter as alterações feitas pela migração "up". Ele é responsável por desfazer as mudanças no esquema do banco de dados de forma apropriada. Isso geralmente envolve a exclusão de tabelas, a remoção de colunas ou a reversão de outras alterações.

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
