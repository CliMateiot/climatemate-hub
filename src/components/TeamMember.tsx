
import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imageUrl,
  socialLinks = {}
}) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-md hover-scale">
      <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-primary/20">
        <img 
          src={imageUrl} 
          alt={`${name}, ${role}`} 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm font-medium text-primary">{role}</p>
        <p className="text-sm text-gray-600 text-balance">{bio}</p>
      </div>
      
      {(socialLinks.linkedin || socialLinks.twitter || socialLinks.website) && (
        <div className="flex space-x-4 pt-2">
          {socialLinks.linkedin && (
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin size={20} />
            </a>
          )}
          
          {socialLinks.twitter && (
            <a 
              href={socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label={`${name}'s Twitter profile`}
            >
              <Twitter size={20} />
            </a>
          )}
          
          {socialLinks.website && (
            <a 
              href={socialLinks.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label={`${name}'s website`}
            >
              <Globe size={20} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamMember;
