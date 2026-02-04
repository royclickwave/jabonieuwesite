import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    Home,
    Briefcase,
    Maximize,
    Map,
    Zap,
    CheckCircle2,
    Mail,
    ArrowRight,
    Settings2,
    Mountain,
    Loader2,
    FileText,
    Calculator,
    ShieldCheck,
    Star
} from 'lucide-react';

// Configuration for the selector logic
const QUESTIONS = [
    {
        id: 'type',
        question: 'Hoe gaat u de machine gebruiken?',
        options: [
            { id: 'particulier', label: 'Particulier', icon: <Home size={24} />, desc: 'Voor mijn eigen tuin' },
            { id: 'zakelijk', label: 'Zakelijk', icon: <Briefcase size={24} />, desc: 'Voor professioneel gebruik' }
        ]
    },
    {
        id: 'size',
        question: 'Hoe groot is het te maaien oppervlak?',
        options: [
            { id: 'small', label: 'Tot 600 m²', icon: <Maximize size={24} />, desc: 'Kleine stadstuin' },
            { id: 'medium', label: '600 - 1500 m²', icon: <Maximize size={24} />, desc: 'Middelgroot gazon' },
            { id: 'large', label: '1500 - 3000 m²', icon: <Maximize size={24} />, desc: 'Groot gazon' },
            { id: 'xl', label: '3000 m²+', icon: <Maximize size={24} />, desc: 'Zeer groot terrein' }
        ]
    },
    {
        id: 'complexity',
        question: 'Hoe complex is uw tuin?',
        options: [
            { id: 'simple', label: 'Eenvoudig', icon: <Map size={24} />, desc: 'Een open vlakte zonder obstakels' },
            { id: 'complex', label: 'Complex', icon: <Settings2 size={24} />, desc: 'Veel perken, bomen en hoeken' },
            { id: 'helling', label: 'Veel hellingen', icon: <Mountain size={24} />, desc: 'Steile taluds en heuvels' }
        ]
    },
    {
        id: 'technology',
        question: 'Welke technologie heeft uw voorkeur?',
        options: [
            { id: 'draad', label: 'Met begrenzingsdraad', icon: <Settings2 size={24} />, desc: 'Betrouwbaar en traditioneel' },
            { id: 'nera', label: 'NERA (Hybride)', icon: <Zap size={24} />, desc: 'Draadloze installatie mogelijk' },
            { id: 'epos', label: 'EPOS (Zonder draad)', icon: <Zap size={24} />, desc: 'Volledig via satelliet (GPS)' }
        ]
    }
];

const PRODUCTS = [
    {
        id: '405x',
        name: 'Husqvarna Automower 405X',
        match: ['particulier', 'small', 'complex'],
        desc: 'Perfect voor kleinere tuinen met complexe vormen.',
        price: '1.899,00',
        image: 'https://jabotuinenpark.nl/wp-content/uploads/2025/07/Bundelactie-405X-Productfoto-768x768-1-300x300.png'
    },
    {
        id: '310e-nera',
        name: 'Automower 310E NERA',
        match: ['particulier', 'medium', 'nera'],
        desc: 'De nieuwste generatie met optionele draadloze installatie.',
        price: '2.499,00',
        image: 'https://jabotuinenpark.nl/wp-content/uploads/2026/01/BL-435655-300x200.png'
    },
    {
        id: '430v-nera',
        name: 'Automower 430V NERA',
        match: ['particulier', 'large', 'complex', 'nera'],
        desc: 'Krachtige machine voor grote, complexe gazons.',
        price: '4.299,00',
        image: 'https://jabotuinenpark.nl/wp-content/uploads/2025/11/Husqvarna-430V-bundel-300x300.png'
    },
    {
        id: '520-epos',
        name: 'Automower 520 EPOS®',
        match: ['zakelijk', 'large', 'epos'],
        desc: 'Professionele prestaties zonder fysieke draden.',
        price: '4.099,00',
        image: 'https://jabotuinenpark.nl/wp-content/uploads/2026/01/KK-858809-300x200.png'
    },
    {
        id: '435x-awd',
        name: 'Automower 435X AWD',
        match: ['particulier', 'helling'],
        desc: 'Voor de meest extreme hellingen tot 70%.',
        price: '5.999,00',
        image: 'https://jabotuinenpark.nl/wp-content/uploads/2025/02/405xe-nera-300x200.jpg'
    }
];

const Configurator = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isCalculating, setIsCalculating] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAnswer = (questionId: string, optionId: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionId }));
        if (step < QUESTIONS.length - 1) {
            setTimeout(() => setStep(step + 1), 300);
        } else {
            // Last step finished, start calculation animation
            setIsCalculating(true);
            setTimeout(() => {
                setIsCalculating(false);
                setShowLeadForm(true);
            }, 2500);
        }
    };

    const getResults = () => {
        return [...PRODUCTS].sort((a, b) => {
            const aMatches = a.match.filter(m => Object.values(answers).includes(m)).length;
            const bMatches = b.match.filter(m => Object.values(answers).includes(m)).length;
            return bMatches - aMatches;
        }).slice(0, 3);
    };

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call to send results
        setTimeout(() => {
            setIsSubmitting(false);
            setShowResults(true);
            setShowLeadForm(false);
        }, 1500);
    };

    const currentQuestion = QUESTIONS[step];
    const progress = (step / QUESTIONS.length) * 100;

    return (
        <div className="configurator-page">
            <section className="config-header">
                <div className="container">
                    <div className="header-content">
                        <span className="badge">Persoonlijke Keuzehulp</span>
                        <h1>De eerste stap naar <span className="text-teal">een perfect gazon</span></h1>

                        {!showLeadForm && !showResults && !isCalculating && (
                            <div className="progress-container">
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                    />
                                </div>
                                <span className="progress-text">Analyse voortgang: {Math.round(progress)}%</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="config-body">
                <div className="container">
                    <AnimatePresence mode="wait">
                        {/* 1. Question Steps */}
                        {!isCalculating && !showLeadForm && !showResults && (
                            <motion.div
                                key={step}
                                className="question-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <h2 className="question-title">{currentQuestion.question}</h2>
                                <div className="options-grid">
                                    {currentQuestion.options.map((option) => (
                                        <button
                                            key={option.id}
                                            className={`option-btn ${answers[currentQuestion.id] === option.id ? 'active' : ''}`}
                                            onClick={() => handleAnswer(currentQuestion.id, option.id)}
                                        >
                                            <div className="option-icon">{option.icon}</div>
                                            <div className="option-text">
                                                <span className="option-label">{option.label}</span>
                                                <span className="option-desc">{option.desc}</span>
                                            </div>
                                            <div className="option-check">
                                                <CheckCircle2 size={20} />
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="nav-btns">
                                    {step > 0 && (
                                        <button className="btn-back" onClick={() => setStep(step - 1)}>
                                            <ChevronLeft size={18} /> Vorige stap
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* 2. Calculating State */}
                        {isCalculating && (
                            <motion.div
                                className="calculating-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="loader-wrapper">
                                    <Loader2 className="animate-spin text-teal" size={60} />
                                </div>
                                <h2>Tuinprofiel analyseren...</h2>
                                <p>We vergelijken uw antwoorden met onze database van 20+ robotmaaiers voor de beste match.</p>
                                <div className="mini-steps">
                                    <div className="mini-step active"><CheckCircle2 size={16} /> Oppervlakte berekenen</div>
                                    <div className="mini-step active"><CheckCircle2 size={16} /> Complexiteit inschatten</div>
                                    <div className="mini-step"><Loader2 size={16} className="animate-spin" /> Beste machine selecteren</div>
                                </div>
                            </motion.div>
                        )}

                        {/* 3. Lead Magnet Form (Crucial Step) */}
                        {showLeadForm && (
                            <motion.div
                                className="lead-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <div className="lead-header">
                                    <div className="magnet-badge">Resultaten gereed!</div>
                                    <h2>Waar mogen we uw <span className="text-teal">persoonlijke analyse</span> naartoe sturen?</h2>
                                    <p>We hebben de ideale setting voor uw tuin gevonden. Ontvang direct:</p>
                                    <div className="magnet-benefits">
                                        <div className="benefit">
                                            <ShieldCheck size={20} className="text-teal" />
                                            <span>Top 3 aanbevolen machines voor uw tuin</span>
                                        </div>
                                        <div className="benefit">
                                            <Calculator size={20} className="text-teal" />
                                            <span>Indicatie voor installatiekosten</span>
                                        </div>
                                        <div className="benefit">
                                            <FileText size={20} className="text-teal" />
                                            <span>Exclusieve onderhoudstips voor Husqvarna</span>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleLeadSubmit} className="lead-form">
                                    <div className="form-grid">
                                        <div className="input-wrap">
                                            <label>Voornaam</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Bijv. Jan"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-wrap">
                                            <label>E-mailadres</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="uw@email.nl"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-xl" disabled={isSubmitting}>
                                        {isSubmitting ? 'Bezig met genereren...' : 'Bekijk mijn resultaten'}
                                        <ArrowRight size={20} />
                                    </button>
                                    <p className="form-note">Privacy: Wij gebruiken uw gegevens enkel voor dit advies.</p>
                                </form>
                            </motion.div>
                        )}

                        {/* 4. Results Screen */}
                        {showResults && (
                            <motion.div
                                className="results-container"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="results-hero">
                                    <div className="success-badge"><Star size={16} fill="currentColor" /> Uitstekende match gevonden</div>
                                    <h2>Gefeliciteerd {name}, dit zijn uw <span className="text-teal">optimale keuzes</span></h2>
                                    <p>Op basis van uw antwoorden raden wij deze Husqvarna Automowers aan.</p>
                                </div>

                                <div className="results-grid">
                                    {getResults().map((product, idx) => (
                                        <motion.div
                                            key={product.id}
                                            className="result-card"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.2 }}
                                        >
                                            {idx === 0 && <span className="best-choice">Beste Keuze</span>}
                                            <div className="rank">#{idx + 1}</div>
                                            <div className="result-img">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                            <div className="result-content">
                                                <h3>{product.name}</h3>
                                                <p>{product.desc}</p>
                                                <div className="price">Vanaf € {product.price}</div>
                                                <a href="/robotmaaiers" className="btn btn-outline btn-full">Specs & Offerte</a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="results-footer">
                                    <div className="footer-box">
                                        <h3>Wat nu?</h3>
                                        <p>Een kopie van dit rapport inclusief technische fiches is verstuurd naar <strong>{email}</strong>.</p>
                                        <div className="footer-actions">
                                            <button onClick={() => window.location.reload()} className="btn btn-secondary">Opnieuw berekenen</button>
                                            <a href="tel:+31342745240" className="btn btn-primary">Bel voor advies</a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <style>{`
                .configurator-page {
                    min-height: 100vh;
                    background-color: #f9fafb;
                    padding-bottom: 100px;
                }

                .config-header {
                    padding: 160px 0 60px;
                    background-color: var(--secondary);
                    color: white;
                    text-align: center;
                }

                .header-content h1 {
                    font-size: 3.5rem;
                    margin: 1rem 0 2rem;
                    font-weight: 900;
                }

                .badge {
                    background: var(--teal);
                    padding: 8px 16px;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .progress-container {
                    max-width: 400px;
                    margin: 0 auto;
                }

                .progress-bar {
                    height: 6px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 1rem;
                }

                .progress-fill {
                    height: 100%;
                    background: var(--teal);
                }

                .progress-text {
                    font-size: 0.85rem;
                    opacity: 0.7;
                    font-weight: 500;
                }

                .config-body {
                    margin-top: -60px;
                    padding: 0 20px;
                }

                .question-card, .calculating-card, .lead-card {
                    background: white;
                    border-radius: 24px;
                    padding: 4rem;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                    max-width: 800px;
                    margin: 0 auto;
                }

                .question-title {
                    font-size: 2.2rem;
                    margin-bottom: 3rem;
                    text-align: center;
                    color: var(--secondary);
                    font-weight: 800;
                }

                .options-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .option-btn {
                    display: flex;
                    align-items: center;
                    padding: 1.5rem;
                    border: 2px solid #f0f0f0;
                    border-radius: 16px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: white;
                    cursor: pointer;
                    text-align: left;
                }

                .option-btn:hover {
                    border-color: var(--teal);
                    background: #f0fdfa;
                    transform: translateY(-4px);
                }

                .option-btn.active {
                    border-color: var(--teal);
                    background: #f0fdfa;
                    box-shadow: 0 10px 20px rgba(0, 120, 142, 0.1);
                }

                .option-icon {
                    width: 56px;
                    height: 56px;
                    background: #f9fafb;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 1.5rem;
                    color: var(--secondary);
                }

                .option-btn.active .option-icon {
                    background: var(--teal);
                    color: white;
                }

                .option-label {
                    display: block;
                    font-weight: 800;
                    font-size: 1.15rem;
                    color: var(--secondary);
                }

                .option-desc {
                    font-size: 0.9rem;
                    color: #6b7280;
                }

                .option-check {
                    margin-left: auto;
                    opacity: 0;
                    color: var(--teal);
                    transition: opacity 0.3s;
                }

                .option-btn.active .option-check {
                    opacity: 1;
                }

                /* Lead Card Styling */
                .lead-card {
                    text-align: center;
                }

                .magnet-badge {
                    display: inline-block;
                    background: #dcfce7;
                    color: #166534;
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-weight: 800;
                    font-size: 0.8rem;
                    margin-bottom: 1.5rem;
                }

                .lead-header h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 900;
                    line-height: 1.2;
                }

                .magnet-benefits {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    margin: 2rem 0 3rem;
                }

                .benefit {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-weight: 600;
                    color: var(--secondary);
                }

                .lead-form {
                    background: #f9fafb;
                    padding: 2.5rem;
                    border-radius: 20px;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .input-wrap {
                    text-align: left;
                }

                .input-wrap label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 700;
                    font-size: 0.9rem;
                    color: var(--secondary);
                }

                .input-wrap input {
                    width: 100%;
                    padding: 14px 20px;
                    border: 1px solid #e5e7eb;
                    border-radius: 10px;
                    font-size: 1rem;
                    outline: none;
                }

                .input-wrap input:focus {
                    border-color: var(--teal);
                    box-shadow: 0 0 0 4px rgba(0, 120, 142, 0.1);
                }

                .btn-xl {
                    width: 100%;
                    padding: 18px !important;
                    font-size: 1.1rem !important;
                    justify-content: center;
                    gap: 1rem;
                }

                .form-note {
                    margin-top: 1.5rem;
                    font-size: 0.8rem;
                    color: #9ca3af;
                }

                /* Calculating Card */
                .calculating-card {
                    text-align: center;
                }

                .loader-wrapper {
                    margin-bottom: 2rem;
                    display: flex;
                    justify-content: center;
                }

                .animate-spin {
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .mini-steps {
                    margin-top: 3rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                }

                .mini-step {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.95rem;
                    color: #9ca3af;
                }

                .mini-step.active {
                    color: var(--secondary);
                    font-weight: 600;
                }

                /* Results Styling */
                .results-container {
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .results-hero {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .success-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #fff;
                    color: #fbbf24;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-weight: 800;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                }

                .results-hero h2 {
                    font-size: 3rem;
                    font-weight: 900;
                    margin-bottom: 1rem;
                }

                .results-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    margin-bottom: 5rem;
                }

                .result-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    position: relative;
                    transition: transform 0.3s;
                }

                .best-choice {
                    position: absolute;
                    top: 1.5rem;
                    right: -35px;
                    background: #fbbf24;
                    color: #78350f;
                    padding: 8px 40px;
                    font-weight: 900;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    transform: rotate(45deg);
                    z-index: 10;
                }

                .result-img {
                    height: 220px;
                    padding: 2rem;
                    background: #f9fafb;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .result-img img {
                    max-height: 100%;
                    max-width: 100%;
                    object-fit: contain;
                }

                .result-content {
                    padding: 2.5rem;
                }

                .result-content h3 {
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                    font-weight: 800;
                    color: var(--secondary);
                }

                .result-content p {
                    font-size: 0.95rem;
                    color: #6b7280;
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }

                .btn-full {
                    width: 100%;
                    text-align: center;
                }

                .results-footer {
                    background: var(--secondary);
                    color: white;
                    border-radius: 24px;
                    padding: 4rem;
                    text-align: center;
                }

                .footer-box h3 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                }

                .footer-actions {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-top: 2.5rem;
                }

                .nav-btns {
                    margin-top: 3rem;
                }

                .btn-back {
                    background: none;
                    border: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 600;
                    color: #9ca3af;
                    cursor: pointer;
                    padding: 0;
                }

                @media (max-width: 1024px) {
                    .results-grid {
                        grid-template-columns: 1fr;
                        max-width: 500px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .config-header h1 {
                        font-size: 2.2rem;
                    }
                    .options-grid {
                        grid-template-columns: 1fr;
                    }
                    .question-card, .lead-card {
                        padding: 2rem;
                    }
                    .lead-header h2 {
                        font-size: 1.8rem;
                    }
                    .header-content h1 {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Configurator;
