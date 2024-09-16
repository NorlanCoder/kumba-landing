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
import PrivacyModal from './components/PrivacyModal.jsx';
import TermsModal from './components/TermsModal.jsx';
import { useState } from 'react';

function App() {

  const [isModalPoliciesOpen, setIsModalPoliciesOpen] = useState(false);
  
  const openModalPolicies = () => setIsModalPoliciesOpen(true);
  const closeModalPolicies = () => setIsModalPoliciesOpen(false); 

  const [isModalTermsOpen, setIsModalTermsOpen] = useState(false);
  
  const openModalTerms = () => setIsModalTermsOpen(true);
  const closeModalTerms = () => setIsModalTermsOpen(false); 

  return (
    <div className="App">
      <Header />
      <Partner />
      <Statistical />
      <AboutUs />
      <Solution />
      <ContactUs />
      <Accordion />
      <Footer openModalPolicies={openModalPolicies} openModalTerms={openModalTerms}/>
      <ScrollToTopButton />

      {isModalPoliciesOpen && <PrivacyModal closeModalPolicies={closeModalPolicies} />}
      {isModalTermsOpen && <TermsModal closeModalTerms={closeModalTerms}/>}

    </div>
  );
}

export default App;
