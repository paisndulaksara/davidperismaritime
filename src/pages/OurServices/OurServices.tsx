import { useEffect, useState } from 'react';
import { fetchServices } from '../../api/services';
import agencyBg from "../../images/agency.jpg"; // Fallback images
import shipIcon from "../../images/ship.png";

interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
  order_by: number;
  image: string;
}

interface ApiResponse {
  data: {
    title: string;
    description: string;
    services: Service[];
  };
}

const OurServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL; // Get the image base URL from the .env file

  useEffect(() => {
    const getServices = async () => {
      try {
        const response: ApiResponse = await fetchServices();
        
        if (response?.data) {
          setServices(response.data.services || []);
          setTitle(response.data.title || 'Our Services');
          setDescription(response.data.description || '');
        } else {
          setError('No data available');
        }
      } catch (error) {
        setError('Failed to fetch services. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <section className="xl:container p-8">
        <h2 className="text-center font-abril text-5xl text-blueLight pb-5">
          {title}
        </h2>
        <p className="text-grayDark" dangerouslySetInnerHTML={{ __html: description }} />
      </section>

      {services.length === 0 ? (
        <p className="text-center text-red-500">No services available at the moment.</p>
      ) : (
        services.map((service, index) => (
         
          <section
            key={service.id}
            className="relative bg-cover bg-no-repeat bg-center "
            style={{ backgroundImage: `url(${service.image ? `${IMAGE_BASE_URL}${service.image}` : agencyBg})` }} 
          >
            <div className="flex items-center xl:c">
              <div className={`w-full lg:w-1/2 text-left p-4 bg-blueLight bg-opacity-40 ${index % 2 === 0 ? '' : 'lg:order-last'}`}>
                <div className="xl:container py-16">
                  <div className="items-center mb-4 container">
                    <img 
                      src={service.icon ? `${IMAGE_BASE_URL}${service.icon}` : shipIcon} 
                      alt={`${service.title} Icon`} 
                      className="w-12 h-12 mr-4" 
                    />
                    <h3 className="text-4xl font-bold font-abril text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div 
                    className="text-white container"
                    dangerouslySetInnerHTML={{ __html: service.description }} 
                  />
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default OurServices;
