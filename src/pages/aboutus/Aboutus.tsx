import { fetchAboutPageData } from "../../api/about";
import { useEffect, useState } from "react";
import image from "../../images/image.png";  
import TeamSlide from "../../components/Sliders/Teamslider/TeamSlide";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  useEffect(() => {
    const getAboutData = async () => {
      try {
        const data = await fetchAboutPageData();
        setAboutData(data.data); // Assuming the data is inside the "data" key
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch about page data");
        setLoading(false);
      }
    };

    getAboutData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="xl:container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side with text */}
          <div>
            <h2 className="text-5xl font-bold text-blueLight mb-4 font-abril">
              {aboutData.title}
            </h2>
            <p
              className="text-grayDark text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aboutData.description }}
            />
          </div>

          {/* Right side with image */}
          <div>
            <img
              src={image}
              alt="Maritime"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div>
  {/* Ship Agency Section */}
  <section className="relative bg-cover bg-no-repeat bg-center ">
    <div className="flex flex-col lg:flex-row items-stretch">
      {/* Left Column - Text */}
      <div className="w-full lg:w-1/2 p-8 bg-blueLight flex items-center">
        <div className="w-full container">
          <div className="flex items-center mb-4 container">
            <img src={`${IMAGE_BASE_URL}${aboutData.vision_icon}`} alt="Ship Icon" className="w-12 h-12 mr-4" />
            <h3 className="text-4xl font-bold font-abril text-white">
              {aboutData.vision_title}
            </h3>
          </div>
        <div className="container">
        <p className="text-white">{aboutData.vision_description}</p>
        </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src={`${IMAGE_BASE_URL}${aboutData.vision_image}`}
          alt="Vision"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>

  {/* Maritime services Section */}
  <section className="relative bg-cover bg-no-repeat bg-center">
  <div className="flex flex-col-reverse lg:flex-row items-stretch">
    
    {/* Image Column */}
    <div className="w-full lg:w-1/2 h-64 lg:h-auto order-1 lg:order-none">
      <img
        src={`${IMAGE_BASE_URL}${aboutData.mission_image}`}
        alt="Mission"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text Column */}
    <div className="w-full lg:w-1/2 p-8 bg-blueLight flex items-center order-2 lg:order-none">
      <div className="w-full container">
        <div className="flex items-center mb-4 container">
          <img src={`${IMAGE_BASE_URL}${aboutData.mission_icon}`} alt="Ship Icon" className="w-12 h-12 mr-4" />
          <h3 className="text-4xl font-bold font-abril text-white">
            {aboutData.mission_title}
          </h3>
        </div>
        <div className="container"><p className="text-white">{aboutData.mission_description}</p>
        </div>
        
      </div>
    </div>

  </div>
</section>

</div>


      {/* Our Team Section */}
      <div className="text-center my-8">
        <h2 className="text-5xl font-bold text-blueLight mb-16">Our Team</h2>
        <TeamSlide />
      </div>
    </>
  );
};

export default Aboutus;
