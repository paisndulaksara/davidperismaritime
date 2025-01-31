 import React, { useEffect, useState } from 'react';
import { fetchCarrerPageData } from '../../api/careers';
import { FaRegCalendarAlt } from 'react-icons/fa';

interface Career {
  id: number;
  title: string;
  description: string;
  closing_date: string;
  image: string;
}

const Careers: React.FC = () => {
  const [careersData, setCareersData] = useState<Career[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetchCarrerPageData();
        if (response.data) {
          const formattedData = response.data.map((career: any) => ({
            id: career.id,
            title: career.title,
            description: career.description,
            closing_date: career.closing_date.split('T')[0], // Extract the date part
            image: `https://dpmarine-api.3dhins.lk/storage/${career.image}`,
          }));
          setCareersData(formattedData);
        } else {
          setError('Failed to load careers.');
        }
      } catch (error) {
        setError('An error occurred while fetching the data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const openModal = (career: Career) => {
    setSelectedCareer(career);
  };

  const closeModal = () => {
    setSelectedCareer(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <section className="xl:container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blueLight mb-8 font-abril text-center">
          Careers
        </h2>

        {/* Career Cards */}
        <div className="xl:container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {careersData.map((career) => (
            <div
              key={career.id}
              className="border rounded-lg p-6 sm:p-8 bg-white shadow-md cursor-pointer"
              onClick={() => openModal(career)}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{career.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: career.description }}></p>
              <div className="flex items-center text-gray-600 text-sm sm:text-base">
                <FaRegCalendarAlt className="mr-2" />
                <span>Closing Date: {career.closing_date}</span>
              </div>
              <button
                className="mt-4 sm:mt-6 bg-blueLight text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md"
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
          <div className="bg-white max-w-full sm:max-w-2xl w-full rounded-2xl p-4 sm:p-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <button
              onClick={closeModal}
              className="mb-4 sm:mb-6 bg-red-500 text-white px-4 py-2 sm:px-6 rounded-md float-right"
            >
              Close
            </button>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{selectedCareer.title}</h3>
            <img
              src={selectedCareer.image}
              alt={selectedCareer.title}
              className="w-full object-contain mb-4 sm:mb-6"
            />
            <div
              className="text-gray-700 text-sm sm:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedCareer.description }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
