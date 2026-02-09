import { goals2026, reforms, leadership } from '../data/goals';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const Alvos = () => {
  return (
    <section id="alvos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              ALVOS PARA ANO DE 2026
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {goals2026.map((goal) => (
              <div
                key={goal.id}
                className="bg-gradient-to-br from-gold-50 to-brown-50 rounded-xl p-6 shadow-lg border-l-4 border-gold-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gold-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    {goal.id}
                  </div>
                  <h3 className="text-xl font-bold text-brown-800">{goal.title}</h3>
                </div>
                <div className="pl-11 space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold text-brown-700">ATUALMENTE</span>{' '}
                    {goal.current}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gold-700 uppercase">
                      {goal.goal.split('é')[0]}é
                    </span>
                    {goal.goal.split('é')[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reforms Section */}
          <div className="bg-gradient-to-br from-brown-100 to-gold-100 rounded-2xl p-8 mb-16 shadow-xl">
            <h3 className="text-3xl font-bold text-brown-800 mb-6 flex items-center">
              <span className="bg-brown-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <WrenchScrewdriverIcon className="w-6 h-6" />
              </span>
              REFORMAS EM ANALISE:
            </h3>
            <ul className="space-y-3">
              {reforms.map((reform, index) => (
                <li
                  key={index}
                  className="flex items-start bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow"
                >
                  <span className="text-gold-600 font-bold mr-3 text-lg">
                    {index + 1}.
                  </span>
                  <span className="text-gray-700">{reform}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-brown-700 font-semibold italic bg-white rounded-lg p-3">
              TODAS AS REFORMAS MAIS SIMPLES DEVEM PASSAR POR REUNIÃO E APROVAÇÃO DA DIRETORIA,
              COM 3 ORÇAMENTOS DE CUSTOS.
            </p>
          </div>

          {/* Leadership Directives */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              ALGUMAS DIRETRIZES PARA LIDERANÇA
            </h3>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Escolher Obreiros (as)</span> para cada Deptos:
              </p>

              {leadership.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500"
                >
                  <h4 className="font-bold text-blue-900 mb-2 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 italic">
                    {item.task}
                  </p>
                </div>
              ))}

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                <h4 className="font-bold text-green-900 mb-2 text-lg">
                  Missões e Evangelismo:
                </h4>
                <p className="text-gray-700 italic">
                  Realização de Cultos mensais, preparar toalha Missionária para irmãos, realizar
                  cultos no Templo Sede atender visitas, solicitar folhetos no Templo sede para
                  evangelismo, ter a lista de Semeadores de Missões pedir individualmente para
                  irmãos.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-900 mb-2 text-lg">
                  E.B D.:
                </h4>
                <p className="text-gray-700 italic">
                  (organizar classes, principalmente Infantil)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alvos;
