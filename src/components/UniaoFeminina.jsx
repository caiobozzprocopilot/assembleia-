import rosanaImage from '../assets/images/rosana.jpeg';

const UniaoFeminina = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-pink-100 px-4 py-2 rounded-full mb-4">
              <span className="text-pink-600 font-semibold text-sm uppercase tracking-wide">
                União Feminina
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Palavra da Coordenadora Geral da União Feminina
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header com foto */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img 
                  src={rosanaImage} 
                  alt="Irmã Rosana Camargo" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <div className="text-center md:text-left text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Irmã Rosana Camargo
                  </h3>
                  <p className="text-lg text-pink-100">
                    Coordenadora Geral da União Feminina
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Amadas irmãs da União Feminina do Campo Eclesiástico de Ortigueira - PR,</strong>
                  <br />
                  <span className="text-purple-600 font-semibold">a paz do Senhor Jesus!</span>
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Com um coração cheio de gratidão, louvo a Deus por tudo que Ele realizou entre nós ao longo de 2025. Foram dias de aprendizado, crescimento espiritual, comunhão e muitas experiências com o Senhor. Vimos Deus fortalecer nossos lares, renovar forças, conceder vitórias e nos usar cada irmã de forma preciosa na Sua obra. Toda honra e toda glória sejam dadas ao nosso Deus!
                </p>
              </div>

              {/* Highlighted Message */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 mb-8 border-l-4 border-purple-500">
                <p className="text-purple-900 font-semibold text-lg leading-relaxed mb-4">
                  Ao olharmos para 2026, somos desafiadas a prosseguir com ânimo, fé e motivação. O Senhor nos chama a permanecer firmes, confiantes e cheias do Espírito Santo. Cada mulher tem valor, propósito e uma missão estabelecida por Deus. Não desanime diante das lutas; Deus é fiel para sustentar, renovar e conduzir a cada uma de nós.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Que em 2026 sejamos mulheres mais comprometidas com a oração, com a Palavra e com a obra do Senhor; mulheres que edificam seus lares, fortalecem outras vidas e refletem o amor de Cristo por onde passam. Sigamos unidas, caminhando juntas, crendo que grandes coisas o Senhor ainda fará em nosso meio.
                </p>

                <blockquote className="border-l-4 border-pink-400 pl-6 py-4 my-8 bg-pink-50 italic text-gray-800">
                  <p className="font-semibold text-purple-900 mb-2">
                    Que Deus continue abençoando ricamente a vida de cada irmã da União Feminina de Ortigueira.
                  </p>
                </blockquote>

                {/* Signature */}
                <div className="mt-12 text-right border-t pt-6">
                  <p className="text-gray-600 italic mb-1">Com carinho,</p>
                  <p className="text-purple-900 font-bold text-xl">Irmã Rosana Camargo</p>
                  <p className="text-gray-700 font-semibold">
                    Coordenadora Geral da União Feminina
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Campo Eclesiástico de Ortigueira - PR
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Footer */}
            <div className="h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniaoFeminina;

