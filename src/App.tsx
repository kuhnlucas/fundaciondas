import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowToHelp from './components/HowToHelp';
import Impact from './components/Impact';
import CashbackPlatform from './components/CashbackPlatform';
import Stories from './components/Stories';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bgMain">
      <Header />
      <Hero />
      <WhatWeDo />
      <HowToHelp />
      <Impact />
      <CashbackPlatform />
      <Stories />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
