import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#0F172A', borderTop: '1px solid #1E293B', padding: '3rem 0', color: '#94A3B8' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Fiscalius. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="hover:text-white">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
