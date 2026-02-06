import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, MapPin, Zap, Settings2 } from 'lucide-react';
import { seoPages } from '../data/seoPagesData';

const SEOPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const page = slug ? seoPages[slug] : null;

    if (!page) {
        return (
            <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
                <h1>Pagina niet gevonden</h1>
                <Link to="/" className="btn btn-primary">Terug naar home</Link>
            </div>
        );
    }

    return (
        <main className="seo-page">
            <section className="seo-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="subtitle">{page.subtitle}</span>
                        <h1>{page.h1}</h1>
                        <p className="intro-text">{page.intro}</p>
                    </motion.div>
                </div>
            </section>

            <section className="seo-content-grid">
                <div className="container">
                    <div className="main-content">
                        {page.content.map((section, idx) => (
                            <div key={idx} className="content-section">
                                <h2>{section.title}</h2>
                                <p>{section.text}</p>
                            </div>
                        ))}

                        <div className="usp-box">
                            <h3>{page.uspTitle}</h3>
                            <div className="usp-list">
                                <div className="usp-item"><CheckCircle2 className="teal" /> <span>Officiële Husqvarna Dealer</span></div>
                                <div className="usp-item"><CheckCircle2 className="teal" /> <span>Vakkundige installatie aan huis</span></div>
                                <div className="usp-item"><CheckCircle2 className="teal" /> <span>Eigen werkplaats voor onderhoud</span></div>
                            </div>
                        </div>
                    </div>

                    <aside className="seo-sidebar">
                        <div className="cta-sidebar">
                            <h3>{page.ctaTitle}</h3>
                            <p>Benieuwd welke machine het beste bij u past?</p>
                            <Link to="/configurator" className="btn btn-primary btn-full">
                                Start Keuzehulp <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="service-links">
                            <h4>Andere diensten</h4>
                            <Link to="/robotmaaiers" className="service-link"><Zap size={16} /> Husqvarna Automower</Link>
                            <Link to="/robotmaaiers" className="service-link"><Settings2 size={16} /> Winteronderhoud</Link>
                            <Link to="/robotmaaiers" className="service-link"><MapPin size={16} /> Onze Showroom</Link>
                        </div>
                    </aside>
                </div>
            </section>

            <style>{`
                .seo-page {
                    padding-bottom: 100px;
                }
                .seo-hero {
                    background: var(--secondary);
                    color: white;
                    padding: 180px 0 100px;
                    text-align: center;
                }
                .seo-hero h1 {
                    font-size: 3.5rem;
                    margin: 1.5rem 0;
                    line-height: 1.1;
                }
                .intro-text {
                    font-size: 1.25rem;
                    max-width: 800px;
                    margin: 0 auto;
                    opacity: 0.9;
                }
                .seo-content-grid .container {
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 5rem;
                    padding-top: 6rem;
                }
                .content-section {
                    margin-bottom: 4rem;
                }
                .content-section h2 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    color: var(--secondary);
                }
                .content-section p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #444;
                }
                .usp-box {
                    background: #f9fafb;
                    padding: 3rem;
                    border-radius: 20px;
                    border: 1px solid #e5e7eb;
                }
                .usp-box h3 {
                    margin-bottom: 2rem;
                    font-size: 1.5rem;
                }
                .usp-list {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .usp-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 600;
                }
                .seo-sidebar {
                    position: sticky;
                    top: 120px;
                    height: fit-content;
                }
                .cta-sidebar {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    text-align: center;
                    margin-bottom: 2rem;
                }
                .cta-sidebar h3 {
                    margin-bottom: 1rem;
                }
                .cta-sidebar p {
                    margin-bottom: 2rem;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                }
                .service-links {
                    background: white;
                    padding: 2rem;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .service-links h4 {
                    margin-bottom: 1.5rem;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .service-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 0.75rem 0;
                    color: var(--secondary);
                    font-weight: 600;
                    border-bottom: 1px solid #f0f0f0;
                }
                .service-link:hover {
                    color: var(--teal);
                }
                @media (max-width: 968px) {
                    .seo-content-grid .container {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .seo-hero h1 {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </main>
    );
};

export default SEOPage;
