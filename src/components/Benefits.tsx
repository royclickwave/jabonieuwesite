import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Clock, Award } from 'lucide-react';

const Benefits = () => {
    const items = [
        { title: 'Kwaliteit', icon: <Award size={40} />, desc: 'Kiezen voor JABO is kiezen voor de beste merken en hoogwaardige machines.' },
        { title: 'Service', icon: <Wrench size={40} />, desc: 'Onze eigen werkplaats staat altijd klaar voor onderhoud en reparatie.' },
        { title: 'Vakmanschap', icon: <ShieldCheck size={40} />, desc: 'Wij staan voor onze machines en helpen u altijd uit de brand.' },
        { title: 'Snelheid', icon: <Clock size={40} />, desc: 'Met onze service bent u snel weer aan de slag met uw materieel.' },
    ];

    return (
        <section className="benefits">
            <div className="container">
                <div className="benefits-grid">
                    <div className="benefits-content">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            De kracht van <br />
                            <span className="blue">JABO Tuin & Park</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Wij zijn ervan overtuigd dat onze merken en service bijdragen aan zorgeloos gebruik van uw machines.
                            Je mag je dan ook verzekerd weten van onze kwaliteit en dat we je uit de brand helpen wanneer er problemen zijn.
                        </motion.p>
                        <a href="#" className="btn btn-primary">Ontmoet ons team</a>
                    </div>

                    <div className="benefits-icons">
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                className="benefit-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="benefit-icon">{item.icon}</div>
                                <div className="benefit-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .benefits {
          padding: 8rem 0;
          background-color: var(--bg-light);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }

        .benefits-content h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          color: var(--secondary);
        }

        .benefits-content p {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          color: var(--text-muted);
        }

        .benefits-icons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .benefit-item {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .benefit-icon {
          color: var(--primary);
        }

        .benefit-text h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--secondary);
        }

        .benefit-text p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        @media (max-width: 968px) {
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .benefits-content h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Benefits;
