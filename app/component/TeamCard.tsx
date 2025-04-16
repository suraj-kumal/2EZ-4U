import React from 'react';

interface TeamCardProps {
  image: string;
  Name: string;
  position: string;
  description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, Name, position, description }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-xs mx-auto h-80 flex flex-col transform hover:scale-80 transition-transform duration-200">
      <div className="flex flex-col items-center flex-grow">
        <div className="bg-white rounded-full p-1 mb-3">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src={image} alt={`${Name}'s profile`} className="w-full h-full object-cover" />
          </div>
        </div>
        <h2 className="text-lg font-bold text-center mb-1">{Name}</h2>
        <p className="text-gray-600 text-sm font-bold mb-2">{position}</p>
        <div className="overflow-y-auto flex-grow w-full">
          <p className="text-gray-600 text-sm text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;