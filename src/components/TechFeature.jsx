import React from 'react';

export const TechFeature = ({ title, subtitle, icon, description, tags, image, reverse = false }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
      <div className={`relative rounded-2xl overflow-hidden h-72 ${reverse ? 'lg:col-start-2' : ''}`}>
        <img 
          alt={title} 
          className="w-full h-full object-cover object-top" 
          src={image}
        />
      </div>
      <div className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy-800 mb-5">
          <i className={`${icon} text-2xl text-gold-400`}></i>
        </div>
        {subtitle && (
          <p className="text-gold-600 text-xs tracking-widest uppercase mb-2">{subtitle}</p>
        )}
        <h3 className="font-serif text-3xl text-navy-800 font-semibold mb-4">{title}</h3>
        <p className="text-navy-600/70 text-base leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1.5 bg-navy-50 text-navy-700 text-xs font-medium rounded-lg border border-navy-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechFeature;