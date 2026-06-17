export interface CaseScenario {
  id: number;
  title: string;
  area: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  description: string;
  facts: string[];
  hints: string[];
}

export const cases: CaseScenario[] = [
  {
    id: 1,
    title: 'Defeito em Geladeira',
    area: 'Consumidor',
    difficulty: 'Fácil',
    description:
      'João comprou uma geladeira que apresentou defeito após 15 dias de uso. A loja recusou a troca.',
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
  },
  {
    id: 2,
    title: 'Despedida Imotivada',
    area: 'Trabalhista',
    difficulty: 'Médio',
    description:
      'Maria foi demitida sem justa causa após 5 anos de trabalho e não recebeu as verbas rescisórias.',
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
  },
  {
    id: 3,
    title: 'Indenização por Acidente',
    area: 'Cível',
    difficulty: 'Difícil',
    description:
      'Pedro sofreu um acidente de trânsito causado por um motorista embriagado e ficou com sequelas permanentes.',
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
  },
  {
    id: 4,
    title: 'Benefício Previdenciário Negado',
    area: 'Previdenciário',
    difficulty: 'Médio',
    description:
      'Antônio teve seu pedido de aposentadoria por idade negado pelo INSS por suposta falta de tempo de contribuição.',
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
  },
  {
    id: 5,
    title: 'Inadimplemento de Contrato',
    area: 'Cível',
    difficulty: 'Fácil',
    description:
      'Uma empresa de software contratou um desenvolvedor freelancer que não entregou o projeto e sumiu com o dinheiro.',
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
  },
];
