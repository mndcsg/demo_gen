import React from 'react';

export const TeamCard = ({ member }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer border-gold-100 hover:-translate-y-1 hover:border-gold-300">
     
      <div className="p-6">
        <div className="border-b border-gold-100 pb-4 mb-4">
          <h3 className="font-serif text-xl text-navy-800 font-semibold mb-1">{member.name}</h3>
          <p className="text-gold-600 text-sm font-medium">{member.role}</p>
        </div>
        <p className="text-navy-600/70 text-sm leading-relaxed transition-all duration-300 line-clamp-3">
          {member.bio}
        </p>
        {member.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {member.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-navy-50 text-navy-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;