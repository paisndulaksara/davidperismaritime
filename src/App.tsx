 // src/App.js 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OurService from './pages/OurServices/OurServices';
import Home from './pages/Home/Home';
import Maritime from './pages/MaritimeAgencies/Maritime';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<OurService />} />
        <Route path="/maritime" element={<Maritime />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
