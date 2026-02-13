import { sedeLocations } from '../data/events';
import { MapPinIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-gradient-to-br from-brown-900 via-brown-800 to-accent-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={logo} 
                  alt="Igreja Assembleia de Deus - Ortigueira/PR" 
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <div className="font-bold text-xl leading-tight">Igreja Assembleia</div>
                  <div className="text-sm text-accent-200">de Deus - Ortigueira/PR</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                O ano de Voltar ao Primeiro Amor - Um ano de renovação espiritual, dedicação e
                compromisso com o Reino de Deus.
              </p>
              <div className="flex items-center space-x-2 text-accent-300">
                <MapPinIcon className="w-5 h-5" />
                <span className="text-sm">Ortigueira, Paraná - Brasil</span>
              </div>
            </div>

            {/* Templo Sede e Congregações */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent-300">
                Templo Sede e Congregações
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {sedeLocations.slice(0, 10).map((location, index) => (
                  <div key={index} className="text-sm text-white/80 hover:text-accent-300 transition-colors">
                    {location}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Leadership */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent-300">Liderança</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-accent-200 mb-1">Pastor Presidente</p>
                  <p className="font-bold text-lg">Pr. Edison Camargo</p>
                  <p className="text-sm text-white/70">Vice: Pr. Flavio Luhn</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-sm text-accent-200 mb-1">União Feminina</p>
                  <p className="font-bold text-lg">Irmã Rosana Camargo</p>
                  <p className="text-sm text-white/70">Coordenadora Geral</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href="https://wa.me/5541996945779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Diretoria do Biênio */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <h3 className="text-2xl font-bold text-accent-300 mb-6 text-center">
              Diretoria deste Biênio - Ano 2025 à 2027
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-accent-200 font-semibold mb-2">Presidente</p>
                <p className="text-white">Pr. Edison Camargo</p>
                <p className="text-white/70">Vice Presidente: Pr. Flavio Luhn</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-accent-200 font-semibold mb-2">2º Vice Presidente</p>
                <p className="text-white">Pr. Laudeli S dos Santos</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-accent-200 font-semibold mb-2">1° Gestor Financeiro</p>
                <p className="text-white">Ev Silvio V Prado</p>
                <p className="text-white/70">2º Gestor Financeiro: Pr. José F das Chagas</p>
              </div>
            </div>
            <div className="mt-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-accent-200 font-semibold mb-2">Conselho Eclesiástico e de Ética</p>
              <p className="text-white text-sm">
                Pr. Flávio Luhn – Pr Laudeli Santos / Pr. Antônio Correa, Pr Milton Guedes,
                Relator: Pr. Ronaldo Pescara
              </p>
            </div>
            <div className="mt-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-accent-200 font-semibold mb-2">Conselho Fiscal</p>
              <p className="text-white text-sm">
                Pr.de. Ronaldo Pescara / V Pres. Pr. Milton Guedes, Relator, Interino - Ev Maicon
                Estevão
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>© {currentYear} Igreja Assembleia de Deus - Ortigueira/PR. Todos os direitos reservados.</p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center space-x-2 hover:text-accent-300 transition-colors"
            >
              <span>Voltar ao topo</span>
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

