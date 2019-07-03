Testes de Contrato
Ir para o final dos metadados
Criado por Thiago Simões Gonçalves,
Conceito
O teste baseado em contrato é exatamente o que ele diz ser: São realizados testes dos contratos(API's) entre um endpoint de consumidor e um endpoint provedor de API. Os conjuntos de testes baseados em contrato são combinados para cobrir cada cenário de interação que ocorre entre os pontos de extremidade do consumidor e do provedor. Estamos criando testes de unidade ou suíte de testes de unidade que validam se as conexões de ponto de extremidade da API estão funcionando corretamente a qualquer momento e de acordo com o seu contrato(parâmetros específicos do endpoint).

Quando usar este padrão
Benefícios
A execução de testes com base em contrato informa se o endpoint está como esperado ao endpoint consumidor, assim agilizando no processo de validação dos contratos e mitigando riscos.
Pontos de Atenção
Os testes baseados em contrato geralmente não detectam problemas de configuração de endpoint ou classes mal utilizadas. Considere como os usuários de suas API's podem se beneficiar da combinação de testes baseados em contrato e de ponto a ponta.
Quando Usar
É necessário quando precisamos validar o contrato que o consumidor continuam do mesmo tipo, como os valores limites, restrição de valores recebidos, se a estrutura foi ou não modificada.
Esteira de DevOps
Todo deploy em produção do Backend for FrontEnd(BFF) será validado a implementação e somente posto em produção, se todos os testes de contrato de API passarem, caso algum testes de contrato esteja falhando será reportado para o time e irão verificar para solucionar o problema.
Auxílio no desenvolvimento do BFF
No desenvolvimento do produto temos mapeados algumas sprint's a frente do desenvolvimento, assim um grande esforço empenhado na construção do BFF é os campos que serão utilizados e quais API's  serão utilizadas, para compor as chamadas das telas desejadas. Assim uma estratégia para aumentar a produtividade do time de desenvolvimento do BFF é antes do desenvolvimento em si, realizar os testes de contrato e o entendimento de quais melhores API's serão consumidas para compor as chamadas no BFF.
Utilizando essa estratégia, quando o time de desenvolvimento do BFF for começar uma sprint todas as chamadas necessárias já estarão mapeadas junto com os campos necessários que serão utilizados, facilitando o desenvolvimento e aumentando a produtividade pois todo o entendimento já será validado antecipadamente.
Verificação de erros externos durante o desenvolvimento
O desenvolvimento do BFF é realizado nos ambientes de stage e desenvolvimento, sempre priorizando o ambiente de stage e utilizando o ambiente de desenvolvimento somente em casos de indisponibilidade.
As problemáticas reais durante o desenvolvimento é a mudança de API's que demandam tempo para identificação do problema, instabilidades e indisponibilidade das API's utilizadas. Assim teremos os testes de contrato disponíveis para a equipe de desenvolvimento, quando ocorrer alguma instabilidade ou quebra de contrato a visualização e identificação do problema é imediata, facilitando a forma como requisitar correção ou informar problemas para o time de desenvolvimento.
Monitoria de quebras de contrato
O consumidor não tem o controle de mudanças das API's fornecedor, caso ocorra algum erro em produção a identificação do problema é algo complexo de se realizar. Os teste de contrato serão utilizados para monitorar quebras em produção, caso ocorra alguma quebra será avisado aos interessados do projeto.
Utilização na Esteira de DevOps
Os serviços que está desenvolvendo uma política de versionamento de API's, porém ainda não tem versionamento de api's. A forma de minimizar quebras de contrato do consumidor será utilizar os testes de contrato na esteira de DevOps do ViaMais e caso seja identificado uma quebra de contrato será avisado aos interessados do serviço e client para seguir com o deploy ou não, tendo a ciência que podemos ter a decisão de seguir com o deploy em produção do serviço quebrando trechos dentro do client.

Acesse o diretório do projeto e digite os seguintes comandos:

npm install supertest --save-dev
npm install mocha --save-dev
npm install mochawesome --save-dev
npm install joi
npm install joi-assert

Após ter digitado os comandos, ainda dentro do diretório do projeto, digite:

mocha

Ou o comando 
mocha --reporter mochawesome --reporter-options enableCode=false
para gerar um report em HTML
