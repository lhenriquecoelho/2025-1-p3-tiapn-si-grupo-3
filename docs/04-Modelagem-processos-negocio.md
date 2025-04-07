# Modelagem dos processos de negócio

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>

> **Links úteis**:
> - [Modelagem de processos AS-IS x TO-BE](https://dheka.com.br/modelagem-as-is-to-be/)
> - [20 dicas práticas de modelagem de processos](https://dheka.com.br/20-dicas-praticas-de-modelagem-de-processos/)

## Modelagem da situação atual (Modelagem AS IS)

Para o processo de fluxo de ferramentas entre funcionários é feito da seguinte forma: O funcionário retira a ferramenta, registra a retirada, logo em seguida usa a ferramenta e a devolve após desfrutar de seu uso e assim o processo é encerrado.
Para o processo de compra de materiais funciona da seguinte forma: O funcionário de campo envia a requisição do material faltante e em seguida o escritório recebe esta requisição e a aprova, nesse momento faz um levantamento orçamentário da compra do material requisitado contatando o fornecedor e recebendo sua resposta, caso o orçamento inicial não seja aprovado a tarefa se repete, no momento em que o orçamento é aprovado pelo escritório o processo de compra do material é iniciado, e a seguir é feito o processamento de compra pelo fornecedor, e em seguida gera o documento da nota fiscal, essa nota fiscal é enviada ao funcionário de campo que requisitou a compra dos materiais após ter informado que a compra foi feita, este então confere a nota fiscal e se ela estiver errada o processo de gerar nota fiscal acontece novamente e se ela estiver correta o processo de compra é encerrado.

![Imagem do WhatsApp de 2025-04-02 à(s) 19 52 20_0797c325](https://github.com/user-attachments/assets/adf81594-a9c7-4d84-b442-935aa5945767)

![Imagem do WhatsApp de 2025-04-07 à(s) 14 00 53_757b960f](https://github.com/user-attachments/assets/363e9584-b8cc-4b1f-af2b-f0aa48cf064a)

## Descrição geral da proposta (Modelagem TO BE)

Tendo identificado os gargalos dos modelos AS-IS, apresentem uma descrição da proposta de solução, buscando maior eficiência com a introdução da tecnologia. Abordem também os limites dessa solução e seu alinhamento com as estratégias e objetivos do contexto de negócio escolhido.

Cole aqui os modelos da solução proposta (modelo TO-BE), elaborados com o apoio da ferramenta baseada em BPMN utilizada na disciplina. Cada processo identificado deve ter seu modelo TO-BE específico. Descrevam as oportunidades de melhoria de cada processo da solução proposta.

Apresente aqui uma descrição da sua proposta, abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente também as oportunidades de melhoria.

## Modelagem dos processos

[PROCESSO 1 - Nome do processo](./processes/processo-1-nome-do-processo.md "Detalhamento do processo 1.")

[PROCESSO 2 - Nome do processo](./processes/processo-2-nome-do-processo.md "Detalhamento do processo 2.")


## Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Coloque no mínimo 5 indicadores.

Use o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Fonte de dados** | **Fórmula de cálculo** |
| ---           | ---           | ---           | ---             | ---             |
| Percentual de reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total de atendimentos | Tabela Reclamações | número total de reclamações / número total de atendimentos |
| Taxa de requisições atendidas | Melhorar a prestação de serviços medindo a porcentagem de requisições atendidas| Mede a % de requisições atendidas na semana | Tabela Solicitações | (número de requisições atendidas / número total de requisições) * 100 |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês | Tabela Pedidos | (número de pedidos entregues / número total de pedidos) * 100 |


Obs.: todas as informações necessárias para gerar os indicadores devem estar no diagrama de classe a ser apresentado posteriormente.
