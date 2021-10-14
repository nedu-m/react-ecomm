import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Contents from './components/Contents'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Features />
      <Contents />
    </div>
  );
}

export default App;
