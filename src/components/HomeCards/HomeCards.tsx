 // src/components/HomeCards/HomeCard.tsx
 

interface CardProps {
  image: string;
  title: string;
  text: string;
}

const HomeCard: React.FC<CardProps> = ({ image, title, text }) => {
  return (
    <div className=" flex rounded-lg overflow-hidden shadow-lg mb-8 bg-white">
      <div className="flex-shrink-0 w-1/4 bg-blueLight">
        <img src={image} alt={title} className="w-full h-full object-cover p-2" />
      </div>
      <div className="w-3/4 bg-blueDark p-6 flex flex-col justify-center">
        <h1 className="text-white text-2xl font-bold font-poppins mb-2">{title}</h1>
        <p className="text-white font-poppins">{text}</p>
      </div>
    </div>
  );
};

export default HomeCard;
