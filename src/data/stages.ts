// Content about residential tenancy law in Portugal.
// Structure designed so an "en" version can be added in parallel later.
export interface LawRef {
  label: string;
  /** Legal text quoted as it appears in the law. Omitted when the reference doesn't correspond to a single citable article. */
  quote?: string;
  /** Unofficial English rendering of `quote`, shown alongside it on the English site only. The quote itself stays in Portuguese, since that's the actual law. */
  quoteTranslation?: string;
  /** Short explanation, used when there's no single article to cite (e.g. a whole law or a mechanism). */
  note?: string;
  /** Link to the official Diário da República page for the full text. Only set when verified. */
  source?: string;
}

export interface DetailBlock {
  title: string;
  paragraphs: string[];
  refs: LawRef[];
  /** Note about the 2026 reform, not yet approved by Parliament. */
  pending?: string;
}

export interface Highlight {
  text: string;
  detail: DetailBlock;
}

export interface Stage {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  highlights: Highlight[];
}

export const stages: Stage[] = [
  {
    id: 'antes-de-assinar',
    number: 1,
    title: 'Antes de assinar',
    subtitle: 'O que verificar antes de fechar negócio',
    highlights: [
      {
        text: 'O contrato tem de ser feito por escrito',
        detail: {
          title: 'Forma do contrato',
          paragraphs: [
            'Desde a reforma de 2019, o arrendamento habitacional tem de ser reduzido a escrito. Um simples acordo verbal não chega para proteger legalmente nenhuma das partes.',
            'O contrato deve identificar as partes, o imóvel, o valor da renda e a data de início. Sem contrato escrito, o inquilino ainda pode provar a existência do arrendamento por outros meios (por exemplo, recibos de renda), mas é muito mais difícil.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1069.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-ii-celebracao/artigo-1069-o-forma/',
              quote:
                '1. O contrato de arrendamento urbano deve ser celebrado por escrito.\n2. Na falta de redução a escrito do contrato de arrendamento que não seja imputável ao arrendatário, este pode provar a existência de título por qualquer forma admitida em direito, demonstrando a utilização do locado pelo arrendatário sem oposição do senhorio e o pagamento mensal da respetiva renda por um período de seis meses.',
            },
          ],
        },
      },
      {
        text: 'Podem pedir-se documentos e garantias',
        detail: {
          title: 'Identificação e garantias',
          paragraphs: [
            'É comum o senhorio pedir documento de identificação, comprovativo de rendimentos e, por vezes, um fiador. Não existe uma lista legal obrigatória. Isto resulta da prática do mercado, não da lei.',
            'Pedir estes documentos não pode ser feito de forma discriminatória, por exemplo com base em nacionalidade, etnia, orientação sexual ou situação familiar.',
          ],
          refs: [
            {
              label: 'Lei n.º 93/2017',
              source: 'https://diariodarepublica.pt/dr/detalhe/lei/93-2017-108038372',
              note: 'Lei que proíbe a discriminação em razão de origem racial ou étnica, nacionalidade e ascendência no acesso a bens e serviços, incluindo a habitação. Não é um artigo único, mas uma lei inteira.',
            },
          ],
        },
      },
      {
        text: 'Vale a pena confirmar a licença de utilização',
        detail: {
          title: 'Licença de utilização',
          paragraphs: [
            'Um imóvel destinado a habitação deve ter uma licença de utilização emitida pela Câmara Municipal, que comprova que está apto para esse fim.',
            'A falta de licença não anula automaticamente o contrato, mas pode ser um sinal de alerta sobre a situação legal do imóvel.',
          ],
          refs: [
            {
              label: 'Decreto-Lei n.º 555/99',
              source: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/555-1999-655682',
              note: 'Regime Jurídico da Urbanização e Edificação (RJUE). Define as regras da licença de utilização. Não é um artigo único, mas um diploma inteiro.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'deposito-e-contrato',
    number: 2,
    title: 'Depósito & contrato',
    subtitle: 'Caução, adiantamentos e duração',
    highlights: [
      {
        text: 'A caução está limitada a 2 rendas',
        detail: {
          title: 'Caução (depósito de garantia)',
          paragraphs: [
            'O senhorio pode pedir uma caução para garantir o cumprimento do contrato, mas esse valor não pode exceder duas rendas mensais.',
            'A caução deve ser devolvida no final do contrato, descontando apenas danos que não resultem do uso normal do imóvel.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1076.º, n.º 2',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iii-direitos-e-obrigacoes-das-partes/divisao-ii-renda-e-encargos/artigo-1076-o-antecipacao-de-rendas/',
              quote:
                'As partes podem caucionar, por qualquer das formas legalmente previstas, o cumprimento das obrigações respetivas, até ao valor correspondente a duas rendas.',
            },
          ],
          pending:
            'Uma proposta aprovada em Conselho de Ministros em julho de 2026 prevê remover por completo o limite da caução, deixando de haver um máximo de duas rendas. Enquanto o Parlamento não a aprovar e publicar em Diário da República, aplica-se o limite atual.',
        },
      },
      {
        text: 'As rendas adiantadas também têm limite',
        detail: {
          title: 'Rendas adiantadas',
          paragraphs: [
            'Além da caução, o senhorio só pode exigir o pagamento adiantado de, no máximo, duas rendas.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1076.º, n.º 1',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iii-direitos-e-obrigacoes-das-partes/divisao-ii-renda-e-encargos/artigo-1076-o-antecipacao-de-rendas/',
              quote: 'O pagamento da renda pode ser antecipado, havendo acordo escrito, por período não superior a dois meses.',
            },
          ],
          pending:
            'A mesma proposta de julho de 2026 prevê subir este limite de duas para três meses de renda adiantada. Enquanto o Parlamento não a aprovar e publicar em Diário da República, aplica-se o limite atual de dois meses.',
        },
      },
      {
        text: 'O prazo do contrato deve estar escrito',
        detail: {
          title: 'Duração do contrato',
          paragraphs: [
            'Se o contrato tiver prazo certo (por exemplo, 1, 2 ou 5 anos), isso deve constar expressamente do texto. Se não houver prazo definido, o contrato considera-se de duração indeterminada.',
            'Um contrato com prazo certo renova-se automaticamente no final de cada período, salvo se uma das partes se opuser dentro dos prazos legais. Esta é a regra que se aplica quando o contrato não diz nada em contrário, por isso é comum os contratos escreverem esta cláusula de forma explícita, por vezes com um período de renovação diferente do que a lei prevê por defeito.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1095.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-i-contrato-com-prazo-certo/artigo-1095-o-estipulacao-de-prazo-certo/',
              quote:
                '1. O prazo deve constar de cláusula inserida no contrato.\n2. O prazo referido no número anterior não pode ser inferior a um ano nem superior a trinta anos, sendo automaticamente alargado ou reduzido para esse limite mínimo ou máximo quando, respetivamente, for inferior ao primeiro ou superior ao segundo.',
            },
            {
              label: 'Código Civil, Art. 1096.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-i-contrato-com-prazo-certo/artigo-1096-o-renovacao-automatica/',
              quote:
                'Salvo estipulação em contrário, o contrato celebrado com prazo certo renova-se automaticamente no seu termo e por períodos sucessivos de igual duração ou de três anos se esta for inferior, sem prejuízo do disposto no número seguinte.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'durante-o-arrendamento',
    number: 3,
    title: 'Durante o arrendamento',
    subtitle: 'Renda, obras e regras do dia a dia',
    highlights: [
      {
        text: 'A renda pode atualizar-se todos os anos',
        detail: {
          title: 'Atualização da renda',
          paragraphs: [
            'Em cada contrato, a renda pode ser atualizada uma vez por ano com base no coeficiente publicado pelo INE (Instituto Nacional de Estatística). Em 2026 esse coeficiente é 1,0224, ou seja, um aumento de 2,24%.',
            'O senhorio deve avisar o inquilino por escrito, com pelo menos 30 dias de antecedência, sobre o novo valor.',
          ],
          refs: [
            {
              label: 'Coeficiente de atualização anual, NRAU',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/arrendamento/novo-regime-do-arrendamento-urbano-nrau/',
              note: 'O coeficiente é publicado todos os anos pelo INE, com base na variação do índice de preços no consumidor. Não corresponde a um único artigo, mas a um mecanismo definido pelo NRAU (Lei n.º 6/2006).',
            },
          ],
        },
      },
      {
        text: 'Um atraso pontual tem penalização, não despejo imediato',
        detail: {
          title: 'Atraso no pagamento da renda',
          paragraphs: [
            'Se pagar a renda com atraso, mas regularizar a situação dentro de 8 dias a contar do início do atraso, não há qualquer penalização.',
            'Passado esse prazo, o senhorio pode exigir, além da renda em atraso, uma indemnização de 20% sobre o valor em dívida. Pagar a renda junto com essa indemnização elimina a situação de incumprimento (chama-se "purgar a mora").',
            'Só atrasos graves ou repetidos, como visto noutro ponto desta página, dão ao senhorio o direito de terminar o contrato.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1041.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-iii-obrigacoes-do-locatario/subseccao-ii-pagamento-da-renda-ou-aluguer/artigo-1041-o-mora-do-locatario/',
              quote:
                'Constituído o locatário em mora, o locador tem direito a exigir, além da renda ou aluguer em atraso, uma indemnização igual a 20% do que for devido, salvo se o contrato for resolvido com base na falta de pagamento. O direito a essa indemnização ou à resolução do contrato cessa, porém, logo que o locatário faça cessar a mora, pagando ou depositando a renda ou aluguer em atraso, desde que o faça no prazo de oito dias a contar do seu início.',
            },
          ],
        },
      },
      {
        text: 'As obras de conservação são, em regra, do senhorio',
        detail: {
          title: 'Obras e reparações',
          paragraphs: [
            'Salvo acordo em contrário, o senhorio é responsável por todas as obras de conservação, ordinárias e extraordinárias, necessárias para manter o imóvel habitável.',
            'O inquilino só pode fazer obras no imóvel se o contrato o permitir ou se tiver autorização escrita do senhorio.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1074.º, n.º 1',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iii-direitos-e-obrigacoes-das-partes/divisao-i-obrigacoes-nao-pecuniarias/artigo-1074-o-obras/',
              quote:
                'Cabe ao senhorio executar todas as obras de conservação, ordinárias ou extraordinárias, requeridas pelas leis vigentes ou pelo fim do contrato, salvo estipulação em contrário.',
            },
          ],
        },
      },
      {
        text: 'Sublocar sem autorização não é permitido',
        detail: {
          title: 'Sublocação e cedência',
          paragraphs: [
            'O inquilino não pode sublocar o imóvel, cedê-lo a terceiros, ou ceder a sua posição no contrato, sem autorização escrita do senhorio, salvo nos casos previstos na lei.',
            'Quando a sublocação é permitida ou autorizada, o inquilino deve comunicá-la ao senhorio no prazo de 15 dias.',
            'Isto também importa a quem vai para uma casa subarrendada: se for você a mudar-se através de alguém que não é o senhorio direto, vale a pena confirmar que essa sublocação foi autorizada por escrito pelo proprietário. Uma sublocação feita sem autorização é ilegal e dá ao senhorio motivo para terminar o contrato principal, o que deixa quem lá vive, muitas vezes sem saber da situação, em risco de ter de sair sem aviso prévio.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1038.º, als. f) e g)',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-iii-obrigacoes-do-locatario/subseccao-i-disposicao-geral/artigo-1038-o-enumeracao/',
              quote:
                'São obrigações do locatário: (...) f) Não proporcionar a outrem o gozo total ou parcial da coisa por meio de cessão onerosa ou gratuita da sua posição jurídica, sublocação ou comodato, exceto se a lei o permitir ou o locador o autorizar; g) Comunicar ao locador, dentro de quinze dias, a cedência do gozo da coisa por algum dos referidos títulos, quando permitida ou autorizada.',
            },
            {
              label: 'Código Civil, Art. 1083.º, n.º 1 e 2',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iv-cessacao/divisao-iii-resolucao/artigo-1083-o-fundamento-da-resolucao/',
              quote:
                'Qualquer das partes pode resolver o contrato, nos termos gerais de direito, com base em incumprimento pela outra parte. É fundamento de resolução o incumprimento que, pela sua gravidade ou consequências, torne inexigível à outra parte a manutenção do arrendamento.',
            },
          ],
        },
      },
      {
        text: 'Os recibos de renda e o IRS têm regras próprias',
        detail: {
          title: 'Recibos e IRS',
          paragraphs: [
            'O senhorio é obrigado a emitir um recibo de renda eletrónico no Portal das Finanças sempre que recebe um pagamento, incluindo a caução e rendas adiantadas. Não emitir o recibo pode resultar em coima.',
            'O inquilino pode deduzir 15% das rendas pagas na habitação permanente ao IRS, até 900€ por ano em 2026, ou até 1.100€ para quem está no primeiro escalão. Só conta se o contrato estiver registado nas Finanças e as rendas tiverem recibo eletrónico.',
            'O senhorio paga IRS sobre as rendas recebidas (categoria F), normalmente a uma taxa autónoma de 25%, mas essa taxa pode descer bastante consoante a duração do contrato ou se a renda for considerada moderada.',
          ],
          refs: [
            {
              label: 'Código do IRS, Art. 115.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-fiscal/codigo-do-irs/capitulo-vi-obrigacoes-acessorias/artigo-115-o-emissao-de-recibos-e-faturas/',
              note: 'Obriga quem recebe rendas (categoria F) a emitir recibo eletrónico no Portal das Finanças para cada pagamento, incluindo caução e adiantamentos.',
            },
            {
              label: 'Código do IRS, Art. 78.º-E',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-fiscal/codigo-do-irs/capitulo-iv-liquidacao/artigo-78-o-e-deducao-de-encargos-com-imoveis/',
              quote:
                'São dedutíveis à coleta 15% das importâncias, líquidas de subsídios ou comparticipações oficiais, suportadas a título de renda por contrato de arrendamento de habitação permanente, com o limite fixado anualmente na lei do Orçamento do Estado.',
            },
            {
              label: 'Código do IRS, Art. 72.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-fiscal/codigo-do-irs/capitulo-iii-taxas/artigo-72-o-taxas-especiais/',
              note: 'Fixa a taxa autónoma de tributação das rendas recebidas pelo senhorio (categoria F), atualmente 25%, com reduções para contratos longos ou rendas moderadas.',
            },
          ],
          pending:
            'Está anunciada uma subida do limite da dedução para 1.000€ em 2027, mas depende da aprovação do Orçamento do Estado para esse ano.',
        },
      },
    ],
  },
  {
    id: 'terminar-o-arrendamento',
    number: 4,
    title: 'Terminar o arrendamento',
    subtitle: 'Denúncia, incumprimento e despejo',
    highlights: [
      {
        text: 'Há 5 formas de terminar um contrato',
        detail: {
          title: 'Formas de cessação',
          paragraphs: [
            'Revogação: acordo mútuo entre senhorio e inquilino.',
            'Resolução: por incumprimento de uma das partes, por exemplo falta de pagamento da renda.',
            'Oposição à renovação: uma das partes impede a renovação automática no final do prazo.',
            'Denúncia: fim unilateral de um contrato de duração indeterminada, nos casos previstos na lei.',
            'Caducidade: extinção automática do contrato, por exemplo por morte do inquilino sem sucessores habilitados, em certos casos.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1079.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/subtitulo-iv-do-exercicio-e-tutela-dos-direitos-3/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iv-cessacao/divisao-i-disposicoes-comuns/artigo-1079-o-formas-de-cessacao/',
              quote: 'O arrendamento urbano cessa por acordo das partes, resolução, caducidade, denúncia ou outras causas previstas na lei.',
            },
          ],
        },
      },
      {
        text: 'O senhorio só pode denunciar com aviso prévio',
        detail: {
          title: 'Denúncia pelo senhorio',
          paragraphs: [
            'Num contrato de duração indeterminada, o senhorio pode denunciá-lo por necessidade de habitação própria ou dos descendentes, para demolição ou obras profundas, ou sem motivo justificado, mas sempre com aviso prévio (entre 1 e 15 meses, dependendo do fundamento) e nunca com menos de 6 meses de antecedência da desocupação pretendida.',
            'A comunicação tem de indicar expressamente o fundamento da denúncia, sob pena de ser ineficaz.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1101.º (excerto)',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-ii-contrato-de-duracao-indeterminada/artigo-1101-o-denuncia-pelo-senhorio/',
              quote:
                'O senhorio pode denunciar o contrato de duração indeterminada nos casos seguintes: a) Necessidade de habitação pelo próprio ou pelos seus descendentes em 1.º grau; b) Para demolição ou realização de obra de remodelação ou restauro profundos; (...) entre outros fundamentos previstos na lei.',
            },
          ],
        },
      },
      {
        text: 'Inquilinos idosos ou com deficiência têm proteção reforçada',
        detail: {
          title: 'Proteção de arrendatários idosos ou com deficiência',
          paragraphs: [
            'Em contratos antigos (celebrados antes de 1990) ou em contratos com prazo certo celebrados antes de fevereiro de 2019, se o inquilino tiver 65 anos ou mais, ou uma deficiência com grau de incapacidade igual ou superior a 60%, e viver na casa há pelo menos 15 ou 20 anos (consoante o caso), o senhorio só pode denunciar o contrato ou opor-se à renovação para realizar obras profundas de remodelação ou restauro, e mesmo assim tem de garantir o realojamento do inquilino durante as obras.',
            'Esta proteção reforçada não se aplica à generalidade dos contratos novos. Se tiver dúvidas sobre se o seu contrato está abrangido, vale a pena procurar aconselhamento jurídico, por exemplo junto do Balcão do Arrendatário e do Senhorio (BAS).',
          ],
          refs: [
            {
              label: 'Lei n.º 13/2019',
              source: 'https://informador.pt/legislacao/diploma/lei-n-o-13-2019/',
              note: 'Reforça a estabilidade do arrendamento e a proteção de arrendatários idosos ou com deficiência, através dos artigos 9.º-B e 10.º-A do NRAU, entre outros. Não é um artigo único, mas uma lei inteira.',
            },
          ],
        },
      },
      {
        text: 'O inquilino também tem de avisar com antecedência',
        detail: {
          title: 'Denúncia pelo inquilino',
          paragraphs: [
            'Num contrato de duração indeterminada, o inquilino pode terminá-lo a qualquer momento, sem justificar, depois de viver na casa há pelo menos 6 meses. O prazo de aviso depende de há quanto tempo já lá vive: 120 dias se já forem um ano ou mais, ou 60 dias se for há menos tempo.',
            'Num contrato com prazo certo, o inquilino pode terminá-lo mais cedo depois de cumprido um terço da duração, com o mesmo aviso de 120 ou 60 dias consoante a duração do contrato. Também pode opor-se à renovação automática, avisando com pelo menos 120 dias de antecedência do fim do prazo.',
            'Não cumprir o prazo de aviso não impede a saída, mas obriga o inquilino a pagar ao senhorio a renda correspondente aos dias de aviso em falta.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1100.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-ii-contrato-de-duracao-indeterminada/artigo-1100-o-denuncia-pelo-arrendatario/',
              quote:
                'Decorridos seis meses de duração efetiva do contrato, o arrendatário pode denunciá-lo, independentemente de qualquer motivo, mediante comunicação ao senhorio com a antecedência mínima seguinte: a) 120 dias do termo pretendido do contrato, se, à data da comunicação, a duração efetiva do contrato for igual ou superior a um ano; b) 60 dias do termo pretendido do contrato, se, à data da comunicação, a duração efetiva do contrato for inferior a um ano.',
            },
            {
              label: 'Código Civil, Art. 1098.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-i-contrato-com-prazo-certo/artigo-1098-o-oposicao-a-renovacao-ou-denuncia-pelo-arrendatario/',
              quote:
                '1. O arrendatário pode impedir a renovação automática mediante comunicação ao senhorio com a antecedência mínima de 120 dias do termo do contrato.\n2. Decorrido um terço da duração inicial do contrato ou da sua renovação, o arrendatário pode denunciá-lo a todo o tempo, mediante comunicação ao senhorio com a antecedência mínima seguinte: a) 120 dias do termo pretendido do contrato, se a duração deste for igual ou superior a um ano; b) 60 dias do termo pretendido do contrato, se a duração deste for inferior a um ano.',
            },
          ],
        },
      },
      {
        text: 'Falta de pagamento pode levar a despejo',
        detail: {
          title: 'Incumprimento e despejo',
          paragraphs: [
            'Se o inquilino tiver 2 ou mais rendas em atraso, o senhorio deve primeiro notificá-lo para pagar no prazo de 10 dias. Só depois disso pode avançar para a resolução do contrato.',
            'O processo de despejo corre através do Balcão do Arrendatário e do Senhorio (BAS). Não é permitido ao senhorio mudar fechaduras ou retirar bens sem decisão legal. O chamado "despejo por conta própria" é proibido e pode constituir crime.',
          ],
          refs: [
            {
              label: 'NRAU, Arts. 15.º a 15.º-S',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/arrendamento/novo-regime-do-arrendamento-urbano-nrau/titulo-i-novo-regime-do-arrendamento-urbano/capitulo-ii-disposicoes-gerais/seccao-iv-resolucao-de-litigios/subseccao-ii-procedimento-especial-de-despejo/artigo-15-o-procedimento-especial-de-despejo/',
              note: 'Regulam o procedimento especial de despejo, conduzido pelo Balcão do Arrendatário e do Senhorio (BAS). Vários artigos, não um único.',
            },
          ],
          pending:
            'A proposta de julho de 2026 prevê reduzir de 3 para 2 meses o limite de rendas em atraso que justifica a resolução do contrato.',
        },
      },
      {
        text: 'A caução tem de ser devolvida, com justificação para qualquer desconto',
        detail: {
          title: 'Devolução da caução',
          paragraphs: [
            'A lei não fixa um prazo exato para a devolução. O entendimento geral é que deve acontecer sem demora, depois da entrega das chaves e da verificação do estado do imóvel. Por isso é boa prática o contrato indicar um prazo concreto, por exemplo 15 ou 30 dias.',
            'O senhorio só pode descontar valores correspondentes a danos reais, nunca ao desgaste normal do uso ao longo do tempo. Uma parede com sinais de tempo não é o mesmo que uma parede partida. Cabe ao senhorio justificar e provar qualquer desconto, por exemplo com fotografias ou orçamentos.',
            'Se o senhorio não devolver a caução nem justificar a retenção, o inquilino deve exigir a devolução por escrito, de preferência por carta registada com aviso de receção. Se não houver resposta, pode recorrer a um Julgado de Paz ou a tribunal, com direito a juros pelo atraso.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1043.º, n.º 1',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-iii-obrigacoes-do-locatario/subseccao-iii-restituicao-da-coisa-locada/artigo-1043-o-dever-de-manutencao-e-restituicao-da-coisa/',
              quote:
                'Na falta de convenção, o locatário é obrigado a manter e restituir a coisa no estado em que a recebeu, ressalvadas as deteriorações inerentes a uma prudente utilização, em conformidade com os fins do contrato.',
            },
          ],
        },
      },
    ],
  },
];
