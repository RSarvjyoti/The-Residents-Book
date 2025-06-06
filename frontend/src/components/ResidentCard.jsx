import React from 'react';
import { FaLinkedin, FaTwitter, FaQuoteLeft } from 'react-icons/fa';

const ResidentCard = ({ resident }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-100 to-transparent rounded-tr-full opacity-50" />
      
      <div className="flex flex-col items-center relative">
        <div className="p-1 rounded-full bg-gradient-to-r mb-6">
          <img 
            src={resident.photo || 'https://via.placeholder.com/150'} 
            alt={`${resident.firstName} ${resident.lastName}`}
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
        </div>

        <FaQuoteLeft className="text-gray-200 mb-4" size={24} />
        
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {resident.firstName} {resident.lastName}
        </h3>
        <p className="text-blue-600 font-medium mb-6 px-4 py-1 bg-blue-50 rounded-full text-sm">
          {resident.role}
        </p>
        
        <div className="flex space-x-6 mt-2">
          {resident.linkedin && (
            <a 
              href={resident.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          )}
          {resident.twitter && (
            <a 
              href={resident.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
            >
              <FaTwitter size={28} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResidentCard;