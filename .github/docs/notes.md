# Anotações

> Voltar para o [`index`](./index.md)

## Dicas

- `"knex": "node --loader tsx ./node_modules/knex/bin/cli.js"` - é o comando recomendado dentro de `package.json` para rodar o knex no windows
- informações relevantes para a configuração do `tsconfig` em [`Node-Target-Mapping`](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping).

## Conceitos

### RF - Requisitos Funcionais

Os requisitos funcionais são as especificações das funcionalidades e comportamentos que o sistema de software deve ter. Eles descrevem o que o sistema deve fazer em termos de entrada, processamento e saída. Esses requisitos definem as ações que o sistema deve ser capaz de executar, os cálculos que ele precisa realizar e as interações que deve ter com os usuários ou outros sistemas. Em resumo, os requisitos funcionais detalham as tarefas que o software precisa realizar para atender às necessidades dos usuários ou do negócio.

### RN - Requisitos Não Funcionais

Os requisitos não funcionais são critérios que definem qualidades ou características específicas do sistema, além de suas funcionalidades básicas. Eles se concentram em aspectos como desempenho, segurança, usabilidade, confiabilidade e outros atributos que afetam a experiência do usuário e a eficácia do sistema como um todo. Exemplos de requisitos não funcionais incluem tempo de resposta, escalabilidade, requisitos de segurança, disponibilidade e capacidade de manutenção.

### RNF - Requisitos Não Funcionais

Algumas fontes usam a sigla "RNF" para se referir aos Requisitos Não Funcionais, como mencionado acima. No entanto, em alguns contextos, "RNF" também pode se referir a "Requisitos de Nível de Serviço" ou "Requisitos de Nível de Qualidade". Esses requisitos estabelecem padrões específicos que o sistema deve atender em relação a aspectos não funcionais, como desempenho, confiabilidade e usabilidade.

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

### O que são variáveis de ambiente?

Variáveis de ambiente são valores dinâmicos que podem afetar o comportamento e as configurações de um sistema operacional ou de um programa. Elas são utilizadas para armazenar informações importantes que podem ser referenciadas por diferentes processos ou programas em um sistema.

Essas variáveis contêm informações sobre o ambiente no qual um programa é executado, e podem influenciar como o programa se comporta, onde ele busca por arquivos, como exibe informações, entre outras coisas. As variáveis de ambiente são especialmente úteis para definir configurações globais que se aplicam a vários processos ou programas sem a necessidade de modificar cada um individualmente.

Algumas variáveis de ambiente são predefinidas pelo sistema operacional, enquanto outras podem ser definidas pelo usuário ou por scripts de inicialização. Aqui estão alguns exemplos de variáveis de ambiente e suas possíveis utilizações:

1. **PATH**: Essa variável especifica os diretórios nos quais o sistema operacional deve procurar por executáveis quando você digita um comando no terminal. Isso permite que você execute programas sem precisar especificar o caminho completo até o executável.

2. **HOME**: Normalmente aponta para o diretório pessoal do usuário, onde seus arquivos pessoais estão localizados.

3. **LANG** ou **LC_ALL**: Controlam a configuração regional e de idioma do sistema, afetando a exibição de textos, formatos de data, números, etc.

4. **TMP** ou **TEMP**: Indicam o diretório onde os programas podem armazenar arquivos temporários.

5. **USERNAME** (no Windows) ou **USER** (em sistemas Unix-like): Armazena o nome do usuário atualmente logado no sistema.

6. **JAVA_HOME**: Indica o diretório onde o Java Development Kit (JDK) está instalado, permitindo que programas encontrem facilmente o ambiente de desenvolvimento Java.

7. **DATABASE_URL**: É frequentemente usada em aplicativos web para armazenar a URL de conexão com um banco de dados.

8. **AWS_ACCESS_KEY_ID** e **AWS_SECRET_ACCESS_KEY**: Usadas para autenticar e autorizar acessos à Amazon Web Services (AWS).

As variáveis de ambiente podem ser acessadas por programas e scripts, permitindo que eles adaptem seu comportamento de acordo com as configurações definidas no ambiente. Como mencionado anteriormente, as variáveis de ambiente são uma maneira eficaz de configurar aspectos globais do sistema operacional ou de programas, facilitando a personalização e a configuração de diferentes processos.

### O que são cookies?

Cookies são pequenos arquivos de texto que os sites armazenam no seu dispositivo (como computador, tablet ou smartphone) quando você os visita. Eles desempenham um papel importante na experiência de navegação na internet, permitindo que os sites lembrem informações sobre suas preferências e atividades anteriores.

Os cookies podem conter várias informações, como dados de login, preferências de idioma, itens no carrinho de compras, histórico de navegação e outras informações relevantes para melhorar a sua interação com um determinado site. Existem dois tipos principais de cookies:

1. **Cookies de sessão:** Estes são temporários e são excluídos automaticamente assim que você fecha o navegador. Eles são usados para manter o controle de suas ações durante uma única sessão de navegação. Por exemplo, eles podem ser usados para manter você logado em uma conta enquanto navega pelo site.

2. **Cookies persistentes:** Esses cookies permanecem no seu dispositivo mesmo depois de fechar o navegador. Eles têm uma data de validade definida e são usados para lembrar suas preferências e informações entre sessões. Por exemplo, um site de comércio eletrônico pode usar um cookie persistente para lembrar os itens que você adicionou ao carrinho de compras, mesmo que você feche o navegador e volte mais tarde.

Os cookies também podem ser classificados em diferentes categorias com base em suas finalidades:

- **Cookies essenciais:** São necessários para o funcionamento básico do site e permitem que você navegue e use suas funções. Eles geralmente incluem coisas como cookies de autenticação e segurança.

- **Cookies de desempenho:** Coletam informações sobre como os visitantes usam um site, como as páginas mais visitadas e se os usuários encontram mensagens de erro. Isso ajuda os proprietários de sites a entenderem melhor o desempenho de seus sites e a otimizá-los.

- **Cookies de funcionalidade:** Permitem que um site lembre das escolhas que você faz (como seu nome de usuário, idioma ou região) e forneça recursos aprimorados e mais personalizados.

- **Cookies de publicidade e rastreamento:** São usados para mostrar anúncios direcionados aos usuários, com base em seus interesses e atividades de navegação. Eles também podem ser usados por terceiros para rastrear a sua atividade na internet.

É importante notar que nem todos os cookies são maliciosos, mas também há preocupações com a privacidade e a segurança relacionadas ao rastreamento excessivo e ao compartilhamento não autorizado de dados. Portanto, muitos navegadores oferecem configurações que permitem aos usuários controlar quais cookies desejam permitir e bloquear.

### O que são testes autimatizados?

Testes automatizados são um conjunto de técnicas e práticas na área de desenvolvimento de software que envolvem a criação e execução de testes de forma automatizada, ou seja, sem a necessidade de intervenção manual constante. O objetivo principal dos testes automatizados é verificar se um software funciona corretamente, identificando erros, defeitos e problemas de desempenho de maneira eficiente e confiável.

Existem diferentes tipos de testes automatizados, incluindo:

1. **Testes Unitários:** Esses testes focam em partes individuais do código, como funções ou métodos. Eles verificam se as unidades isoladas de código funcionam corretamente e produzem os resultados esperados. Frameworks populares para testes unitários incluem JUnit, NUnit, pytest e muitos outros.

2. **Testes de Integração:** Esses testes verificam a interação entre diferentes partes do software, como módulos, componentes ou sistemas completos. O objetivo é garantir que essas partes funcionem bem juntas e se comuniquem corretamente.

3. **Testes de Aceitação/Automatizados de Regressão:** Esses testes garantem que as funcionalidades principais do software continuem a funcionar conforme as alterações são feitas no código. Eles são especialmente úteis para evitar regressões, ou seja, problemas que surgem quando novas alterações afetam negativamente partes previamente funcionais do software.

4. **Testes de Interface de Usuário:** Esses testes automatizados verificam a interface com a qual os usuários interagem diretamente. Eles podem simular cliques, inserções de dados e outras ações do usuário para garantir que a interface funcione corretamente e exiba os resultados esperados.

5. **Testes de Desempenho:** Esses testes avaliam o desempenho e a escalabilidade do software, identificando possíveis gargalos e problemas de velocidade ou consumo de recursos em situações de carga.

Os benefícios dos testes automatizados incluem a detecção precoce de problemas, a redução da necessidade de testes manuais repetitivos, a melhoria da qualidade do software e a agilização do processo de desenvolvimento. No entanto, é importante ressaltar que os testes automatizados não substituem completamente os testes manuais, especialmente quando se trata de avaliar aspectos subjetivos da usabilidade e da experiência do usuário. Geralmente, uma abordagem equilibrada de testes manuais e automatizados é a mais eficaz para garantir a qualidade do software.

### Vitest

Vitest é uma biblioteca de testes simples construída em cima do Vite. É nativo do Vite, o que simplifica muito a parte de configuração. Ele evita que você use o Babel ou configurações específicas ao usar outras bibliotecas de teste⁵. Vitest reutiliza a configuração, transformadores, resolvedores e plugins do Vite - consistente em todo o seu aplicativo e testes⁶.

Vitest é uma ferramenta de teste de unidade extremamente rápida alimentada pelo Vite. Ele é executado em um ambiente Node.js e usa JSDOM para simular um ambiente de navegador. Isso permite que você teste seus componentes React e outras partes do seu aplicativo em um ambiente semelhante ao navegador sem a necessidade de iniciar um navegador real.

Vitest também suporta testes em paralelo, o que pode acelerar significativamente o tempo de execução dos testes. Além disso, ele tem suporte integrado para TypeScript e suporta muitos recursos modernos do JavaScript, como módulos ES e importações dinâmicas.

Em resumo, Vitest funciona fornecendo um ambiente de teste rápido e fácil de configurar para seus aplicativos construídos com Vite. Ele permite que você teste seus componentes e outras partes do seu aplicativo em um ambiente semelhante ao navegador sem a necessidade de iniciar um navegador real. Além disso, ele tem muitos recursos avançados e é altamente configurável para atender às suas necessidades de teste.

(1) Testes em aplicações React com VITE + VITEST - DEV Community. <https://dev.to/dnokaneda/testes-em-aplicacoes-react-com-vite-vitest-386l>.

(2) Vitest | A blazing fast unit test framework powered by Vite. <https://vitest.dev/>.

(3) Como funciona o Bet365? Guia completo com dicas sobre o site de aposta online. <https://www.techtudo.com.br/noticias/2022/05/como-funciona-o-bet365-guia-completo-com-dicas-sobre-o-site-de-aposta-online.ghtml>.

(4) Como funciona o IQ Option? Saiba o que é e como usar a plataforma. <https://www.techtudo.com.br/listas/2020/01/como-funciona-o-iq-option-saiba-o-que-e-e-como-usar-a-plataforma.ghtml>.

(5) Como funciona cashback do Banco Inter? Saiba receber dinheiro de volta. <https://www.techtudo.com.br/listas/2020/12/como-funciona-cashback-do-banco-inter-saiba-receber-dinheiro-de-volta.ghtml>.

(6) Vitest: Nova Ferramenta para Testes Unitários! Como ... - YouTube. <https://www.youtube.com/watch?v=n94wJZr6y5M>.

(7) undefined. <https://github.com/dnokaneda/vitest-examples>.

### Supertest

Supertest é uma biblioteca Node.js que ajuda os desenvolvedores a testar APIs. Ele estende outra biblioteca chamada superagent, um cliente HTTP JavaScript para Node.js e o navegador. Os desenvolvedores podem usar o Supertest como uma biblioteca independente ou com frameworks de teste JavaScript como Mocha ou Jest³.

Supertest é uma abstração de alto nível para testar HTTP, enquanto ainda permite que você acesse a API de baixo nível fornecida pelo superagent. Isso torna fácil fazer afirmações sobre as respostas HTTP e testar suas APIs de maneira eficiente¹.

Além disso, Supertest pode ser usado com qualquer framework de teste e é fácil de configurar. Ele também suporta muitos recursos avançados, como autenticação e configuração de cabeçalhos HTTP personalizados. Isso torna o Supertest uma ferramenta poderosa e flexível para testar suas APIs.

Em resumo, as vantagens do Supertest incluem sua facilidade de uso, flexibilidade e capacidade de fazer afirmações sobre respostas HTTP de maneira eficiente. Ele é uma ferramenta valiosa para qualquer desenvolvedor que queira testar suas APIs de maneira profissional. Há algo mais que você gostaria de saber? 😊

(1) Supertest: How to Test APIs Like a Pro - Testim Blog. <https://www.testim.io/blog/supertest-how-to-test-apis-like-a-pro/>.

(2) supertest - npm. <https://www.npmjs.com/package/supertest>.

(3) Escrevendo testes com Jest + supertest - DEV Community. <https://dev.to/vitordelfino/escrevendo-testes-com-jest-supertest-1ed>.

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

> Voltar para o [`index`](./index.md)
