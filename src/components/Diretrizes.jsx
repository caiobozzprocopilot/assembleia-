import { UserGroupIcon, CalendarDaysIcon, CakeIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const Diretrizes = () => {
  const reunioes = [
    { title: "1ª Reunião JANEIRO", date: "DIA 18 COM 9H MANHÃ" },
    { title: "2ª Reunião MAIO", date: "DIA 03 DOM 9H" },
    { title: "3ª Reunião NOVEMBRO", date: "01 DOM 9H" },
  ];

  return (
    <section id="diretrizes" className="py-20 bg-gradient-to-br from-brown-900 via-brown-800 to-gold-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              DIRETRIZES PARA 2026
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Diretrizes Gerais */}
            <div className="space-y-6">
              {/* Semana de Oração */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-gold-300 mb-4 flex items-center">
                  <CalendarDaysIcon className="w-8 h-8 mr-3" />
                  SEMANA de Oração
                </h3>
                <p className="text-white/90 mb-2">
                  Para Celebração da Ceia
                </p>
                <p className="text-gold-200 font-semibold">
                  do Senhor e no 1º SÁBADO Consagração 8h em todas as Congregações Direção Círculo de Oração;
                </p>
              </div>

              {/* Ceia */}
              <div className="bg-red-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400">
                <h3 className="text-2xl font-bold text-red-300 mb-4 flex items-center">
                  <CakeIcon className="w-8 h-8 mr-3" />
                  TODAS AS CONGREGAÇÕES CELEBRARÃO A CEIA NO 1º DOMINGO
                </h3>
              </div>

              {/* Detalhe dos Sábados */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    <span>
                      No 1º Sábado de cada mês das 8h às 11h30m Oração Consagração Círculo de Oração
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    <span>
                      A Ceia do Senhor nas Congregações será realizado sempre no 1º Domingo de cada mês 19h
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    <span>
                      Na Celebração da Ceia do Senhor fazer um apelo na Oferta e se possível preparar uma toalha para o Altar. (Cada congregação deve virem lavar toalha Sede)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Reuniões Presbitério */}
              <div className="bg-gold-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-gold-400">
                <h3 className="text-2xl font-bold text-gold-300 mb-4 flex items-center">
                  <BriefcaseIcon className="w-8 h-8 mr-3" />
                  REUNIÕES DO PRESBITÉRIO SERÁ REALIZADA A CADA 4 MESES
                </h3>
                <p className="text-white/80 text-sm mb-3">(Pré; Eva, Pós, Diá Ephesas)</p>
                <div className="space-y-2">
                  {reunioes.map((reuniao, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-lg p-3 flex justify-between items-center"
                    >
                      <span className="font-semibold">{reuniao.title}</span>
                      <span className="text-gold-300">{reuniao.date}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-sm mt-4 italic">
                  (OBS: Pode ser alterada conforme programação e eventos alternativos)
                </p>
              </div>
            </div>

            {/* Right Column - Liderança */}
            <div className="space-y-6">
              {/* Liderança Box */}
              <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-md rounded-xl p-8 border-2 border-blue-400">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-500 rounded-full p-3 mr-4">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-200 mb-2">
                      LIDERANÇA QUE NASCE DO SERVIÇO
                    </h3>
                    <p className="text-white/80 italic text-sm">
                      "Quem serve, aprende a liderar servir!"
                    </p>
                  </div>
                </div>

                <blockquote className="bg-white/10 rounded-lg p-4 mb-6 border-l-4 border-blue-400">
                  <p className="text-white/90 italic text-sm leading-relaxed">
                    "O maior entre vocês seja aquele que serve." – Jesus (Mt 23:11)
                  </p>
                </blockquote>

                <div className="space-y-4 text-white/90">
                  <p className="leading-relaxed">
                    A verdadeira liderança no Reino de Deus não começa com cargos, mas com servos. Quem não aprende a servir antes de mandar, nunca será confiável para liderar. Moisés pastoreou ovelhas antes de pastorear o povo. Davi serviu no campo, derrotou o gigante, depois serviu como rei. José serviu nas masmorras, depois governou o Egito.
                  </p>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-gold-300 mb-2">
                      EXEMPLO DE LIDERANÇA NASCIDA DO SERVIÇO
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Antes de ser general, foi auxiliar de Moisés. Ele estava no monte, na tenda, no deserto. Ele aprendeu a servir ao líder antes de se tornar líder. Eliseu derramava água sobre as mãos do profeta. "Eliseu, que derramava água sobre as mãos do profeta." (2 Reis 3:11) Ele não começou querendo liderar — começou querendo servir. O Rei dos reis lavou os pés dos discípulos (Jo 13:4-5)
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-bold text-gold-300 mb-2">
                      Jesus ensinou: Liderança que não serve vira tirania.
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Autoridade que não ama vira abuso. Perguntei: Seu Líder ao lembrar-se de você o que vem à mente?" "Obediência? Sempre pronto para servir? Sempre lembra de passar uma mensagem contando uma bênção? Ele tem confiança em você?"
                    </p>
                  </div>

                  <p className="text-gold-300 font-semibold italic">
                    Pense nisso!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diretrizes;
