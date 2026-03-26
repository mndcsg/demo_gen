import React, { useState, useEffect } from 'react';

export const Header = ({ currentPage = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', url: '#/', key: 'home' },
    { 
      name: 'Servicios', 
      url: '#/services', 
      key: 'services',
      hasDropdown: true,
      children: [
        { name: 'Visión General de Servicios', url: '#/services', key: 'services-overview' },
        { name: 'Préstamos Personales', url: '#/personal-loan', key: 'personal-loan' },
        { name: 'Préstamos Empresariales', url: '#/business-loan', key: 'business-loan' },
      ]
    },
    { name: 'Tecnología Innovadora', url: '#/technology', key: 'technology' },
    { name: 'Equipo Directivo', url: '#/team', key: 'team' },
    { name: 'Educación Financiera', url: '#/knowledge', key: 'knowledge' },
    { name: 'Responsabilidad Social', url: '#/responsibility', key: 'responsibility' },
  ];

  const isActive = (key) => currentPage === key;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-navy-900 shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#/" className="flex items-center gap-3 shrink-0">
          <img 
            alt="Logo de la Empresa" 
            className="h-20 w-auto object-contain" 
            src="./logo.png" 
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li 
              key={item.key} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setServicesDropdownOpen(true)}
              onMouseLeave={() => item.hasDropdown && setServicesDropdownOpen(false)}
            >
              <a 
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors whitespace-nowrap rounded-md ${
                  isActive(item.key) 
                    ? 'text-gold-400' 
                    : 'text-white/90 hover:text-gold-400'
                }`}
                href={item.url}
              >
                {item.name}
                {item.hasDropdown && <i className="ri-arrow-down-s-line text-xs"></i>}
              </a>
              
              {/* Dropdown Menu */}
              {item.hasDropdown && servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-navy-900 border border-white/10 rounded-lg shadow-xl overflow-hidden">
                  <div className="py-2">
                    {item.children.map((child) => (
                      <a
                        key={child.key}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold-400 hover:bg-white/5 transition-colors"
                        href={child.url}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md transition-colors text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'}`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.key}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 rounded-md text-sm font-medium text-white/80 hover:text-gold-400 hover:bg-white/5 transition-colors"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    >
                      {item.name}
                      <i className={`ri-arrow-down-s-line text-xs transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}></i>
                    </button>
                    {servicesDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.key}
                            className="block px-4 py-2 rounded-md text-sm text-white/60 hover:text-gold-400 hover:bg-white/5 transition-colors"
                            href={child.url}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.key) 
                        ? 'text-gold-400 bg-white/5' 
                        : 'text-white/80 hover:text-gold-400 hover:bg-white/5'
                    }`}
                    href={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
          
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
