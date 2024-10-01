 
import agencyBg from "../../images/agency.jpg";
import shipIcon from "../../images/ship.png";
import main from "../../images/main.png";

const Technology = () => {
  return (
    <div>
      <section className="xl:container p-8">
        <h2 className="text-center font-abril text-5xl text-blueLight pb-5">
          About us
        </h2>
        <p className="text-grayDark">
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
      </section>

      {/* Ship Agency Section */}
      <section
        className="relative bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${agencyBg})` }}
      >
        <div className="  flex items-center">
          <div className="w-full lg:w-1/2 text-left p-4 bg-blueLight bg-opacity-40">
            <div className="xl:container py-16">
              <div className="flex items-center mb-4">
                <img
                  src={shipIcon}
                  alt="Ship Icon"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-4xl font-bold font-abril text-white">
                  Ship Agency
                </h3>
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
        className="relative bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${main})` }}
      >
        <div className="  flex items-center">
          <div className="hidden lg:block lg:w-1/2"></div>
          <div className="w-full lg:w-1/2 text-left p-4 bg-blueLight bg-opacity-40">
            <div className="xl:container py-16">
              <div className="flex items-center mb-4">
                <img
                  src={shipIcon}
                  alt="Ship Icon"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-4xl font-bold font-abril text-white">
                Maritime services
                </h3>
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

      {/* Logistic Services Section */}
      <section
        className="relative bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${agencyBg})` }}
      >
        <div className="  flex items-center">
          <div className="w-full lg:w-1/2 text-left p-4 bg-blueLight bg-opacity-40">
            <div className="xl:container py-16">
              <div className="flex items-center mb-4">
                <img
                  src={shipIcon}
                  alt="Ship Icon"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-4xl font-bold font-abril text-white">
                 Logistic Services
                </h3>
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
    </div>
  );
};

export default Technology;
