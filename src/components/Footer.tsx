import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="https://jabotuinenpark.nl/wp-content/uploads/2022/11/jabo-logo-kleur-300ppi.webp" alt="JABO" className="footer-logo" />
            <p>De kracht van JABO: Wij geloven dat iedere hardwerkende ondernemer met goede machines zijn beroep nog beter kan uitoefenen.</p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigatie</h4>
            <ul>
              <li><Link to="/">Tuin en Parkmachines</Link></li>
              <li><Link to="/">Reinigingsmachines</Link></li>
              <li><Link to="/robotmaaiers">Robotmaaiers</Link></li>
              <li><Link to="/">Over Ons</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><MapPin size={18} /> Otelaarseweg 1, 3771 VJ Barneveld</li>
              <li><Phone size={18} /> +31(0)342 - 74 52 40</li>
              <li><Mail size={18} /> info@jabotuinenpark.nl</li>
            </ul>
            <div className="opening-hours">
              <p>Ma - Vr: 8:00 - 17:30</p>
              <p>Za: 8:30 - 12:00</p>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Op de hoogte blijven?</h4>
            <p>Blijf op de hoogte van ons aanbod, acties en ander nieuws.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Uw e-mailadres" />
              <button type="submit" className="btn btn-primary">Aanmelden</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Jabo Tuin & Park bv | Privacy Verklaring</p>
          <p>Realistatie door <a href="#">Clickwave</a></p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--secondary);
          color: white;
          padding: 5rem 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          height: 60px;
          filter: brightness(0) invert(1);
          margin-bottom: 1.5rem;
        }

        .footer-brand p {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: white;
          opacity: 0.8;
          transition: var(--transition);
        }

        .social-links a:hover {
          color: var(--primary);
          opacity: 1;
        }

        .footer h4 {
          margin-bottom: 2rem;
          color: white;
          font-size: 1.2rem;
        }

        .footer-links ul li {
          margin-bottom: 1rem;
          opacity: 0.8;
          font-size: 0.95rem;
        }
        
        .footer-links ul li a:hover {
          color: var(--primary);
          opacity: 1;
          padding-left: 5px;
        }

        .footer-contact ul li {
          margin-bottom: 1rem;
          opacity: 0.8;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .newsletter-form input {
          padding: 0.8rem 1rem;
          border-radius: 4px;
          border: none;
          background: rgba(255,255,255,0.1);
          color: white;
          outline: none;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          opacity: 0.6;
        }

        .opening-hours {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
