import { ShieldCheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brown-900 via-brown-800 to-gold-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Church Logo/Badge */}
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full border-4 border-gold-400 shadow-2xl">
            <ShieldCheckIcon className="w-12 h-12 text-gold-300" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-gold-300 text-3xl md:text-4xl mb-3">
              Janeiro de 2026
            </span>
            O ano de Voltar ao
            <span className="block mt-2 text-gold-400">Primeiro AMOR</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Igreja Evangélica Assembleia de Deus
          </p>
          <p className="text-lg md:text-xl text-gold-200 mb-8">
            EM ORTIGUEIRA/PR
          </p>

          {/* Pastores */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center md:text-right">
                <p className="text-gold-300 font-semibold text-lg mb-2">Pastor Presidente</p>
                <p className="text-white text-2xl font-bold">Pr. Edison Camargo</p>
                <p className="text-white/80 text-lg">Vice Presidente: Pr. Flavio Luhn</p>
              </div>
              <div className="w-px h-16 bg-white/30 hidden md:block"></div>
              <div className="text-center md:text-left">
                <p className="text-gold-300 font-semibold text-lg mb-2">Coordenadora Geral</p>
                <p className="text-white text-2xl font-bold">Irmã Rosana Camargo</p>
                <p className="text-white/80 text-lg">União Feminina</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Ver Agenda 2026
            </button>
            <button
              onClick={() =>
                document.getElementById('palavra-pastoral')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full backdrop-blur-sm border-2 border-white/50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Palavra Pastoral
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDownIcon className="w-6 h-6 text-white/60 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
