import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/fiscalius/logo.png" alt="Fiscalius Logo" style={{ height: '48px', width: 'auto' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>Fiscalius</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#hero" className="hover:text-secondary" style={{ fontWeight: '500' }}>Inicio</a>
          <a href="#services" className="hover:text-secondary" style={{ fontWeight: '500' }}>Servicios</a>
          <a href="#about" className="hover:text-secondary" style={{ fontWeight: '500' }}>Nosotros</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Contacto</a>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-toggle">
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-secondary)', fontWeight: '600' }}>Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Header;
