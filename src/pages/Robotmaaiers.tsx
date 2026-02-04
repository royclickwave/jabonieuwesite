import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Husqvarna Automower 320 NERA',
    price: '3.299,00',
    image: 'https://jabotuinenpark.nl/wp-content/uploads/2026/01/QO-580996-300x200.png',
    tag: 'NERA'
  },
  {
    id: 2,
    name: 'Husqvarna Automower 310E NERA',
    price: '2.499,00',
    image: 'https://jabotuinenpark.nl/wp-content/uploads/2026/01/BL-435655-300x200.png',
    tag: 'NERA'
  },
  {
    id: 3,
    name: 'Husqvarna Automower 305E NERA',
    price: '2.199,00',
    image: 'https://jabotuinenpark.nl/wp-content/uploads/2026/01/JX-806065-300x200.png',
    tag: 'NERA'
  },
  {
    id: 4,
    name: 'Husqvarna Automower 520 EPOS®',
    price: '4.099,00',
    image: 'https://jabotuinenpark.nl/wp-content/uploads/2026/01/KK-858809-300x200.png',
    tag: 'PROFESSIONAL'
  },
  {
    id: 5,
    name: 'Husqvarna Automower Aspire™ R4',
    price: '649,00',
    image: 'https://jabotuinenpark.nl/wp-content/uploads/2026/01/KV-306675-300x200.png',
    tag: 'ASPIRE'
  },
  {
    id: 6,
    name: 'Husqvarna Automower 405X + 110 iL actie',
    price: '1.899,00',
    image: 'https://jabotuinenpark.nl/wp-content/uploads/2025/07/Bundelactie-405X-Productfoto-768x768-1-300x300.png',
    tag: 'BUNDEL ACTIE'
  }
];

const Robotmaaiers = () => {
  return (
    <main className="page-robotmaaiers">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="subtitle">Husqvarna Automower Specialisten</span>
            <h1>Robotmaaiers</h1>
            <p>
              Voor een perfect gemaaid gazon zonder zelf te maaien.
              Als officieel Husqvarna dealer bieden wij het volledige assortiment Automowers voor elke tuin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-text">
        <div className="container">
          <div className="intro-grid">
            <div className="text-box">
              <h2>Welke robotmaaier moet ik kopen?</h2>
              <p>
                Twijfel je welke Husqvarna robotmaaier het beste bij jouw gazon past?
                Onze adviseurs helpen u graag bij het maken van de juiste keuze.
                Een perfect strak gazon, zonder gedoe. Husqvarna is al jaren marktleider op het gebied van
                geavanceerde robotmaaiers en biedt slimme, betrouwbare oplossingen voor elk type tuin.
              </p>
              <div className="usp-list">
                <div className="usp-item">
                  <CheckCircle2 className="teal" size={20} />
                  <span>Installatie service aan huis</span>
                </div>
                <div className="usp-item">
                  <CheckCircle2 className="teal" size={20} />
                  <span>Officiële Husqvarna dealer</span>
                </div>
                <div className="usp-item">
                  <CheckCircle2 className="teal" size={20} />
                  <span>Eigen werkplaats voor onderhoud</span>
                </div>
              </div>
            </div>
            <div className="cta-box">
              <div className="cta-inner">
                <div className="magnet-badge">Gratis Advies</div>
                <h3>Keuzehulp nodig?</h3>
                <p>Ontvang binnen 2 minuten een persoonlijk adviesrapport voor uw tuin.</p>
                <Link to="/configurator" className="btn btn-primary btn-full">Start Keuzehulp</Link>
                <div className="cta-benefits">
                  <div className="cta-benefit"><CheckCircle2 size={14} /> Top 3 matches</div>
                  <div className="cta-benefit"><CheckCircle2 size={14} /> Installatie indicatie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="robotmaaiers-grid">
        <div className="container">
          <div className="grid-header">
            <h2>Bekijk ons assortiment</h2>
          </div>
          <div className="products">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                whileHover={{ y: -10 }}
              >
                {product.tag && <span className="product-tag">{product.tag}</span>}
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">€ {product.price}</p>
                  <a href="#" className="btn btn-outline">Bekijk details</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why JABO section for robots */}
      <section className="robot-service">
        <div className="container">
          <div className="service-grid">
            <div className="service-item">
              <Shield size={40} className="teal" />
              <h3>Garantie & Service</h3>
              <p>Wij verzorgen niet alleen de verkoop, maar ook de volledige garantie en nazorg van uw machine.</p>
            </div>
            <div className="service-item">
              <Clock size={40} className="teal" />
              <h3>Winteronderhoud</h3>
              <p>Gun uw robotmaaier een winterslaap in ons robot-hotel inclusief onderhoudsbeurt.</p>
            </div>
            <div className="service-item">
              <MapPin size={40} className="teal" />
              <h3>Lokaal in Barneveld</h3>
              <p>Kom langs in onze showroom voor een demonstratie en eerlijk advies op maat.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background-color: var(--secondary);
          padding: 180px 0 100px;
          color: white;
          text-align: center;
        }

        .page-hero-content h1 {
          font-size: 4rem;
          margin: 1rem 0 2rem;
        }

        .subtitle {
          color: var(--teal);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .page-hero-content p {
          max-width: 700px;
          margin: 0 auto;
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .intro-text {
          padding: 8rem 0;
          background: white;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 5rem;
          align-items: center;
        }

        .text-box h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--secondary);
        }

        .usp-list {
          margin-top: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .usp-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 500;
        }

        .cta-box {
          background-color: #f9fafb;
          padding: 3rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .magnet-badge {
          display: inline-block;
          background: var(--teal);
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-weight: 800;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .cta-inner h3 {
          margin-bottom: 1rem;
          color: var(--secondary);
          font-size: 1.8rem;
          font-weight: 800;
        }

        .cta-inner p {
          margin-bottom: 2rem;
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .cta-benefits {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .cta-benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--secondary);
        }

        .btn-full {
          width: 100%;
          display: block;
          text-align: center;
        }

        .robotmaaiers-grid {
          padding: 6rem 0;
          background-color: var(--bg-gray);
        }

        .grid-header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .product-card {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }

        .product-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--teal);
          color: white;
          padding: 4px 12px;
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: 4px;
        }

        .product-image {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .product-image img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }

        .product-info h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--secondary);
          min-height: 2.5rem;
        }

        .price {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--secondary);
          margin-bottom: 2rem;
        }

        .btn-outline {
          border: 1px solid var(--secondary);
          color: var(--secondary);
          width: 100%;
          text-align: center;
        }

        .btn-outline:hover {
          background: var(--secondary);
          color: white;
        }

        .robot-service {
          padding: 8rem 0;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          text-align: center;
        }

        .service-item h3 {
          margin: 1.5rem 0 1rem;
          font-size: 1.2rem;
        }

        .service-item p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .teal {
          color: var(--teal);
        }

        @media (max-width: 968px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .service-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .page-hero-content h1 {
            font-size: 3rem;
          }
        }
      `}</style>
    </main>
  );
};

export default Robotmaaiers;
