export interface CaseScenario {
  id: number;
  title: string;
  area: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  description: string;
  facts: string[];
  hints: string[];
  modelAnswer: string;
}

export const cases: CaseScenario[] = [
  // ============ DIREITO DO CONSUMIDOR ============
  // Fáceis
  {
    id: 1,
    title: 'Defeito em Geladeira',
    area: 'Consumidor',
    difficulty: 'Fácil',
    description: 'João comprou uma geladeira que apresentou defeito após 15 dias de uso. A loja recusou a troca.',
    facts: [
      'João da Silva, CPF 123.456.789-00, residente em São Paulo/SP, comprou uma geladeira no dia 01/03/2024 na loja EletroDomésticos Ltda., pelo valor de R$ 3.500,00.',
      'A geladeira apresentou defeito no compressor no dia 16/03/2024, apenas 15 dias após a compra.',
      'João procurou a loja no dia 17/03/2024, com a nota fiscal em mãos, e solicitou a troca do produto.',
      'A loja recusou a troca, alegando que o defeito era de responsabilidade do fabricante e que João deveria entrar em contato com a assistência técnica.',
      'João tentou contato com a assistência técnica, que informou um prazo de 30 dias para análise, sem garantia de troca.',
    ],
    hints: [
      'Pense no CDC (Código de Defesa do Consumidor) e no prazo de 30 dias para troca.',
      'Identifique as partes: autor e réu.',
      'Considere os pedidos: troca do produto, indenização por danos morais (opcional).',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA DO JUIZADO ESPECIAL CÍVEL DA COMARCA DE SÃO PAULO/SP

AUTOR: JOÃO DA SILVA, brasileiro, casado, portador do CPF nº 123.456.789-00, residente na Rua das Flores, nº 123, Bairro Centro, São Paulo/SP.

RÉU: ELETRODOMÉSTICOS LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 12.345.678/0001-90, com sede na Avenida Comercial, nº 456, Bairro Centro, São Paulo/SP.

DOS FATOS

O Autor adquiriu junto ao Réu uma geladeira modelo Frost Free, no dia 01 de março de 2024, pelo valor de R$ 3.500,00, conforme nota fiscal nº 000123 em anexo.

No dia 16 de março de 2024, apenas quinze dias após a aquisição, o produto apresentou defeito no compressor, deixando de funcionar adequadamente.

O Autor compareceu pessoalmente à loja Réu no dia 17 de março de 2024, portando a nota fiscal, e solicitou a troca do produto por outro em perfeito estado de funcionamento, nos termos do art. 26, § 1º, do Código de Defesa do Consumidor.

O Réu, de forma indevida, recusou a troca, alegando que o defeito era de responsabilidade do fabricante e que o Autor deveria contatar diretamente a assistência técnica.

O Autor tentou contato com a assistência técnica indicada, que informou prazo de trinta dias para análise, sem garantia de troca, submetendo o Autor a evidente constrangimento e atraso injustificado.

O Réu incorreu em prática abusiva ao negar a troca imediata do produto com defeito, violando os direitos do consumidor previstos no CDC.

DO DIREITO

O art. 26, § 1º, do Código de Defesa do Consumidor estabelece que o prazo para reclamação de vícios aparentes ou de fácil constatação em produtos duráveis é de trinta dias, contados da aquisição efetiva do bem.

O art. 18 do mesmo diploma legal garante ao consumidor direito à troca do produto com vício, quando isso não tornar inviável o cumprimento do contrato.

O art. 6º, III, do CDC consagra o direito à informação adequada e clara sobre os diferentes produtos e serviços, com a especificação correta de quantidade, características, composição, qualidade e preço.

O Réu, enquanto fornecedor do produto, responde solidariamente pelos vícios do produto, conforme art. 13 do CDC.

O art. 14 do CDC impõe responsabilidade objetiva ao fornecedor pelos danos causados aos consumidores por defeitos de qualquer natureza.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação do Réu a proceder à troca imediata da geladeira defeituosa por outro produto idêntico ou equivalente em perfeito estado de funcionamento;

b) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 5.000,00, em razão do constrangimento sofrido;

c) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 8.500,00.

Nestes termos, pede deferimento.

São Paulo, 17 de março de 2024.

[Assinatura]
JOÃO DA SILVA`,
  },
  {
    id: 2,
    title: 'Demora na Entrega de Móveis',
    area: 'Consumidor',
    difficulty: 'Fácil',
    description: 'Ana encomendou móveis planejados e a loja atrasou a entrega em mais de 60 dias sem previsão.',
    facts: [
      'Ana Carolina Souza, CPF 456.789.123-00, contratou a Móveis Primavera Ltda. para fabricação de móveis planejados para sua residência.',
      'O contrato foi assinado em 15/01/2024, com prazo de entrega previsto para 30/03/2024 (75 dias).',
      'O valor total foi de R$ 18.000,00, com pagamento de 50% de entrada (R$ 9.000,00) e 50% na entrega.',
      'Ana pagou a entrada no dia do contrato.',
      'A entrega não ocorreu no prazo. Ana entrou em contato diversas vezes e a loja sempre adiava com novas promessas.',
      'Em 30/05/2024, já com mais de 60 dias de atraso, a loja informou que ainda não tinha previsão de entrega.',
      'Ana precisou alugar um apartamento mobiliado por mais dois meses (R$ 4.000,00) por não poder se mudar.',
    ],
    hints: [
      'Considere a rescisão contratual por inadimplemento.',
      'Pense em danos materiais (aluguel temporário) e danos morais.',
      'O art. 35 do CDC é relevante sobre prazo de entrega.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE SÃO PAULO/SP

AUTOR: ANA CAROLINA SOUZA, brasileira, solteira, portadora do CPF nº 456.789.123-00, residente na Rua dos Ipês, nº 789, Bairro Jardim, São Paulo/SP.

RÉU: MÓVEIS PRIMAVERA LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 23.456.789/0001-12, com sede na Rua da Indústria, nº 100, Bairro Industrial, São Paulo/SP.

DOS FATOS

A Autora contratou o Réu para a fabricação e instalação de móveis planejados para sua residência, mediante contrato de adesão assinado em 15 de janeiro de 2024.

O prazo de entrega previsto no contrato era de 30 de março de 2024, ou seja, 75 dias após a assinatura.

O valor total do contrato foi de R$ 18.000,00, com pagamento de 50% de entrada (R$ 9.000,00) e 50% na entrega, conforme recibo nº 4567 em anexo.

A Autora efetuou o pagamento da entrada na data do contrato, cumprindo integralmente sua obrigação.

A entrega não ocorreu no prazo contratual. A Autora entrou em contato com o Réu por diversas vezes, sendo sempre informada de novas datas de entrega que nunca se concretizaram.

Em 30 de maio de 2024, já com mais de sessenta dias de atraso, o Réu informou à Autora que ainda não havia previsão de entrega dos móveis.

Em decorrência do inadimplemento, a Autora foi compelida a alugar um apartamento mobiliado por mais dois meses, incorrendo em despesa adicional de R$ 4.000,00.

O Réu violou o art. 35 do Código de Defesa do Consumidor, que estabelece prazo de trinta dias para entrega, salvo estipulação contratual diversa, a qual também foi descumprida.

DO DIREITO

O art. 6º, inciso VI, do Código de Defesa do Consumidor garante ao consumidor a efetiva prevenção e reparação de danos patrimoniais e morais, individuais, coletivos e difusos.

O art. 14 do CDC impõe responsabilidade objetiva ao fornecedor de produtos e serviços pelos danos causados aos consumidores.

O art. 35 do CDC estabelece que, nos contratos de compra e venda de consumo, salvo estipulação em contrário, o prazo para entrega é de trinta dias, findo o qual o consumidor pode considerar rescindido o contrato.

O art. 389 do Código Civil estabelece que o devedor que não cumprir a obrigação deverá indenizar o credor pelos prejuízos resultantes do inadimplemento.

O art. 475 do Código Civil autoriza a resolução do contrato por inadimplemento, quando o devedor não cumpre a obrigação assumida.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a rescisão/resolução do contrato de compra e venda firmado entre as partes;

b) a condenação do Réu à restituição da quantia de R$ 9.000,00, referente ao sinal pago, acrescida de correção monetária e juros desde a data do pagamento;

c) a condenação do Réu ao pagamento de indenização por danos materiais no valor de R$ 4.000,00, referente ao aluguel de imóvel mobiliado;

d) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 10.000,00, em razão do abalo psicológico e constrangimento sofridos;

e) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 23.000,00.

Nestes termos, pede deferimento.

São Paulo, 30 de maio de 2024.

[Assinatura]
ANA CAROLINA SOUZA`,
  },
  {
    id: 3,
    title: 'Cobrança Indevida de Tarifas',
    area: 'Consumidor',
    difficulty: 'Fácil',
    description: 'Banco cobrou tarifas de manutenção de conta em conta salário, proibida por lei.',
    facts: [
      'Roberto Lima, CPF 789.123.456-00, possui conta salário no Banco Nacional S.A.',
      'Desde janeiro de 2023, o banco passou a cobrar tarifa de manutenção de conta no valor de R$ 12,90 mensais.',
      'Roberto é aposentado e recebe seu benefício na referida conta.',
      'A Resolução CMN nº 4.230/2013 proíbe a cobrança de tarifas em conta salário.',
      'Roberto tentou resolver junto ao banco, que se recusou a estornar os valores.',
      'O total cobrado indevidamente é de R$ 154,80 (12 meses).',
    ],
    hints: [
      'Resolução CMN nº 4.230/2013 é o principal fundamento.',
      'Pense em repetição do indébito e danos morais.',
      'A cobrança indevida é prática abusiva (art. 39, CDC).',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA DO JUIZADO ESPECIAL CÍVEL DA COMARCA DE BELO HORIZONTE/MG

AUTOR: ROBERTO LIMA, brasileiro, divorciado, aposentado, portador do CPF nº 789.123.456-00, residente na Rua dos Jacarandás, nº 200, Bairro Santa Efigênia, Belo Horizonte/MG.

RÉU: BANCO NACIONAL S.A., instituição financeira, inscrita no CNPJ sob o nº 00.000.000/0001-91, com sede na Avenida Bancária, nº 1000, Centro, Belo Horizonte/MG.

DOS FATOS

O Autor é titular de conta salário junto ao Réu, vinculada ao recebimento de seus proventos de aposentadoria.

A Resolução CMN nº 4.230, de 26 de fevereiro de 2013, estabelece em seu art. 2º que as contas de depósitos de salário são isentas de tarifas de manutenção de conta.

Desde janeiro de 2023, o Réu passou a debitar da conta salário do Autor a tarifa de manutenção de conta no valor de R$ 12,90 mensais, totalizando R$ 154,80 em doze meses de cobrança indevida.

O Autor tentou resolver a questão administrativamente junto ao Réu, solicitando o estorno dos valores cobrados indevidamente, porém a instituição financeira recusou-se a atender o pedido.

A cobrança indevida de tarifas em conta salário configura prática abusiva e violação expressa da norma regulamentadora, causando dano material e moral ao Autor.

DO DIREITO

A Resolução CMN nº 4.230/2013, art. 2º, determina que as contas de depósitos de salário são isentas de tarifas de manutenção de conta, não podendo o banco cobrar qualquer valor a esse título.

O art. 39, inciso I, do Código de Defesa do Consumidor, veda a prática de cobrança de valores indevidos.

O art. 42, parágrafo único, do CDC estabelece que a cobrança de valor indevido enseja a repetição do indébito, independentemente de prévia notificação.

O art. 6º, VI, do CDC garante ao consumidor a reparação de danos patrimoniais e morais.

O art. 14 do CDC impõe responsabilidade objetiva ao fornecedor de serviços pelos danos causados aos consumidores.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação do Réu à repetição do indébito no valor de R$ 309,60, equivalente ao dobro dos R$ 154,80 cobrados indevidamente, nos termos do art. 42, § único, do CDC;

b) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 5.000,00, em razão da cobrança indevida e do constrangimento sofrido;

c) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 314,60.

Nestes termos, pede deferimento.

Belo Horizonte, 15 de dezembro de 2023.

[Assinatura]
ROBERTO LIMA`,
  },
  // Médios
  {
    id: 4,
    title: 'Plano de Saúde nega Cirurgia',
    area: 'Consumidor',
    difficulty: 'Médio',
    description: 'Operadora de saúde se recusou a autorizar cirurgia de emergência alegando carência.',
    facts: [
      'Fernanda Melo, CPF 321.654.987-00, é titular de plano de saúde da Saúde Total S.A. há 5 anos.',
      'Em 10/04/2024, Fernanda apresentou quadro de apendicite aguda e foi levada à emergência.',
      'O médico indicou cirurgia de emergência. A operadora negou autorização alegando carência de 180 dias para cirurgias.',
      'Fernanda foi submetida à cirurgia particular, custando R$ 15.000,00.',
      'A Lei 9.656/98 garante cobertura obrigatória para emergências e urgências sem carência.',
      'Fernanda já tinha o plano há mais de 5 anos, superando qualquer carência.',
    ],
    hints: [
      'Lei 9.656/98 e RN 465/2021 são fundamentais.',
      'Cobertura para urgência/emergência é obrigatória e sem carência.',
      'Pense em ressarcimento dos valores pagos e danos morais.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE RIO DE JANEIRO/RJ

AUTOR: FERNANDA MELO, brasileira, casada, portadora do CPF nº 321.654.987-00, residente na Rua das Palmeiras, nº 500, Bairro Copacabana, Rio de Janeiro/RJ.

RÉU: SAÚDE TOTAL S.A., operadora de plano de saúde, inscrita no CNPJ sob o nº 34.567.890/0001-23, com sede na Avenida Saúde, nº 1500, Bairro Centro, Rio de Janeiro/RJ.

DOS FATOS

A Autora é titular de plano de saúde individual junto ao Réu desde o ano de 2019, com vigência contínua superior a cinco anos.

Em 10 de abril de 2024, a Autora apresentou quadro clínico de apendicite aguda, sendo imediatamente encaminhada à emergência médica.

O médico assistente indicou cirurgia de emergência para remoção do apêndice, dada a gravidade do quadro.

O Réu, mediante sua central de autorização, negou a liberação do procedimento cirúrgico, alegando indevidamente carência de 180 dias para cirurgias.

Diante da negativa, a Autora foi submetida à cirurgia de forma particular, arcando com o pagamento de R$ 15.000,00, conforme nota fiscal e comprovantes em anexo.

A Lei nº 9.656/98 estabelece a cobertura obrigatória para urgências e emergências sem carência, independentemente do tempo de contrato.

A Autora já possuía o plano de saúde por mais de cinco anos, superando qualquer prazo de carência eventualmente aplicável.

A negativa do Réu foi injusta, ilegal e causou grave prejuízo material e emocional à Autora.

DO DIREITO

A Lei nº 9.656/98, em seu art. 1º, § 1º, garante a cobertura obrigatória para urgências e emergências sem carência.

A RN 465/2021 da ANS reforça a cobertura integral para urgências e emergências, vedando a negativa de cobertura por prazo de carência.

O art. 6º, VI, do Código de Defesa do Consumidor garante a reparação de danos patrimoniais e morais.

O art. 14 do CDC impõe responsabilidade objetiva ao fornecedor de serviços de saúde.

O art. 927 do Código Civil estabelece o dever de indenizar o dano causado por ato ilícito.

O art. 186 do Código Civil define a responsabilidade civil por dano causado por ação ou omissão.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação do Réu ao ressarcimento dos valores despendidos pela Autora, no montante de R$ 15.000,00, acrescidos de correção monetária e juros desde a data do desembolso;

b) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 20.000,00, em razão da negativa injusta e do sofrimento psicológico causado em momento de emergência;

c) a tutela de urgência para garantir a cobertura integral dos tratamentos futuros relacionados ao caso;

d) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 35.000,00.

Nestes termos, pede deferimento.

Rio de Janeiro, 15 de abril de 2024.

[Assinatura]
FERNANDA MELO`,
  },
  {
    id: 5,
    title: 'Cobrança de Dívida já Paga',
    area: 'Consumidor',
    difficulty: 'Médio',
    description: 'Financeira continuou cobrando dívida de cartão quitada há mais de um ano, incluindo em cadastro de inadimplentes.',
    facts: [
      'Carlos Eduardo, CPF 654.321.987-00, possuía cartão de crédito da Financeira Rápida S.A.',
      'Em 2022, Carlos teve dificuldades e negociou a dívida em 12 parcelas.',
      'Carlos pagou todas as 12 parcelas regularmente, com comprovantes em mãos.',
      'Em janeiro de 2024, a financeira incluiu o nome de Carlos nos cadastros de inadimplentes (SPC/Serasa) alegando dívida pendente.',
      'Carlos apresentou os comprovantes, mas a financeira não retirou a restrição.',
      'Carlos foi negado em financiamento para compra de imóvel por causa da restrição.',
    ],
    hints: [
      'Dívida quitada não pode ser cobrada (art. 42, CDC).',
      'Inscrição indevida gera danos morais (inscrição indevida é dano moral in re ipsa).',
      'Pense em tutela de urgência para retirada imediata da restrição.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA DO JUIZADO ESPECIAL CÍVEL DA COMARCA DE CURITIBA/PR

AUTOR: CARLOS EDUARDO, brasileiro, casado, portador do CPF nº 654.321.987-00, residente na Rua dos Pinheiros, nº 300, Bairro Água Verde, Curitiba/PR.

RÉU: FINANCEIRA RÁPIDA S.A., instituição financeira, inscrita no CNPJ sob o nº 45.678.901/0001-34, com sede na Avenida das Finanças, nº 800, Bairro Centro, Curitiba/PR.

DOS FATOS

O Autor possuía cartão de crédito junto ao Réu, tendo contraído dívida que foi negociada em doze parcelas no ano de 2022.

O Autor quitou integralmente todas as parcelas do acordo, conforme comprovantes de pagamento em anexo, totalizando o pagamento de toda a dívida negociada.

Em janeiro de 2024, o Réu, de forma indevida e sem qualquer fundamento, incluiu o nome do Autor nos cadastros de inadimplentes (SPC/Serasa), alegando dívida pendente.

O Autor apresentou os comprovantes de quitação ao Réu, solicitando a retirada da restrição cadastral, porém a instituição financeira se recusou a sanar a irregularidade.

Em decorrência da inscrição indevida, o Autor teve financiamento para aquisição de imóvel negado, sofrendo grave prejuízo material e moral.

A dívida havia sido integralmente quitada há mais de um ano, sendo absolutamente indevida qualquer cobrança ou restrição cadastral.

DO DIREITO

O art. 42, § 2º, do Código de Defesa do Consumidor estabelece que a cobrança de dívida quitada ou prescrita constitui crime contra a economia popular, punível com pena de detenção.

O art. 6º, VI, do CDC garante ao consumidor a reparação de danos patrimoniais e morais.

O art. 927 do Código Civil estabelece a responsabilidade civil por ato ilícito.

A inscrição indevida em cadastros de inadimplentes configura dano moral in re ipsa, conforme jurisprudência pacífica do Superior Tribunal de Justiça.

O art. 5º, X, da Constituição Federal garante a inviolabilidade da intimidade, da vida privada, da honra e da imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação.

DOS PEDIDOS

Diante do exposto, requer-se, em caráter de urgência:

a) a tutela de urgência para determinar a imediata retirada do nome do Autor dos cadastros de inadimplentes (SPC/Serasa);

b) a declaração de inexistência da dívida cobrada indevidamente;

c) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 15.000,00, em razão da inscrição indevida e do constrangimento sofrido;

d) a condenação do Réu ao pagamento de indenização por danos materiais no valor de R$ 8.000,00, referente ao prejuízo causado pela negativa do financiamento imobiliário;

e) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 23.000,00.

Nestes termos, pede deferimento.

Curitiba, 20 de fevereiro de 2024.

[Assinatura]
CARLOS EDUARDO`,
  },
  {
    id: 6,
    title: 'Propaganda Enganosa de Curso',
    area: 'Consumidor',
    difficulty: 'Médio',
    description: 'Faculdade prometeu estágio garantido e empregabilidade de 95% em publicidade, mas não cumpriu.',
    facts: [
      'Ricardo Alves, CPF 147.258.369-00, se matriculou no curso de Direito da Faculdade Ideal, atraído pela promessa de estágio garantido e empregabilidade de 95%.',
      'A propaganda em outdoors, site e redes sociais garantia estágio em escritórios de renome e empregabilidade superior a 95%.',
      'Ricardo pagou mensalidades de R$ 1.800,00 por 3 anos.',
      'Ao concluir o curso, Ricardo não recebeu nenhuma oportunidade de estágio e não conseguiu emprego na área.',
      'A faculdade se recusou a devolver os valores pagos, alegando que as promessas eram "expectativas" e não garantias contratuais.',
      'Ricardo descobriu que a empregabilidade real era de aproximadamente 30%.',
    ],
    hints: [
      'Propaganda enganosa é vedação do art. 6º, III, e art. 37, CDC.',
      'Pense em rescisão contratual por vício do consentimento (art. 171, CC).',
      'A publicidade vinculante é norma do art. 429, CC.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE PORTO ALEGRE/RS

AUTOR: RICARDO ALVES, brasileiro, solteiro, portador do CPF nº 147.258.369-00, residente na Rua dos Açorianos, nº 100, Bairro Centro Histórico, Porto Alegre/RS.

RÉU: FACULDADE IDEAL S.A., instituição de ensino superior, inscrita no CNPJ sob o nº 56.789.012/0001-45, com sede na Avenida Universitária, nº 2000, Bairro Partenon, Porto Alegre/RS.

DOS FATOS

O Autor se matriculou no curso de Direito oferecido pelo Réu, fortemente influenciado pela publicidade veiculada em outdoors, site institucional e redes sociais, que prometia estágio garantido em escritórios de renome e empregabilidade superior a 95% dos formandos.

A publicidade do Réu continha afirmações claras e ostensivas sobre garantias de estágio e empregabilidade, conforme prints de telas e fotos dos outdoors em anexo.

O Autor pagou mensalidades no valor de R$ 1.800,00 durante três anos de curso, totalizando R$ 64.800,00.

Ao concluir o curso, o Autor não recebeu qualquer oportunidade de estágio e não conseguiu emprego na área jurídica, frustrando completamente as expectativas criadas pela publicidade do Réu.

O Autor descobriu que a empregabilidade real dos formandos do Réu era de aproximadamente 30%, bem inferior aos 95% prometidos.

O Réu se recusou a devolver os valores pagos, alegando indevidamente que as promessas de publicidade eram mera "expectativas" e não garantias contratuais.

A publicidade enganosa induziu o Autor ao erro na formação de sua vontade, caracterizando vício do consentimento.

DO DIREITO

O art. 6º, III, do Código de Defesa do Consumidor estabelece o direito à informação adequada e clara sobre os produtos e serviços.

O art. 37 do CDC veda a publicidade enganosa ou abusiva, considerando-se tal toda informação ou comunicação de caráter publicitário que induza o consumidor ao erro.

O art. 429 do Código Civil estabelece que a publicidade de caráter comercial que vise a induzir o consumidor à aquisição de produtos ou serviços vincula o anunciante.

O art. 171 do Código Civil configura o erro como vício do consentimento, anulando o negócio jurídico quando a parte for induzida ao erro por dolo de outra parte.

O art. 475 do Código Civil autoriza a resolução do contrato por inadimplemento.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a anulação/rescisão do contrato de matrícula firmado entre as partes, em razão do vício do consentimento causado pela publicidade enganosa;

b) a condenação do Réu à restituição integral dos valores pagos, no montante de R$ 64.800,00, acrescidos de correção monetária e juros desde a data de cada pagamento;

c) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 20.000,00, em razão da frustração das expectativas e do tempo perdido;

d) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 84.800,00.

Nestes termos, pede deferimento.

Porto Alegre, 10 de junho de 2024.

[Assinatura]
RICARDO ALVES`,
  },
  {
    id: 7,
    title: 'Negativa de Seguro de Vida',
    area: 'Consumidor',
    difficulty: 'Médio',
    description: 'Seguradora recusou pagamento de seguro de vida após falecimento do segurado, alegando omissão de informação de doença prévia.',
    facts: [
      'José Antônio, CPF 369.147.258-00, contratou seguro de vida com a Segura Mais S.A. em 2020.',
      'José faleceu em 05/03/2024 por complicações de diabetes.',
      'A seguradora negou o pagamento da indenização de R$ 100.000,00 alegando que José não informou que tinha diabetes na proposta.',
      'A proposta foi preenchida pelo corretor da seguradora, não por José.',
      'José fazia tratamento de diabetes há mais de 10 anos e a doença constava em prontuário médico.',
      'A seguradora não realizou exame médico na contratação.',
      'A beneficiária, sua esposa Maria, está sem recursos após o falecimento.',
    ],
    hints: [
      'A proposta preenchida pelo corretor pode configurar culpa da seguradora.',
      'Art. 765 do CC: seguradora deve realizar exame de saúde se quiser.',
      'Pense em responsabilidade objetiva do fornecedor e cláusula de inadimplemento.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE SALVADOR/BA

AUTOR: MARIA FERREIRA, brasileira, viúva, portadora do CPF nº 741.852.963-00, residente na Rua do Carmo, nº 50, Bairro Pelourinho, Salvador/BA.

RÉU: SEGURA MAIS S.A., seguradora, inscrita no CNPJ sob o nº 67.890.123/0001-56, com sede na Avenida Segura, nº 3000, Bairro Comércio, Salvador/BA.

DOS FATOS

O Autor é beneficiária do seguro de vida contratado pelo seu falecido esposo, José Antônio, portador do CPF nº 369.147.258-00, junto ao Réu em 2020.

O falecido José Antônio veio a falecer em 05 de março de 2024, em decorrência de complicações relacionadas à diabetes mellitus.

A proposta de seguro foi preenchida pelo corretor indicado pelo próprio Réu, não pelo falecido segurado, que apenas assinou o documento.

O Réu negou o pagamento da indenização de R$ 100.000,00, alegando que o falecido não informou a existência de diabetes na proposta de adesão.

O falecido fazia tratamento de diabetes há mais de dez anos, com a doença devidamente documentada em prontuários médicos.

O Réu não realizou exame médico prévio na contratação do seguro, optando por aceitar a proposta sem a devida análise de risco.

A negativa do Réu deixou o Autor, viúva e dependente econômica do falecido, sem recursos financeiros.

DO DIREITO

O art. 765 do Código Civil estabelece que a seguradora deve realizar exame de saúde do segurado antes da contratação, se assim o desejar.

O art. 14 do Código de Defesa do Consumidor impõe responsabilidade objetiva ao fornecedor de serviços.

O art. 6º, VI, do CDC garante a reparação de danos patrimoniais e morais.

A proposta preenchida pelo corretor da própria seguradora cria expectativa de confiança e a culpa eventual da contratação deve ser imputada ao Réu, que não verificou as informações.

O art. 927 do Código Civil estabelece a responsabilidade civil por ato ilícito.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação do Réu ao pagamento da indenização do seguro de vida, no montante de R$ 100.000,00, acrescida de correção monetária e juros desde a data do falecimento;

b) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 25.000,00, em razão da negativa injusta e do sofrimento causado à viúva;

c) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 125.000,00.

Nestes termos, pede deferimento.

Salvador, 15 de abril de 2024.

[Assinatura]
MARIA FERREIRA`,
  },
  // Difíceis
  {
    id: 8,
    title: 'Responsabilidade por Produto Defeituoso',
    area: 'Consumidor',
    difficulty: 'Difícil',
    description: 'Celular explodiu durante o carregamento e causou queimaduras graves. Fabricante e loja se eximem de responsabilidade.',
    facts: [
      'Paulo Henrique, CPF 258.369.147-00, comprou um smartphone da marca X-Phone na loja TechStore em 01/2024.',
      'Em 15/03/2024, o aparelho explodiu durante o carregamento noturno, causando queimaduras de 2º grau no rosto e braço de Paulo.',
      'Paulo foi hospitalizado por 15 dias e teve sequelas estéticas permanentes no braço.',
      'O custo total do tratamento foi de R$ 45.000,00.',
      'A fabricante alega que o defeito foi causado por uso de carregador não original.',
      'A loja alega que a responsabilidade é exclusiva do fabricante.',
      'Paulo usou o carregador original que acompanhou o aparelho.',
      'Laudo pericial confirmou defeito de fabricação na bateria.',
    ],
    hints: [
      'Responsabilidade objetiva do fabricante (art. 12, CDC).',
      'Responsabilidade solidária da cadeia de fornecedores (art. 13, CDC).',
      'Pense em danos materiais (tratamento), danos morais e estéticos.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE SÃO PAULO/SP

AUTOR: PAULO HENRIQUE, brasileiro, solteiro, portador do CPF nº 258.369.147-00, residente na Rua da República, nº 800, Bairro República, São Paulo/SP.

RÉU: X-PHONE INDÚSTRIA E COMÉRCIO DE ELETRÔNICOS S.A., fabricante de produtos eletrônicos, inscrita no CNPJ sob o nº 78.901.234/0001-67, com sede na Avenida Tecnologia, nº 4000, Bairro Industrial, São Paulo/SP.

RÉU: TECHSTORE COMÉRCIO DE ELETRÔNICOS LTDA., estabelecimento comercial, inscrita no CNPJ sob o nº 89.012.345/0001-78, com sede na Rua das Compras, nº 250, Bairro Centro, São Paulo/SP.

DOS FATOS

O Autor adquiriu um smartphone da marca X-Phone, modelo Pro 2024, junto ao Réu TechStore em janeiro de 2024.

Em 15 de março de 2024, o aparelho explodiu durante o carregamento noturno, causando graves queimaduras de segundo grau no rosto e braço direito do Autor.

O Autor foi internado em hospital por quinze dias, sendo submetido a tratamento cirúrgico e diversos procedimentos de recuperação.

O custo total do tratamento médico-hospitalar foi de R$ 45.000,00, conforme notas fiscais e relatórios médicos em anexo.

O Autor apresentou sequelas estéticas permanentes no braço direito, com cicatrizes visíveis e evidentes.

O Réu X-Phone alegou que o defeito teria sido causado por uso de carregador não original, tentando se eximir de responsabilidade.

O Réu TechStore alegou que a responsabilidade pelo produto é exclusiva do fabricante, tentando se eximir igualmente.

O Autor utilizou exclusivamente o carregador original fornecido junto com o aparelho.

Laudo pericial técnico confirmou defeito de fabricação na bateria do aparelho, sendo a causa direta da explosão.

DO DIREITO

O art. 12 do Código de Defesa do Consumidor estabelece a responsabilidade objetiva do fabricante pelos danos causados aos consumidores por defeitos de fabricação de produtos.

O art. 13 do CDC estabelece a responsabilidade solidária de todos os fornecedores da cadeia produtiva, incluindo fabricante, importador, distribuidor e comerciante.

O art. 6º, VI, do CDC garante a reparação de danos patrimoniais, morais e estéticos.

O art. 927 do Código Civil estabelece o dever de indenizar o dano causado por ato ilícito.

O art. 186 do Código Civil define a responsabilidade civil por dano causado por ação ou omissão.

O art. 402 do Código Civil estabelece a indenização por dano estético, independentemente de dano moral.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação dos Réus, solidariamente, ao pagamento de indenização por danos materiais no valor de R$ 45.000,00, referente ao tratamento médico-hospitalar, acrescido de correção monetária e juros;

b) a condenação dos Réus, solidariamente, ao pagamento de indenização por danos morais no valor de R$ 80.000,00, em razão do sofrimento psicológico, trauma e sequelas permanentes;

c) a condenação dos Réus, solidariamente, ao pagamento de indenização por dano estético no valor de R$ 40.000,00, em razão das cicatrizes permanentes e deformação do braço direito;

d) a condenação dos Réus ao pagamento de pensão mensal vitalícia no valor de R$ 2.000,00, em razão da incapacidade estética e funcional parcial;

e) a condenação dos Réus ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 165.000,00.

Nestes termos, pede deferimento.

São Paulo, 20 de maio de 2024.

[Assinatura]
PAULO HENRIQUE`,
  },
  {
    id: 9,
    title: 'Fraude em Financiamento de Veículo',
    area: 'Consumidor',
    difficulty: 'Difícil',
    description: 'Concessionária e financeira praticaram fraude em contrato de financiamento, incluindo taxas ocultas e alteração de valores.',
    facts: [
      'Luciana Costa, CPF 963.852.741-00, comprou um carro zero km na concessionária AutoMax.',
      'O valor do veículo era R$ 80.000,00, com entrada de R$ 20.000,00 e financiamento de R$ 60.000,00 em 60 parcelas.',
      'Na assinatura do contrato, a vendedora apresentou documentos rápidos e Luciana não teve tempo de ler.',
      'Após a assinatura, Luciana descobriu que o contrato continha taxas de abertura de crédito (R$ 3.000,00), seguro obrigatório (R$ 8.000,00) e IOF não informado.',
      'O valor financiado no contrato era de R$ 74.000,00, não R$ 60.000,00.',
      'Luciana entrou na Justiça e a concessionária e a financeira se eximem.',
      'Descobriu-se que a vendedora era funcionária fantasma da concessionária.',
    ],
    hints: [
      'Fraude e dolo na contratação (art. 171, CC).',
      'Cláusulas abusivas e taxas ocultas (art. 51, CDC).',
      'Pense em anulação do contrato, restituição e danos morais.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE FORTALEZA/CE

AUTOR: LUCIANA COSTA, brasileira, casada, portadora do CPF nº 963.852.741-00, residente na Avenida Beira Mar, nº 1500, Bairro Meireles, Fortaleza/CE.

RÉU: AUTOMAX CONCESSIONÁRIA DE VEÍCULOS LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 90.123.456/0001-89, com sede na Avenida dos Automóveis, nº 5000, Bairro Aeroporto, Fortaleza/CE.

RÉU: FINANCEIRA VÁLIDA S.A., instituição financeira, inscrita no CNPJ sob o nº 01.234.567/0001-90, com sede na Rua das Finanças, nº 1000, Bairro Centro, Fortaleza/CE.

DOS FATOS

A Autora adquiriu um veículo zero km junto ao Réu AutoMax, com valor de R$ 80.000,00, mediante pagamento de entrada de R$ 20.000,00 e financiamento de R$ 60.000,00 em sessenta parcelas.

A vendedora do Réu AutoMax apresentou os documentos de forma apressada, não permitindo à Autora a devida leitura e análise do contrato de financiamento.

Após a assinatura do contrato, a Autora verificou que o valor financiado era de R$ 74.000,00, e não R$ 60.000,00 conforme combinado.

O contrato continha taxas não informadas, incluindo taxa de abertura de crédito no valor de R$ 3.000,00, seguro obrigatório no valor de R$ 8.000,00 e IOF não discriminado.

A Autora entrou com reclamação administrativa e judicial, sendo informada posteriormente que a vendedora era funcionária fantasma da concessionária, sem registro em carteira.

A prática dos Réus configura fraude e dolo na contratação, com inclusão de cláusulas abusivas e taxas ocultas.

DO DIREITO

O art. 171 do Código Civil configura o dolo como vício do consentimento, anulando o negócio jurídico quando a parte for induzida ao erro por dolo de outra parte.

O art. 51 do Código de Defesa do Consumidor veda a inclusão de cláusulas abusivas nos contratos de consumo.

O art. 6º, VI, do CDC garante a reparação de danos patrimoniais e morais.

O art. 39, inciso I, do CDC veda a prática de enganar o consumidor quanto às características essenciais dos produtos ou serviços.

O art. 14 do CDC impõe responsabilidade objetiva aos fornecedores.

O art. 927 do Código Civil estabelece a responsabilidade civil por ato ilícito.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a anulação do contrato de financiamento firmado entre a Autora e os Réus, em razão do dolo e fraude na contratação;

b) a condenação dos Réus à restituição integral dos valores pagos, no montante de R$ 20.000,00 (entrada), acrescidos de correção monetária e juros;

c) a condenação dos Réus ao pagamento de indenização por danos morais no valor de R$ 30.000,00, em razão da fraude e do constrangimento sofrido;

d) a declaração de nulidade das cláusulas abusivas inseridas no contrato, incluindo taxas ocultas;

e) a condenação dos Réus ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 50.000,00.

Nestes termos, pede deferimento.

Fortaleza, 25 de abril de 2024.

[Assinatura]
LUCIANA COSTA`,
  },

  // ============ DIREITO TRABALHISTA ============
  // Fáceis
  {
    id: 10,
    title: 'Despedida Imotivada',
    area: 'Trabalhista',
    difficulty: 'Fácil',
    description: 'Maria foi demitida sem justa causa após 5 anos de trabalho e não recebeu as verbas rescisórias.',
    facts: [
      'Maria Oliveira, CPF 987.654.321-00, trabalhou como auxiliar administrativa na empresa Comercial XYZ Ltda. de 01/01/2019 a 15/03/2024.',
      'Maria foi contratada sem registro em carteira nos primeiros 3 meses, e depois teve a carteira assinada.',
      'No dia 15/03/2024, Maria foi chamada pelo gerente e informada que estava dispensada sem justa causa.',
      'A empresa não pagou as verbas rescisórias (saldo de salário, 13º proporcional, férias proporcionais + 1/3, aviso prévio, FGTS + 40%).',
      'Maria também não recebeu o guia do seguro-desemprego.',
      'Durante o contrato, Maria trabalhou de segunda a sexta, das 8h às 18h, com 1h de intervalo, mas frequentemente fazia horas extras não registradas.',
    ],
    hints: [
      'Considere a rescisão indireta ou a simples cobrança de verbas.',
      'Lembre-se dos prazos prescricionais na justiça do trabalho.',
      'Pense nas horas extras e na CLT.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DO TRABALHO DA VARA DO TRABALHO DA COMARCA DE SÃO PAULO/SP

RECLAMANTE: MARIA OLIVEIRA, brasileira, solteira, portadora do CPF nº 987.654.321-00, e CTPS nº 1234567/SP, residente na Rua das Oliveiras, nº 200, Bairro Vila Maria, São Paulo/SP.

RECLAMADA: COMERCIAL XYZ LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 11.222.333/0001-44, com sede na Rua do Comércio, nº 100, Bairro Centro, São Paulo/SP.

DOS FATOS

A Reclamante foi admitida pela Reclamada em 01 de janeiro de 2019, na função de auxiliar administrativa.

Nos primeiros três meses de trabalho, a Reclamada não registrou a Reclamante em carteira, só procedendo ao registro após o período inicial.

A Reclamante trabalhava de segunda a sexta-feira, das 8h às 18h, com intervalo de 1h para almoço, totalizando jornada de 9h diárias.

Durante todo o contrato de trabalho, a Reclamante realizava frequentemente horas extras, sem o devido registro em controles de ponto ou pagamento correspondente.

Em 15 de março de 2024, a Reclamante foi chamada pelo gerente e informada de sua dispensa sem justa causa, sem qualquer aviso prévio.

A Reclamada se recusou a pagar as verbas rescisórias devidas, incluindo saldo de salário, 13º salário proporcional, férias proporcionais acrescidas de 1/3, aviso prévio e indenização compensatória do FGTS com acréscimo de 40%.

A Reclamante também não recebeu a guia do seguro-desemprego, impedindo o acesso ao benefício.

DO DIREITO

O art. 7º, VIII, da Constituição Federal garante ao trabalhador o salário mínimo, vital e capaz de suprir as necessidades básicas.

A CLT, art. 477, estabelece o prazo de 10 dias para pagamento das verbas rescisórias na dispensa sem justa causa.

O art. 477, § 8º, da CLT, acrescido pela Reforma Trabalhista, estabelece que o não pagamento das verbas rescisórias no prazo legal enseja multa de 50% sobre o valor do FGTS.

A Súmula 338 do TST estabelece que a não entrega da guia do seguro-desemprego gera o dever de indenizar.

O art. 59 da CLT estabelece que a hora extra deve ser paga com acréscimo de, no mínimo, 50%.

O art. 7º, inciso XVI, da Constituição Federal garante o direito ao seguro-desemprego em caso de desemprego involuntário.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação da Reclamada ao pagamento das verbas rescisórias, incluindo saldo de salário, 13º salário proporcional, férias proporcionais com 1/3, aviso prévio indenizado, FGTS e multa de 40%;

b) a condenação da Reclamada ao pagamento de horas extras, com acréscimo de 50% e reflexos em DSR, 13º, férias e 1/3;

c) a condenação da Reclamada ao pagamento de indenização por não entrega da guia do seguro-desemprego, no valor correspondente a três parcelas do benefício;

d) a condenação da Reclamada ao pagamento de multa do art. 477, § 8º, da CLT, no valor de 50% sobre o FGTS;

e) a condenação da Reclamada ao pagamento de danos morais pelo atraso no pagamento das verbas rescisórias;

f) a condenação da Reclamada ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 25.000,00.

Nestes termos, pede deferimento.

São Paulo, 20 de março de 2024.

[Assinatura]
MARIA OLIVEIRA`,
  },
  {
    id: 11,
    title: 'Trabalho Sem Registro em Carteira',
    area: 'Trabalhista',
    difficulty: 'Fácil',
    description: 'Pedro trabalhou como motorista por 2 anos sem carteira assinada e foi dispensado sem pagamento.',
    facts: [
      'Pedro Almeida, CPF 741.852.963-00, trabalhou como motorista particular para a família Mendes por 2 anos (01/2022 a 01/2024).',
      'Pedro trabalhava de segunda a sábado, das 7h às 19h, sem intervalo de almoço.',
      'Recebia R$ 2.500,00 mensal em dinheiro, sem holerite.',
      'A família Mendes dispensou Pedro sem pagamento de qualquer verba.',
      'Pedro possui testemunhas que comprovam a relação de trabalho.',
      'Pedro possui fotos e mensagens de WhatsApp comprovando a jornada e os pagamentos.',
    ],
    hints: [
      'Reconhecimento de vínculo empregatício (art. 3º, CLT).',
      'Prova testemunhal e documental indireta são válidas (Súmula 23, TST).',
      'Pense em todas as verbas rescisórias e reflexos.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DO TRABALHO DA VARA DO TRABALHO DA COMARCA DE RIO DE JANEIRO/RJ

RECLAMANTE: PEDRO ALMEIDA, brasileiro, casado, portador do CPF nº 741.852.963-00, e CTPS nº 7654321/RJ, residente na Rua dos Motoristas, nº 50, Bairro Santa Teresa, Rio de Janeiro/RJ.

RECLAMADA: FAMÍLIA MENDES, representada por JOSÉ MENDES, brasileiro, casado, portador do CPF nº 852.963.741-00, residente na Rua das Mansões, nº 100, Bairro Jardim Botânico, Rio de Janeiro/RJ.

DOS FATOS

A Reclamante foi admitida pelo Reclamado em 01 de janeiro de 2022, na função de motorista particular, para atender às necessidades de transporte da família Mendes.

Durante todo o período de trabalho, que se estendeu até 01 de janeiro de 2024, a Reclamada não registrou a Reclamante em carteira de trabalho, violando o art. 29 da CLT.

A Reclamante trabalhava de segunda a sábado, das 7h às 19h, sem intervalo para almoço, totalizando jornada de 12h diárias.

A Reclamante recebia mensalmente a quantia de R$ 2.500,00 em dinheiro, sem a devida emissão de holerite ou comprovante de pagamento.

Em 01 de janeiro de 2024, a Reclamada dispensou a Reclamante sem qualquer pagamento de verbas rescisórias ou aviso prévio.

A Reclamante possui prova testemunhal de ex-colegas e vizinhos que acompanhavam sua rotina de trabalho, bem como fotos e mensagens de aplicativo de mensagens que comprovam a jornada, os pagamentos e a relação de emprego.

DO DIREITO

O art. 3º da CLT define relação de emprego como toda prestação de serviços não eventuais, em subordinação, mediante remuneração.

A Súmula 23 do TST estabelece que a prova testemunhal e documental indireta é válida para o reconhecimento de vínculo empregatício.

O art. 29 da CLT estabelece a obrigatoriedade de registro do empregado em carteira.

O art. 59 da CLT estabelece que a hora extra deve ser paga com acréscimo de 50%.

A Súmula 437 do TST estabelece que a não concessão do intervalo intrajornada gera o pagamento do período como hora extra, com acréscimo de 50%.

O art. 7º, inciso VIII, da Constituição Federal garante a irredutibilidade salarial.

DOS PEDIDOS

Diante do exposto, requer-se:

a) o reconhecimento do vínculo empregatício entre a Reclamante e a Reclamada, no período de 01/01/2022 a 01/01/2024;

b) a condenação da Reclamada ao pagamento de todas as verbas rescisórias, incluindo saldo de salário, 13º salário proporcional, férias proporcionais com 1/3, aviso prévio indenizado, FGTS e multa de 40%;

c) a condenação da Reclamada ao pagamento de horas extras, com acréscimo de 50%, considerando a jornada de 12h diárias e a supressão do intervalo intrajornada;

d) a condenação da Reclamada ao pagamento de DSR, 13º, férias e 1/3 sobre as horas extras;

e) a condenação da Reclamada ao pagamento de adicional de noturno, se aplicável;

f) a condenação da Reclamada ao pagamento de danos morais pelo não registro em carteira;

g) a condenação da Reclamada ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 30.000,00.

Nestes termos, pede deferimento.

Rio de Janeiro, 10 de fevereiro de 2024.

[Assinatura]
PEDRO ALMEIDA`,
  },
  // Médios
  {
    id: 12,
    title: 'Assédio Moral no Trabalho',
    area: 'Trabalhista',
    difficulty: 'Médio',
    description: 'Funcionário sofreu assédio moral por supervisor durante 6 meses e pediu demissão.',
    facts: [
      'André Silva, CPF 159.357.486-00, trabalhou como vendedor na Loja Mega por 3 anos.',
      'Há 6 meses, um novo supervisor foi nomeado e passou a humilhar André publicamente, cobrando metas impossíveis e fazendo comentários degradantes.',
      'André registrou diversas reclamações no RH, mas nada foi feito.',
      'André desenvolveu transtorno de ansiedade e depressão, com atestados médicos.',
      'Em 01/02/2024, André pediu demissão por não aguentar mais.',
      'André gastou R$ 8.000,00 com tratamento psicológico e psiquiátrico.',
      'Colegas de trabalho confirmam o assédio.',
    ],
    hints: [
      'Assédio moral caracteriza rescisão indireta (art. 483, CLT).',
      'Pense em danos morais e materiais (tratamento médico).',
      'Responsabilidade objetiva da empresa pelo ambiente de trabalho.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DO TRABALHO DA VARA DO TRABALHO DA COMARCA DE SÃO PAULO/SP

RECLAMANTE: ANDRÉ SILVA, brasileiro, solteiro, portador do CPF nº 159.357.486-00, e CTPS nº 3456789/SP, residente na Rua das Vendas, nº 300, Bairro Vila Olímpia, São Paulo/SP.

RECLAMADA: LOJA MEGA COMÉRCIO DE ARTIGOS LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 22.333.444/0001-55, com sede na Avenida das Lojas, nº 2500, Bairro Centro, São Paulo/SP.

DOS FATOS

A Reclamante foi admitida pela Reclamada em 2021, na função de vendedor, trabalhando por três anos sem ocorrência de problemas.

Há seis meses, a Reclamada nomeou um novo supervisor que passou a exercer conduta sistemática de humilhação e perseguição contra a Reclamante.

O supervisor cobrava metas de vendas impossíveis de serem atingidas, fazia comentários degradantes em reuniões públicas e isolava a Reclamante de atividades e eventos da equipe.

A Reclamante registrou formalmente diversas reclamações no setor de Recursos Humanos da Reclamada, solicitando providências, porém nenhuma medida foi adotada para cessar o assédio.

Em decorrência do assédio moral sistemático, a Reclamante desenvolveu transtorno de ansiedade generalizada e quadro depressivo, com diversos atestados médicos em anexo.

A Reclamante gastou R$ 8.000,00 com tratamento psicológico e psiquiátrico, conforme notas fiscais e relatórios médicos em anexo.

Em 01 de fevereiro de 2024, a Reclamante, impossibilitada de continuar trabalhando no ambiente hostil, foi compelida a pedir demissão.

Diversos colegas de trabalho, em depoimento, confirmam a prática de assédio moral pelo supervisor.

DO DIREITO

O art. 483, inciso II, da CLT, permite ao empregado considerar rescindido o contrato de trabalho quando sofrer tratamento rigoroso do empregador, caracterizando a rescisão indireta.

A Súmula 435 do TST estabelece que a responsabilidade do empregador por assédio moral é objetiva, independentemente de culpa.

O art. 186 do Código Civil estabelece a responsabilidade civil por dano causado por ato ilícito.

O art. 927 do Código Civil estabelece o dever de indenizar o dano causado.

A Súmula 377 do TST estabelece que o assédio moral gera direito a indenização por dano moral e material.

O art. 7º, inciso XXVIII, da Constituição Federal assegura condições de trabalho que preservem a saúde e a integridade física e mental.

DOS PEDIDOS

Diante do exposto, requer-se:

a) o reconhecimento da rescisão indireta do contrato de trabalho, em razão do assédio moral;

b) a condenação da Reclamada ao pagamento das verbas rescisórias da rescisão indireta, incluindo saldo de salário, 13º salário proporcional, férias proporcionais com 1/3, aviso prévio indenizado, FGTS e multa de 40%;

c) a condenação da Reclamada ao pagamento de indenização por danos materiais no valor de R$ 8.000,00, referente ao tratamento psicológico e psiquiátrico;

d) a condenação da Reclamada ao pagamento de indenização por danos morais no valor de R$ 50.000,00, em razão do assédio moral sistemático e das sequelas psicológicas;

e) a condenação da Reclamada ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 58.000,00.

Nestes termos, pede deferimento.

São Paulo, 15 de fevereiro de 2024.

[Assinatura]
ANDRÉ SILVA`,
  },
  {
    id: 13,
    title: 'Insalubridade em Fábrica',
    area: 'Trabalhista',
    difficulty: 'Médio',
    description: 'Operário trabalhou 10 anos em ambiente com exposição a ruído sem receber adicional de insalubridade.',
    facts: [
      'Manoel Pereira, CPF 357.159.852-00, trabalhou como operário na Fábrica de Metais Forte por 10 anos (2014 a 2024).',
      'Manoel trabalhava em linha de produção com máquinas que emitiam ruído acima de 85 decibéis.',
      'A fábrica não fornecia EPI adequado (protetores auriculares).',
      'Manoel desenvolveu perda auditiva parcial, confirmada por laudo pericial.',
      'A fábrica nunca pagou adicional de insalubridade nem periculosidade.',
      'Manoel foi demitido em 2024 e não recebeu as verbas corretas.',
      'Laudo técnico constatou insalubridade de grau máximo no ambiente.',
    ],
    hints: [
      'Adicional de insalubridade (art. 192, CLT; NR-15).',
      'Dano ambiental de trabalho (art. 7º, XXVIII, CF).',
      'Pense em Dano Moral Coletivo, Dano Estético, e revisão de rescisão.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DO TRABALHO DA VARA DO TRABALHO DA COMARCA DE BELO HORIZONTE/MG

RECLAMANTE: MANOEL PEREIRA, brasileiro, casado, portador do CPF nº 357.159.852-00, e CTPS nº 5678901/MG, residente na Rua dos Trabalhadores, nº 100, Bairro Industrial, Belo Horizonte/MG.

RECLAMADA: FÁBRICA DE METAIS FORTE LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 33.444.555/0001-66, com sede na Avenida da Indústria, nº 3500, Bairro Industrial, Belo Horizonte/MG.

DOS FATOS

A Reclamante foi admitida pela Reclamada em 2014, na função de operário de linha de produção, permanecendo no cargo por dez anos, até 2024.

Durante todo o período de trabalho, a Reclamante foi exposto a ruído contínuo proveniente de máquinas industriais, com nível superior a 85 decibéis, conforme laudo técnico pericial em anexo.

A Reclamada não forneceu Equipamento de Proteção Individual adequado, em especial protetores auriculares, violando a Norma Regulamentadora nº 15 do Ministério do Trabalho.

A Reclamada nunca pagou adicional de insalubridade, apesar de o ambiente de trabalho estar enquadrado como insalubre de grau máximo, conforme laudo técnico pericial.

A Reclamante desenvolveu perda auditiva parcial, confirmada por laudo médico pericial em anexo, em decorrência da exposição contínua ao ruído sem proteção.

A Reclamada dispensou a Reclamante em 2024, sem o correto pagamento das verbas rescisórias e sem reconhecer os direitos à insalubridade e às diferenças salariais.

DO DIREITO

A NR-15 do Ministério do Trabalho estabelece os critérios para enquadramento de atividades e operações insalubres, sendo o ruído contínuo acima de 85 decibéis considerado agente insalubre de grau máximo.

O art. 192 da CLT estabelece que o trabalho em condições insalubres, acima dos limites de tolerância, enseja o pagamento de adicional de 40% sobre o salário mínimo da região (grau máximo).

O art. 7º, inciso XXVIII, da Constituição Federal assegura condições de trabalho que preservem a saúde e a integridade física e mental.

A Súmula 364 do TST estabelece que a insalubridade deve ser reconhecida desde a admissão, quando comprovada a exposição ao agente nocivo.

O art. 927 do Código Civil estabelece o dever de indenizar por dano ambiental de trabalho.

A Súmula 438 do TST estabelece que a empresa responde pelos danos causados à saúde do trabalhador em decorrência do ambiente de trabalho.

DOS PEDIDOS

Diante do exposto, requer-se:

a) o reconhecimento do direito ao adicional de insalubridade de grau máximo (40% sobre o salário mínimo) desde a admissão, em 2014, com reflexos em todas as verbas trabalhistas;

b) a condenação da Reclamada ao pagamento das verbas rescisórias corretas, incluindo reflexos da insalubridade;

c) a condenação da Reclamada ao pagamento de indenização por dano material no valor de R$ 15.000,00, referente ao tratamento e aparelho auditivo;

d) a condenação da Reclamada ao pagamento de indenização por dano estético no valor de R$ 20.000,00, em razão da perda auditiva;

e) a condenação da Reclamada ao pagamento de indenização por danos morais no valor de R$ 30.000,00, em razão da exposição ao risco e da perda auditiva;

f) a condenação da Reclamada ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 65.000,00.

Nestes termos, pede deferimento.

Belo Horizonte, 01 de março de 2024.

[Assinatura]
MANOEL PEREIRA`,
  },
  {
    id: 14,
    title: 'Estabilidade Provisória de Gestante',
    area: 'Trabalhista',
    difficulty: 'Médio',
    description: 'Empresa demitiu gestante durante estabilidade provisória e recusou reintegração.',
    facts: [
      'Juliana Costa, CPF 951.753.852-00, trabalhou como recepcionista na Clínica Saúde Total por 2 anos.',
      'Juliana comunicou a gravidez à empresa em 01/2024.',
      'A empresa demitiu Juliana em 15/03/2024, sem justa causa, alegando "corte de gastos".',
      'Juliana estava no período de estabilidade provisória (gestação).',
      'Juliana solicitou reintegração, mas a empresa se recusou.',
      'Juliana está desempregada e sem recursos para o parto.',
      'A empresa sabia da gravidez antes da dispensa.',
    ],
    hints: [
      'Estabilidade provisória da gestante (art. 10, II, "a", ADCT/CF).',
      'Reintegração ou indenização substitutiva (art. 11, § 2º, ADCT/CF).',
      'Pense em salários durante a estabilidade e danos morais.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DO TRABALHO DA VARA DO TRABALHO DA COMARCA DE CURITIBA/PR

RECLAMANTE: JULIANA COSTA, brasileira, casada, gestante, portadora do CPF nº 951.753.852-00, e CTPS nº 6789012/PR, residente na Rua das Flores, nº 400, Bairro Centro, Curitiba/PR.

RECLAMADA: CLÍNICA SAÚDE TOTAL LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 44.555.666/0001-77, com sede na Rua da Saúde, nº 1800, Bairro Centro, Curitiba/PR.

DOS FATOS

A Reclamante foi admitida pela Reclamada em 2022, na função de recepcionista, trabalhando por dois anos sem qualquer ocorrência disciplinar.

Em janeiro de 2024, a Reclamante comunicou formalmente sua gravidez à Reclamada, apresentando atestado médico e comunicando a previsão de parto.

A Reclamada, ciente da gravidez da Reclamante, procedeu à sua dispensa sem justa causa em 15 de março de 2024, alegando genéricamente "corte de gastos".

A dispensa ocorreu durante o período de estabilidade provisória da gestante, que se estende desde a confirmação da gravidez até cinco meses após o parto.

A Reclamante solicitou a reintegração ao cargo, porém a Reclamada se recusou a recolocá-la.

A Reclamante encontra-se desempregada, sem recursos financeiros para arcar com os custos do parto e da manutenção do recém-nascido.

A Reclamada agiu com pleno conhecimento da gravidez da Reclamante, demonstrando dolo na dispensa.

DO DIREITO

O art. 10, inciso II, alínea "a", do ADCT da Constituição Federal, garante a estabilidade provisória à gestante desde a confirmação da gravidez até cinco meses após o parto.

O art. 11, § 2º, do ADCT/CF estabelece que a dispensa arbitrária da gestante estável enseja a reintegração, ou, na impossibilidade, o pagamento de indenização substitutiva.

A Súmula 244 do TST estabelece que a dispensa da gestante durante a estabilidade é nula, sendo a trabalhadora reintegrada de ofício.

A Súmula 378 do TST estabelece que a gestante tem direito a salários durante a estabilidade, mesmo quando a reintegração não for possível.

O art. 7º, inciso VIII, da Constituição Federal garante a irredutibilidade salarial.

A Súmula 377 do TST estabelece que a dispensa da gestante estável gera indenização por dano moral.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a declaração de nulidade da dispensa, em razão da violação da estabilidade provisória da gestante;

b) a reintegração da Reclamante ao cargo, com pagamento de todos os salários desde a dispensa;

c) ou, na impossibilidade de reintegração, a condenação da Reclamada ao pagamento de indenização substitutiva correspondente aos salários do período de estabilidade;

d) a condenação da Reclamada ao pagamento de indenização por danos morais no valor de R$ 30.000,00, em razão da dispensa discriminatória e do constrangimento sofrido;

e) a condenação da Reclamada ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 40.000,00.

Nestes termos, pede deferimento.

Curitiba, 25 de março de 2024.

[Assinatura]
JULIANA COSTA`,
  },
  // Difíceis
  {
    id: 15,
    title: 'Reintegração de Empregado Público',
    area: 'Trabalhista',
    difficulty: 'Difícil',
    description: 'Servidor público foi demitido por suposta incompatibilidade de horários, mas a demissão foi irregular.',
    facts: [
      'Rafael Souza, CPF 357.951.486-00, era servidor público federal lotado no INSS.',
      'Rafael foi demitido em 2023 por suposta incompatibilidade de horários com outro cargo público que exercia.',
      'Rafael exercia o segundo cargo com autorização legal (conforme LC 84/96).',
      'A demissão ocorreu sem processo administrativo disciplinar.',
      'Rafael recorreu administrativamente, mas a demissão foi mantida.',
      'Rafael perdeu todos os vínculos e salários por mais de um ano.',
      'A Lei 8.112/90 estabelece garantia de estabilidade após 3 anos de efetivo exercício.',
    ],
    hints: [
      'Estabilidade do servidor público (art. 41, CF; art. 19, Lei 8.112/90).',
      'Acumulação de cargos (art. 37, XVI, CF; LC 84/96).',
      'Pense em reintegração, salários atrasados e danos morais.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DO TRABALHO DA VARA DO TRABALHO DA COMARCA DE BRASÍLIA/DF

RECLAMANTE: RAFAEL SOUZA, brasileiro, casado, portador do CPF nº 357.951.486-00, e matrícula SIAPE nº 1234567, residente na Quadra 100, Bloco A, Apartamento 101, Bairro Asa Sul, Brasília/DF.

RECLAMADA: INSTITUTO NACIONAL DO SEGURO SOCIAL - INSS, autarquia federal, inscrito no CNPJ sob o nº 00.000.000/0001-00, com sede na Esplanada dos Ministérios, Bloco F, Brasília/DF.

DOS FATOS

A Reclamante era servidor público federal lotado na Reclamada, INSS, tendo ingressado no cargo por concurso público.

A Reclamante acumulava legalmente outro cargo público, em conformidade com o art. 37, inciso XVI, da Constituição Federal e a Lei Complementar nº 84/96.

Em 2023, a Reclamada procedeu à demissão da Reclamante, alegando suposta incompatibilidade de horários entre os dois cargos públicos exercidos.

A demissão ocorreu sem a instauração de processo administrativo disciplinar, violando o devido processo legal e o contraditório.

A Reclamante recorreu administrativamente, porém a demissão foi mantida pela administração.

A Reclamante perdeu todos os vínculos funcionais e salários por mais de um ano, sofrendo grave prejuízo material e moral.

A Lei nº 8.112/90, em seu art. 19, estabelece a garantia de estabilidade ao servidor público após três anos de efetivo exercício.

A Reclamante já havia completado mais de três anos de efetivo exercício no cargo, gozando de plena estabilidade funcional.

DO DIREITO

O art. 41 da Constituição Federal estabelece que os servidores públicos nomeados para cargo efetivo em virtude de concurso público adquirem estabilidade após três anos de efetivo exercício.

A Lei nº 8.112/90, art. 19, reforça a garantia de estabilidade do servidor público.

O art. 37, inciso XVI, da Constituição Federal permite a acumulação de cargos públicos quando houver compatibilidade de horários.

A Lei Complementar nº 84/96 regulamenta a acumulação de cargos públicos, estabelecendo as condições de compatibilidade.

A demissão sem processo administrativo disciplinar viola o art. 5º, inciso LIV, da Constituição Federal, que garante o devido processo legal.

O art. 927 do Código Civil estabelece o dever de indenizar por dano causado.

A Súmula 435 do TST estabelece que a responsabilidade da administração pública é objetiva.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a declaração de nulidade da demissão, em razão da violação da estabilidade funcional e da ausência de processo administrativo disciplinar;

b) a reintegração da Reclamante ao cargo, com todos os direitos e vantagens;

c) a condenação da Reclamada ao pagamento de todos os salários e vantagens desde a data da demissão, com reflexos em todos os direitos;

d) a condenação da Reclamada ao pagamento de indenização por danos morais no valor de R$ 50.000,00, em razão da demissão irregular e do prejuízo à carreira;

e) a condenação da Reclamada ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 80.000,00.

Nestes termos, pede deferimento.

Brasília, 10 de janeiro de 2024.

[Assinatura]
RAFAEL SOUZA`,
  },
  {
    id: 16,
    title: 'Reconhecimento de Vínculo com Uber',
    area: 'Trabalhista',
    difficulty: 'Difícil',
    description: 'Motorista de aplicativo busca reconhecimento de vínculo empregatício com a plataforma.',
    facts: [
      'Marcos Vinícius, CPF 852.741.963-00, trabalhou como motorista de aplicativo para a plataforma Uber por 4 anos.',
      'Marcos trabalhava 12h por dia, 6 dias por semana, dependendo exclusivamente da renda da plataforma.',
      'A plataforma determinava tarifas, rotas, avaliações e penalidades.',
      'Marcos foi desativado da plataforma sem explicação e sem direito a qualquer indenização.',
      'Marcos não tinha outra fonte de renda.',
      'A plataforma argumenta que Marcos é parceiro independente, não empregado.',
      'Marcos possui extratos de pagamento, mensagens de suporte e comprovantes de jornada.',
    ],
    hints: [
      'Reconhecimento de vínculo empregatício com plataforma digital (Tema 1.146, TST).',
      'Tríade empregatícia: pessoalidade, subordinação, onerosidade.',
      'Pense em todas as verbas e reflexos.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DO TRABALHO DA VARA DO TRABALHO DA COMARCA DE SÃO PAULO/SP

RECLAMANTE: MARCOS VINÍCIUS, brasileiro, solteiro, portador do CPF nº 852.741.963-00, residente na Rua dos Aplicativos, nº 600, Bairro Vila Mariana, São Paulo/SP.

RÉU: UBER DO BRASIL TECNOLOGIA LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 17.562.640/0001-06, com sede na Avenida Faria Lima, nº 5000, Bairro Pinheiros, São Paulo/SP.

DOS FATOS

A Reclamante trabalhou como motorista de aplicativo para a plataforma digital da Réu por quatro anos, de 2020 a 2024.

A Reclamante trabalhava diariamente por aproximadamente doze horas, seis dias por semana, dependendo exclusivamente da renda obtida por meio da plataforma da Réu.

A Réu determinava as tarifas cobradas dos passageiros, as rotas sugeridas, o sistema de avaliações e as penalidades aplicadas aos motoristas, exercendo controle absoluto sobre a atividade.

A Reclamante era submetida a regras de conduta, padrões de veículo, exigências de documentação e avaliação de desempenho, caracterizando subordinação.

Em 2024, a Réu desativou a conta da Reclamante na plataforma, sem qualquer explicação, notificação prévia ou direito a indenização.

A Reclamante não possuía outra fonte de renda e ficou completamente desprovido de meios de subsistência.

A Réu argumenta que a Reclamante era parceiro independente, não empregado, porém a realidade demonstra pleno preenchimento dos requisitos da relação de emprego.

DO DIREITO

O Tema 1.146 do TST reconhece a possibilidade de vínculo empregatício entre motorista de aplicativo e a plataforma digital, quando presentes os requisitos da relação de emprego.

O art. 3º da CLT define a relação de emprego como toda prestação de serviços não eventuais, em subordinação, mediante remuneração, com pessoalidade e onerosidade.

A Súmula 23 do TST estabelece que a prova testemunhal e documental indireta é válida para o reconhecimento de vínculo empregatício.

A Súmula 396 do TST estabelece que a prestação de serviços mediante plataforma digital não exclui a relação de emprego.

O art. 7º, inciso VIII, da Constituição Federal garante a irredutibilidade salarial.

O art. 927 do Código Civil estabelece o dever de indenizar por dano causado.

DOS PEDIDOS

Diante do exposto, requer-se:

a) o reconhecimento do vínculo empregatício entre a Reclamante e a Réu, no período de 2020 a 2024;

b) a condenação da Réu ao pagamento de todas as verbas rescisórias, incluindo saldo de salário, 13º salário, férias com 1/3, aviso prévio indenizado, FGTS e multa de 40%;

c) a condenação da Réu ao pagamento de horas extras, considerando a jornada de 12h diárias;

d) a condenação da Réu ao pagamento de DSR, 13º, férias e 1/3 sobre as horas extras;

e) a condenação da Réu ao pagamento de adicional de noturno, se aplicável;

f) a condenação da Réu ao pagamento de indenização por danos morais no valor de R$ 40.000,00, em razão da desativação abrupta e da perda de renda;

g) a condenação da Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 100.000,00.

Nestes termos, pede deferimento.

São Paulo, 15 de março de 2024.

[Assinatura]
MARCOS VINÍCIUS`,
  },
  {
    id: 17,
    title: 'Dano Ambiental de Trabalho',
    area: 'Trabalhista',
    difficulty: 'Difícil',
    description: 'Trabalhador foi exposto a amianto por 20 anos e desenvolveu mesotelioma. A empresa nunca informou os riscos.',
    facts: [
      'Sebastião Ramos, CPF 741.963.852-00, trabalhou na Fábrica de Isolamentos por 20 anos (2000 a 2020).',
      'Sebastião foi exposto a amianto (asbestos) durante todo o período sem uso de EPI adequado.',
      'A empresa nunca informou os riscos do amianto aos trabalhadores.',
      'Em 2022, Sebastião foi diagnosticado com mesotelioma pleural maligno, doença causada exclusivamente por amianto.',
      'O médico atestou que a doença é decorrência direta da exposição ocupacional.',
      'Sebastião está em tratamento paliativo com prognóstico reservado.',
      'A empresa já foi condenada anteriormente por outros casos de amianto.',
    ],
    hints: [
      'Dano ambiental de trabalho (art. 927, CC; Súmula 438, TST).',
      'Responsabilidade objetiva da empresa por doença ocupacional.',
      'Pense em indenização por dano existencial, material, moral, estético e pensão.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DO TRABALHO DA VARA DO TRABALHO DA COMARCA DE SÃO PAULO/SP

RECLAMANTE: SEBASTIÃO RAMOS, brasileiro, casado, portador do CPF nº 741.963.852-00, e CTPS nº 7890123/SP, residente na Rua dos Trabalhadores, nº 200, Bairro Mooca, São Paulo/SP.

RECLAMADA: FÁBRICA DE ISOLAMENTOS LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 55.666.777/0001-88, com sede na Avenida da Indústria, nº 4500, Bairro Brás, São Paulo/SP.

DOS FATOS

A Reclamante foi admitida pela Reclamada em 2000, permanecendo no emprego por vinte anos, até 2020.

Durante todo o período de trabalho, a Reclamante foi exposto a amianto (asbestos) no processo de fabricação de isolamentos térmicos, sem o uso de Equipamento de Proteção Individual adequado.

A Reclamada nunca informou aos trabalhadores os riscos à saúde decorrentes da exposição ao amianto, violando o dever de informação e cuidado.

Em 2022, a Reclamante foi diagnosticado com mesotelioma pleural maligno, doença oncológica causada exclusivamente pela inalação de fibras de amianto.

O médico assistente e o perito judicial atestaram que a doença é decorrência direta e exclusiva da exposição ocupacional ao amianto durante os vinte anos de trabalho.

A Reclamante encontra-se em tratamento paliativo, com prognóstico reservado e expectativa de vida significativamente reduzida.

A Reclamada já foi condenada anteriormente por outros casos de doenças relacionadas à exposição ao amianto, demonstrando ciência dos riscos.

DO DIREITO

A Súmula 438 do TST estabelece que a empresa responde pelos danos causados à saúde do trabalhador em decorrência do ambiente de trabalho.

O art. 927 do Código Civil estabelece o dever de indenizar por dano ambiental de trabalho.

A Súmula 435 do TST estabelece que a responsabilidade da empresa por doença ocupacional é objetiva.

O art. 7º, inciso XXVIII, da Constituição Federal assegura condições de trabalho que preservem a saúde e a integridade física e mental.

A Lei nº 9.055/95 proíbe o uso de amianto no Brasil, reconhecendo seus riscos à saúde.

O art. 186 do Código Civil estabelece a responsabilidade civil por dano causado por ação ou omissão.

A Súmula 377 do TST estabelece que a responsabilidade por dano ambiental de trabalho independe de culpa.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação da Reclamada ao pagamento de todas as despesas médicas, hospitalares e de tratamento, presentes e futuras, relacionadas ao mesotelioma;

b) a condenação da Reclamada ao pagamento de indenização por dano material no valor de R$ 200.000,00, em razão dos gastos com tratamento e da perda de capacidade laborativa;

c) a condenação da Reclamada ao pagamento de indenização por dano existencial no valor de R$ 150.000,00, em razão da perda da expectativa de vida e da qualidade de vida;

d) a condenação da Reclamada ao pagamento de indenização por dano estético no valor de R$ 100.000,00, em razão das sequelas físicas e deformidades causadas pela doença;

e) a condenação da Reclamada ao pagamento de indenização por danos morais no valor de R$ 250.000,00, em razão do sofrimento psicológico, da perda da expectativa de vida e da culpa da empresa;

f) a condenação da Reclamada ao pagamento de pensão mensal vitalícia no valor de R$ 5.000,00, em razão da incapacidade total e permanente;

g) a condenação da Reclamada ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 700.000,00.

Nestes termos, pede deferimento.

São Paulo, 01 de abril de 2024.

[Assinatura]
SEBASTIÃO RAMOS`,
  },

  // ============ DIREITO CÍVEL ============
  // Fáceis
  {
    id: 18,
    title: 'Inadimplemento de Contrato',
    area: 'Cível',
    difficulty: 'Fácil',
    description: 'Uma empresa de software contratou um desenvolvedor freelancer que não entregou o projeto e sumiu com o dinheiro.',
    facts: [
      'TechStart Ltda., CNPJ 12.345.678/0001-90, empresa de tecnologia de Curitiba/PR, contratou Lucas Mendes, CPF 999.888.777-66, como desenvolvedor freelancer.',
      'O contrato foi firmado em 10/01/2024, com prazo de entrega de 60 dias (10/03/2024).',
      'O valor total do contrato era de R$ 20.000,00, com pagamento de 50% antecipado (R$ 10.000,00).',
      'TechStart pagou o sinal no dia 15/01/2024 via transferência bancária.',
      'Lucas entregou apenas 20% do projeto e, após diversas promessas, sumiu no dia 01/04/2024.',
      'TechStart precisou contratar outro desenvolvedor por R$ 25.000,00 para refazer o projeto.',
      'A TechStart sofreu atraso no lançamento de seu produto e perdeu uma oportunidade de investimento de R$ 100.000,00.',
    ],
    hints: [
      'Pense em rescisão contratual e indenização por perdas e danos.',
      'Considere o art. 389 do CC (mora).',
      'Avalie a possibilidade de pedido de tutela antecipada para bloqueio de bens.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE CURITIBA/PR

AUTOR: TECHSTART LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 12.345.678/0001-90, com sede na Rua da Tecnologia, nº 500, Bairro Centro, Curitiba/PR.

RÉU: LUCAS MENDES, brasileiro, solteiro, portador do CPF nº 999.888.777-66, residente na Rua dos Desenvolvedores, nº 100, Bairro Água Verde, Curitiba/PR.

DOS FATOS

O Autor, empresa de tecnologia, contratou o Réu como desenvolvedor freelancer para a criação de software de gestão empresarial.

O contrato foi firmado em 10 de janeiro de 2024, com prazo de entrega de 60 dias, ou seja, 10 de março de 2024.

O valor total do contrato foi de R$ 20.000,00, com pagamento de 50% antecipado (R$ 10.000,00) e 50% na entrega.

O Autor efetuou o pagamento do sinal no dia 15 de janeiro de 2024, via transferência bancária, conforme comprovante em anexo.

O Réu entregou apenas 20% do projeto e, após diversas promessas de entrega, sumiu no dia 01 de abril de 2024, sem cumprir o contrato.

O Autor precisou contratar outro desenvolvedor por R$ 25.000,00 para refazer o projeto do zero.

Em decorrência do inadimplemento do Réu, o Autor sofreu atraso no lançamento de seu produto e perdeu uma oportunidade de investimento de R$ 100.000,00.

O Réu agiu com má-fé, aceitando o pagamento antecipado e descumprindo integralmente a obrigação contratual.

DO DIREITO

O art. 389 do Código Civil estabelece que o devedor que não cumprir a obrigação deverá indenizar o credor pelos prejuízos resultantes do inadimplemento.

O art. 475 do Código Civil autoriza a resolução do contrato por inadimplemento, quando o devedor não cumpre a obrigação assumida.

O art. 927 do Código Civil estabelece o dever de indenizar o dano causado por ato ilícito.

O art. 186 do Código Civil define a responsabilidade civil por dano causado por ação ou omissão.

O art. 404 do Código Civil estabelece a indenização por lucros cessantes.

O art. 403 do Código Civil estabelece a indenização por danos emergentes.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a resolução do contrato de prestação de serviços firmado entre as partes;

b) a condenação do Réu à restituição do valor de R$ 10.000,00 pago antecipadamente, acrescido de correção monetária e juros desde a data do pagamento;

c) a condenação do Réu ao pagamento de indenização por danos materiais no valor de R$ 25.000,00, referente ao custo de contratação de novo desenvolvedor;

d) a condenação do Réu ao pagamento de indenização por lucros cessantes no valor de R$ 100.000,00, referente à oportunidade de investimento perdida;

e) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 15.000,00, em razão da frustração dos negócios e do prejuízo à reputação;

f) a concessão de tutela de urgência para bloqueio dos bens do Réu, em caso de risco de insolvência;

g) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 150.000,00.

Nestes termos, pede deferimento.

Curitiba, 15 de abril de 2024.

[Assinatura]
TechStart Ltda.`,
  },
  {
    id: 19,
    title: 'Usucapião de Imóvel',
    area: 'Cível',
    difficulty: 'Fácil',
    description: 'Família ocupou imóvel abandonado por mais de 15 anos e busca usucapião.',
    facts: [
      'A família Oliveira ocupou um terreno baldio na Rua das Palmeiras em 2008.',
      'O terreno pertencia a José Oliveira (falecido), que não deixou herdeiros conhecidos.',
      'A família construiu uma casa modesta e vive no local desde então.',
      'O imóvel está registrado em nome de José Oliveira no Cartório de Imóveis.',
      'A família paga IPTU regularmente desde 2010.',
      'Não há contestação de terceiros sobre a posse.',
      'A família busca o registro do imóvel em nome do chefe de família.',
    ],
    hints: [
      'Usucapião ordinária (art. 1.238, CC) ou extraordinária (art. 1.239, CC).',
      'Requisitos: posse mansa e pacífica, por tempo determinado, com ânimo de dono.',
      'Pense em ação de usucapião com procedimento especial.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE PORTO ALEGRE/RS

AUTOR: ANTÔNIO OLIVEIRA, brasileiro, casado, portador do CPF nº 357.159.486-00, residente na Rua das Palmeiras, nº 50, Bairro Jardim, Porto Alegre/RS.

RÉU: ESPÓLIO DE JOSÉ OLIVEIRA, representado pelo Ministério Público, conforme art. 1.240 do Código Civil.

DOS FATOS

O Autor, em nome de sua família, ocupa o imóvel situado na Rua das Palmeiras, nº 50, desde o ano de 2008.

O imóvel pertencia a José Oliveira, falecido, que não deixou herdeiros conhecidos ou localizados.

A família do Autor construiu uma casa modesta no referido terreno e vive no local de forma contínua e ininterrupta desde a ocupação.

O Autor paga o Imposto Predial e Territorial Urbano (IPTU) regularmente desde 2010, conforme certidão do município em anexo.

O imóvel está registrado em nome do falecido José Oliveira no Cartório de Registro de Imóveis.

Não há contestação de terceiros sobre a posse do imóvel, sendo a ocupação mansa e pacífica.

O Autor possui ânimo de dono, tratando o imóvel como seu, construindo e mantendo o bem.

DO DIREITO

O art. 1.238 do Código Civil estabelece a usucapião ordinária, que requer posse por cinco anos, desde que o possuidor tenha estabelecido o seu domicílio no imóvel e seja maior de 18 anos.

O art. 1.239 do Código Civil estabelece a usucapião extraordinária, que requer posse por quinze anos, independentemente de domicílio ou outras circunstâncias.

O art. 1.240 do Código Civil estabelece que a usucapião será ajuizada contra o proprietário, ou, quando falecido, contra seus herdeiros, ou, não havendo herdeiros, contra o Ministério Público.

O art. 1.196 do Código Civil define a posse como a relação de fato com a coisa, exercida com ânimo de dono.

O art. 1.212 do Código Civil estabelece que a posse é mansa e pacífica quando o possuidor não tem conhecimento de oposição ou contestação.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a procedência da ação de usucapião extraordinária, reconhecendo a posse contínua e ininterrupta por mais de quinze anos;

b) a declaração de que o Autor é o proprietário do imóvel, em razão da usucapião;

c) a determinação de registro do imóvel em nome do Autor, no Cartório de Registro de Imóveis;

d) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 50.000,00, correspondente ao valor venal do imóvel.

Nestes termos, pede deferimento.

Porto Alegre, 10 de março de 2024.

[Assinatura]
ANTÔNIO OLIVEIRA`,
  },
  // Médios
  {
    id: 20,
    title: 'Indenização por Acidente',
    area: 'Cível',
    difficulty: 'Médio',
    description: 'Pedro sofreu um acidente de trânsito causado por um motorista embriagado e ficou com sequelas permanentes.',
    facts: [
      'Pedro Santos, CPF 111.222.333-44, motorista de aplicativo, tinha 35 anos na época do fato.',
      'No dia 20/06/2023, por volta das 23h, Pedro estava parado no sinal vermelho na Av. Brasil, Rio de Janeiro.',
      'Um veículo conduzido por Carlos Ferreira colidiu na traseira do carro de Pedro em alta velocidade.',
      'O teste de bafômetro apontou 0,45 mg/L de álcool no sangue de Carlos (condução embriagada, crime de trânsito).',
      'Pedro sofreu fratura na coluna vertebral, ficando com sequelas permanentes e incapacidade para trabalhar como motorista.',
      'Pedro teve despesas médicas de R$ 45.000,00 e precisou se mudar para casa dos pais por necessitar de cuidados.',
      'Carlos tinha seguro DPVAT, mas a seguradora recusou o pagamento alegando que o veículo estava com IPVA atrasado.',
    ],
    hints: [
      'Pense em danos materiais e danos morais.',
      'Considere a responsabilidade civil objetiva do art. 927, parágrafo único do CC.',
      'Avalie a possibilidade de ação contra o motorista e a seguradora.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE RIO DE JANEIRO/RJ

AUTOR: PEDRO SANTOS, brasileiro, solteiro, portador do CPF nº 111.222.333-44, residente na Rua dos Acidentes, nº 100, Bairro Centro, Rio de Janeiro/RJ.

RÉU: CARLOS FERREIRA, brasileiro, solteiro, portador do CPF nº 222.333.444-55, residente na Rua dos Motoristas, nº 200, Bairro Copacabana, Rio de Janeiro/RJ.

RÉU: SEGURADORA VIDA SEGURA S.A., seguradora, inscrita no CNPJ sob o nº 66.777.888/0001-99, com sede na Avenida das Seguradoras, nº 2500, Bairro Centro, Rio de Janeiro/RJ.

DOS FATOS

O Autor, motorista de aplicativo, com 35 anos de idade na época do fato, estava parado no sinal vermelho na Avenida Brasil, Rio de Janeiro, por volta das 23h do dia 20 de junho de 2023.

O Réu Carlos Ferreira, conduzindo seu veículo em alta velocidade, colidiu na traseira do carro do Autor.

O teste de bafômetro realizado no local apontou 0,45 mg/L de álcool no sangue do Réu Carlos Ferreira, configurando crime de trânsito por condução embriagada.

O Autor sofreu fratura na coluna vertebral, ficando com sequelas permanentes e incapacidade para trabalhar como motorista de aplicativo.

O Autor teve despesas médicas de R$ 45.000,00, conforme notas fiscais e relatórios médicos em anexo.

O Autor precisou se mudar para a casa dos pais, necessitando de cuidados permanentes e perdendo sua autonomia.

O Réu Carlos Ferreira possuía seguro DPVAT junto à Réu Seguradora Vida Segura, porém a seguradora recusou o pagamento da indenização, alegando que o veículo estava com IPVA atrasado.

O atraso do IPVA não afeta a cobertura do seguro DPVAT, que é obrigatório e independente de regularidade do veículo.

DO DIREITO

O art. 927, parágrafo único, do Código Civil estabelece a responsabilidade civil objetiva por atividade de risco, como a condução de veículos.

O art. 927 do Código Civil estabelece o dever de indenizar o dano causado por ato ilícito.

O art. 186 do Código Civil define a responsabilidade civil por dano causado por ação ou omissão.

O art. 6º, VI, do Código de Defesa do Consumidor garante a reparação de danos patrimoniais e morais.

O art. 14 do CDC impõe responsabilidade objetiva ao fornecedor de serviços.

O DPVAT é seguro obrigatório, e a recusa de cobertura por atraso de IPVA é ilegal.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação do Réu Carlos Ferreira ao pagamento de indenização por danos materiais no valor de R$ 45.000,00, referente às despesas médicas, acrescido de correção monetária e juros;

b) a condenação do Réu Carlos Ferreira ao pagamento de indenização por lucros cessantes, correspondente à perda de renda como motorista de aplicativo;

c) a condenação do Réu Carlos Ferreira ao pagamento de indenização por danos morais no valor de R$ 80.000,00, em razão das sequelas permanentes e do sofrimento;

d) a condenação do Réu Carlos Ferreira ao pagamento de indenização por dano estético no valor de R$ 30.000,00;

e) a condenação da Réu Seguradora Vida Segura ao pagamento da indenização do DPVAT, no valor de R$ 100.000,00, em razão da invalidez permanente;

f) a condenação dos Réus ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 255.000,00.

Nestes termos, pede deferimento.

Rio de Janeiro, 20 de julho de 2023.

[Assinatura]
PEDRO SANTOS`,
  },
  {
    id: 21,
    title: 'Inventário e Herança',
    area: 'Cível',
    difficulty: 'Médio',
    description: 'Herdeiros disputam divisão de bens deixados por pai falecido. Um dos filhos quer a maior parte.',
    facts: [
      'Joaquim Ferreira faleceu em 2023, deixando esposa Maria, 3 filhos adultos (João, Pedro, Ana) e um imóvel de R$ 600.000,00.',
      'O imóvel foi adquirido com dinheiro do casal durante o casamento (regime de comunhão parcial de bens).',
      'João, o filho mais velho, quer receber a maior parte alegando que cuidou do pai nos últimos anos.',
      'Maria quer ficar com o imóvel inteiro alegando que é herança conjugal.',
      'Pedro e Ana querem divisão igualitária.',
      'Não existe testamento.',
    ],
    hints: [
      'Meação e herança (art. 1.829, CC).',
      'Cônjuge é herdeiro necessário (art. 1.829, II, CC).',
      'Pense em inventário judicial e divisão por cabeça.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA DE FAMÍLIA E SUCESSÕES DA COMARCA DE SÃO PAULO/SP

AUTOR: PEDRO FERREIRA, brasileiro, solteiro, portador do CPF nº 333.444.555-66, residente na Rua da Herança, nº 100, Bairro Centro, São Paulo/SP.

RÉU: JOÃO FERREIRA, brasileiro, casado, portador do CPF nº 111.222.333-44, residente na Rua do Cuidado, nº 200, Bairro Jardins, São Paulo/SP.

RÉU: ANA FERREIRA, brasileira, solteira, portadora do CPF nº 222.333.444-55, residente na Rua das Flores, nº 300, Bairro Vila Mariana, São Paulo/SP.

RÉU: MARIA FERREIRA, brasileira, viúva, portadora do CPF nº 444.555.666-77, residente na Rua da Família, nº 400, Bairro Centro, São Paulo/SP.

DOS FATOS

O de cujus, Joaquim Ferreira, faleceu em 2023, deixando como herdeiros sua esposa, Maria Ferreira, e seus três filhos adultos: João, Pedro e Ana.

O de cujus deixou como principal bem o imóvel situado na Rua da Família, nº 400, avaliado em R$ 600.000,00.

O imóvel foi adquirido pelo casal durante o casamento, em regime de comunhão parcial de bens, sendo portanto bem comum.

O de cujus não deixou testamento, devendo a herança ser partilhada nos termos da lei.

O Réu João pretende receber a maior parte da herança, alegando que cuidou do pai nos últimos anos de vida.

A Réu Maria pretende ficar com o imóvel inteiro, alegando que é herança conjugal.

O Autor e a Réu Ana requerem a divisão igualitária, conforme a lei.

DO DIREITO

O art. 1.829 do Código Civil estabelece a ordem de vocação hereditária, sendo o cônjuge e os descendentes herdeiros necessários.

O art. 1.831 do Código Civil estabelece que a herança se divide por cabeça entre os herdeiros da mesma classe.

O art. 1.640 do Código Civil estabelece que, no regime de comunhão parcial, os bens adquiridos na constância do casamento são comuns, devendo ser partilhados previamente à herança.

O art. 1.837 do Código Civil estabelece que a meação do cônjuge sobrevivente deve ser reservada antes da partilha da herança.

A Súmula 362 do STJ estabelece que o cônjuge herdeiro necessário tem direito à meação e a parte na herança.

O art. 1.848 do Código Civil estabelece que a legítima dos descendentes é de 50% do patrimônio líquido.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a instauração de inventário judicial para apuração e partilha dos bens deixados pelo de cujus;

b) a determinação de que a Réu Maria tem direito à meação do imóvel (R$ 300.000,00) e a parte na herança;

c) a determinação de que a herança deve ser dividida igualitariamente entre os herdeiros, nos termos do art. 1.831 do Código Civil;

d) a partilha do imóvel entre os herdeiros, com avaliação pericial e eventual venda em hasta pública;

e) a condenação dos Réus ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 600.000,00, correspondente ao valor do imóvel.

Nestes termos, pede deferimento.

São Paulo, 15 de agosto de 2023.

[Assinatura]
PEDRO FERREIRA`,
  },
  {
    id: 22,
    title: 'Direito de Vizinhança',
    area: 'Cível',
    difficulty: 'Médio',
    description: 'Vizinho construiu muro que invade 30cm do terreno do autor e bloqueia a luz solar.',
    facts: [
      'Roberto Dias, CPF 852.963.741-00, é proprietário de uma casa na Rua das Árvores.',
      'Seu vizinho, Sérgio Lima, construiu um muro de 2 metros de altura que invade 30cm do terreno de Roberto.',
      'O muro bloqueia a luz solar da sala de estar de Roberto, que antes recebia luz da manhã.',
      'Roberto tentou resolver amigavelmente, mas Sérgio se recusou a demolir o muro.',
      'A invasão foi constatada por topógrafo.',
      'Roberto sofreu depressão leve por perda de iluminação.',
    ],
    hints: [
      'Direito de vizinhança (arts. 1.277 a 1.289, CC).',
      'Usucapião a non domino não é possível com terreno alheio.',
      'Pense em ação de reintegração de posse e indenização.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE SÃO PAULO/SP

AUTOR: ROBERTO DIAS, brasileiro, casado, portador do CPF nº 852.963.741-00, residente na Rua das Árvores, nº 100, Bairro Jardim, São Paulo/SP.

RÉU: SÉRGIO LIMA, brasileiro, casado, portador do CPF nº 963.741.852-00, residente na Rua das Árvores, nº 102, Bairro Jardim, São Paulo/SP.

DOS FATOS

O Autor é proprietário do imóvel situado na Rua das Árvores, nº 100, com matrícula nº 12345 no Cartório de Registro de Imóveis.

O Réu é proprietário do imóvel vizinho, situado na Rua das Árvores, nº 102.

O Réu construiu um muro de 2 metros de altura que invade 30 centímetros do terreno do Autor, conforme laudo topográfico pericial em anexo.

O muro construído pelo Réu bloqueia a luz solar da sala de estar do Autor, que antes recebia iluminação natural da manhã, prejudicando o ambiente e o bem-estar da família.

O Autor tentou resolver a questão amigavelmente, solicitando ao Réu a demolição do muro invasor, porém o Réu se recusou a atender o pedido.

A invasão de 30 centímetros do terreno do Autor configura esbulho possessório e violação dos direitos de vizinhança.

O Autor desenvolveu quadro de depressão leve, atestado por médico, em decorrência da perda de iluminação natural e do conflito com o vizinho.

DO DIREITO

O art. 1.277 do Código Civil estabelece que o proprietário deve suportar as interferências de vizinhos, desde que não sejam consideráveis.

O art. 1.282 do Código Civil estabelece que o proprietário de prédio tem direito a luz solar, sendo vedada a construção que impeça a iluminação.

O art. 1.210 do Código Civil estabelece que a posse é protegida contra o esbulho, podendo o possuidor requerer a reintegração.

O art. 927 do Código Civil estabelece o dever de indenizar o dano causado por ato ilícito.

O art. 186 do Código Civil define a responsabilidade civil por dano causado por ação ou omissão.

A Súmula 102 do STJ estabelece que a invasão de terreno alheio configura dano, independentemente de culpa.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a reintegração de posse da área de 30 centímetros invadida pelo Réu, com determinação de demolição do muro construído em terreno alheio;

b) a condenação do Réu ao pagamento de indenização por danos materiais no valor de R$ 5.000,00, referente à perda de valor do imóvel em decorrência da invasão;

c) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 10.000,00, em razão do esbulho, da privação de luz solar e do conflito de vizinhança;

d) a condenação do Réu ao pagamento de indenização por dano estético no valor de R$ 3.000,00, em razão da depreciação do ambiente;

e) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 18.000,00.

Nestes termos, pede deferimento.

São Paulo, 20 de setembro de 2023.

[Assinatura]
ROBERTO DIAS`,
  },
  // Difíceis
  {
    id: 23,
    title: 'Responsabilidade Civil do Estado',
    area: 'Cível',
    difficulty: 'Difícil',
    description: 'Preso foi torturado em delegacia e ficou com sequelas permanentes. Estado se recusa a indenizar.',
    facts: [
      'Elias Mendes, CPF 741.852.369-00, foi preso em flagrante por furto em 2022.',
      'Durante a prisão na delegacia, Elias foi torturado por policiais para confessar outros crimes.',
      'Elias sofreu fratura de costelas, hematomas e trauma psicológico.',
      'A tortura foi filmada por câmeras de segurança da delegacia.',
      'Elias ficou 6 meses preso preventivamente, sendo absolvido posteriormente.',
      'O Estado se recusa a indenizar, alegando que os policiais agiram fora da função.',
      'Elias desenvolveu transtorno de estresse pós-traumático.',
    ],
    hints: [
      'Responsabilidade objetiva do Estado (art. 37, § 6º, CF; art. 927, CC).',
      'Tortura é crime imprescritível (art. 5º, XLIII, CF).',
      'Pense em danos morais, materiais, existenciais e revisão da prisão.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE SÃO PAULO/SP

AUTOR: ELIAS MENDES, brasileiro, solteiro, portador do CPF nº 741.852.369-00, residente na Rua dos Direitos, nº 50, Bairro Liberdade, São Paulo/SP.

RÉU: ESTADO DE SÃO PAULO, pessoa jurídica de direito público, inscrito no CNPJ sob o nº 46.377.222/0001-29, representado pelo Procurador-Geral do Estado.

DOS FATOS

O Autor foi preso em flagrante em 2022, por suposto furto, sendo conduzido à delegacia de polícia.

Durante a prisão na delegacia, o Autor foi submetido a tortura física e psicológica por agentes policiais, que buscavam forçar a confissão de outros crimes.

O Autor sofreu fratura de duas costelas, múltiplos hematomas e trauma psicológico severo, conforme laudo médico e perícia em anexo.

A tortura foi registrada pelas câmeras de segurança da delegacia, que comprovam a ação dos policiais.

O Autor permaneceu preso preventivamente por seis meses, sendo posteriormente absolvido em razão de ilegalidade da prisão e ausência de provas.

O Réu, Estado de São Paulo, recusa-se a indenizar o Autor, alegando que os policiais agiram fora de suas funções, tentando se eximir de responsabilidade.

O Autor desenvolveu transtorno de estresse pós-traumático (TEPT), com sequelas psicológicas permanentes, atestadas por médico psiquiátra.

DO DIREITO

O art. 37, § 6º, da Constituição Federal estabelece a responsabilidade objetiva do Estado pelos danos causados por seus agentes.

O art. 5º, inciso XLIII, da Constituição Federal estabelece que a tortura é crime inafiançável e imprescritível, sujeito à pena de reclusão.

A Súmula 546 do STF estabelece que a responsabilidade do Estado por atos de seus agentes é objetiva, independentemente de culpa.

O art. 927 do Código Civil estabelece o dever de indenizar por dano causado.

O art. 186 do Código Civil define a responsabilidade civil por dano causado.

A Convenção Americana de Direitos Humanos (Pacto de San José da Costa Rica) proíbe a tortura e estabelece o dever de reparação.

A Súmula 377 do STJ estabelece que a responsabilidade da administração pública por danos causados a particular é objetiva.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a condenação do Réu ao pagamento de indenização por danos materiais no valor de R$ 30.000,00, referente ao tratamento médico, psicológico e farmacológico;

b) a condenação do Réu ao pagamento de indenização por dano existencial no valor de R$ 100.000,00, em razão da perda da liberdade, da dignidade e da expectativa de vida;

c) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 200.000,00, em razão da tortura, do constrangimento e do trauma psicológico;

d) a condenação do Réu ao pagamento de pensão mensal vitalícia no valor de R$ 3.000,00, em razão da incapacidade psicológica parcial;

e) a determinação de que o Estado providencie acompanhamento médico e psicológico permanente ao Autor;

f) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 330.000,00.

Nestes termos, pede deferimento.

São Paulo, 01 de outubro de 2023.

[Assinatura]
ELIAS MENDES`,
  },
  {
    id: 24,
    title: 'Ação de Despejo e Indenização',
    area: 'Cível',
    difficulty: 'Difícil',
    description: 'Inquilino alugou imóvel comercial, teve prejuízos por infiltrações e foi despejado por atraso decorrente das reparas.',
    facts: [
      'Empresa TecnoComércio Ltda. alugou imóvel comercial em shopping center em 2022.',
      'O contrato previa aluguel de R$ 8.000,00 mensais.',
      'O imóvel apresentou graves infiltrações que danificaram o estoque de produtos eletrônicos (prejuízo de R$ 50.000,00).',
      'A TecnoComércio deixou de pagar 3 aluguéis por estar sem condições de operar.',
      'O shopping ajuizou despejo por falta de pagamento e obteve liminar.',
      'A TecnoComércio tentou reparar o imóvel por conta própria, mas as infiltrações persistiram.',
      'O laudo técnico constatou que as infiltrações eram de responsabilidade do shopping (estrutura do prédio).',
    ],
    hints: [
      'Despejo por falta de pagamento e exceção de contrato não cumprido (art. 476, CC).',
      'Responsabilidade do locador por vícios do imóvel (art. 570, CC).',
      'Pense em retenção de valores, indenização e tutela antecipada.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ DE DIREITO DA VARA CÍVEL DA COMARCA DE SÃO PAULO/SP

AUTOR: TECNOCOMÉRCIO LTDA., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 77.888.999/0001-00, com sede na Rua do Comércio, nº 1500, Bairro Centro, São Paulo/SP.

RÉU: SHOPPING CENTER METROPOLITANO S.A., pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 88.999.000/0001-11, com sede na Avenida do Shopping, nº 3000, Bairro Morumbi, São Paulo/SP.

DOS FATOS

O Autor firmou contrato de locação comercial com o Réu em 2022, para ocupação de loja no shopping center, com aluguel mensal de R$ 8.000,00.

O imóvel locado apresentou graves infiltrações em todo o período de locação, que danificaram o estoque de produtos eletrônicos do Autor, causando prejuízo de R$ 50.000,00, conforme laudo técnico e notas fiscais em anexo.

As infiltrações eram de responsabilidade do Réu, relacionadas à estrutura do edifício, conforme laudo técnico pericial em anexo.

O Autor, impossibilitado de operar comercialmente em razão das infiltrações, deixou de pagar três aluguéis, buscando a reparação do imóvel.

O Réu ajuizou ação de despejo por falta de pagamento e obteve liminar de despejo, sem considerar os vícios do imóvel.

O Autor tentou reparar as infiltrações por conta própria, porém os problemas persistiram, demonstrando que a origem era estrutural.

O Réu violou o art. 570 do Código Civil, que estabelece a responsabilidade do locador pela manutenção e conservação do imóvel.

DO DIREITO

O art. 570 do Código Civil estabelece que o locador é obrigado a entregar o imóvel em estado de servir ao uso a que se destina e a mantê-lo nesse estado durante a locação.

O art. 476 do Código Civil estabelece a exceção de contrato não cumprido, permitindo ao devedor recusar-se a cumprir a obrigação enquanto o outro não cumprir a sua.

O art. 927 do Código Civil estabelece o dever de indenizar o dano causado.

O art. 186 do Código Civil define a responsabilidade civil por dano causado.

A Súmula 133 do STJ estabelece que a liminar de despejo pode ser suspensa quando houver relevante fundamento de defesa.

O art. 6º, VI, do Código de Defesa do Consumidor garante a reparação de danos patrimoniais e morais.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a suspensão da liminar de despejo, em razão da exceção de contrato não cumprido;

b) a declaração de que o Réu é responsável pelos vícios do imóvel e pelos prejuízos causados;

c) a condenação do Réu ao pagamento de indenização por danos materiais no valor de R$ 50.000,00, referente ao estoque danificado;

d) a condenação do Réu ao pagamento de indenização por lucros cessantes, correspondente à perda de faturamento durante o período de inoperância;

e) a condenação do Réu ao pagamento de indenização por danos morais no valor de R$ 20.000,00, em razão do despejo liminar e do prejuízo comercial;

f) a retenção dos aluguéis não pagos, em razão da impossibilidade de uso do imóvel;

g) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de R$ 70.000,00.

Nestes termos, pede deferimento.

São Paulo, 15 de novembro de 2023.

[Assinatura]
TecnoComércio Ltda.`,
  },

  // ============ DIREITO PREVIDENCIÁRIO ============
  // Fáceis
  {
    id: 25,
    title: 'Benefício Previdenciário Negado',
    area: 'Previdenciário',
    difficulty: 'Médio',
    description: 'Antônio teve seu pedido de aposentadoria por idade negado pelo INSS por suposta falta de tempo de contribuição.',
    facts: [
      'Antônio Pereira, CPF 555.666.777-88, nascido em 10/05/1962, trabalhou como empregado doméstico de 1985 a 1995.',
      'De 1995 a 2010, Antônio trabalhou como autônomo, recolhendo INSS mensalmente.',
      'De 2010 a 2022, Antônio trabalhou com carteira assinada em uma empresa de construção civil.',
      'Em 2022, aos 60 anos, Antônio pediu aposentadoria por idade ao INSS.',
      'O INSS negou o pedido, alegando que Antônio não comprovou o tempo de contribuição como empregado doméstico e autônomo.',
      'Antônio possui carnês de pagamento do INSS do período autônomo, mas perdeu os recibos do período como doméstico.',
      'O INSS concedeu apenas 12 anos de tempo de contribuição (período CLT), mas a lei exige 15 anos para homens.',
      'Antônio tem testemunhas que podem comprovar o trabalho doméstico, e boletins de ocorrência de acidentes de trabalho da época.',
    ],
    hints: [
      'Pense em prova testemunhal e prova documental.',
      'Considere a regra de transição da Reforma da Previdência.',
      'Avalie se Antônio pode ter direito a reconhecimento de tempo especial.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ FEDERAL DA VARA PREVIDENCIÁRIA DA SEÇÃO JUDICIÁRIA DO RIO DE JANEIRO/RJ

AUTOR: ANTÔNIO PEREIRA, brasileiro, casado, aposentado, portador do CPF nº 555.666.777-88, residente na Rua do Trabalho, nº 100, Bairro Centro, Rio de Janeiro/RJ.

RÉU: INSTITUTO NACIONAL DO SEGURO SOCIAL - INSS, autarquia federal, inscrito no CNPJ sob o nº 29.539.027/0001-92, representado pelo Procuradoria Federal Especializada junto ao INSS.

DOS FATOS

O Autor, nascido em 10 de maio de 1962, trabalhou como empregado doméstico no período de 1985 a 1995.

De 1995 a 2010, o Autor trabalhou como autônomo, recolhendo mensalmente as contribuições previdenciárias ao INSS.

De 2010 a 2022, o Autor trabalhou com carteira assinada em empresa de construção civil.

Em 2022, ao completar 60 anos de idade, o Autor requereu aposentadoria por idade junto ao INSS.

O INSS negou o pedido de aposentadoria, alegando que o Autor não teria comprovado o tempo de contribuição como empregado doméstico e autônomo.

O INSS concedeu apenas 12 anos de tempo de contribuição, referentes ao período CLT, alegando que o Autor não teria atingido o tempo mínimo de 15 anos para homens.

O Autor possui os carnês de pagamento do INSS do período autônomo, comprovando o recolhimento das contribuições.

O Autor perdeu os recibos do período como empregado doméstico, porém possui testemunhas que podem comprovar o trabalho, bem como boletins de ocorrência de acidentes de trabalho da época.

O Autor cumpre todos os requisitos legais para a aposentadoria por idade, sendo o tempo de contribuição comprovado por prova documental e testemunhal.

DO DIREITO

A Lei nº 8.213/91, em seu art. 48, estabelece a aposentadoria por idade, com exigência de 15 anos de tempo de contribuição para o homem.

A Lei nº 9.711/98 estabelece que o empregado doméstico tem direito à contagem de tempo de contribuição, desde que comprovado.

A Súmula 100 do TST estabelece que o tempo de serviço rural e doméstico pode ser comprovado por prova testemunhal.

A EC nº 103/2019 (Reforma da Previdência) estabelece regras de transição, mantendo o direito adquirido à aposentadoria por idade.

A Súmula 85 do STJ estabelece que a prova testemunhal é admissível para comprovação de tempo de serviço.

O art. 5º, inciso XXXVI, da Constituição Federal estabelece que a lei não prejudicará o direito adquirido, o ato jurídico perfeito e a coisa julgada.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a concessão da aposentadoria por idade ao Autor, reconhecendo o tempo de contribuição comprovado;

b) a condenação do Réu ao pagamento das parcelas atrasadas desde a data do requerimento administrativo;

c) a condenação do Réu ao pagamento dos honorários periciais, se houver;

d) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de 60 salários mínimos.

Nestes termos, pede deferimento.

Rio de Janeiro, 01 de dezembro de 2023.

[Assinatura]
ANTÔNIO PEREIRA`,
  },
  {
    id: 26,
    title: 'Aposentadoria por Invalidez',
    area: 'Previdenciário',
    difficulty: 'Fácil',
    description: 'Operário de construção civil ficou incapacitado por acidente de trabalho e INSS nega aposentadoria por invalidez.',
    facts: [
      'José da Silva, CPF 777.888.999-00, trabalhou como pedreiro por 25 anos.',
      'Em 2023, sofreu queda de andaime em obra, fraturando a coluna e ficando paraplégico.',
      'O INSS negou a aposentadoria por invalidez, alegando que José ainda poderia trabalhar sentado.',
      'José tem laudo médico atestando incapacidade total e permanente.',
      'José acumulou 25 anos de contribuição.',
      'A perícia médica do INSS atestou incapacidade parcial.',
      'José não consegue trabalhar em nenhuma atividade.',
    ],
    hints: [
      'Aposentadoria por invalidez requer incapacidade total e permanente (art. 42, Lei 8.213/91).',
      'A perícia médica do INSS pode ser impugnada (art. 461, CPC).',
      'Pense em tutela de urgência para concessão imediata.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ FEDERAL DA VARA PREVIDENCIÁRIA DA SEÇÃO JUDICIÁRIA DE SÃO PAULO/SP

AUTOR: JOSÉ DA SILVA, brasileiro, casado, portador do CPF nº 777.888.999-00, residente na Rua da Construção, nº 100, Bairro Brás, São Paulo/SP.

RÉU: INSTITUTO NACIONAL DO SEGURO SOCIAL - INSS, autarquia federal, inscrito no CNPJ sob o nº 29.539.027/0001-92, representado pelo Procuradoria Federal Especializada junto ao INSS.

DOS FATOS

O Autor trabalhou como pedreiro na construção civil por vinte e cinco anos, acumulando tempo de contribuição suficiente.

Em 2023, o Autor sofreu grave acidente de trabalho, caindo de andaime em obra, fraturando a coluna vertebral e ficando paraplégico.

O Autor possui laudo médico atestando incapacidade total e permanente para qualquer atividade laboral, conforme documentação em anexo.

O Autor requereu aposentadoria por invalidez junto ao INSS, porém o Réu negou o benefício, alegando que o Autor ainda poderia trabalhar em atividade sentada.

A perícia médica do INSS atestou incapacidade parcial, divergindo do laudo médico do Autor e da realidade clínica.

O Autor não consegue realizar qualquer atividade laboral, sendo totalmente dependente de cuidados de terceiros.

O Autor acumula vinte e cinco anos de tempo de contribuição, preenchendo todos os requisitos legais para a concessão do benefício.

DO DIREITO

O art. 42 da Lei nº 8.213/91 estabelece a aposentadoria por invalidez, que requer incapacidade total e permanente para o trabalho.

O art. 20 da Lei nº 8.213/91 estabelece que a perícia médica deve ser realizada por médico perito do INSS, podendo o segurado impugnar o laudo.

A Súmula 111 do STJ estabelece que a perícia médica oficial pode ser impugnada por laudo particular de médico assistente.

O art. 461 do CPC estabelece que a tutela de evidência pode ser concedida quando o direito for evidente.

O art. 5º, inciso XXXVI, da Constituição Federal estabelece que a lei não prejudicará o direito adquirido.

A EC nº 103/2019 (Reforma da Previdência) manteve a aposentadoria por invalidez como benefício permanente.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a concessão da aposentadoria por invalidez ao Autor, reconhecendo a incapacidade total e permanente;

b) a tutela de urgência para concessão provisória do benefício, considerando a gravidade da incapacidade;

c) a condenação do Réu ao pagamento das parcelas atrasadas desde a data do requerimento administrativo;

d) a condenação do Réu ao pagamento dos honorários periciais, se houver;

e) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de 60 salários mínimos.

Nestes termos, pede deferimento.

São Paulo, 15 de janeiro de 2024.

[Assinatura]
JOSÉ DA SILVA`,
  },
  // Médios
  {
    id: 27,
    title: 'Revisão de Benefício por Defasagem',
    area: 'Previdenciário',
    difficulty: 'Médio',
    description: 'Aposentado busca revisão do benefício por defasagem salarial, pois o INSS não atualizou corretamente os salários de contribuição.',
    facts: [
      'Manoel Gomes, CPF 666.777.888-00, se aposentou em 2015 após 35 anos de contribuição.',
      'Manoel trabalhou como engenheiro com salários altos nos últimos 10 anos antes da aposentadoria.',
      'O INSS calculou o benefício com base em salários desatualizados, não aplicando a correta correção monetária.',
      'Manoel descobriu que seus salários de contribuição foram indexados pelo INPC, mas deveriam ter sido pelo IPCA-E ou IBGE- DIEESE.',
      'A diferença de valores é de aproximadamente R$ 1.200,00 mensais.',
      'O INSS recusou a revisão administrativa.',
      'Manoel já tem a aposentadoria concedida, mas busca a correção do valor.',
    ],
    hints: [
      'Revisão da vida toda (tema 1.179, STF) e defasagem salarial.',
      'Indexadores corretos para salários de contribuição (art. 29, Lei 8.213/91).',
      'Pense em tutela antecipada para aumento provisório.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ FEDERAL DA VARA PREVIDENCIÁRIA DA SEÇÃO JUDICIÁRIA DE BELO HORIZONTE/MG

AUTOR: MANOEL GOMES, brasileiro, casado, aposentado, portador do CPF nº 666.777.888-00, residente na Rua da Engenharia, nº 200, Bairro Sion, Belo Horizonte/MG.

RÉU: INSTITUTO NACIONAL DO SEGURO SOCIAL - INSS, autarquia federal, inscrito no CNPJ sob o nº 29.539.027/0001-92, representado pelo Procuradoria Federal Especializada junto ao INSS.

DOS FATOS

O Autor se aposentou em 2015, após trinta e cinco anos de contribuição ao Regime Geral de Previdência Social.

O Autor trabalhou como engenheiro com salários elevados nos últimos dez anos antes da aposentadoria, que deveriam ter composto a média salarial de cálculo do benefício.

O INSS calculou o valor do benefício de aposentadoria utilizando salários de contribuição desatualizados, não aplicando a correta correção monetária.

O INSS indexou os salários de contribuição pelo INPC, porém o indexador correto, segundo a legislação e a jurisprudência, deveria ser o IPCA-E ou IBGE-DIEESE.

A diferença de valores causada pela defasagem salarial é de aproximadamente R$ 1.200,00 mensais, totalizando prejuízo significativo ao longo dos anos.

O Autor requereu revisão administrativa do benefício junto ao INSS, porém o Réu recusou a revisão, mantendo o cálculo incorreto.

O Autor possui todos os holerites e comprovantes de recolhimento de contribuições, comprovando os salários de contribuição e a defasagem na correção monetária.

DO DIREITO

O art. 29 da Lei nº 8.213/91 estabelece a correção monetária dos salários de contribuição, que deve ser atualizada pelo indexador legal correto.

O Tema 1.179 do STF (Revisão da Vida Toda) estabelece a possibilidade de revisão do benefício previdenciário com a correção monetária adequada.

A Súmula 85 do STJ estabelece que a defasagem salarial no cálculo do benefício previdenciário gera direito à revisão.

O art. 5º, inciso XXXVI, da Constituição Federal estabelece que a lei não prejudicará o direito adquirido.

A Lei nº 9.711/98 estabelece a atualização monetária dos salários de contribuição, com base nos índices oficiais.

O art. 461 do CPC estabelece a tutela de evidência para a concessão de revisão provisória.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a revisão do benefício de aposentadoria do Autor, com a correção monetária dos salários de contribuição pelo indexador correto;

b) a condenação do Réu ao pagamento das diferenças das parcelas atrasadas, desde a data da concessão do benefício;

c) a tutela de urgência para aumento provisório do benefício, considerando a defasagem salarial;

d) a condenação do Réu ao pagamento dos honorários periciais, se houver;

e) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de 60 salários mínimos.

Nestes termos, pede deferimento.

Belo Horizonte, 20 de fevereiro de 2024.

[Assinatura]
MANOEL GOMES`,
  },
  {
    id: 28,
    title: 'Auxílio-Doença e Acidente de Trabalho',
    area: 'Previdenciário',
    difficulty: 'Médio',
    description: 'Trabalhador rural sofreu acidente em máquina agrícola, ficou incapacitado e INSS nega auxílio-doença.',
    facts: [
      'Joaquim Souza, CPF 888.999.000-00, trabalhador rural, sofreu acidente em máquina agrícola em 2023.',
      'Joaquim teve o braço direito amputado acima do cotovelo.',
      'O INSS negou o auxílio-doença, alegando que Joaquim ainda pode trabalhar com a mão esquerda.',
      'Joaquim trabalhava com lavoura de café e não consegue mais operar máquinas.',
      'Joaquim acumulou 20 anos de contribuição como segurado especial.',
      'A perícia médica do INSS atestou incapacidade parcial.',
      'O médico particular atestou incapacidade total para atividade rural.',
    ],
    hints: [
      'Auxílio-doença requer incapacidade temporária (art. 59, Lei 8.213/91).',
      'Segurado especial tem regras diferenciadas (art. 11, Lei 8.213/91).',
      'Pense em aposentadoria por invalidez como alternativa.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ FEDERAL DA VARA PREVIDENCIÁRIA DA SEÇÃO JUDICIÁRIA DE RIBEIRÃO PRETO/SP

AUTOR: JOAQUIM SOUZA, brasileiro, casado, portador do CPF nº 888.999.000-00, residente na Fazenda São João, Zona Rural, Município de Ribeirão Preto/SP.

RÉU: INSTITUTO NACIONAL DO SEGURO SOCIAL - INSS, autarquia federal, inscrito no CNPJ sob o nº 29.539.027/0001-92, representado pelo Procuradoria Federal Especializada junto ao INSS.

DOS FATOS

O Autor é trabalhador rural, segurado especial do Regime Geral de Previdência Social, com vinte anos de contribuição.

Em 2023, o Autor sofreu grave acidente de trabalho em máquina agrícola, tendo o braço direito amputado acima do cotovelo.

O Autor trabalhava com lavoura de café, operando máquinas agrícolas e realizando atividades manuais, que são impossibilitadas pela amputação.

O Autor requereu auxílio-doença junto ao INSS, porém o Réu negou o benefício, alegando que o Autor ainda poderia trabalhar com a mão esquerda.

A perícia médica do INSS atestou incapacidade parcial, divergindo do laudo médico particular do Autor, que atestou incapacidade total para atividade rural.

O Autor não consegue realizar qualquer atividade laboral rural, sendo totalmente incapacitado para o ofício de trabalhador rural.

O Autor acumula vinte anos de contribuição como segurado especial, preenchendo todos os requisitos legais para a concessão do benefício.

DO DIREITO

O art. 59 da Lei nº 8.213/91 estabelece o auxílio-doença, que requer incapacidade temporária para o trabalho.

O art. 11 da Lei nº 8.213/91 estabelece as regras diferenciadas para o segurado especial, incluindo o trabalhador rural.

A Súmula 111 do STJ estabelece que a perícia médica oficial pode ser impugnada por laudo particular de médico assistente.

O art. 42 da Lei nº 8.213/91 estabelece a aposentadoria por invalidez, que requer incapacidade total e permanente.

O art. 461 do CPC estabelece a tutela de evidência para a concessão de benefício provisório.

A Súmula 85 do STJ estabelece que a prova testemunhal é admissível para comprovação de tempo de serviço rural.

DOS PEDIDOS

Diante do exposto, requer-se:

a) a concessão do auxílio-doença ao Autor, reconhecendo a incapacidade temporária para o trabalho rural;

b) subsidiariamente, a concessão da aposentadoria por invalidez, caso a incapacidade seja considerada total e permanente;

c) a tutela de urgência para concessão provisória do benefício, considerando a gravidade da amputação;

d) a condenação do Réu ao pagamento das parcelas atrasadas desde a data do requerimento administrativo;

e) a condenação do Réu ao pagamento dos honorários periciais, se houver;

f) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de 60 salários mínimos.

Nestes termos, pede deferimento.

Ribeirão Preto, 10 de março de 2024.

[Assinatura]
JOAQUIM SOUZA`,
  },
  {
    id: 29,
    title: 'Pensão por Morte e Reconhecimento de União Estável',
    area: 'Previdenciário',
    difficulty: 'Médio',
    description: 'Companheira de falecido busca pensão por morte, mas INSS nega por não reconhecer união estável.',
    facts: [
      'Marta Almeida, CPF 999.000.111-00, viveu em união estável com João Batista por 12 anos.',
      'João faleceu em 2023, deixando Marta e dois filhos menores.',
      'Marta e João não registraram a união estável em cartório.',
      'O INSS negou a pensão por morte a Marta, alegando falta de comprovação de união estável.',
      'Marta possui contas bancárias conjuntas, contratos de aluguel em nome de ambos, e testemunhas.',
      'Os filhos receberam pensão por morte, mas Marta foi excluída.',
      'Marta dependia economicamente de João.',
    ],
    hints: [
      'União estável pode ser comprovada por documentos e testemunhas (art. 1.723, CC).',
      'Dependência econômica é requisito para pensão por morte (art. 74, Lei 8.213/91).',
      'Pense em ação de reconhecimento de união estável cumulada com pensão.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ FEDERAL DA VARA PREVIDENCIÁRIA DA SEÇÃO JUDICIÁRIA DE SÃO PAULO/SP

AUTOR: MARTA ALMEIDA, brasileira, viúva, portadora do CPF nº 999.000.111-00, residente na Rua da União, nº 100, Bairro Vila Mariana, São Paulo/SP.

RÉU: INSTITUTO NACIONAL DO SEGURO SOCIAL - INSS, autarquia federal, inscrito no CNPJ sob o nº 29.539.027/0001-92, representado pelo Procuradoria Federal Especializada junto ao INSS.

DOS FATOS

O Autor viveu em união estável com João Batista por doze anos, até o falecimento do mesmo em 2023.

O falecido João Batista deixou o Autor e dois filhos menores, sendo que os filhos receberam pensão por morte, mas o Autor foi injustamente excluída.

O Autor e o falecido não registraram a união estável em cartório, porém viveram em comunhão de vida e interesses por mais de doze anos.

O INSS negou a pensão por morte ao Autor, alegando falta de comprovação formal de união estável.

O Autor possui contas bancárias conjuntas, contratos de aluguel em nome de ambos, e testemunhas que comprovam a convivência estável e a dependência econômica.

O Autor era totalmente dependente economicamente do falecido, não possuindo renda própria.

O Autor preenche todos os requisitos legais para a concessão da pensão por morte, tanto pelo reconhecimento da união estável quanto pela comprovação da dependência econômica.

DO DIREITO

O art. 1.723 do Código Civil reconhece a união estável como entidade familiar, podendo ser comprovada por documentos, testemunhas ou qualquer outro meio de prova.

O art. 74 da Lei nº 8.213/91 estabelece que a pensão por morte é devida aos dependentes do segurado falecido, incluindo o companheiro ou companheira.

A Súmula 85 do STJ estabelece que a união estável pode ser comprovada por qualquer meio de prova, não havendo exigência de registro formal.

A Súmula 100 do TST estabelece que a dependência econômica pode ser comprovada por qualquer meio de prova.

O art. 5º, inciso XXXVI, da Constituição Federal estabelece que a lei não prejudicará o direito adquirido.

A EC nº 103/2019 (Reforma da Previdência) manteve a pensão por morte como benefício permanente.

DOS PEDIDOS

Diante do exposto, requer-se:

a) o reconhecimento da união estável entre o Autor e o falecido João Batista;

b) a concessão da pensão por morte ao Autor, como dependente do segurado falecido;

c) a condenação do Réu ao pagamento das parcelas atrasadas desde a data do falecimento;

d) a condenação do Réu ao pagamento dos honorários periciais, se houver;

e) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de 60 salários mínimos.

Nestes termos, pede deferimento.

São Paulo, 25 de março de 2024.

[Assinatura]
MARTA ALMEIDA`,
  },
  // Difíceis
  {
    id: 30,
    title: 'Reconhecimento de Tempo Especial',
    area: 'Previdenciário',
    difficulty: 'Difícil',
    description: 'Operário de siderúrgica busca reconhecimento de tempo especial para aposentadoria, pois trabalhou exposto a ruído e calor excessivos.',
    facts: [
      'Raimundo Nonato, CPF 222.333.444-00, trabalhou na Siderúrgica Brasil por 25 anos (1995 a 2020).',
      'Raimundo trabalhou em forno de aciaria, exposto a ruído acima de 90 decibéis e calor excessivo.',
      'Raimundo pediu aposentadoria especial ao INSS, mas foi negado por falta de comprovação de exposição a agentes nocivos.',
      'A empresa nunca fez o PPP (Perfil Profissiográfico Previdenciário).',
      'Raimundo possui laudos médicos de perda auditiva e problemas respiratórios.',
      'Colegas de trabalho podem testemunhar sobre as condições de trabalho.',
      'Raimundo tem 60 anos e quer se aposentar com o tempo especial reconhecido.',
    ],
    hints: [
      'Tempo especial e aposentadoria especial (art. 57, Lei 8.213/91).',
      'PPP é documento essencial, mas pode ser suprido por prova testemunhal e pericial (Súmula 100, TST).',
      'Pense em aposentadoria por idade com tempo especial convertido.',
    ],
    modelAnswer: `EXMO. SR. DOUTOR JUIZ FEDERAL DA VARA PREVIDENCIÁRIA DA SEÇÃO JUDICIÁRIA DE VOLTA REDONDA/RJ

AUTOR: RAIMUNDO NONATO, brasileiro, casado, portador do CPF nº 222.333.444-00, residente na Rua da Siderurgia, nº 100, Bairro Vila Santa Cecília, Volta Redonda/RJ.

RÉU: INSTITUTO NACIONAL DO SEGURO SOCIAL - INSS, autarquia federal, inscrito no CNPJ sob o nº 29.539.027/0001-92, representado pelo Procuradoria Federal Especializada junto ao INSS.

DOS FATOS

O Autor trabalhou na Siderúrgica Brasil por vinte e cinco anos, de 1995 a 2020, na função de operador de forno de aciaria.

Durante todo o período de trabalho, o Autor foi exposto a ruído contínuo acima de 90 decibéis e calor excessivo, decorrentes do processo de produção de aço.

O Autor requereu aposentadoria especial junto ao INSS, porém o Réu negou o benefício, alegando falta de comprovação de exposição a agentes nocivos.

A empresa empregadora nunca elaborou o Perfil Profissiográfico Previdenciário (PPP), documento essencial para a comprovação do tempo especial.

O Autor possui laudos médicos atestando perda auditiva parcial e problemas respiratórios crônicos, em decorrência da exposição ocupacional.

Colegas de trabalho podem testemunhar sobre as condições de trabalho na siderúrgica, incluindo a exposição ao ruído e ao calor excessivos.

O Autor completa 60 anos de idade e busca a aposentadoria com o reconhecimento do tempo especial, que reduz o tempo de contribuição exigido.

DO DIREITO

O art. 57 da Lei nº 8.213/91 estabelece a aposentadoria especial para trabalhadores expostos a agentes nocivos à saúde ou integridade física.

A Súmula 100 do TST estabelece que o tempo especial pode ser comprovado por prova testemunhal e pericial, quando não houver documentação formal.

A Súmula 85 do STJ estabelece que a prova testemunhal é admissível para comprovação de tempo de serviço especial.

O art. 29 da Lei nº 8.213/91 estabelece a conversão do tempo especial em tempo comum, quando não houver preenchimento dos requisitos para a aposentadoria especial.

A EC nº 103/2019 (Reforma da Previdência) estabelece regras de transição para a aposentadoria especial, mantendo o direito adquirido.

O art. 5º, inciso XXXVI, da Constituição Federal estabelece que a lei não prejudicará o direito adquirido.

DOS PEDIDOS

Diante do exposto, requer-se:

a) o reconhecimento do tempo especial do Autor, em razão da exposição a ruído e calor excessivos;

b) a concessão da aposentadoria especial ao Autor, com o reconhecimento do tempo especial;

c) subsidiariamente, a conversão do tempo especial em tempo comum, para fins de aposentadoria por idade;

d) a condenação do Réu ao pagamento das parcelas atrasadas desde a data do requerimento administrativo;

e) a condenação do Réu ao pagamento dos honorários periciais, se houver;

f) a condenação do Réu ao pagamento das custas processuais e honorários advocatícios.

DO VALOR DA CAUSA

Atribui-se à causa o valor de 60 salários mínimos.

Nestes termos, pede deferimento.

Volta Redonda, 15 de abril de 2024.

[Assinatura]
RAIMUNDO NONATO`,
  },
];
