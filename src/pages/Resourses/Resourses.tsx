import   { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import whitepaper1 from '../../pdf/1726161910886.pdf';
import whitepaper2 from '../../pdf/1726382688014.pdf';
import whitepaper3 from '../../pdf/quantum_leap_Book.pdf';

// FAQ Accordion component
const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What is your service about?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'How can I contact support?', answer: 'You can contact us through our contact page or via email.' },
    { question: 'What are your working hours?', answer: 'Our working hours are Monday to Friday, 9 AM - 6 PM.' },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full flex justify-between items-center text-left py-4 font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center space-x-2">
              <FaQuestionCircle className="text-blue-600" />
              <span>{faq.question}</span>
            </div>
            {activeIndex === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-blue-600" />}
          </button>
          {activeIndex === index && <p className="pb-4 text-gray-700">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

const Resources = () => {
  const [activeSection, setActiveSection] = useState('whitepapers');

  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveSection('whitepapers')}
            className={`px-6 py-3 font-bold ${activeSection === 'whitepapers' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} border border-blue-600 rounded transition-colors duration-300`}
          >
            Whitepapers
          </button>
          <button
            onClick={() => setActiveSection('webinars')}
            className={`px-6 py-3 font-bold ${activeSection === 'webinars' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} border border-blue-600 rounded transition-colors duration-300`}
          >
            Webinars
          </button>
          <button
            onClick={() => setActiveSection('faq')}
            className={`px-6 py-3 font-bold ${activeSection === 'faq' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} border border-blue-600 rounded transition-colors duration-300`}
          >
            FAQ
          </button>
        </div>

        <div>
          {/* Whitepapers/Ebooks Section */}
          {activeSection === 'whitepapers' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <img src="https://via.placeholder.com/150" alt="Whitepaper" className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">Whitepaper 1</h3>
                <p className="text-gray-700 mb-4">Learn about the latest trends in technology.</p>
                <a href={whitepaper1} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Download PDF</a>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <img src="https://via.placeholder.com/150" alt="Whitepaper" className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">Whitepaper 2</h3>
                <p className="text-gray-700 mb-4">An in-depth look at industry standards.</p>
                <a href={whitepaper2} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Download PDF</a>
              </div>
              <div className="border rounded-lg p-6 bg-white shadow-lg transition-shadow hover:shadow-xl">
                <img src="https://via.placeholder.com/150" alt="Whitepaper" className="w-full h-40 object-cover mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">Quantum Leap Book</h3>
                <p className="text-gray-700 mb-4">Explore quantum technology breakthroughs.</p>
                <a href={whitepaper3} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Download PDF</a>
              </div>
            </div>
          )}

          {/* Webinars/Videos Section */}
          {activeSection === 'webinars' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="relative">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/2vjPBrBU-TM"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="relative">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/tAGnKpE4NCI"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {activeSection === 'faq' && (
            <div className="space-y-4 xl:container">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <FAQAccordion />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;
