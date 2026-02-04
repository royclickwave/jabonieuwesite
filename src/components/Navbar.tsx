import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Tuin en Parkmachines', url: '/' },
    { name: 'Reinigingsmachines', url: '/' },
    { name: 'Robotmaaiers', url: '/robotmaaiers' },
    { name: 'Over Ons', url: '/' },
    { name: 'Shop', url: '/' },
    { name: 'Contact', url: '/' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container">
          <div className="contact-links">
            <a href="tel:+31342745240"><Phone size={14} /> +31(0)342 - 74 52 40</a>
            <a href="mailto:info@jabotuinenpark.nl"><Mail size={14} /> info@jabotuinenpark.nl</a>
          </div>
        </div>
      </div>

      <div className="main-nav">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">
              <img src="https://jabotuinenpark.nl/wp-content/uploads/2022/11/jabo-logo-kleur-300ppi.webp" alt="JABO" />
            </Link>

            <div className="nav-menu desktop-only">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.url} className="nav-link">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="nav-actions">
              <Link to="#" className="cart-icon">
                <ShoppingCart size={24} />
                <span className="cart-count">0</span>
              </Link>
              <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu toggle">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu-container"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-header">
                <img src="https://jabotuinenpark.nl/wp-content/uploads/2022/11/jabo-logo-kleur-300ppi.webp" alt="JABO" className="mobile-logo" />
                <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className="mobile-links">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={link.url}
                      className="mobile-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={18} className="chevron" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mobile-footer">
                <div className="mobile-contact">
                  <a href="tel:+31342745240">
                    <Phone size={18} />
                    <span>Bel ons: +31(0)342 - 74 52 40</span>
                  </a>
                  <a href="mailto:info@jabotuinenpark.nl">
                    <Mail size={18} />
                    <span>info@jabotuinenpark.nl</span>
                  </a>
                </div>
                <Link to="/contact" className="btn btn-primary btn-full" onClick={() => setIsMenuOpen(false)}>
                  Neem contact op
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .top-bar {
          background-color: var(--secondary);
          color: white;
          padding: 0.5rem 0;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .scrolled .top-bar {
          margin-top: -40px;
          opacity: 0;
        }

        .contact-links {
          display: flex;
          gap: 2rem;
        }

        .contact-links a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.9;
          font-weight: 500;
        }

        .main-nav {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 1.25rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }

        .scrolled .main-nav {
          padding: 0.75rem 0;
          background-color: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo img {
          height: 55px;
          transition: all 0.3s ease;
        }

        .scrolled .logo img {
          height: 45px;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 700;
          color: var(--secondary);
          font-family: var(--font-heading);
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: all 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .cart-icon {
          position: relative;
          color: var(--secondary);
          transition: transform 0.2s ease;
        }

        .cart-icon:hover {
          transform: scale(1.1);
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--primary);
          color: white;
          font-size: 0.7rem;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          border: 2px solid white;
        }

        .mobile-toggle {
          display: none;
          color: var(--secondary);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        /* Mobile Menu Styles */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1001;
        }

        .mobile-menu-container {
          position: fixed;
          top: 0;
          right: 0;
          width: 85%;
          max-width: 400px;
          height: 100%;
          background: white;
          z-index: 1002;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .mobile-logo {
          height: 45px;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--secondary);
          cursor: pointer;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
          border-bottom: 1px solid #f0f0f0;
          color: var(--secondary);
          font-weight: 800;
          font-size: 1.1rem;
          font-family: var(--font-heading);
          text-transform: uppercase;
          text-decoration: none;
        }

        .mobile-link .chevron {
          color: #ccc;
          transition: transform 0.2s ease;
        }

        .mobile-link:hover .chevron {
          transform: translateX(5px);
          color: var(--primary);
        }

        .mobile-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-contact a {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-muted);
          font-size: 0.95rem;
          font-weight: 500;
        }

        @media (max-width: 1100px) {
          .nav-menu {
            gap: 1rem;
          }
          .nav-link {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 968px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .top-bar {
            display: none;
          }
          .logo img {
            height: 45px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
