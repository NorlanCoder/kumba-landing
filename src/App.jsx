import logo from './logo.svg';
import  './App.css';
import About from './pages/About.jsx'
import Accordion from './components/Accordion.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Solution from './components/Solution.jsx';
import Partner from './components/Partner.jsx';
import Statistical from './components/Statistical.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Statistical />
      <Partner />
      <Solution />
      <About />
      <Accordion />
      <Footer/>
    </div>
  );
}

export default App;
