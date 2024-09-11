import logo from './logo.svg';
import  './App.css';
import AboutUs from './components/AboutUs.jsx'
import Accordion from './components/Accordion.jsx';
import Footer from './components/Footer.jsx';
import Solution from './components/Solution.jsx';
import Partner from './components/Partner.jsx';
import Statistical from './components/Statistical.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Statistical />
      <AboutUs />
      <Partner />
      <Solution />
      <Accordion />
      <Footer/>
    </div>
  );
}

export default App;
