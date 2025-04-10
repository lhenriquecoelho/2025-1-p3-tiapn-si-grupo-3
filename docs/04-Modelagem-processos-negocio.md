# Modelagem dos processos de negócio

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>

## Modelagem da situação atual (Modelagem AS IS)

Para o processo de fluxo de ferramentas entre funcionários é feito da seguinte forma: O funcionário retira a ferramenta, anota a retirada de ferramentas de forma manual, logo em seguida usa a ferramenta e após o seu tempo de uso, devolve a ferramenta e, assim, o processo é encerrado.


![Imagem do WhatsApp de 2025-04-02 à(s) 19 52 20_0797c325](https://github.com/user-attachments/assets/06680ce1-6ac9-49a8-a590-2fd381970c41)


Para o processo de compra de materiais funciona da seguinte forma: O funcionário de campo envia a requisição do material faltante e em seguida o escritório recebe esta requisição e a aprova, nesse momento faz um levantamento orçamentário da compra do material requisitado contatando o fornecedor e recebendo sua resposta, caso o orçamento inicial não seja aprovado a tarefa se repete, no momento em que o orçamento é aprovado pelo escritório o processo de compra do material é iniciado, e a seguir é feito o processamento de compra pelo fornecedor, e em seguida gera o documento da nota fiscal, essa nota fiscal é enviada ao funcionário de campo que requisitou a compra dos materiais após ter informado que a compra foi feita, este então confere a nota fiscal e se ela estiver errada o processo de gerar nota fiscal acontece novamente e se ela estiver correta o processo de compra é encerrado.

![Imagem do WhatsApp de 2025-04-07 à(s) 14 00 53_757b960f](https://github.com/user-attachments/assets/363e9584-b8cc-4b1f-af2b-f0aa48cf064a)

## Descrição geral da proposta (Modelagem TO BE)

Para o processo de fluxo de ferramentas entre funcionários foi proposto modelo com melhorias do processo, em que, ao retirar a ferramenta para empréstimo, o próprio funcionário gera um relatório de empréstimo, em um registro formal documentado, ao invés de simples anotação. Outra melhoria é para a verificação após o período de 48 horas se a ferramenta ainda está sendo utilizada por esse funcionário, caso esteja sendo utilizada, passa por atualização no sistema de empréstimo. Caso não esteja sendo utilizada será devolvida sendo atualizado o sistema de emprestimo, gerando comprovante de devolução. Ainda há verificação se a ferramenta foi perdida, nesse caso deve ser relatada a perda, também em registro formal. Essas melhorias otimizam o controle sobre a localização das ferramentas, realizando periodicamente novos registros sobre a situação atual dos materiais, dentro de um tempo aceitável.

![TO-BE - Processo 1](https://github.com/user-attachments/assets/77a6eae2-1979-4d32-93c5-13e8fa5a22ac)

Para o processo de compra de materiais, como na empresa já existe um processo bem definido e funcional, foi incluída apenas uma tarefa após o início do processo, que é a tarefa sistêmica de notificação sobre baixo estoque. Dessa forma, os funcionários saberão de antemão que é necessário solicitar compra de determinado material, assim seguindo para tarefa de enviar requisição ao escritório, que é responsável pelas aquisições e assim por diante, seguindo o fluxo normal do processo, mas otimizando assim o tempo de espera entre a falta em estoque e a necessidade de uso.

![TO-BE - Processo 2](https://github.com/user-attachments/assets/3fd0cb72-f7d5-474b-b59b-e38445cffe1e)

## Modelagem dos processos

[PROCESSO 1 - Empréstimo de Ferramentas](./processes/processo-1-nome-do-processo.md "Detalhamento do processo 1.")

[PROCESSO 2 - Compra de Material](./processes/processo-2-nome-do-processo.md "Detalhamento do processo 2.")


## Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Coloque no mínimo 5 indicadores.

Use o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Fonte de dados** | **Fórmula de cálculo** |
| ---           | ---           | ---           | ---             | ---             |
| Tempo de uso de ferramentas entre os funcionarios | Verificar se o tempo de uso esta dentro do esperado | Mede quanto tempo, em média, as ferramentas ficam com os funcionários | Tabela Empréstimos / Log de Retirada e Devolução | soma de (hora da devolução - hora da retirada) / número total de usos |
| Percentual de ferramentas não devolvidas | Monitorar perdas ou esquecimentos de devolução| Mede a % de ferramentas que foram retiradas e ainda não devolvidas | Tabela de Empréstimos | (número de ferramentas não devolvidas / número total de retiradas) * 100 |
| Percentual de devoluções fora do prazo | Avaliar o cumprimento dos prazos estabelecidos de devolução | Mede quantas devoluções aconteceram após o tempo permitido | Tabela Empréstimos / Regras de Tempo de Uso | (número de devoluções atrasadas / total de devoluções) * 100 |
| Tempo médio de aprovação de compra | Reduzir burocracia e agilizar o processo |Mede o tempo médio entre a solicitação e a aprovação da compra | Tabela de Solicitações / Log de Aprovação | soma dos tempos entre solicitação e aprovação / número de solicitações |


Obs.: todas as informações necessárias para gerar os indicadores devem estar no diagrama de classe a ser apresentado posteriormente.
