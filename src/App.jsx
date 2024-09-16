import logo from './logo.svg';
import  './App.css';
import AboutUs from './components/AboutUs.jsx'
import Accordion from './components/Accordion.jsx';
import Footer from './components/Footer.jsx';
import Solution from './components/Solution.jsx';
import Partner from './components/Partner.jsx';
import Statistical from './components/Statistical.jsx';
import Header from './components/Header.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import ContactUs from './components/ContactUs.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Partner />
      <Statistical />
      <AboutUs />
      <Solution />
      <ContactUs />
      <Accordion />
      <Footer/>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
