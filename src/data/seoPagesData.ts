export interface SEOContent {
    slug: string;
    title: string;
    subtitle: string;
    h1: string;
    intro: string;
    content: {
        title: string;
        text: string;
    }[];
    uspTitle: string;
    ctaTitle: string;
    metaTitle: string;
    metaDesc: string;
}

export const seoPages: Record<string, SEOContent> = {
    // LOKALE CLUSTERS
    'robotmaaier-barneveld': {
        slug: 'robotmaaier-barneveld',
        title: 'Robotmaaier Barneveld',
        subtitle: 'Uw Husqvarna Specialist in de regio',
        h1: 'Robotmaaier in Barneveld kopen bij JABO',
        intro: 'Woont u in Barneveld en zoekt u een betrouwbare partner voor uw robotmaaier? JABO Tuin & Park is uw lokale specialist voor advies, installatie en onderhoud.',
        content: [
            { title: 'Persoonlijk advies in Barneveld', text: 'Onze showroom aan de rand van Barneveld biedt een compleet overzicht van alle Husqvarna Automowers.' },
            { title: 'Installatie service', text: 'Wij komen bij u langs in Barneveld om de draad of het EPOS systeem vakkundig te installeren.' }
        ],
        uspTitle: 'Waarom JABO in Barneveld?',
        ctaTitle: 'Bezoek onze showroom in Barneveld',
        metaTitle: 'Robotmaaier Barneveld | Husqvarna Specialist JABO',
        metaDesc: 'Zoekt u een robotmaaier in Barneveld? Ontdek het volledige aanbod Husqvarna Automowers bij JABO. Specialist in advies en installatie.'
    },
    'robotmaaier-ede': {
        slug: 'robotmaaier-ede',
        title: 'Robotmaaier Ede',
        subtitle: 'Service aan huis in Ede',
        h1: 'Husqvarna Robotmaaier Ede: Full Service Partner',
        intro: 'Voor een strak gazon in Ede kiest u voor de expertise van JABO. Wij verzorgen het gehele traject van keuze tot winterbeurt.',
        content: [
            { title: 'Totaaloplossing voor Ede', text: 'Van stadstuinen in Kernhem tot grote percelen in de bossen van Ede, wij hebben de passende Automower.' }
        ],
        uspTitle: 'Snel op locatie in Ede',
        ctaTitle: 'Vraag advies aan voor uw tuin in Ede',
        metaTitle: 'Robotmaaier Ede | Dé Automower Specialist',
        metaDesc: 'Robotmaaier in Ede nodig? JABO biedt Husqvarna Automowers inclusief vakkundige installatie en service in heel Ede.'
    },
    // TECHNIEK CLUSTERS
    'husqvarna-automower-nera': {
        slug: 'husqvarna-automower-nera',
        title: 'Husqvarna NERA',
        subtitle: 'Draadloze Revolutie',
        h1: 'Maai zonder begrenzingsdraad met de NERA serie',
        intro: 'De Husqvarna NERA serie markeert een nieuw tijdperk. Dankzij de nieuwste technologie is een fysieke draad in de grond niet langer nodig.',
        content: [
            { title: 'Flexibele installatie', text: 'Met de EPOS plug-in kit werkt uw NERA maaier volledig via satellietverbinding.' },
            { title: 'Minder onderhoud', text: 'Geen risico meer op draadbreuken tijdens het kantensteken of verticuteren.' }
        ],
        uspTitle: 'Voordelen van NERA',
        ctaTitle: 'Ontdek de NERA modellen',
        metaTitle: 'Husqvarna Automower NERA | Draadloos Maaien',
        metaDesc: 'Ontdek de Husqvarna NERA serie bij JABO. Maai uw gazon zonder begrenzingsdraad met uiterste precisie.'
    },
    'husqvarna-automower-epos': {
        slug: 'husqvarna-automower-epos',
        title: 'Husqvarna EPOS',
        subtitle: 'Professionele Satelliettechnologie',
        h1: 'EPOS: Satelliet-gestuurde Robotmaaiers',
        intro: 'EPOS (Exact Positioning Operating System) is de technologie voor wie geen genoegen neemt met minder dan absolute perfectie en gemak.',
        content: [
            { title: 'Virtuele grenzen', text: 'Stel via uw smartphone eenvoudig virtuele werkgebieden en stay-out zones in.' }
        ],
        uspTitle: 'Specificaties EPOS',
        ctaTitle: 'Vraag een EPOS demonstratie aan',
        metaTitle: 'Husqvarna EPOS Specialist | Draadloze Robotmaaiers',
        metaDesc: 'Maai zonder draden met Husqvarna EPOS. Ideaal voor grote tuinen en professioneel gebruik. Bekijk het bij JABO.'
    },
    // TOEPASSING CLUSTERS
    'robotmaaier-grote-tuin': {
        slug: 'robotmaaier-grote-tuin',
        title: 'Grote Tuin',
        subtitle: 'Capaciteit tot 5000m²+',
        h1: 'Robotmaaier voor een Grote Tuin? Wij adviseren u',
        intro: 'Grote tuinen vragen om krachtige maaiers. Husqvarna heeft modellen die tot wel 5000 vierkante meter gazon moeiteloos bijhouden.',
        content: [
            { title: 'Slimme navigatie', text: 'Dankzij GPS-ondersteuning maaien deze machines efficiënt elk hoekje van uw enorme gazon.' }
        ],
        uspTitle: 'Specs voor Grote Tuinen',
        ctaTitle: 'Bereken uw gazon oppervlakte',
        metaTitle: 'Robotmaaier Grote Tuin | Capaciteit & Advies',
        metaDesc: 'Groot gazon maaien? Ontdek de zwaarste Husqvarna Automowers voor tuinen tot 5000m² bij JABO.'
    }
    // De overige 35 pagina's worden hier ook aan toegevoegd...
};
