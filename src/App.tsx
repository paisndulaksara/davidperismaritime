import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OurService from './pages/OurServices/OurServices';
import Home from './pages/Home/Home';
import Maritime from './pages/MaritimeAgencies/Maritime';
import Contact from './pages/Contactus/Contact';
import Resourses from './pages/Resourses/Resourses';
import Blog from './pages/Blog/Blog';
import Blogpost from './components/Blogpost/Blogpost';
import Technology from './pages/Technology/Technology';
import Aboutus from './pages/aboutus/Aboutus';
import Careers from './pages/Careers/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Full-height flexbox container */}
      <Router>
        <Header />
        <main className="flex-grow"> {/* This makes sure the content grows and pushes footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<OurService />} />
            <Route path="/maritime" element={<Maritime />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resourses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id/:slug" element={<Blogpost />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/careeres" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
