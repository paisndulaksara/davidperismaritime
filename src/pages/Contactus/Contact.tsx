 
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import image from "../../images/info.jpg";
import { fetchGeneralData } from "../../api/generalData";
import { useEffect, useState } from "react";

const Contact = () => {

  const [generalData, setGenaralData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getGeneralData = async () => {
      try {
        const data = await fetchGeneralData();
        setGenaralData(data.data); // Assuming the data is inside the "data" key
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch home page data");
        setLoading(false);
      }
    };

    getGeneralData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <>
      {/* Map Section */}
      <section className="hero-section py-12 bg-gray-100">
        <div className="w-full">
          <div className="gmap_canvas relative overflow-hidden h-96">
            <iframe
              src="https://maps.google.com/maps?q=David%20Pieris%20Motor%20Company%20(Pvt)%20Ltd%20-%20Head%20Office&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              className="w-full h-full"
              style={{ border: 0 }}
               
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Info and Business Hours Section */}
      <section className="py-12 bg-white">
        <div className="xl:container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            
            {/* Left side - Contact Information */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Get In Touch</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-600" size={24} />
                  <p className="text-lg text-gray-700">
                  {generalData.address}
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-600" size={24} />
                  <p className="text-lg text-gray-700">
                  <a href={`mailto:${generalData.email}`}>
                {generalData.email}
              </a>
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-600" size={24} />
                  <p className="text-lg text-gray-700">
                  <a href={`tel:${generalData.number}`}>
                {generalData.number}
              </a>
                  </p>
                </div>
              </div> 

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-10">
                <a href={generalData.fb_link} className="hover:text-blue-800 border-2 border-blue-600 text-blue-600 rounded-full p-2 transition hover:bg-blue-600 hover:text-white">
                  <FaFacebookF size={20} />
                </a>
                <a href={generalData.linked_in_link} className="hover:text-blue-800 border-2 border-blue-600 text-blue-600 rounded-full p-2 transition hover:bg-blue-600 hover:text-white">
                  <FaLinkedinIn size={20} />
                </a>
                <a href={generalData.youtube_link} className="hover:text-blue-800 border-2 border-blue-600 text-blue-600 rounded-full p-2 transition hover:bg-blue-600 hover:text-white">
                  <FaYoutube size={20} />
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: <strong>9:00 AM - 6:00 PM</strong></p>
                  <p>Saturday: <strong>10:00 AM - 4:00 PM</strong></p>
                  <p>Sunday: <strong>Closed</strong></p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2 p-6 mt-10 md:mt-0">
              <img
                src={image}
                alt="Contact Information"
                className="w-full h-full object-cover shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Form Section */}
       <section className="py-12 bg-gray-100">
  <div className="xl:container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-center">
      
      {/* Left side - Info Section */}
      <div className="md:w-1/2 p-6 mt-10 md:mt-0 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">What's on your mind?</h2>
        <p className="text-lg text-gray-700 mb-6">We're here to assist you. Reach out to us with your questions, feedback, or suggestions, and we'll get back to you as soon as possible!</p>
      </div>

      {/* Right side - Form Section */}
      <div className="md:w-1/2 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
              <input 
                id="name" 
                type="text" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              
                placeholder="Your Message" 
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
};

export default Contact;
