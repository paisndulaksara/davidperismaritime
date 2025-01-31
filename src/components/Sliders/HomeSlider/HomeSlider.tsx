import { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchHomePageData } from "../../../api/home";

// Interface for the Slider data (based on the API response structure)
interface SliderData {
  id: number;
  slider_text: string;
  slider_description: string;
  order_by: number;
  image: string;
  created_at: string;
  updated_at: string;
}

const HomeSlider: React.FC = () => {
  const [sliders, setSliders] = useState<SliderData[]>([]); // Specify the type of the array
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Error can be a string or null

  // Fetch slider data on component mount
  useEffect(() => {
    const getSliders = async () => {
      try {
        const response = await fetchHomePageData();
        console.log("Full Response:", response); // Log the full response to debug

        const sliderData: SliderData[] | undefined = response?.data?.sliders; // Cast as possible SliderData array
        if (sliderData && Array.isArray(sliderData)) {
          setSliders(sliderData);
        } else {
          console.warn("No sliders found in response:", response);
          setError("No slider data available.");
        }
      } catch (error) {
        console.error("Error fetching slider data:", error);
        setError("Failed to load slider data.");
      } finally {
        setIsLoading(false);
      }
    };

    getSliders();
  }, []);

  // Slick slider settings (with proper TypeScript type)
  const settings: Settings = {
    dots:true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    autoplaySpeed: 3000,
  };

  if (isLoading) return <p>Loading slider...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-auto -mt-24 overflow-hidden">
      <Slider {...settings}>
        {sliders.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}${slide.image}`}
              alt={slide.slider_text}
              className="w-full h-auto"
            />
            <div className="xl:container absolute left-0 top-1/2 transform -translate-y-1/2 p-6">
              <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-wider font-abril text-primary">
                {slide.slider_text}
              </h3>

              <div
                className="text-xl sm:text-2xl md:text-3xl font-bold font-abril text-primary pt-2"
                dangerouslySetInnerHTML={{ __html: slide.slider_description }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
