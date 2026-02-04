import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Machines voor <br />
            <span className="text-highlight">de vakman</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Wij geloven dat iedere hardwerkende ondernemer met goede machines zijn beroep nog beter kan uitoefenen.
            Kiezen voor JABO is kiezen voor kwaliteit en service.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/robotmaaiers" className="btn btn-primary">Bekijk assortiment</a>
            <a href="/configurator" className="btn btn-secondary">Robotmaaier Keuzehulp</a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          color: white;
          padding-top: 180px; /* Increased padding for better header spacing */
          overflow: hidden;
        }

        .hero .container {
          width: 100%; /* Ensure container fills the flex parent */
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(90deg, rgba(5, 38, 45, 0.9) 20%, rgba(5, 38, 45, 0.3) 100%), url('https://jabotuinenpark.nl/wp-content/uploads/2025/04/Tekengebied-1-8.png');
          background-size: cover;
          background-position: center;
          z-index: -1;
          transform: scale(1.1);
          animation: zoomOut 30s infinite alternate;
        }

        @keyframes zoomOut {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }

        .hero-content {
          max-width: 800px;
          text-align: left;
        }

        .hero h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1;
          margin-bottom: 2rem;
          text-transform: uppercase;
          font-weight: 900;
        }

        .text-highlight {
          display: block;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.9);
          color: transparent;
        }

        .hero p {
          font-size: 1.3rem; /* Slightly larger for better readability */
          max-width: 650px;
          margin-bottom: 4rem;
          opacity: 0.95;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .btn-secondary {
          background-color: transparent;
          border: 1px solid white;
          color: white;
        }

        .btn-secondary:hover {
          background-color: white;
          color: var(--secondary);
        }

        @media (max-width: 768px) {
          .hero {
            text-align: center;
            padding-top: 120px;
          }
          .hero-bg {
            background-image: linear-gradient(rgba(5, 38, 45, 0.8), rgba(5, 38, 45, 0.8)), url('https://jabotuinenpark.nl/wp-content/uploads/2025/04/Tekengebied-1-8.png');
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero h1 {
            font-size: 3.2rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
