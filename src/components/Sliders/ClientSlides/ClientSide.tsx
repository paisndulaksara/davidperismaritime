// src/components/Sliders/ClientSlider/ClientSlider.tsx
 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../../../images/Maritime-Home-(1).jpg'

const ClientSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=" mx-auto   overflow-hidden ">
      <Slider {...settings}>
      <div className="  relative">
          <img src={logo} alt="Slide 1" className="w-full h-auto" />
         
        </div>
        <div className=" relative">
          <img src={logo} alt="Slide 2" className="w-full h-auto" />
          
        </div>
        <div className="   relative">
          <img src={logo} alt="Slide 3" className="w-full h-auto" />
         
        </div>
      </Slider>
    </div>
  );
};

export default ClientSlider;
