import React, { useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import { fetchAboutPageData } from "../../../api/about"; // Assuming this is your API call function

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

const TeamSlide: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]); // State for team members
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAboutPageData();
        if (response?.data?.teams) {
          // Map API response to your team member structure
          const fetchedMembers = response.data.teams.map((team: any) => ({
            id: team.id,
            name: team.full_name,
            position: team.position,
            image: team.image, // Use the image name from the API
          }));
          setTeamMembers(fetchedMembers);
        } else {
          setError('Failed to load team data');
        }
      } catch (error) {
        setError('Failed to fetch team data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // 4 members per view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Large tablets & small laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mx-auto overflow-hidden">
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="text-center p-4">
            <img
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}${member.image}`} // Assuming the image URL prefix
              alt={member.name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-abril text-darkBlue">{member.name}</h3>
            <p className="text-lg font-abril text-darkBlue">{member.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlide;
