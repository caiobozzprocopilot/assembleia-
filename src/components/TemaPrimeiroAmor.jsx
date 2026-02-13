import { HandRaisedIcon, BookOpenIcon, SparklesIcon } from '@heroicons/react/24/solid';

const TemaPrimeiroAmor = () => {
  const cards = [
    {
      title: "Voltar ao Primeiro Amor na ORAÇÃO",
      description:
        "Voltar ao primeiro amor na oração é reencontrar o prazer de falar com Deus sem pressa, sem rotina e sem frieza. É dobrar os joelhos com fé, reconhecendo a presença do Senhor com fé, lágrimas e dependência, permitindo que o Espírito Santo renove nossa comunhão.",
      icon: HandRaisedIcon,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Voltar ao Primeiro Amor na Leitura da Palavra",
      description:
        "Voltar ao primeiro amor na leitura da Palavra é ler a Bíblia com fome espiritual, reverência e alegria. É permitir que a Palavra de Deus fale ao coração, corrigindo, ensinando e renovando a fé. A Palavra deixa de ser rotina e volta a ser vida, direção e alimento diário para a alma.",
      icon: BookOpenIcon,
      color: "from-amber-500 to-amber-700",
    },
    {
      title: "Voltar ao Primeiro Amor na Consagração",
      description:
        "Voltar ao primeiro amor na consagração é amar entregar a vida totalmente a Deus. É separar tempo, atitudes e desejos para agradar ao Senhor, buscando santidade com alegria. É viver consagrado, sem peso, e voltar a ver prazer, resposta de amor a quem nos chamou.",
      icon: SparklesIcon,
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section id="tema" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              2026 ANO DE VOLTAR AO PRIMEIRO AMOR
            </h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${card.color} p-6 text-center`}>
                  <div className="flex justify-center mb-4">
                    <card.icon className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Section */}
          <div className="bg-gradient-to-br from-brown-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-brown-800 mb-8 text-center">
              ÁREAS EM QUE PRECISAMOS VOLTAR AO PRIMEIRO AMOR
            </h3>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-accent-700 mb-3">
                  1. Voltar ao Amor pela Presença de Deus:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  No início, desejamos estar na presença de Deus o tempo todo. Obadias nos lembra: "Não era assim que nos conhecemos?" (TG 2)
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-accent-700 mb-3">
                  2. Voltar ao Amor pela Palavra LER BÍBLIA!
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Na conversão, é tão empolgante ler a Bíblia, mas às vezes perdemos a leitura devocional. "Não só de pão viverá o homem, mas de toda palavra que sai da boca de Deus" (Mt 4:4)
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-accent-700 mb-3">
                  3. Voltar ao Amor pela Santidade:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  O primeiro amor produz vida longa e paz com todos e a santificação. "Hb 12:14
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-accent-700 mb-3">
                  4. Voltar ao Amor pela Casa de Deus:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Antes, a igreja era adoração. Para muitos, ela se tornou obrigação. "Alegrei-me quando disseram: Vamos à casa do Senhor" (Sl 122:1)
                </p>
              </div>

              {/* Item 5 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-accent-700 mb-3">
                  5. Voltar ao Amor pelas Almas:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  O primeiro amor nos fazia falar de Jesus ao mundo e pregar o evangelho. Marcos 16:15: "Ide por todo o mundo e pregai o evangelho."
                </p>
              </div>

              {/* Item 6 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-accent-700 mb-3">
                  6. Voltar ao Amor pelo Serviço:
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Antes éramos cheios de alegria, hoje muitos servem com cansaço: "Servi ao Senhor com alegria." Sl 100:2(NVI)"Alegrem-se sempre no Senhor. Novamente direi: Alegrem-se!" Fl 4:4
                </p>
                <p className="text-gray-600 italic text-sm mt-4">
                  Edson Camargo, casado com Rosana, pai de Edson Jr, Ester, André, (Felipe in memorian); Serve à obra desde 1990 no Campo Eclesiástico de Ortigueira - PR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemaPrimeiroAmor;

