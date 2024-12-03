import React, { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import maritimeSafetyImg from '../../images/lifeguard.jpg';
import logisticsCoordinatorImg from '../../images/lifeguard.jpg';
import operationsManagerImg from '../../images/lifeguard.jpg';

interface Career {
  id: number;
  title: string;
  description: string;
  closingDate: string;
  image: string;
}

const careersData: Career[] = [
  {
    id: 1,
    title: 'Maritime Safety Officer',
    description: 'Ensure the safety and security of maritime operations.',
    closingDate: '2024-12-15',
    image: maritimeSafetyImg,
  },
  {
    id: 2,
    title: 'Logistics Coordinator',
    description: 'Coordinate logistics and supply chain operations efficiently.',
    closingDate: '2024-12-20',
    image: logisticsCoordinatorImg,
  },
  {
    id: 3,
    title: 'Operations Manager',
    description: 'Manage day-to-day maritime operations and team supervision.',
    closingDate: '2024-12-25',
    image: operationsManagerImg,
  },
];

const Careers: React.FC = () => {
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const openModal = (career: Career) => {
    setSelectedCareer(career);
  };

  const closeModal = () => {
    setSelectedCareer(null);
  };

  return (
    <div>
      <section className="xl:container mx-auto py-10">
        <h2 className="text-5xl font-bold text-blueLight mb-8 font-abril text-center">
          Careers
        </h2>

        {/* Career Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {careersData.map((career) => (
            <div
              key={career.id}
              className="border rounded-lg p-8 bg-white shadow-md cursor-pointer max-w-lg"
              onClick={() => openModal(career)}
            >
              <h3 className="text-2xl font-bold mb-4">{career.title}</h3>
              <p className="text-gray-700 mb-6">{career.description}</p>
              <div className="flex items-center text-gray-600">
                <FaRegCalendarAlt className="mr-2" />
                <span>Closing Date: {career.closingDate}</span>
              </div>
              <button
                className="mt-6 bg-blueLight text-white px-6 py-2 rounded-md"
                onClick={() => openModal(career)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedCareer && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div className="bg-white max-w-2xl w-full rounded-2xl p-8 pt-8 pb-8 max-h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar">
      <button
        onClick={closeModal}
        className="mb-6 bg-red-500 text-white px-6 py-2 rounded-md float-right"
      >
        Close
      </button>
      <h3 className="text-4xl font-bold mb-6">{selectedCareer.title}</h3>
      <img
        src={selectedCareer.image}
        alt={selectedCareer.title}
        className="w-full object-contain mb-6"
      />
      <p className="text-gray-700 text-lg leading-relaxed">
        {selectedCareer.description}
      </p>
    </div>
  </div>
)}



    </div>
  );
};

export default Careers;
