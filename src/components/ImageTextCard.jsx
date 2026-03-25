import React from 'react';

export const ImageTextCard = ({ items }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <div 
          key={index}
          className="group bg-white rounded-2xl overflow-hidden border border-gold-100 hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              alt={item.title} 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
              src={item.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-8">
              {item.badge && (
                <p className="text-gold-400 text-xs tracking-widest uppercase mb-1">{item.badge}</p>
              )}
              <h3 className="font-serif text-2xl text-white font-semibold">{item.title}</h3>
            </div>
          </div>
          <div className="p-8">
            <p className="text-navy-600/70 text-sm leading-relaxed mb-6">{item.desc}</p>
            <a 
              className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold hover:gap-3 transition-all duration-200"
              href={item.clickTo}
            >
              Ver detalles<i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageTextCard;