import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    CheckCircle2,
    ArrowRight,
    Zap,
    ShieldCheck,
    Smartphone,
    Satellite,
    MapPin,
    Calendar,
    Star
} from 'lucide-react';

const WirelessLanding = () => {
    return (
        <main className="wireless-landing">
            {/* 1. Hero Section - Conversion Focused */}
            <section className="hero-ads">
                <div className="container">
                    <div className="hero-grid">
                        <motion.div
                            className="hero-text"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="ads-badge">
                                <Zap size={16} fill="currentColor" />
                                Nieuwste Technologie 2026
                            </div>
                            <h1>Eindelijk een <span className="text-teal">robotmaaier zonder snoer</span></h1>
                            <p className="hero-p">
                                Geen begrenzingsdraad meer ingraven. Geen draadbreuken bij het kantensteken.
                                Ontdek de Husqvarna EPOS™ technologie: volledige vrijheid dankzij uiterst precieze satellietnavigatie.
                            </p>
                            <div className="hero-btns">
                                <Link to="/configurator" className="btn btn-primary btn-lg">
                                    Vind mijn draadloze maaier <ArrowRight size={20} />
                                </Link>
                                <div className="trust-mini">
                                    <div className="stars">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" stroke="none" />)}
                                    </div>
                                    <span>Bekend als Husqvarna Specialist</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="image-stack">
                                <img src="/wireless_robot_mower_hero_1770385010434.png" alt="Draadloze robotmaaier Husqvarna" className="main-img" />
                                <div className="floating-card top">
                                    <Satellite className="text-teal" size={24} />
                                    <div>
                                        <strong>EPOS™ Navigatie</strong>
                                        <span>2-3 cm nauwkeurigheid</span>
                                    </div>
                                </div>
                                <div className="floating-card bottom">
                                    <CheckCircle2 className="text-teal" size={24} />
                                    <div>
                                        <strong>Geen begrenzingsdraad</strong>
                                        <span>100% virtuele grenzen</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Problem/Solution Section */}
            <section className="benefits-grid-ads">
                <div className="container">
                    <div className="section-header">
                        <h2>Waarom kiezen voor <span className="text-teal">maaien zonder draad?</span></h2>
                        <p>De traditionele begrenzingsdraad is verleden tijd. Stap over op de toekomst van gazononderhoud.</p>
                    </div>

                    <div className="grid">
                        <div className="benefit-card-premium">
                            <div className="icon-box"><ShieldCheck size={32} /></div>
                            <h3>Nooit meer draadbreuken</h3>
                            <p>U kent het wel: per ongeluk de draad doorgestoken tijdens het verticuteren. Met EPOS™ is dit verleden tijd.</p>
                        </div>
                        <div className="benefit-card-premium">
                            <div className="icon-box"><Smartphone size={32} /></div>
                            <h3>Volledige app-controle</h3>
                            <p>Pas uw maaizones direct aan in de Automower® Connect-app. Tijdelijke stay-out zones zijn met één klik ingesteld.</p>
                        </div>
                        <div className="benefit-card-premium">
                            <div className="icon-box"><Calendar size={32} /></div>
                            <h3>Flexibele toekomst</h3>
                            <p>Past u de tuin aan? Nieuw bloemperk? Verander de virtuele grenzen in seconden zonder te graven.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Product Spotlight */}
            <section className="product-spotlight">
                <div className="container">
                    <div className="spotlight-card">
                        <div className="spotlight-text">
                            <span className="label">Meest gekozen voor Ads</span>
                            <h3>Husqvarna Automower 430X NERA</h3>
                            <p>De allrounder voor middelgrote tot grote tuinen. Uitgerust met de EPOS™ plug-in kit voor volledig draadloze werking.</p>
                            <ul className="spotlight-list">
                                <li><CheckCircle2 size={18} /> Geschikt tot 3200 m²</li>
                                <li><CheckCircle2 size={18} /> Hellingspercentage tot 50%</li>
                                <li><CheckCircle2 size={18} /> Intelligente objectvermijding</li>
                            </ul>
                            <Link to="/robotmaaiers" className="btn btn-outline">Bekijk alle NERA modellen</Link>
                        </div>
                        <div className="spotlight-img">
                            <img src="https://jabotuinenpark.nl/wp-content/uploads/2025/11/Husqvarna-430V-bundel-300x300.png" alt="Husqvarna 430X NERA" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Social Proof / Process */}
            <section className="process-ads">
                <div className="container">
                    <div className="process-bg">
                        <div className="process-header">
                            <h2>In 3 stappen naar een <span className="text-teal">draadloos gazon</span></h2>
                        </div>
                        <div className="steps-container">
                            <div className="step">
                                <div className="step-num">01</div>
                                <h4>Gratis Tuincheck</h4>
                                <p>Onze experts beoordelen of uw tuin geschikt is voor satellietnavigatie.</p>
                            </div>
                            <div className="step">
                                <div className="step-num">02</div>
                                <h4>Vakkundige Installatie</h4>
                                <p>Wij plaatsen de referentiestation en stellen de virtuele grenzen voor u in.</p>
                            </div>
                            <div className="step">
                                <div className="step-num">03</div>
                                <h4>100% Genieten</h4>
                                <p>Uw maaier doet zijn werk, zonder dat u ooit nog naar een draad hoeft om te kijken.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="final-cta">
                <div className="container">
                    <div className="cta-box-premium">
                        <h2>Klaar voor de draadloze revolutie?</h2>
                        <p>Vul onze keuzehulp in en ontvang direct een advies op maat voor uw tuin.</p>
                        <Link to="/configurator" className="btn btn-primary btn-xl">
                            Start de Keuzehulp <ArrowRight size={20} />
                        </Link>
                        <p className="trust-text">Al meer dan 500+ installaties in de regio.</p>
                    </div>
                </div>
            </section>

            <style>{`
                .wireless-landing {
                    padding-bottom: 0;
                }

                .hero-ads {
                    padding: 180px 0 100px;
                    background: var(--secondary);
                    color: white;
                    overflow: hidden;
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 4rem;
                    align-items: center;
                }

                .ads-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.1);
                    padding: 8px 16px;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--teal);
                    margin-bottom: 2rem;
                }

                .hero-text h1 {
                    font-size: 4.5rem;
                    line-height: 1.1;
                    font-weight: 900;
                    margin-bottom: 2rem;
                }

                .hero-p {
                    font-size: 1.3rem;
                    opacity: 0.9;
                    margin-bottom: 3rem;
                    line-height: 1.6;
                }

                .trust-mini {
                    margin-top: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 0.9rem;
                    opacity: 0.7;
                }

                .hero-visual {
                    position: relative;
                }

                .image-stack {
                    position: relative;
                }

                .main-img {
                    width: 100%;
                    border-radius: 30px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                }

                .floating-card {
                    position: absolute;
                    background: white;
                    padding: 1.25rem;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    color: var(--secondary);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
                    z-index: 10;
                }

                .floating-card.top {
                    top: -20px;
                    right: -20px;
                }

                .floating-card.bottom {
                    bottom: 40px;
                    left: -30px;
                }

                .floating-card strong {
                    display: block;
                    font-size: 1rem;
                    font-weight: 800;
                }

                .floating-card span {
                    font-size: 0.8rem;
                    opacity: 0.7;
                }

                /* Benefits */
                .benefits-grid-ads {
                    padding: 100px 0;
                    background: #f9fafb;
                }

                .section-header {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 5rem;
                }

                .section-header h2 {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2.5rem;
                }

                .benefit-card-premium {
                    background: white;
                    padding: 3rem;
                    border-radius: 24px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    text-align: center;
                    transition: transform 0.3s;
                }

                .benefit-card-premium:hover {
                    transform: translateY(-10px);
                }

                .icon-box {
                    width: 70px;
                    height: 70px;
                    background: #f0fdfa;
                    color: var(--teal);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 2rem;
                }

                .benefit-card-premium h3 {
                    font-size: 1.4rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                }

                .benefit-card-premium p {
                    color: #6b7280;
                    line-height: 1.6;
                }

                /* Spotlight */
                .product-spotlight {
                    padding: 100px 0;
                }

                .spotlight-card {
                    background: var(--secondary);
                    color: white;
                    border-radius: 30px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.1);
                }

                .spotlight-text {
                    padding: 5rem;
                }

                .spotlight-text h3 {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                }

                .label {
                    background: var(--teal);
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 800;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin-bottom: 1.5rem;
                    display: inline-block;
                }

                .spotlight-list {
                    list-style: none;
                    margin: 2rem 0 3rem;
                }

                .spotlight-list li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }

                .spotlight-img {
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem;
                }

                .spotlight-img img {
                    max-width: 100%;
                    height: auto;
                }

                /* Process */
                .process-ads {
                    padding: 100px 0;
                }

                .process-bg {
                    background: #f3f4f6;
                    padding: 5rem;
                    border-radius: 40px;
                }

                .process-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .process-header h2 {
                    font-size: 2.5rem;
                    font-weight: 900;
                }

                .steps-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 4rem;
                }

                .step {
                    position: relative;
                }

                .step-num {
                    font-size: 4rem;
                    font-weight: 900;
                    color: white;
                    text-shadow: 0 0 20px rgba(0,0,0,0.05);
                    opacity: 0.8;
                    margin-bottom: 1rem;
                }

                .step h4 {
                    font-size: 1.4rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                }

                /* Final CTA */
                .final-cta {
                    padding: 100px 0;
                    text-align: center;
                }

                .cta-box-premium {
                    background: white;
                    padding: 6rem;
                    border-radius: 40px;
                    box-shadow: 0 30px 80px rgba(0,0,0,0.06);
                    max-width: 900px;
                    margin: 0 auto;
                }

                .cta-box-premium h2 {
                    font-size: 3rem;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                }

                .cta-box-premium p {
                    font-size: 1.25rem;
                    color: #4b5563;
                    margin-bottom: 3rem;
                }

                .trust-text {
                    margin-top: 2rem;
                    font-weight: 700;
                    color: var(--teal) !important;
                }

                @media (max-width: 1024px) {
                    .hero-grid, .grid, .steps-container, .spotlight-card {
                        grid-template-columns: 1fr;
                    }
                    .hero-text h1 {
                        font-size: 3rem;
                    }
                    .spotlight-text {
                        padding: 3rem;
                    }
                    .cta-box-premium {
                        padding: 3rem;
                    }
                }
            `}</style>
        </main>
    );
};

export default WirelessLanding;
