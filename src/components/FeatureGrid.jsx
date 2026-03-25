import React from 'react';

export const FeatureGrid = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-navy-800 px-8 py-10 hover:bg-navy-700 transition-colors duration-300"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gold-500/20 mb-5">
            <i className={`${feature.icon} text-2xl text-gold-400`}></i>
          </div>
          <h3 className="text-white font-serif text-lg font-semibold mb-3">{feature.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;