"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Domaines & Services",
      raideRace: "RAIDE-RACE",
      news: "Actualités",
      contact: "Contact",
      joinUs: "Nous rejoindre",
      langSwitch: "EN"
    },
    hero: {
      tag: "INSTITUTION AFRICAINE DE RECHERCHE & INNOVATION",
      title: "Bâtir l'Avenir Technologique de l'Afrique",
      subtitle: "« Enracinés dans notre héritage, bâtis pour l'innovation. »",
      strategicMotto: "Notre héritage inspire notre avenir ; notre innovation construit l'Afrique de demain.",
      ctaPrimary: "Découvrir nos programmes",
      ctaSecondary: "Rejoindre l'institution",
      searchPlaceholder: "Rechercher une technologie, un domaine ou un programme...",
      filterCategory: "Tous les domaines",
      filterLocation: "Cameroun & Afrique",
      searchButton: "Explorer"
    },
    stats: {
      pillarsTitle: "NOS PILIERS STRATÉGIQUES",
      pillarsSubtitle: "Une vision d'excellence institutionnelle guidée par la souveraineté et le progrès.",
      p1: { title: "Innovation Disruptive", count: "20+", desc: "Domaines technologiques clés sous recherche active" },
      p2: { title: "Souveraineté Technologique", count: "100%", desc: "Focus sur le développement de solutions autonomes africaines" },
      p3: { title: "Panafricanisme", count: "54", desc: "Nations ciblées pour la diffusion de nos modèles d'innovation" },
      p4: { title: "Excellence Académique", count: "50+", desc: "Partenariats stratégiques avec universités et centres de recherche" }
    },
    homeDomains: {
      badge: "DOMAINES DE POINTE",
      title: "Champs d'Intervention Phares",
      subtitle: "KANEM-SA déploie son expertise sur les secteurs stratégiques majeurs de la transition numérique et industrielle.",
      viewAll: "Voir tous nos 20+ domaines",
      items: [
        {
          id: "ia",
          title: "Intelligence Artificielle & Big Data",
          desc: "Algorithmes souverains, traitement automatique des langues africaines et systèmes décisionnels avancés.",
          icon: "Cpu"
        },
        {
          id: "cyber",
          title: "Cybersécurité & Souveraineté",
          desc: "Protection des infrastructures critiques, cryptographie appliquée et résilience des réseaux nationaux.",
          icon: "Shield"
        },
        {
          id: "agri",
          title: "AgriTech & Sécurité Alimentaire",
          desc: "Capteurs IoT, modélisation climatique et drones agricoles pour maximiser les rendements continentaux.",
          icon: "Wheat"
        },
        {
          id: "health",
          title: "HealthTech & Tele-médecine",
          desc: "Systèmes de diagnostic assisté par IA, suivi épidémiologique et digitalisation du parcours de soin.",
          icon: "HeartPulse"
        },
        {
          id: "fintech",
          title: "FinTech & Inclusion Financière",
          desc: "Blockchain institutionnelle, systèmes de paiement transfrontaliers et sécurisation des transactions.",
          icon: "Coins"
        },
        {
          id: "energy",
          title: "Énergies Renouvelables & Smart Grid",
          desc: "Optimisation de la distribution solaire/hydro, réseaux intelligents et micro-grids ruraux.",
          icon: "Zap"
        }
      ]
    },
    homeRaide: {
      badge: "PROGRAMME FLAGSHIP",
      title: "RAIDE-RACE 2027",
      subtitle: "Le plus grand concours panafricain d'innovation technologique et de recherche appliquée pour la jeunesse.",
      desc: "RAIDE-RACE réunit étudiants, chercheurs et jeunes ingénieurs autour de défis stratégiques réels. Un incubateur d'excellence pour propulser les futurs champions de la tech africaine.",
      cta: "Découvrir la compétition RAIDE-RACE",
      target: "Public cible : Étudiants & Chercheurs",
      impact: "Partenaire Pilote : CENAME"
    },
    homeAboutTeaser: {
      badge: "NOTRE HISTOIRE & SOUVERAINETÉ",
      title: "Inspirés par l'Héritage Kanem & Sao",
      desc: "Puissant symbole de gouvernance, de résilience et de savoir-faire ancestral, l'héritage des civilisations Kanem et Sao incarne notre détermination à bâtir des technologies africaines de rang mondial.",
      disclaimer: "Exigence institutionnelle : KANEM-SA n'implique aucune affiliation politique, ethnique ou religieuse.",
      cta: "En savoir plus sur notre histoire",
      slides: [
        {
          id: "heritage",
          badge: "PILIER 01 — HÉRITAGE HISTORIQUE",
          title: "Savoir-Faire & Gouvernance Kanem-Sao",
          subtitle: "Résilience, Maîtrise Technique & Transmission Ancestrale",
          desc: "L'héritage scientifique et organisationnel des grands empires du Kanem et des Sao nous inspire une vision exigeante : transformer les traditions d'excellence en technologies souveraines du XXIe siècle.",
          image: "/images/2.jpeg",
          portraitAlt: "Héritage Kanem-Sao & Épée Sacrée",
          isEmblem: false,
          points: [
            "Ingénierie et métallurgie ancestrales appliquées au monde moderne.",
            "Transmission transgénérationnelle des hautes compétences académiques.",
            "Symbole fort d'émancipation intellectuelle pour la jeunesse africaine."
          ]
        },
        {
          id: "sovereignty",
          badge: "PILIER 02 — SOUVERAINETÉ R&D",
          title: "Technologies & Algorithmes Souverains",
          subtitle: "Indépendance Numérique, Cybersécurité et Matériels Autonomes",
          desc: "Nous concevons des solutions logicielles et matérielles 100% maîtrisées sur le continent afin de protéger les données stratégiques et les infrastructures critiques de nos nations.",
          image: "/images/1.jpeg",
          portraitAlt: "Puissance & Protection des Savoirs",
          isEmblem: false,
          points: [
            "Algorithmes de cryptographie et IA adaptés aux réalités africaines.",
            "Protection, dépôt et valorisation de brevets continentaux.",
            "Résilience renforcée des réseaux informatiques nationaux."
          ]
        },
        {
          id: "synergy",
          badge: "PILIER 03 — SYNERGIE STRATÉGIQUE",
          title: "Alliance Université — Entreprises — État",
          subtitle: "Coopération Tripartite pour un Impact Industriel Concret",
          desc: "KANEM-SA crée les ponts opérationnels entre le monde universitaire, les ministères publics et le secteur privé pour transformer la recherche théorique en emplois et produits à forte valeur.",
          image: "/images/4.jpeg",
          portraitAlt: "Excellence Scientifique & Leadership Moderne",
          isEmblem: false,
          points: [
            "Déploiement de projets pilotes d'envergure (ex: CENAME en santé).",
            "Incubation accélérée des meilleures pépites technologiques.",
            "Rayonnement stratégique dans les 54 nations du continent."
          ]
        },
        {
          id: "ethics",
          badge: "PILIER 04 — RIGUEUR & ÉTHIQUE",
          title: "Neutralité Républicaine & Éthique Académique",
          subtitle: "Rigueur Scientifique Strictement Indépendante",
          desc: "Notre démarche est guidée par le sérieux académique et l'éthique républicaine. KANEM-SA est une institution neutre dédiée au bien commun, sans aucune considération d'ordre partisan.",
          image: "/images/5.jpeg",
          portraitAlt: "Identité, Sagesse & Masque Ancestral",
          isEmblem: false,
          points: [
            "Absence totale d'affiliation politique, ethnique ou religieuse.",
            "Validation stricte selon la méthode scientifique internationale.",
            "Promotion inclusive de tous les talents du continent sans discrimination."
          ]
        }
      ]
    },
    partners: {
      title: "COLLABORATIONS & PARTENAIRES STRATÉGIQUES",
      subtitle: "Ils accompagnent la vision institutionnelle de KANEM-SA pour l'émergence technologique."
    },
    aboutPage: {
      heroTitle: "L'Institution KANEM-SA",
      heroSubtitle: "Aux origines de la souveraineté scientifique et technologique en Afrique.",
      originTitle: "Identité & Héritage Kanem-Sao",
      originDesc1: "La référence aux civilisations historiquement prestigieuses du Kanem et des Sao symbolise la haute gouvernance, l'esprit d'innovation soutenue, la résilience culturelle et la transmission des hautes compétences.",
      originDesc2: "Notre démarche est strictement académique, scientifique et technologique. KANEM-SA est une organisation neutre, trans-frontalière et républicaine engagée pour le bien commun et la prospérité du continent.",
      disclaimerBox: "Note Institutionnelle Importante : Aucune affiliation politique, ethnique ou religieuse n'est impliquée dans le nom ou les activités de l'institution.",
      visionTitle: "Notre Vision",
      visionText: "Devenir la principale institution africaine de recherche, d'innovation et de développement technologique, reconnue à l'international pour la rigueur de ses travaux et l'impact direct de ses solutions.",
      missionTitle: "Nos Missions Stratégiques",
      missions: [
        "Conduire des travaux de recherche scientifique appliquée répondant aux défis africains.",
        "Concevoir et développer des solutions numériques et matérielles souveraines et sécurisées.",
        "Stimuler les synergies tripartites : Université - Entreprises - Administrations Publiques.",
        "Détecter, former et propulser la jeunesse talentueuse continentale.",
        "Organiser des programmes d'émulation scientifique d'envergure, dont la compétition phare RAIDE-RACE.",
        "Protéger, breveter et valoriser les propriétés intellectuelles africaines."
      ],
      valuesTitle: "Nos 10 Valeurs Fondamentales",
      valuesSubtitle: "Les principes inébranlables qui guident chacune de nos actions et recherches.",
      valuesList: [
        { name: "Innovation", desc: "Repousser sans cesse les frontières du possible et inventer le futur." },
        { name: "Excellence", desc: "Viser la plus haute qualité académique et opérationnelle dans tous nos livrables." },
        { name: "Intégrité", desc: "Respecter une éthique irréprochable et la transparence institutionnelle." },
        { name: "Leadership", desc: "Guider par l'exemple et inspirer la transformation technologique." },
        { name: "Collaboration", desc: "Bâtir des ponts solides entre chercheurs, décideurs et industriels." },
        { name: "Respect", desc: "Valoriser la diversité des talents, des savoirs et du patrimoine culturel." },
        { name: "Créativité", desc: "Penser différemment pour concevoir des solutions originales et adaptées." },
        { name: "Rigueur Scientifique", desc: "Appliquer la méthodologie expérimentale et la validation stricte." },
        { name: "Souveraineté Technologique", desc: "Garantir l'indépendance numérique et stratégique des nations." },
        { name: "Entrepreneuriat", desc: "Transformer la recherche scientifique en entreprises et emplois à forte valeur." }
      ],
      govTitle: "Gouvernance Institutionnelle",
      govSubtitle: "Une structure claire organisée pour l'efficience et le sérieux académique.",
      govOrg: [
        { role: "Fondateur / Direction Générale", desc: "Orientation stratégique et vision globale institutionnelle." },
        { role: "Présidence", desc: "Supervision académique et représentation officielle." },
        { role: "Vice-Présidence", desc: "Coordination des programmes de recherche et partenariats." },
        { role: "Départements Scientifiques & Tech", desc: "Unités opérationnelles de R&D, Pôle RAIDE-RACE et Relations Internationales." }
      ],
      cameroonTitle: "Engagement Cameroun & Rayonnement Panafricain",
      cameroonText: "Implantée au cœur de la République du Cameroun comme pôle d'ancrage initial, KANEM-SA déploie en priorité ses projets de développement au niveau national avant d'étendre son rayonnement stratégique à l'échelle de l'Afrique Centrale et de l'ensemble du continent."
    },
    servicesPage: {
      heroTitle: "Domaines d'Intervention & R&D",
      heroSubtitle: "Près de 20 axes d'expertise scientifique regroupés en 5 grands piliers sectoriels.",
      filterAll: "Tous les axes",
      catEmerging: "Technologies émergentes",
      catImpact: "Sectors d'impact",
      catSecurity: "Souveraineté & Sécurité",
      catEconomy: "Économie numérique",
      catSociety: "Recherche & Société",
      note: "Remarque institutionnelle : Ces domaines représentent nos axes d'intervention en recherche et développement coopératif.",
      ctaBoxTitle: "Vous portez un projet ou un besoin technologique ?",
      ctaBoxDesc: "KANEM-SA collabore avec les institutions publiques, les universités et les partenaires privés.",
      ctaBoxBtn: "Engager une collaboration"
    },
    raidePage: {
      heroTag: "COMPÉTITION PHARE KANEM-SA",
      heroTitle: "RAIDE-RACE 2027",
      heroSubtitle: "Rassemblement Africain d'Innovation, de Développement et d'Émulation",
      summary: "RAIDE-RACE est le programme d'accélération d'innovation le plus ambitieux du continent. Concours scientifique et technologique, il rassemble étudiants, jeunes ingénieurs et inventeurs autour de problématiques concrètes d'intérêt national et africain.",
      partnerPilot: "Partenaire Pilote Stratégique : CENAME (Centrale Nationale d'Approvisionnement en Médicaments et Consommables Médicaux Essential)",
      timelineTitle: "Étapes et Parallèles de la Compétition",
      timelineSteps: [
        { step: "01", title: "Appel à Projets & Inscriptions", date: "Janvier - Mars 2027", desc: "Ouverture des candidatures pour les équipes d'étudiants de toutes les universités et grandes écoles." },
        { step: "02", title: "Présélection & Mentorat Périodique", date: "Avril - Mai 2027", desc: "Évaluation des dossiers par le comité scientifique KANEM-SA et attribution de mentors experts." },
        { step: "03", title: "Bootcamp & Prototypage Rapide", date: "Juin 2027", desc: "Sessions intensives de codage, de modélisation et de mise en œuvre de solutions viables." },
        { step: "04", title: "Grande Finale & Session de Pitch", date: "Juillet 2027", desc: "Présentation devant le jury d'experts, d'industriels et de représentants ministériels." },
        { step: "05", title: "Incubation & Brevetage", date: "À partir d'Août 2027", desc: "Accompagnement des lauréats vers le déploiement réel et le dépôt de brevets." }
      ],
      participateTitle: "Comment Participer ?",
      participateDesc: "Vous êtes étudiant, jeune diplômé ou passionné d'innovation ? Constituez une équipe de 2 à 4 personnes et rejoignez l'aventure RAIDE-RACE.",
      ctaRegister: "S'inscrire à l'édition 2027",
      ctaDownloadDocs: "Télécharger le Règlement"
    },
    newsPage: {
      heroTitle: "Actualités & Publications",
      heroSubtitle: "Suivez les avancées scientifiques, les événements et les annonces de KANEM-SA.",
      searchPlaceholder: "Rechercher un article ou un communiqué...",
      categories: ["Tous", "Recherche", "Événements", "RAIDE-RACE", "Partenariats"],
      readMore: "Lire la suite",
      publishedOn: "Publié le"
    },
    contactPage: {
      heroTitle: "Contactez KANEM-SA",
      heroSubtitle: "Bâtissons ensemble les partenariats et les innovations technologiques de demain.",
      formName: "Nom complet / Organisation",
      formEmail: "Adresse email",
      formSubject: "Objet de la demande",
      formMessage: "Votre message",
      formSubmit: "Envoyer le message",
      successMsg: "Votre message a été transmis avec succès. L'équipe KANEM-SA vous répondra sous 48h.",
      headquarters: "Siège Social",
      country: "République du Cameroun",
      addressDetails: "Yaoundé / Douala — République du Cameroun",
      emailDirect: "Email Officiel",
      phoneDirect: "Téléphone / Secrétariat",
      languagesSpoken: "Langues Officielles : Français / English"
    },
    footer: {
      motto: "« Enracinés dans notre héritage, bâtis pour l'innovation. »",
      quickLinks: "Navigation Rapide",
      legal: "Mentions Légales & Confidentialité",
      rights: "Tous droits réservés. Institution KANEM-SA.",
      langChoice: "Langue du site :"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Domains & Services",
      raideRace: "RAIDE-RACE",
      news: "News & Insights",
      contact: "Contact",
      joinUs: "Join Us",
      langSwitch: "FR"
    },
    hero: {
      tag: "AFRICAN INSTITUTION OF RESEARCH & INNOVATION",
      title: "Building Africa's Technological Future",
      subtitle: "« Rooted in our heritage, built for innovation. »",
      strategicMotto: "Our heritage inspires our future; our innovation builds tomorrow's Africa.",
      ctaPrimary: "Discover Programs",
      ctaSecondary: "Join the Institution",
      searchPlaceholder: "Search for technologies, domains, or programs...",
      filterCategory: "All Domains",
      filterLocation: "Cameroon & Africa",
      searchButton: "Explore"
    },
    stats: {
      pillarsTitle: "OUR STRATEGIC PILLARS",
      pillarsSubtitle: "A vision of institutional excellence driven by sovereignty and technological progress.",
      p1: { title: "Disruptive Innovation", count: "20+", desc: "Key technological domains under active research" },
      p2: { title: "Technological Sovereignty", count: "100%", desc: "Focus on developing autonomous African digital solutions" },
      p3: { title: "Pan-Africanism", count: "54", desc: "Target nations for deploying our innovation frameworks" },
      p4: { title: "Academic Excellence", count: "50+", desc: "Strategic partnerships with universities and research labs" }
    },
    homeDomains: {
      badge: "CUTTING-EDGE DOMAINS",
      title: "Core Fields of Intervention",
      subtitle: "KANEM-SA deploys its scientific expertise across key sectors of the digital and industrial transition.",
      viewAll: "View all 20+ domains",
      items: [
        {
          id: "ia",
          title: "Artificial Intelligence & Big Data",
          desc: "Sovereign algorithms, NLP for African languages, and advanced decision-support systems.",
          icon: "Cpu"
        },
        {
          id: "cyber",
          title: "Cybersecurity & Sovereignty",
          desc: "Critical infrastructure protection, applied cryptography, and national network resilience.",
          icon: "Shield"
        },
        {
          id: "agri",
          title: "AgriTech & Food Security",
          desc: "IoT sensors, climate modeling, and agricultural drones to maximize continental crop yields.",
          icon: "Wheat"
        },
        {
          id: "health",
          title: "HealthTech & Telemedicine",
          desc: "AI-assisted diagnostic tools, epidemiological tracking, and healthcare digitization.",
          icon: "HeartPulse"
        },
        {
          id: "fintech",
          title: "FinTech & Financial Inclusion",
          desc: "Institutional blockchain, cross-border payment networks, and transaction security.",
          icon: "Coins"
        },
        {
          id: "energy",
          title: "Renewable Energy & Smart Grids",
          desc: "Optimization of solar/hydro distribution, smart grids, and rural micro-grids.",
          icon: "Zap"
        }
      ]
    },
    homeRaide: {
      badge: "FLAGSHIP PROGRAM",
      title: "RAIDE-RACE 2027",
      subtitle: "The premier Pan-African technological innovation and applied research competition for youth.",
      desc: "RAIDE-RACE brings together students, researchers, and young engineers to solve real-world strategic challenges. An incubator of excellence to empower future African tech leaders.",
      cta: "Explore the RAIDE-RACE Competition",
      target: "Target Audience: Students & Researchers",
      impact: "Pilot Partner: CENAME"
    },
    homeAboutTeaser: {
      badge: "OUR HERITAGE & SOVEREIGNTY",
      title: "Inspired by the Kanem & Sao Heritage",
      desc: "A powerful symbol of governance, resilience, and ancestral mastery, the legacy of Kanem and Sao civilizations inspires our drive to build world-class African technologies.",
      disclaimer: "Institutional notice: KANEM-SA has no political, ethnic, or religious affiliation.",
      cta: "Learn more about our history",
      slides: [
        {
          id: "heritage",
          badge: "PILLAR 01 — HISTORICAL LEGACY",
          title: "Kanem-Sao Governance & Mastery",
          subtitle: "Resilience, Technical Mastery & Ancestral Transmission",
          desc: "The scientific and organizational heritage of the Kanem and Sao empires inspires our demanding vision: transforming traditions of excellence into 21st-century sovereign technologies.",
          image: "/images/2.jpeg",
          portraitAlt: "Kanem-Sao Legacy & Sacred Sword",
          isEmblem: false,
          points: [
            "Ancestral engineering and metallurgy applied to modern challenges.",
            "Transgenerational transmission of top academic competencies.",
            "A powerful symbol of intellectual empowerment for African youth."
          ]
        },
        {
          id: "sovereignty",
          badge: "PILLAR 02 — R&D SOVEREIGNTY",
          title: "Sovereign Technologies & Algorithms",
          subtitle: "Digital Independence, Cybersecurity & Autonomous Systems",
          desc: "We design software and hardware solutions 100% mastered on the continent to protect critical data and national infrastructure.",
          image: "/images/1.jpeg",
          portraitAlt: "Power & Knowledge Safeguarding",
          isEmblem: false,
          points: [
            "Cryptography algorithms and AI tailored to African realities.",
            "Filing, protection, and valorization of continental patents.",
            "Reinforced resilience for national digital networks."
          ]
        },
        {
          id: "synergy",
          badge: "PILLAR 03 — STRATEGIC SYNERGY",
          title: "University — Industry — State Alliance",
          subtitle: "Tripartite Cooperation for Direct Industrial Impact",
          desc: "KANEM-SA builds operational bridges between academia, public ministries, and the private sector to turn theoretical research into high-value jobs and products.",
          image: "/images/4.jpeg",
          portraitAlt: "Scientific Excellence & Modern Leadership",
          isEmblem: false,
          points: [
            "Deployment of major pilot programs (e.g. CENAME in healthcare).",
            "Accelerated incubation for top continental tech champions.",
            "Strategic outreach across all 54 nations of the continent."
          ]
        },
        {
          id: "ethics",
          badge: "PILLAR 04 — RIGOR & ETHICS",
          title: "Institutional Neutrality & Academic Ethics",
          subtitle: "Strictly Independent Scientific Rigor",
          desc: "Our methodology is driven by academic rigor and public ethics. KANEM-SA is a neutral institution dedicated to the common good with zero political stance.",
          image: "/images/5.jpeg",
          portraitAlt: "Identity, Wisdom & Ancestral Mask",
          isEmblem: false,
          points: [
            "Strictly zero political, ethnic, or religious affiliation.",
            "Strict validation following international scientific standards.",
            "Inclusive empowerment of all talents across the continent."
          ]
        }
      ]
    },
    partners: {
      title: "COLLABORATIONS & STRATEGIC PARTNERS",
      subtitle: "Supporting the institutional vision of KANEM-SA for technological empowerment."
    },
    aboutPage: {
      heroTitle: "The KANEM-SA Institution",
      heroSubtitle: "At the origins of scientific and technological sovereignty in Africa.",
      originTitle: "Identity & Kanem-Sao Legacy",
      originDesc1: "The reference to the historical Kanem and Sao civilizations symbolizes high governance, sustained innovation, cultural resilience, and knowledge transmission.",
      originDesc2: "Our approach is strictly academic, scientific, and technological. KANEM-SA is a neutral, cross-border organization committed to the common good and continental prosperity.",
      disclaimerBox: "Important Institutional Note: No political, ethnic, or religious affiliation is implied by the name or activities of the institution.",
      visionTitle: "Our Vision",
      visionText: "To become the leading African institution for research, innovation, and technological development, internationally recognized for its scientific rigor and practical solutions.",
      missionTitle: "Our Strategic Missions",
      missions: [
        "Conduct applied scientific research addressing core African challenges.",
        "Design and build sovereign, secure hardware and software solutions.",
        "Foster tripartite synergies: Universities - Private Sector - Public Administrations.",
        "Identify, train, and empower talented youth across the continent.",
        "Organize major scientific competitions including our flagship program RAIDE-RACE.",
        "Protect, patent, and commercialize African intellectual property."
      ],
      valuesTitle: "Our 10 Core Values",
      valuesSubtitle: "Unwavering principles guiding our research and operations.",
      valuesList: [
        { name: "Innovation", desc: "Constantly pushing boundaries and inventing the future." },
        { name: "Excellence", desc: "Striving for the highest academic and operational standards." },
        { name: "Integrity", desc: "Upholding uncompromised ethics and institutional transparency." },
        { name: "Leadership", desc: "Leading by example and inspiring technological transformation." },
        { name: "Collaboration", desc: "Building strong bridges between researchers, policy makers, and industry." },
        { name: "Respect", desc: "Valuing diverse talents, ideas, and cultural heritage." },
        { name: "Creativity", desc: "Thinking differently to engineer tailored and original solutions." },
        { name: "Scientific Rigor", desc: "Applying strict experimental methodology and rigorous testing." },
        { name: "Technological Sovereignty", desc: "Ensuring digital and strategic independence for African nations." },
        { name: "Entrepreneurship", desc: "Translating scientific research into high-impact businesses and jobs." }
      ],
      govTitle: "Institutional Governance",
      govSubtitle: "A structured organization designed for operational efficiency and academic integrity.",
      govOrg: [
        { role: "Founder / Executive Direction", desc: "Strategic direction and global institutional vision." },
        { role: "Presidency", desc: "Academic oversight and official representation." },
        { role: "Vice-Presidency", desc: "Coordination of research programs and partnerships." },
        { role: "Scientific & Tech Departments", desc: "R&D operational units, RAIDE-RACE hub, and International Relations." }
      ],
      cameroonTitle: "Cameroon Commitment & Pan-African Impact",
      cameroonText: "Based in the Republic of Cameroon as its primary anchor, KANEM-SA prioritizes national development projects before expanding its strategic impact across Central Africa and the wider continent."
    },
    servicesPage: {
      heroTitle: "Domains of Intervention & R&D",
      heroSubtitle: "Nearly 20 scientific expertise areas grouped into 5 strategic pillars.",
      filterAll: "All Fields",
      catEmerging: "Emerging Technologies",
      catImpact: "Impact Sectors",
      catSecurity: "Sovereignty & Security",
      catEconomy: "Digital Economy",
      catSociety: "Research & Society",
      note: "Institutional note: These domains represent our strategic axes for research and cooperative development.",
      ctaBoxTitle: "Do you have a project or technological requirement?",
      ctaBoxDesc: "KANEM-SA collaborates with public institutions, universities, and private partners.",
      ctaBoxBtn: "Initiate Collaboration"
    },
    raidePage: {
      heroTag: "KANEM-SA FLAGSHIP COMPETITION",
      heroTitle: "RAIDE-RACE 2027",
      heroSubtitle: "African Rally for Innovation, Development, and Emulation",
      summary: "RAIDE-RACE is the continent's most ambitious innovation accelerator program. As a scientific and technological competition, it brings together university students, young engineers, and inventors to tackle real-world challenges.",
      partnerPilot: "Strategic Pilot Partner: CENAME (National Central Medical Store of Cameroon)",
      timelineTitle: "Competition Stages & Timeline",
      timelineSteps: [
        { step: "01", title: "Call for Applications & Registration", date: "January - March 2027", desc: "Applications open for student teams from universities across Africa." },
        { step: "02", title: "Pre-selection & Mentorship", date: "April - May 2027", desc: "Scientific evaluation by KANEM-SA board and assignment of expert mentors." },
        { step: "03", title: "Bootcamp & Rapid Prototyping", date: "June 2027", desc: "Intensive coding, hardware assembly, and solution validation sessions." },
        { step: "04", title: "Grand Finale & Pitch Session", date: "July 2027", desc: "Pitching before an expert jury of scientists, industrial leaders, and officials." },
        { step: "05", title: "Incubation & Patenting", date: "Starting August 2027", desc: "Guiding winners towards real-world implementation and patent protection." }
      ],
      participateTitle: "How to Participate?",
      participateDesc: "Are you a university student, recent graduate, or innovator? Form a team of 2 to 4 members and enter RAIDE-RACE 2027.",
      ctaRegister: "Register for 2027 Edition",
      ctaDownloadDocs: "Download Guidelines"
    },
    newsPage: {
      heroTitle: "News & Publications",
      heroSubtitle: "Stay informed on scientific advancements, events, and announcements from KANEM-SA.",
      searchPlaceholder: "Search articles or announcements...",
      categories: ["All", "Research", "Events", "RAIDE-RACE", "Partnerships"],
      readMore: "Read More",
      publishedOn: "Published on"
    },
    contactPage: {
      heroTitle: "Contact KANEM-SA",
      heroSubtitle: "Let us build tomorrow's technological partnerships and innovations together.",
      formName: "Full Name / Organization",
      formEmail: "Email Address",
      formSubject: "Subject",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      successMsg: "Your message has been sent successfully. The KANEM-SA team will get back to you within 48 hours.",
      headquarters: "Headquarters",
      country: "Republic of Cameroon",
      addressDetails: "Yaoundé / Douala — Republic of Cameroon",
      emailDirect: "Official Email",
      phoneDirect: "Phone / Secretariat",
      languagesSpoken: "Official Languages: French / English"
    },
    footer: {
      motto: "« Rooted in our heritage, built for innovation. »",
      quickLinks: "Quick Links",
      legal: "Legal Notice & Privacy",
      rights: "All rights reserved. KANEM-SA Institution.",
      langChoice: "Site Language:"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("fr");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
