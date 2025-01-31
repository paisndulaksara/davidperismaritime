import {
  // FaFacebookF,
  // FaLinkedinIn,
  // FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { fetchGeneralData } from "../../api/generalData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [generalData, setGenaralData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const data = await fetchGeneralData();
        setGenaralData(data.data); // Assuming the data is inside the "data" key
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch home page data");
        setLoading(false);
      }
    };

    getHomeData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="xl:container mx-auto px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 mb-4 sm:mb-0 w-full sm:w-auto">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <FaMapMarkerAlt size={20} />
            <span>{generalData.address}</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <FaEnvelope size={20} />
            <span>
              <a href={`mailto:${generalData.email}`}>
                {generalData.email}
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone size={20} />
            <span>
              <a href={`tel:${generalData.number}`}>
                {generalData.number}
              </a>
            </span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 sm:mt-0 w-full sm:w-auto">
          {/* <a
             href={generalData.fb_link}
            className="hover:text-blue-500 border-2 border-primary rounded-full p-2"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href={generalData.linked_in_link}
            className="hover:text-blue-500 border-2 border-primary rounded-full p-2"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href={generalData.youtube_link}
            className="hover:text-blue-500 border-2 border-primary rounded-full p-2"
          >
            <FaYoutube size={20} />
          </a> */}
            <Link to="/privacy-policy" className="hover:text-blueDark">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
