const PalavraPastoral = () => {
  return (
    <section id="palavra-pastoral" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">
              Palavra Pastoral
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Janeiro de 2026</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Amados obreiros, esposas de obreiros, irmãos, irmãs e todos os membros do nosso querido Campo Eclesiástico de Ortigueira – PR,</strong>
                <br />
                <span className="text-gold-600 font-semibold">a paz do Senhor Jesus!</span>
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Com o coração cheio de gratidão a Deus, dirijo-me a cada um de vocês, pedindo que Deus caminhe conosco em 2026 com dedicação, temor e compromisso com o Reino. Louvamos a Deus por tudo que Ele tem feito em nosso meio, pelas vitórias alcançadas e pelos desafios e livramentos concedidos por Ele!
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Ao olharmos para o novo tempo que se aproxima, somos conduzidos pelo Espírito Santo a refletir sobre aquilo que é essencial em nossa vida cristã. Por isso, 2026 será para nós:{" "}
                <strong className="text-brown-800 text-xl">"O Ano de Voltar ao Primeiro Amor".</strong>
              </p>

              <blockquote className="border-l-4 border-gold-500 pl-6 py-4 my-8 bg-gold-50 italic text-gray-800">
                Vivemos dias em que é possível estar ocupado, cumprir tarefas, exercer funções e, ainda assim, correr o risco de esfriar o coração. O Senhor, porém, nos chama de volta à simplicidade da fé, à alegria fervorosa, à devoção fiel e ao zelo pela casa de Deus e ao amor genuíno por suas almas. Assim como está escrito em Apocalipse 2:4: "Tenho, porém, contra ti que deixaste o teu primeiro amor." Essa palavra não é para condenar, mas para despertar, alinhar e restaurar.
              </blockquote>

              <p className="text-gray-700 leading-relaxed mb-6">
                Voltar ao primeiro amor é voltar à simplicidade da fé, à alegria da salvação, ao compromisso fiel e ao amor que santifica a vida e nos faz servir sem obrigação, mas por paixão; não por costume, mas por convicção; não por posição, mas por amor a Cristo.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Como embaixador presidencial desde o dia primeiro de janeiro, peço e oro para que cada obreiro, cada membro deste campo eclesiástico experimente um renovo espiritual profundo. Que nossas igrejas sejam cheias da presença de Deus, que nossas lares sejam altares de adoração, e que nossas vidas reflitam a glória de Cristo em todo tempo.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Que o Senhor nos conduza em 2026 a um verdadeiro avivamento espiritual, começando em nossos corações. Voltemos ao primeiro amor, e tudo o mais será acrescentado.
              </p>

              <p className="text-gray-700 leading-relaxed mt-8">
                Que Deus continue abençoando ricamente a todos.
              </p>

              {/* Signature */}
              <div className="mt-12 text-right border-t pt-6">
                <p className="text-gray-600 italic mb-1">Em Cristo,</p>
                <p className="text-brown-800 font-bold text-xl">Pastor Presidente</p>
                <p className="text-gray-700 font-semibold">Pr. Edson Camargo</p>
                <p className="text-gray-600 text-sm mt-2">
                  Igreja Assembleia de Deus – Campo Eclesiástico de Ortigueira/PR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalavraPastoral;
