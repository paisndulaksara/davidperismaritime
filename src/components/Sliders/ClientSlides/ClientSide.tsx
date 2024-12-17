 // src/components/Sliders/ClientSlider/ClientSlider.tsx
import { useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { fetchHomePageData } from '../../../api/home'; // Import the API function

interface ClientSliderData {
  id: number;
  image: string; // The path to the logo image
}

const ClientSlide: React.FC = () => {
  const [clientLogos, setClientLogos] = useState<ClientSliderData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch client slider data on component mount
  useEffect(() => {
    const getClientLogos = async () => {
      try {
        const response = await fetchHomePageData();
        console.log("API Response:", response); // Log the response to inspect it
        if (response?.data?.clientLogos && Array.isArray(response.data.clientLogos)) {
          setClientLogos(response.data.clientLogos); // Set clientLogos array from API
        } else {
          setClientLogos([]); // Set as empty array if clientLogos is not an array
          console.warn('Expected clientLogos array, but received:', response?.data?.clientLogos);
        }
      } catch (error) {
        console.error('Error fetching client logos:', error);
        setError('Failed to load client slider data.');
      } finally {
        setIsLoading(false);
      }
    };

    getClientLogos();
  }, []);

  // Slick slider settings
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display 4 logos per view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Large tablets & small laptops
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (isLoading) return <p>Loading client slider...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto overflow-hidden">
      <Slider {...settings}>
        {clientLogos.map((client) => (
          <div key={client.id} className="relative p-4">
            <img
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}${client.image}`} // Use the dynamic image URL
              alt={`Client Logo ${client.id}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSlide;
