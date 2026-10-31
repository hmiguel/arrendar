// English content, parallel to stages.ts. Quotes stay in Portuguese (that's the
// actual law); quoteTranslation is an unofficial English rendering shown alongside.
import type { Stage } from './stages';

export const stagesEn: Stage[] = [
  {
    id: 'before-signing',
    number: 1,
    title: 'Before signing',
    subtitle: 'What to check before closing the deal',
    highlights: [
      {
        text: 'The contract has to be in writing',
        detail: {
          title: 'Form of the contract',
          paragraphs: [
            "Since the 2019 reform, a residential lease has to be put in writing. A simple verbal agreement isn't enough to legally protect either party.",
            "The contract should identify both parties, the property, the rent amount, and the start date. Without a written contract, the tenant can still prove the tenancy existed through other means (rent receipts, for example), but it's much harder.",
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1069.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-ii-celebracao/artigo-1069-o-forma/',
              quote:
                '1. O contrato de arrendamento urbano deve ser celebrado por escrito.\n2. Na falta de redução a escrito do contrato de arrendamento que não seja imputável ao arrendatário, este pode provar a existência de título por qualquer forma admitida em direito, demonstrando a utilização do locado pelo arrendatário sem oposição do senhorio e o pagamento mensal da respetiva renda por um período de seis meses.',
              quoteTranslation:
                "1. An urban lease contract must be made in writing.\n2. If the contract was not put in writing for a reason not attributable to the tenant, the tenant may prove the lease existed by any means admitted in law, by showing they used the property without the landlord's opposition and paid rent monthly for six months.",
            },
          ],
        },
      },
      {
        text: 'Landlords can ask for documents and guarantees',
        detail: {
          title: 'Identification and guarantees',
          paragraphs: [
            "It's common for a landlord to ask for ID, proof of income, and sometimes a guarantor. There's no legally required list. This comes from market practice, not from the law.",
            'Asking for these documents cannot be done in a discriminatory way, for example based on nationality, ethnicity, sexual orientation, or family situation.',
          ],
          refs: [
            {
              label: 'Lei n.º 93/2017',
              source: 'https://diariodarepublica.pt/dr/detalhe/lei/93-2017-108038372',
              note: 'Law prohibiting discrimination based on racial or ethnic origin, nationality, and ancestry in access to goods and services, including housing. Not a single article, but a whole law.',
            },
          ],
        },
      },
      {
        text: "It's worth checking the occupancy permit",
        detail: {
          title: 'Occupancy permit (licença de utilização)',
          paragraphs: [
            "A property meant for housing should have an occupancy permit issued by the local municipality (Câmara Municipal), certifying it's fit for that purpose.",
            "A missing permit doesn't automatically void the contract, but it can be a warning sign about the property's legal situation.",
          ],
          refs: [
            {
              label: 'Decreto-Lei n.º 555/99',
              source: 'https://diariodarepublica.pt/dr/detalhe/decreto-lei/555-1999-655682',
              note: 'The Legal Framework for Urbanization and Building (RJUE). Sets the rules for occupancy permits. Not a single article, but a whole statute.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'deposit-and-contract',
    number: 2,
    title: 'Deposit & contract',
    subtitle: 'Deposit, advance payment, and duration',
    highlights: [
      {
        text: 'The deposit is capped at 2 months’ rent',
        detail: {
          title: 'Deposit (caução)',
          paragraphs: [
            "A landlord can ask for a deposit to secure the contract, but it can't exceed two months' rent.",
            'The deposit must be returned at the end of the contract, with deductions only for damage beyond normal use of the property.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1076.º, n.º 2',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iii-direitos-e-obrigacoes-das-partes/divisao-ii-renda-e-encargos/artigo-1076-o-antecipacao-de-rendas/',
              quote:
                'As partes podem caucionar, por qualquer das formas legalmente previstas, o cumprimento das obrigações respetivas, até ao valor correspondente a duas rendas.',
              quoteTranslation:
                "The parties may secure their respective obligations, by any legally provided means, up to a value equal to two months' rent.",
            },
          ],
          pending:
            "A proposal approved by the Council of Ministers in July 2026 would remove this cap entirely, no longer limiting the deposit to two months' rent. Until Parliament approves it and it's published in the Diário da República, the current cap applies.",
        },
      },
      {
        text: 'Advance rent is also capped',
        detail: {
          title: 'Advance rent',
          paragraphs: [
            "Besides the deposit, a landlord can only require at most two months' rent to be paid in advance.",
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1076.º, n.º 1',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iii-direitos-e-obrigacoes-das-partes/divisao-ii-renda-e-encargos/artigo-1076-o-antecipacao-de-rendas/',
              quote: 'O pagamento da renda pode ser antecipado, havendo acordo escrito, por período não superior a dois meses.',
              quoteTranslation: 'Rent payment may be made in advance, with a written agreement, for a period not exceeding two months.',
            },
          ],
          pending:
            'The same July 2026 proposal would raise this cap from two to three months of advance rent. Until Parliament approves it and it’s published in the Diário da República, the current two-month cap applies.',
        },
      },
      {
        text: 'The contract term has to be in writing',
        detail: {
          title: 'Contract duration',
          paragraphs: [
            'If the contract has a fixed term (1, 2, or 5 years, for example), that has to be stated explicitly in the text. If no term is specified, the contract is treated as open-ended.',
            "A fixed-term contract renews automatically at the end of each period, unless either party objects within the legal deadlines. This is the default rule, which applies when the contract says nothing to the contrary, so contracts commonly spell out this clause explicitly, sometimes with a different renewal period than the law's default.",
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1095.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-i-contrato-com-prazo-certo/artigo-1095-o-estipulacao-de-prazo-certo/',
              quote:
                '1. O prazo deve constar de cláusula inserida no contrato.\n2. O prazo referido no número anterior não pode ser inferior a um ano nem superior a trinta anos, sendo automaticamente alargado ou reduzido para esse limite mínimo ou máximo quando, respetivamente, for inferior ao primeiro ou superior ao segundo.',
              quoteTranslation:
                '1. The term must be stated in a clause in the contract.\n2. That term cannot be less than one year nor more than thirty years; it is automatically extended or reduced to that minimum or maximum when it falls short of, or exceeds, those limits.',
            },
            {
              label: 'Código Civil, Art. 1096.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-i-contrato-com-prazo-certo/artigo-1096-o-renovacao-automatica/',
              quote:
                'Salvo estipulação em contrário, o contrato celebrado com prazo certo renova-se automaticamente no seu termo e por períodos sucessivos de igual duração ou de três anos se esta for inferior, sem prejuízo do disposto no número seguinte.',
              quoteTranslation:
                'Unless otherwise agreed, a fixed-term contract renews automatically at its end, for successive periods of equal length or three years if that is shorter, without prejudice to the following paragraph.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'during-the-tenancy',
    number: 3,
    title: 'During the tenancy',
    subtitle: 'Rent, repairs, and day-to-day rules',
    highlights: [
      {
        text: 'Rent can be adjusted once a year',
        detail: {
          title: 'Rent adjustment',
          paragraphs: [
            "In any contract, rent can be adjusted once a year based on the coefficient published by Statistics Portugal (INE). In 2026 that coefficient is 1.0224, a 2.24% increase.",
            'The landlord must notify the tenant in writing, at least 30 days in advance, of the new amount.',
          ],
          refs: [
            {
              label: 'Coeficiente de atualização anual, NRAU',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/arrendamento/novo-regime-do-arrendamento-urbano-nrau/',
              note: 'The coefficient is published every year by Statistics Portugal (INE), based on consumer price index changes. Not a single article, but a mechanism defined by the NRAU (Lei n.º 6/2006).',
            },
          ],
        },
      },
      {
        text: "A one-off late payment is penalized, not an instant eviction",
        detail: {
          title: 'Late rent payment',
          paragraphs: [
            "If you pay rent late but settle it within 8 days of the delay starting, there's no penalty at all.",
            'After that, the landlord can demand, on top of the overdue rent, a 20% penalty on the amount owed. Paying the rent along with that penalty clears the default (legally, "purging the default").',
            'Only serious or repeated delays, covered elsewhere on this page, give the landlord grounds to end the contract.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1041.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-iii-obrigacoes-do-locatario/subseccao-ii-pagamento-da-renda-ou-aluguer/artigo-1041-o-mora-do-locatario/',
              quote:
                'Constituído o locatário em mora, o locador tem direito a exigir, além da renda ou aluguer em atraso, uma indemnização igual a 20% do que for devido, salvo se o contrato for resolvido com base na falta de pagamento. O direito a essa indemnização ou à resolução do contrato cessa, porém, logo que o locatário faça cessar a mora, pagando ou depositando a renda ou aluguer em atraso, desde que o faça no prazo de oito dias a contar do seu início.',
              quoteTranslation:
                'Once the tenant is in default, the landlord is entitled to demand, besides the overdue rent, compensation equal to 20% of what is owed, unless the contract is resolved on grounds of non-payment. That right to compensation or to resolve the contract ceases, however, as soon as the tenant ends the default by paying or depositing the overdue rent, provided this is done within eight days of the default starting.',
            },
          ],
        },
      },
      {
        text: 'Upkeep is, as a rule, the landlord’s job',
        detail: {
          title: 'Repairs and maintenance',
          paragraphs: [
            'Unless agreed otherwise, the landlord is responsible for all conservation work, ordinary or extraordinary, needed to keep the property habitable.',
            "The tenant can only carry out work on the property if the contract allows it or they have the landlord's written authorization.",
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1074.º, n.º 1',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iii-direitos-e-obrigacoes-das-partes/divisao-i-obrigacoes-nao-pecuniarias/artigo-1074-o-obras/',
              quote:
                'Cabe ao senhorio executar todas as obras de conservação, ordinárias ou extraordinárias, requeridas pelas leis vigentes ou pelo fim do contrato, salvo estipulação em contrário.',
              quoteTranslation:
                "It is the landlord's responsibility to carry out all conservation work, ordinary or extraordinary, required by current laws or by the purpose of the contract, unless otherwise agreed.",
            },
          ],
        },
      },
      {
        text: 'Subletting without authorization is not allowed',
        detail: {
          title: 'Subletting and assignment',
          paragraphs: [
            "A tenant can't sublet the property, hand it over to someone else, or assign their position in the contract, without the landlord's written authorization, except in cases provided for by law.",
            'When subletting is allowed or authorized, the tenant has to report it to the landlord within 15 days.',
            "This also matters if you're the one moving into a sublet place: if you're renting through someone who isn't the direct landlord, it's worth confirming that sublease was authorized in writing by the owner. An unauthorized sublease is illegal and gives the landlord grounds to end the main contract, which can leave whoever's actually living there, often without knowing the situation, at risk of having to leave without notice.",
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1038.º, als. f) e g)',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-iii-obrigacoes-do-locatario/subseccao-i-disposicao-geral/artigo-1038-o-enumeracao/',
              quote:
                'São obrigações do locatário: (...) f) Não proporcionar a outrem o gozo total ou parcial da coisa por meio de cessão onerosa ou gratuita da sua posição jurídica, sublocação ou comodato, exceto se a lei o permitir ou o locador o autorizar; g) Comunicar ao locador, dentro de quinze dias, a cedência do gozo da coisa por algum dos referidos títulos, quando permitida ou autorizada.',
              quoteTranslation:
                "The tenant's obligations include: (...) f) not giving anyone else full or partial enjoyment of the property, by paid or unpaid assignment, subletting or loan, unless the law allows it or the landlord authorizes it; g) notifying the landlord, within fifteen days, of any such assignment, when allowed or authorized.",
            },
            {
              label: 'Código Civil, Art. 1083.º, n.º 1 e 2',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iv-cessacao/divisao-iii-resolucao/artigo-1083-o-fundamento-da-resolucao/',
              quote:
                'Qualquer das partes pode resolver o contrato, nos termos gerais de direito, com base em incumprimento pela outra parte. É fundamento de resolução o incumprimento que, pela sua gravidade ou consequências, torne inexigível à outra parte a manutenção do arrendamento.',
              quoteTranslation:
                "Either party may resolve the contract, under general legal rules, on the grounds of the other party's breach. A breach is grounds for resolution when its severity or consequences make it unreasonable to expect the other party to keep the tenancy going.",
            },
          ],
        },
      },
      {
        text: 'Rent receipts and income tax have their own rules',
        detail: {
          title: 'Receipts and income tax (IRS)',
          paragraphs: [
            "The landlord must issue an electronic rent receipt on the Finance Portal every time they receive a payment, including the deposit and advance rent. Not issuing it can lead to a fine.",
            "A tenant can deduct 15% of rent paid on their main home from their IRS (income tax), up to €900 a year in 2026, or up to €1,100 for those in the lowest tax bracket. This only counts if the contract is registered with the tax authority and rent payments have an electronic receipt.",
            'The landlord pays income tax on rent received (predial income, "category F"), usually at a flat 25% rate, but that rate can drop considerably depending on the contract’s length or if the rent counts as "moderate".',
          ],
          refs: [
            {
              label: 'Código do IRS, Art. 115.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-fiscal/codigo-do-irs/capitulo-vi-obrigacoes-acessorias/artigo-115-o-emissao-de-recibos-e-faturas/',
              note: 'Requires anyone receiving rent (category F income) to issue an electronic receipt on the Finance Portal for every payment, including deposits and advances.',
            },
            {
              label: 'Código do IRS, Art. 78.º-E',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-fiscal/codigo-do-irs/capitulo-iv-liquidacao/artigo-78-o-e-deducao-de-encargos-com-imoveis/',
              quote:
                'São dedutíveis à coleta 15% das importâncias, líquidas de subsídios ou comparticipações oficiais, suportadas a título de renda por contrato de arrendamento de habitação permanente, com o limite fixado anualmente na lei do Orçamento do Estado.',
              quoteTranslation:
                "15% of amounts paid as rent under a main-home lease contract, net of any official subsidies, are deductible from tax owed, up to the cap set each year by the State Budget law.",
            },
            {
              label: 'Código do IRS, Art. 72.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-fiscal/codigo-do-irs/capitulo-iii-taxas/artigo-72-o-taxas-especiais/',
              note: "Sets the flat tax rate on rent received by the landlord (category F income), currently 25%, with reductions for long contracts or moderate rents.",
            },
          ],
          pending:
            "A rise in the deduction cap to €1,000 in 2027 has been announced, but it depends on that year's State Budget being approved.",
        },
      },
    ],
  },
  {
    id: 'ending-the-tenancy',
    number: 4,
    title: 'Ending the tenancy',
    subtitle: 'Termination, default, and eviction',
    highlights: [
      {
        text: 'There are 5 ways to end a contract',
        detail: {
          title: 'Ways a tenancy ends',
          paragraphs: [
            'Mutual agreement: landlord and tenant agree to end it.',
            'Resolution: due to a breach by either party, for example failing to pay rent.',
            'Opposition to renewal: either party blocks the automatic renewal at the end of the term.',
            "Termination notice (denúncia): either party unilaterally ends an open-ended contract, in cases provided for by law.",
            'Lapse: the contract ends automatically, for example on the death of the tenant with no eligible successors, in certain cases.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1079.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/subtitulo-iv-do-exercicio-e-tutela-dos-direitos-3/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-iv-cessacao/divisao-i-disposicoes-comuns/artigo-1079-o-formas-de-cessacao/',
              quote: 'O arrendamento urbano cessa por acordo das partes, resolução, caducidade, denúncia ou outras causas previstas na lei.',
              quoteTranslation:
                'An urban lease ends by agreement of the parties, resolution, lapse, termination notice, or other causes provided for by law.',
            },
          ],
        },
      },
      {
        text: 'The landlord can only give notice with advance warning',
        detail: {
          title: "Landlord's termination notice",
          paragraphs: [
            'In an open-ended contract, the landlord can end it to use the property themselves or for their descendants, for demolition or major renovation, or without any stated reason, but always with advance notice (between 1 and 15 months, depending on the grounds), and never less than 6 months before the intended move-out date.',
            'The notice must explicitly state the grounds for termination, or it has no legal effect.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1101.º (excerpt)',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-ii-contrato-de-duracao-indeterminada/artigo-1101-o-denuncia-pelo-senhorio/',
              quote:
                'O senhorio pode denunciar o contrato de duração indeterminada nos casos seguintes: a) Necessidade de habitação pelo próprio ou pelos seus descendentes em 1.º grau; b) Para demolição ou realização de obra de remodelação ou restauro profundos; (...) entre outros fundamentos previstos na lei.',
              quoteTranslation:
                'The landlord may terminate an open-ended contract in the following cases: a) need for housing for themselves or their first-degree descendants; b) for demolition or major renovation or restoration work; (...) among other grounds provided for by law.',
            },
          ],
        },
      },
      {
        text: 'The tenant also has to give advance notice',
        detail: {
          title: "Tenant's termination notice",
          paragraphs: [
            'In an open-ended contract, the tenant can end it at any time, without giving a reason, once they’ve lived there for at least 6 months. The required notice depends on how long they’ve already lived there: 120 days if a year or more, or 60 days if less.',
            "In a fixed-term contract, the tenant can end it early after completing a third of the term, with the same 120- or 60-day notice depending on the contract's length. They can also opt out of the automatic renewal, with at least 120 days' notice before the term ends.",
            "Not giving enough notice doesn't stop the tenant from leaving, but it does mean they owe the landlord rent for the missing notice days.",
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1100.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-ii-contrato-de-duracao-indeterminada/artigo-1100-o-denuncia-pelo-arrendatario/',
              quote:
                'Decorridos seis meses de duração efetiva do contrato, o arrendatário pode denunciá-lo, independentemente de qualquer motivo, mediante comunicação ao senhorio com a antecedência mínima seguinte: a) 120 dias do termo pretendido do contrato, se, à data da comunicação, a duração efetiva do contrato for igual ou superior a um ano; b) 60 dias do termo pretendido do contrato, se, à data da comunicação, a duração efetiva do contrato for inferior a um ano.',
              quoteTranslation:
                'After six months of actual contract duration, the tenant may give notice at any time, without any justification, by notifying the landlord with at least: a) 120 days before the intended end date, if the actual duration at the time of notice is one year or more; b) 60 days before the intended end date, if it is less than one year.',
            },
            {
              label: 'Código Civil, Art. 1098.º',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-vii-arrendamento-de-predios-urbanos/subseccao-vii-disposicoes-especiais-do-arrendamento-para-habitacao/divisao-ii-duracao/subdivisao-i-contrato-com-prazo-certo/artigo-1098-o-oposicao-a-renovacao-ou-denuncia-pelo-arrendatario/',
              quote:
                '1. O arrendatário pode impedir a renovação automática mediante comunicação ao senhorio com a antecedência mínima de 120 dias do termo do contrato.\n2. Decorrido um terço da duração inicial do contrato ou da sua renovação, o arrendatário pode denunciá-lo a todo o tempo, mediante comunicação ao senhorio com a antecedência mínima seguinte: a) 120 dias do termo pretendido do contrato, se a duração deste for igual ou superior a um ano; b) 60 dias do termo pretendido do contrato, se a duração deste for inferior a um ano.',
              quoteTranslation:
                '1. The tenant may block automatic renewal by notifying the landlord at least 120 days before the contract ends.\n2. After a third of the contract’s initial term or renewal has elapsed, the tenant may terminate it at any time, giving at least: a) 120 days’ notice, if the term is one year or more; b) 60 days’ notice, if the term is less than one year.',
            },
          ],
        },
      },
      {
        text: 'Non-payment can lead to eviction',
        detail: {
          title: 'Default and eviction',
          paragraphs: [
            "If a tenant has 2 or more months of unpaid rent, the landlord must first notify them to pay within 10 days. Only after that can they move to resolve the contract.",
            "Eviction runs through the Tenant and Landlord Counter (Balcão do Arrendatário e do Senhorio, BAS). A landlord isn't allowed to change the locks or remove belongings without a court decision. So-called self-help eviction is illegal and can be a crime.",
          ],
          refs: [
            {
              label: 'NRAU, Arts. 15.º a 15.º-S',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/arrendamento/novo-regime-do-arrendamento-urbano-nrau/titulo-i-novo-regime-do-arrendamento-urbano/capitulo-ii-disposicoes-gerais/seccao-iv-resolucao-de-litigios/subseccao-ii-procedimento-especial-de-despejo/artigo-15-o-procedimento-especial-de-despejo/',
              note: 'Govern the special eviction procedure, run by the Tenant and Landlord Counter (BAS). Several articles, not just one.',
            },
          ],
          pending:
            'The July 2026 proposal would lower the unpaid-rent threshold that justifies resolution from 3 to 2 months.',
        },
      },
      {
        text: 'The deposit has to be returned, with any deduction justified',
        detail: {
          title: 'Getting the deposit back',
          paragraphs: [
            'The law sets no exact deadline for returning it. The general understanding is that it should happen without delay, once the keys are handed back and the property’s condition checked. That’s why it’s good practice for the contract to set a concrete deadline, 15 or 30 days, for example.',
            "The landlord can only deduct amounts for real damage, never for normal wear from everyday use. A wall showing its age isn't the same as a broken wall. It's up to the landlord to justify and prove any deduction, with photos or repair quotes, for example.",
            'If the landlord neither returns the deposit nor justifies withholding it, the tenant should demand its return in writing, ideally by registered letter with acknowledgment of receipt. If there’s no response, they can go to a Justice of the Peace court (Julgado de Paz) or regular court, with a right to interest for the delay.',
          ],
          refs: [
            {
              label: 'Código Civil, Art. 1043.º, n.º 1',
              source: 'https://informador.pt/legislacao/lexit/codigos/direito-civil/codigo-civil/livro-ii-direito-das-obrigacoes/titulo-ii-dos-contratos-em-especial/capitulo-iv-locacao/seccao-iii-obrigacoes-do-locatario/subseccao-iii-restituicao-da-coisa-locada/artigo-1043-o-dever-de-manutencao-e-restituicao-da-coisa/',
              quote:
                'Na falta de convenção, o locatário é obrigado a manter e restituir a coisa no estado em que a recebeu, ressalvadas as deteriorações inerentes a uma prudente utilização, em conformidade com os fins do contrato.',
              quoteTranslation:
                'In the absence of an agreement, the tenant must maintain and return the property in the state they received it, except for deterioration inherent to prudent use in line with the purpose of the contract.',
            },
          ],
        },
      },
    ],
  },
];
