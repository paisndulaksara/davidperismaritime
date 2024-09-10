// src/components/Sliders/homeslider/HomeSlider.tsx
 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide from '../../../images/slide1.jpg'

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=" mx-auto -mt-20 overflow-hidden ">
      <Slider {...settings}>
      <div className="  relative">
          <img src={slide} alt="Slide 1" className="w-full h-auto" />
          <div className="xl:container absolute left-0 top-1/2 transform -translate-y-1/2 p-6 ">
            <h3 className="text-5xl font-bold font-abril text-primary">Anchored in excellence</h3>
            <h5 className="text-3xl font-bold font-abril text-primary pt-2">DP Maritime Agencies, your trusted</h5>
            <p className="text-3xl font-bold font-abril text-primary">partner in maritime services.</p>
          </div>
        </div>
        <div className=" relative">
          <img src={slide} alt="Slide 2" className="w-full h-auto" />
          <div className="xl:container absolute left-0 top-1/2 transform -translate-y-1/2 p-6 ">
            <h3 className="text-5xl font-bold font-abril text-primary">Anchored in excellence</h3>
            <h5 className="text-3xl font-bold font-abril text-primary pt-2">DP Maritime Agencies, your trusted</h5>
            <p className="text-3xl font-bold font-abril text-primary">partner in maritime services.</p>
          </div>
        </div>
        <div className="   relative">
          <img src={slide} alt="Slide 3" className="w-full h-auto" />
          <div className="xl:container absolute left-0 top-1/2 transform -translate-y-1/2 p-6 ">
            <h3 className="text-5xl font-bold font-abril text-primary">Anchored in excellence</h3>
            <h5 className="text-3xl font-bold font-abril text-primary pt-2">DP Maritime Agencies, your trusted</h5>
            <p className="text-3xl font-bold font-abril text-primary">partner in maritime services. </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
