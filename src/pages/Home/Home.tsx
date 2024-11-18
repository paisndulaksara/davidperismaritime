 // src/pages/Home.tsx
 
import HomeSlider from '../../components/Sliders/HomeSlider/HomeSlider';
import HomeCard from '../../components/HomeCards/HomeCards';
import shipBg from '../../images/ship-bg.webp';
import anchor from '../../images/anchor.png'; // Add the anchor image

import steer from '../../images/steer.png';
import { FaChevronRight } from 'react-icons/fa';
import ClientSlider from '../../components/Sliders/ClientSlides/ClientSide';

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

  return (
    <div>
      <HomeSlider />
      
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
          <div className="xl:container mx-auto px-4 flex">
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold font-abril mb-2 text-grayDark">Smooth Sailing Ahead</h3>
              <h1 className="text-6xl font-bold font-abril mb-4 text-blueLight">About Us</h1>
              <p className="mb-4 text-grayDark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Donec varius quam nec risus tincidunt, nec vulputate sapien auctor. Nulla facilisi. Aliquam erat volutpat. Vestibulum vulputate sagittis lectus, at viverra orci. Sed ac eros auctor, sagittis nunc et, faucibus sapien. Curabitur ultricies turpis eu urna malesuada ultricies. Nam et sapien ac nisl fringilla varius. Sed id risus quam. Ut efficitur odio et enim laoreet, nec facilisis sem pellentesque. Integer consequat sollicitudin arcu, vel pharetra sapien vehicula eu.
              </p>
              <p className="mb-4 text-grayDark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis urna vitae tincidunt fermentum. Nullam vestibulum, mauris nec luctus fermentum, nulla felis vehicula justo, sit amet pharetra nulla orci a magna. Morbi eu magna nec ligula suscipit aliquet. Vestibulum auctor orci eu felis luctus, a suscipit orci faucibus. Fusce aliquam lectus et orci posuere, sed dictum neque varius. Aenean ut libero vitae arcu volutpat cursus. Vestibulum dapibus dolor vitae sapien tempus, nec fermentum erat aliquam.
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
      <section className="py-16 bg-blueDark">
        <div className="xl:container mx-auto px-4 flex">
          <div className="w-full lg:w-1/2 pr-12">
            {services.map((service, index) => (
              <div key={index} className="bg-blueLight p-4 shadow-lg rounded-lg mb-4 flex items-center">
                <img src={service.image} alt={service.title} className="w-20 mr-4" />
                <h3 className="text-xl font-bold text-primary">{service.title}</h3>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h3 className="text-2xl font-bold font-abril mb-2 text-primary">Your gateway to seamless operations</h3>
            <h1 className="text-4xl font-bold font-abril mb-4 text-primary">Our Services</h1>
            <p className="mb-4 text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Donec varius quam nec risus tincidunt, nec vulputate sapien auctor. Nulla facilisi. Aliquam erat volutpat. Vestibulum vulputate sagittis lectus, at viverra orci. Sed ac eros auctor, sagittis nunc et, faucibus sapien. Curabitur ultricies turpis eu urna malesuada ultricies. Nam et sapien ac nisl fringilla varius. Sed id risus quam. Ut efficitur odio et enim laoreet, nec facilisis sem pellentesque. Integer consequat sollicitudin arcu, vel pharetra sapien vehicula eu.
            </p>
            <p className="mb-4 text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis urna vitae tincidunt fermentum. Nullam vestibulum, mauris nec luctus fermentum, nulla felis vehicula justo, sit amet pharetra nulla orci a magna.  
            </p>
            <a href="#more" className="flex items-center text-primary">
              Read More 
              <FaChevronRight className="ml-2 bg-primary text-blueLight border border-gray-500 rounded-tr-lg rounded-br-lg p-1" />
            </a>
          </div>
        </div>
      </section>

      {/* our clients */}
      {/* Our Clients Section */}
      <section className="relative py-8">
        <div className="flex items-center">
          <div className="xl:container mx-auto px-4 flex">
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold font-abril mb-2 text-grayDark"> Sailing towards success</h3>
              <h1 className="text-6xl font-bold font-abril mb-4 text-blueLight">Our Clients</h1>
              <p className="mb-4 text-grayDark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Donec varius quam nec risus tincidunt, 
              </p>
             
            </div>
            <div className="w-full lg:w-1/2">
              <ClientSlider />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
