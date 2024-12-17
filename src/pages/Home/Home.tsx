 // src/pages/Home.tsx
 
 import  { useEffect, useState } from 'react';
import HomeSlider from '../../components/Sliders/HomeSlider/HomeSlider';
import HomeCard from '../../components/HomeCards/HomeCards';
import shipBg from '../../images/ship-bg.webp';
import anchor from '../../images/anchor.png'; 
import { fetchHomePageData } from '../../api/home'; 

import steer from '../../images/steer.png';
import { FaChevronRight } from 'react-icons/fa'; 
import ClientSlide from '../../components/Sliders/ClientSlides/ClientSide';

const Home = () => {
  const cards = [
    {
      image: steer,
      title: 'Simple Title 1',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: steer,
      title: 'Simple Title 2',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      image: steer,
      title: 'Simple Title 3',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];

  const services = [
    { title: 'SHIPS AGENCY', image: anchor },
    { title: 'MARINE SERVICES', image: anchor },
    { title: 'LOGISTICS SERVICES', image: anchor },
    { title: ' NVOCC OPERATION', image: anchor },
  ];

  const [homeData, setHomeData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const data = await fetchHomePageData();
        setHomeData(data.data); // Assuming the data is inside the "data" key
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch home page data');
        setLoading(false);
      }
    };
  
    getHomeData();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <section className='mt-20 md:mt-0'>
      <HomeSlider />
      </section>
      
      
      {/* Card Section */}
      <div className="xl:container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <HomeCard
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>

      {/* About Us Section */}
<section
  className="relative bg-cover bg-no-repeat bg-center h-screen"
  style={{ backgroundImage: `url(${shipBg})`, backgroundPosition: 'top' }}
>
  <div className="absolute inset-0 flex items-center">
    <div className="xl:container mx-auto px-4 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 text-left">
        <h3 className="text-xl md:text-2xl font-bold font-abril mb-2 text-grayDark">
          {homeData.about_sub_heading}
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold font-abril mb-4 text-blueLight">
          {homeData.about_title}
        </h1>
        <p className="mb-4 text-sm md:text-base text-grayDark">
          {homeData.about_description}
        </p>
        <a href="#more" className="flex items-center text-blueLight">
          Read More 
          <FaChevronRight className="ml-2 bg-blueLight text-primary border border-gray-500 rounded-tr-lg rounded-br-lg p-1" />
        </a>
      </div>
      <div className="hidden lg:block lg:w-1/2"></div>
    </div>
  </div>
</section>

{/* Our Services Section */}
<section className="py-10 md:py-16 bg-blueDark">
  <div className="xl:container mx-auto px-4 flex flex-col lg:flex-row">
    <div className="w-full lg:w-1/2 pr-0 md:pr-12">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="bg-blueLight p-3 md:p-4 shadow-lg rounded-lg mb-4 flex items-center"
        >
          <img src={service.image} alt={service.title} className="w-14 md:w-20 mr-4" />
          <h3 className="text-lg md:text-xl font-bold text-primary">{service.title}</h3>
        </div>
      ))}
    </div>
    <div className="w-full lg:w-1/2 text-left">
      <h3 className="text-xl md:text-2xl font-bold font-abril mb-2 text-primary">
        {homeData.service_sub_heading}
      </h3>
      <h1 className="text-3xl md:text-4xl font-bold font-abril mb-4 text-primary">
        {homeData.service_title}
      </h1>
      <p className="mb-4 text-sm md:text-base text-primary">
        {homeData.service_description}
      </p>
      <a href="#more" className="flex items-center text-primary">
        Read More 
        <FaChevronRight className="ml-2 bg-primary text-blueLight border border-gray-500 rounded-tr-lg rounded-br-lg p-1" />
      </a>
    </div>
  </div>
</section>

{/* Our Clients Section */}
<section className="py-10 md:py-16">
   
    <div className="xl:container mx-auto px-4 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
        <h3 className="text-xl md:text-2xl font-bold font-abril mb-2 text-grayDark">
          Sailing towards success
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-abril mb-4 text-blueLight">
          Our Clients
        </h1>
        <p className="mb-4 text-sm md:text-base text-grayDark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. 
          Donec varius quam nec risus tincidunt, nec vulputate sapien auctor. Nulla facilisi. 
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <ClientSlide />
      </div>
     
  </div>
</section>


    </div>
  );
};

export default Home;
