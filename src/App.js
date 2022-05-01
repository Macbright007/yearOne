import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Customer from './components/Customer';
import Fans from './components/Fans';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Influencer from './components/Influencer';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Hero />
      <Fans />
      <Influencer />
      <Customer />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
