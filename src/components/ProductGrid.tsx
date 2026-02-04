import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Robotmaaiers', img: 'https://jabotuinenpark.nl/wp-content/uploads/2024/10/transparent-robotmaaiers.png', url: '/robotmaaiers' },
  { name: 'Zitmaaiers', img: 'https://jabotuinenpark.nl/wp-content/uploads/2024/10/transparent-zitmaaier-1024x1024.png', url: '#' },
  { name: 'Frontmaaiers', img: 'https://jabotuinenpark.nl/wp-content/uploads/2024/10/transparent-Frontmaaiers.png', url: '#' },
  { name: 'Bladblazers', img: 'https://jabotuinenpark.nl/wp-content/uploads/2024/10/transparent-bladblazer.png', url: '#' },
  { name: 'Bosmaaiers', img: 'https://jabotuinenpark.nl/wp-content/uploads/2024/10/transparent-Bosmaaiers.png', url: '#' },
  { name: 'Kettingzagen', img: 'https://jabotuinenpark.nl/wp-content/uploads/2024/10/transparent-kettingzagen.png', url: '#' },
];

const ProductGrid = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="section-header">
          <h2>Onze <span className="blue">Categorieën</span></h2>
          <p>Van robotmaaiers tot professionele reinigingsoplossingen.</p>
        </div>

        <div className="product-grid">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-image">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="card-content">
                <h3>{cat.name}</h3>
                <Link to={cat.url} className="card-link">
                  Ontdek meer <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .products {
          background-color: var(--bg-gray);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 3rem;
          color: var(--secondary);
        }

        .blue {
          color: var(--primary);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-bottom: 4px solid transparent;
          transition: var(--transition);
        }

        .product-card:hover {
          border-bottom: 4px solid var(--primary);
        }

        .card-image {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .card-image img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          transition: var(--transition);
        }

        .product-card:hover .card-image img {
          transform: scale(1.05);
        }

        .card-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--secondary);
        }

        .card-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: var(--primary);
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
