import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const ResidentCard = ({ resident }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in">
      <div className="flex flex-col items-center">
        <img 
          src={resident.photo || 'https://via.placeholder.com/150'} 
          alt={`${resident.firstName} ${resident.lastName}`}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">
          {resident.firstName} {resident.lastName}
        </h3>
        <p className="text-gray-600 mb-4">{resident.role}</p>
        
        <div className="flex space-x-4">
          {resident.linkedin && (
            <a href={resident.linkedin} target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={24} />
            </a>
          )}
          {resident.twitter && (
            <a href={resident.twitter} target="_blank" rel="noopener noreferrer"
               className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;