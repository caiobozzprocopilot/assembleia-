import Header from './components/Header';
import Hero from './components/Hero';
import PalavraPastoral from './components/PalavraPastoral';
import TemaPrimeiroAmor from './components/TemaPrimeiroAmor';
import UniaoFeminina from './components/UniaoFeminina';
import Diretrizes from './components/Diretrizes';
import Agenda from './components/Agenda';
import Alvos from './components/Alvos';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PalavraPastoral />
      <TemaPrimeiroAmor />
      <UniaoFeminina />
      <Diretrizes />
      <Agenda />
      <Alvos />
      <Footer />
    </div>
  );
}

export default App;
