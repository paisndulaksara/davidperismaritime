 
import image from '../../images/image.png';
import agencyBg from "../../images/agency.jpg";
import shipIcon from "../../images/ship.png";
import main from "../../images/main.png";
import person01 from "../../images/person-01.jpg";
import person02 from "../../images/person-02.jpg";
import person03 from "../../images/person-03.jpg";
import person04 from "../../images/person-04.jpg";

const Aboutus = () => {
  return (
    <>
    <div className="xl:container mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side with text */}
        <div>
          <h2 className="text-5xl font-bold text-blueLight mb-4 font-abril">DP Maritime Agencies</h2>
          <p className="text-grayDark text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque
            corporis, pariatur voluptates maxime debitis est commodi magnam minima
            deserunt quae, ratione officia fugiat, ipsa unde obcaecati cum.
            Perspiciatis, fugit quo. Dolore voluptas assumenda, quisquam
            repellendus impedit ad magnam praesentium.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque
            corporis, pariatur voluptates maxime debitis est commodi magnam minima
            deserunt quae, ratione officia fugiat, ipsa unde obcaecati cum.
            Perspiciatis, fugit quo. Dolore voluptas assumenda, quisquam
            repellendus impedit ad magnam praesentium.
          </p>
        </div>
        
        {/* Right side with image */}
        <div>
          <img src={image} alt="Maritime" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>

     <div>
         {/* Ship Agency Section */}
      <section
        className="relative bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${agencyBg})` }}
      >
        <div className="  flex items-center">
          <div className="w-full lg:w-1/2 text-left p-4 bg-blueLight ">
            <div className="xl:container py-16">
              <div className="flex items-center mb-4">
                <img
                  src={shipIcon}
                  alt="Ship Icon"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-4xl font-bold font-abril text-white">
                  Our Vission
                </h3>
                <h5 className="text-4xl font-bold font-abril text-white">
                Smooth Sailling Ahead
                </h5>
              </div>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                neque corporis, pariatur voluptates maxime debitis est commodi
                magnam minima deserunt quae, ratione officia fugiat, ipsa unde
                obcaecati cum. Perspiciatis, fugit quo. Dolore voluptas
                assumenda, quisquam repellendus impedit ad magnam praesentium.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                neque corporis, pariatur voluptates maxime debitis est commodi
                magnam minima deserunt quae, ratione officia fugiat, ipsa unde
                obcaecati cum. Perspiciatis, fugit quo. Dolore voluptas
                assumenda, quisquam repellendus impedit ad magnam praesentium.
              </p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </section>

      {/* Maritime services Section */}
      <section
        className=" relative bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${main})` }}
      >
        <div className="  flex items-center">
          <div className="hidden lg:block lg:w-1/2"></div>
          
          <div className="w-full lg:w-1/2 text-left p-4 bg-blueLight ">
            <div className="xl:container py-16">
              <div className="flex items-center mb-4">
                <img
                  src={shipIcon}
                  alt="Ship Icon"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-4xl font-bold font-abril text-white">
                Our Mission
                </h3>
                <h5 className="text-4xl font-bold font-abril text-white">
                Smooth Sailling Ahead
                </h5>
              </div>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                neque corporis, pariatur voluptates maxime debitis est commodi
                magnam minima deserunt quae, ratione officia fugiat, ipsa unde
                obcaecati cum. Perspiciatis, fugit quo. Dolore voluptas
                assumenda, quisquam repellendus impedit ad magnam praesentium.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                neque corporis, pariatur voluptates maxime debitis est commodi
                magnam minima deserunt quae, ratione officia fugiat, ipsa unde
                obcaecati cum. Perspiciatis, fugit quo. Dolore voluptas
                assumenda, quisquam repellendus impedit ad magnam praesentium.
              </p>
            </div>
          </div>
        </div>
      </section>
     </div>

       {/* Our Team Section */}
       <div className="text-center my-8">
        <h2 className="text-5xl font-bold text-blueLight mb-16">Our Team</h2>
        <div className="xl:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img src={person01} alt="Team Member 1" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-abril text-darkBlue">John Doe</h3>
            <p className="text-lg font-abril text-darkBlue">Position</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img src={person02} alt="Team Member 2" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-abril text-darkBlue">Jane Smith</h3>
            <p className="text-lg font-abril text-darkBlue">Position</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img src={person03} alt="Team Member 3" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-abril text-darkBlue">Alice Johnson</h3>
            <p className="text-lg font-abril text-darkBlue">Position</p>
          </div>
          {/* Team Member 4 */}
          <div className="text-center">
            <img src={person04} alt="Team Member 4" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-2xl font-abril text-darkBlue">Bob Brown</h3>
            <p className="text-lg font-abril text-darkBlue">Position</p>
          </div>
        </div>
      </div>
  </>
  );
};

export default Aboutus;
