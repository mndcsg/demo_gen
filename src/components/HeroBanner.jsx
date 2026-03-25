import React from 'react';

export const HeroBanner = ({ title, subtitle, ctaPrimary, ctaSecondary, backgroundImage }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          alt="hero background" 
          className="w-full h-full object-cover object-top" 
          src={backgroundImage || "https://via.placeholder.com/1920x1080/1B3A57/FFFFFF?text=Financial+Hero"}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/80 to-navy-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-navy-900/70"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 border border-gold-500/40 rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></div>
            <span className="text-gold-300 text-xs font-medium tracking-widest uppercase">Operación Cumplida · Confiable</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            {ctaPrimary && (
              <a 
                className="flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 rounded-lg font-semibold hover:bg-gold-400 transition-all duration-300"
                href={ctaPrimary.link}
              >
                {ctaPrimary.text}<i className="ri-arrow-right-line"></i>
              </a>
            )}
            {ctaSecondary && (
              <a 
                className="flex items-center gap-2 px-8 py-4 border border-white/40 text-white rounded-lg font-medium hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
                href={ctaSecondary.link}
              >
                {ctaSecondary.text}
              </a>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12">
            {[
              { value: '18', unit: 'años', label: 'Experiencia en la Industria' },
              { value: '114', unit: 'mil+', label: 'Clientes Atendidos' },
              { value: '475', unit: 'millones+', label: 'Préstamos Otorgados' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-end gap-1">
                  <span className="font-serif text-4xl text-gold-400 font-bold">{stat.value}</span>
                  <span className="text-gold-300 text-lg mb-1">{stat.unit}</span>
                </div>
                <p className="text-white/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Desplázate hacia abajo</span>
        <i className="ri-arrow-down-line text-sm"></i>
      </div>
    </section>
  );
};

export default HeroBanner;