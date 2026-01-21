// Translations for EN/FR
const translations = {
    en: {
        // Hero
        "hero-greeting": "Hi, I'm",
        "hero-title": "DevOps and AI Software Engineer",
        "hero-tag-1": "Artificial Intelligence (GenAI/Machine Learning)",
        "hero-tag-2": "DevOps & Infrastructure",
        "hero-tag-3": "Python, Bash, Java",

        // Sidebar
        "nav-about": "About me",
        "nav-cv": "Curriculum",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-chat": "Chat with me",

        // About
        "about-title": "About me",
        "about-text-1": "Passionate about artificial intelligence and DevOps, I have <strong>completed</strong> my Engineering degree at <span class=\"hover-word\" data-image=\"polytech\">Polytech Nancy</span> with a <span class=\"hover-word\" data-image=\"diplome\">double degree</span> in AI (Master II in Vision and Robotics).",
        "about-text-2": "After my experience at <span class=\"hover-word\" data-image=\"hermine\">HermineIA</span> at <span class=\"hover-word\" data-image=\"stationf\">STATION F</span> as Applied AI Engineer, I developed a multi-agent legal assistant and led ETL automation projects, achieving 90% time savings on client migrations.",
        "about-text-3": "My journey has taken me from creating monitoring tools at <span class=\"hover-word\" data-image=\"equasens\">Equasens</span> to architecting resilient agentic systems, through deep learning and MLOps projects. Currently preparing for the AWS Solutions Architect Associate certification.",
        "about-text-4": "What interests me? The fascinating intersection between artificial intelligence and DevOps infrastructure, where each infrastructure and pipeline enables deploying models that transform the way we work.",
        "about-text-5": "When I'm not coding, you'll find me on a tennis court, in a boxing gym, studying biomechanics or in a movie theater.",
        "about-text-6": "Available now for exciting new technical challenges.",

        // CV Header
        "cv-title": "DevOps & AI Software Engineer",
        "cv-availability": "Available from now, mobile at national and international scale",
        "cv-driver": "🚗 Driver's License & Vehicle",

        // CV Section Titles
        "cv-profile-title": "Profile",
        "cv-experience-title": "Experience",
        "cv-education-title": "Education",
        "cv-certifications-title": "Certifications",
        "cv-projects-title": "Projects",

        // CV Profile
        "cv-profile-text": "DevOps and AI Software Engineer with a strong focus on building <span class=\"highlight\">sustainable, production-grade architectures</span>. My background spans Linux administration, Data Engineering, and AI Agent development. I am deeply interested in software design patterns and best practices that ensure long-term system maintainability. Currently preparing for the <span class=\"highlight\">AWS Solutions Architect Associate</span> certification, I am eager to leverage my Python/ Shell expertise and DevOps experience to build scalable, high-performance solutions in a Cloud-native environment.",

        // CV Experience - HermineIA Data Engineer
        "exp1-title": "HermineIA – Freelance Data Engineer",
        "exp1-duration": "December 2025 - January 2025",
        "exp1-li1": "<strong>Automated ETL Workflow:</strong> Engineered documented Python/SQL scripts to analyze, normalize, and migrate legacy customer databases, ensuring data integrity.",
        "exp1-li2": "<strong>Collaborative Data Mapping:</strong> Translated business needs into visual specifications (Excalidraw/Excel) through iterative reviews with stakeholders.",
        "exp1-li3": "<strong>Client Management:</strong> Supervised the entire project lifecycle, from administrative setup to delivery, ensuring transparency via bi-weekly reporting.",
        "exp1-li4": "<strong>Key Impact:</strong> Achieved 90% time savings on client migrations compared to manual processing.",

        // CV Experience - HermineIA AI Engineer
        "exp2-title": "HermineIA – Applied AI Engineer",
        "exp2-duration": "February 2025 - September 2025",
        "exp2-li1": "<strong>Resilient Agentic Architecture (Hierarchical):</strong> Orchestrated a hybrid Legal AI Agent Assistant (Python, FastAPI, Redis, Firebase) using Native APIs to ensure state persistence and granular control.",
        "exp2-li2": "<strong>Cost-Efficient Engineering:</strong> Designed a NoSQL context injection system (avoiding complex RAG) and internal benchmarking tools to optimize the Performance/Cost ratio.",
        "exp2-li3": "<strong>Legal-NLP Bridge:</strong> Collaborated with jurists to translate complex legal jargon into high-precision prompts, ensuring accurate document analysis.",
        "exp2-li4": "<strong>Key Impact:</strong> Secured 2 clients and 15 beta-testers | Delivered 50% time savings on legal drafting | Upselling potential.",

        // CV Experience - Equasens
        "exp3-title": "Equasens – DevOps Engineer",
        "exp3-duration": "February 2024 - June 2024",
        "exp3-li1": "<strong>Robust System Design:</strong> Engineered a diagnostic and monitoring solution using Software Craftsmanship principles (SOLID, TDD in Bash) to ensure high reliability and maintainability.",
        "exp3-li2": "<strong>DevOps Automation:</strong> Applied a Jenkins CI/CD pipeline to automate production deployments in a Gitflow environment.",
        "exp3-li3": "<strong>Agile Leadership:</strong> Facilitated sprint retrospectives for a 9-person team by gathering team feedback, identifying improvement areas (communication, technical practices), and organizing the session structure, timing, and collaboration tools (Miro).",
        "exp3-li4": "<strong>Communication:</strong> Led a knowledge-sharing session on TDD for 3 people.",
        "exp3-li5": "<strong>Key Impact:</strong> Reduced server analysis time by 30% for support teams on 8,000+ pharmacies.",

        // CV Education
        "edu1-title": "Master II – Artificial Intelligence Applied to Vision and Robotics (IA2VR)",
        "edu1-school": "Faculty of Science and Technology of Nancy",
        "edu1-li1": "Machine Learning Fundamentals: focused on Deep Learning, Reinforcement Learning and applications",
        "edu1-li2": "Complete pipeline of pre-training, fine-tuning (CNN & ResNet50)",
        "edu1-li3": "Training parameter optimization, metrics setup and analysis",
        "edu1-li4": "Planning and Robotic Control algorithms",

        "edu2-title": "Engineering Degree – Information Systems and Networks",
        "edu2-school": "Polytech Nancy",
        "edu2-li1": "Computer Networks: TCP/IP, DNS, DHCP, HTTP, IP Routing, Network Security",
        "edu2-li2": "Software Engineering: OOP, Design Patterns, Code Quality, REST API",
        "edu2-li3": "Databases: SQL, NoSQL, Relational Algebra",
        "edu2-li4": "Systems: Linux Administration, Bash Scripting, Virtualization",

        "edu3-title": "MPSI-PSI Preparatory Classes",
        "edu3-school": "Mathematics, Physics, and Engineering Sciences",
        "edu3-li1": "Solid foundation in mathematics and statistics",
        "edu3-li2": "Advanced mathematical analysis and linear algebra",
        "edu3-li3": "Physics and engineering sciences fundamentals",
        "edu3-li4": "Preparation for selective engineering school entrance exams",

        // CV Skills
        "cv-skills-title": "Skills",
        "skill-cloud-title": "Cloud & DevOps",
        "skill-cloud-text": "<strong>AWS:</strong> IAM, EC2, S3, Route53, SQS, SNS, ElastiCache. <strong>Infrastructure:</strong> Docker (K3s, dind), Kubernetes, Terraform, CI/CD Pipelines, Jenkins.",
        "skill-ai-title": "AI & Machine Learning",
        "skill-ai-text": "PyTorch, TensorFlow, Hugging Face Transformers, LoRA/PEFT, MLFlow, SLURM.",
        "skill-agents-title": "AI Agents & Context Engineering",
        "skill-agents-text": "LangGraph, Agno, Google ADK, Context Injection, Redis, Firebase, FastAPI.",
        "skill-dev-title": "Development & Methodologies",
        "skill-dev-text": "<strong>Languages:</strong> Python, Bash, SQL. <strong>Principles:</strong> TDD, SOLID, DRY, KISS, Software Craftsmanship, GitOps.",
        "skill-lang-title": "Languages",
        "skill-lang-text": "French (Native), English (Professional - TOEIC 865), German (Basic).",

        // CV Certifications
        "cert-aws": "• AWS Certified Solutions Architect Associate (Exam scheduled March 2026)",
        "cert-toeic": "• TOEIC : 865/990",
        "cert-hf": "• Hugging face Agent Course, Hugging Face",
        "cert-linux": "• Linux Server Administration, Open Classroom",

        // CV Projects
        "cv-projects-gitlab": "My Gitlab:",
        "cv-projects-mlops": "MLOps :",
        "cv-projects-mlops-1": "<strong>Jira Ticket Classifier:</strong> Fine-tuned DistilBERT with LoRA/PEFT for incident classification. Hybrid cloud architecture (Terraform IaC) connecting AWS S3 and local resources via SQS. GitOps workflow with FluxCD, MLFlow tracking.",
        "cv-projects-ml": "ML :",
        "cv-projects-ml-1": "Semantic Segmentation for object segmentation on PascalVOC dataset using a U-Net CNN model: Pytorch, TensorBoard, ONNX (See Gitlab: U-Net)",
        "cv-projects-ml-2": "Control of a simulated vehicle steering angle via computer vision: ROS2, Pytorch, ONNX, TensorBoard (see Gitlab: SteerSim)",
        "cv-projects-ml-3": "Implementation of an RNN for sentiment classification on tweets",
        "cv-projects-ml-4": "Implementation of a DCGAN for synthetic image generation on Fashion MNIST dataset",
        "cv-projects-devops": "DevOps :",
        "cv-projects-devops-1": "CI/CD Pipeline for a Java application backend: Gitlab CI (see Gitlab: Backend Production Deployment)",
        "cv-projects-devops-2": "4-container cluster for a \"Docker coins Miner\" application: KinD, Helm, Kubectl (see Gitlab: Kubernetes-simple-app)",
        "cv-projects-devops-3": "Containerization of a PHP application: Docker, RabbitMQ (see Gitlab: container project)",

        // CV Interests
        "cv-interests-title": "Interests",
        "interest-1": "Reading 📖",
        "interest-2": "Cooking 🍳",
        "interest-3": "Physical training and physiotherapy: movement sciences and biomechanics 🏋️‍♂️",
        "interest-4": "Tennis and Boxing 🎾 🥊",

        // Projects Section
        "projects-header-title": "My Projects",
        "projects-header-subtitle": "Discover my technical achievements",
        "projects-ai-title": "🤖 Artificial Intelligence & MLOps",
        "projects-devops-title": "⚙️ DevOps & Infrastructure",

        // Project Cards
        "project-jira-title": "Jira Ticket Classifier",
        "project-jira-desc": "MLOps pipeline with DistilBERT fine-tuning (LoRA/PEFT), hybrid AWS/local architecture via Terraform, GitOps with FluxCD.",
        "project-unet-title": "Semantic Segmentation U-Net",
        "project-unet-desc": "Object segmentation on the PascalVOC dataset using a U-Net CNN model with PyTorch, TensorBoard and ONNX.",
        "project-steersim-title": "Vehicle Control via Vision",
        "project-steersim-desc": "Control of a simulated vehicle steering angle via computer vision. Complete ML pipeline with ROS2.",
        "project-hermine-title": "Multi-Agent LegalTech Solution",
        "project-hermine-desc": "Development of an agentic solution for legal professionals: automatic Q&A and legal document analysis.",
        "project-superdiag-title": "SuperDiag - Monitoring Solution",
        "project-superdiag-desc": "Client server monitoring solution developed at Equasens. Complete design and development with unit tests.",
        "project-kubernetes-title": "Kubernetes Cluster",
        "project-kubernetes-desc": "Deployment of a 4-container cluster for a distributed application with Kubernetes orchestration and complete monitoring.",
        "project-cicd-title": "Java CI/CD Pipeline",
        "project-cicd-desc": "Complete CI/CD pipeline for a Java application backend with GitLab CI, automated tests and containerized deployment.",

        // Contact
        "contact-title": "Contact me",
        "contact-subtitle": "Feel free to contact me to discuss opportunities or exchange ideas about our common projects",
        "contact-social": "Social Networks",
        "contact-email": "Email",
        "contact-footer": "Available now for new challenges",

        // Chat
        "chat-title": " Chat with my LLM version",
        "chat-subtitle": "Ask me questions about my background, skills, or projects!",
        "chat-placeholder": "Type your question here...",
        "chat-send": "Send",
        "chat-bot-greeting": "👋 Hello! I'm the AI version of Wassil NAKIB. I can tell you about my AI engineering background, my experiences at HermineIA and Equasens, my machine learning and DevOps projects. What would you like to know?",

        // CV Download Preview
        "cv-preview-title": "Resume - Wassil NAKIB",
        "cv-preview-subtitle": "Machine Learning & DevOps Engineer",
        "cv-preview-format": "PDF Format - 2 pages",

        // CV Download Hover
        "cv-download-title": "Download CV",

        // Hidden Menu Item
        "nav-hidden-movies": "Films & Series",

        // Resources
        "resources-title": "Useful Resources",
        "resources-subtitle": "A curated selection of tools and documentation I find valuable",
        "nav-resources": "Resources",
        "resource-fossflow-title": "FossFLOW",
        "resource-fossflow-desc": "Create beautiful network diagrams for your infrastructure documentation",
        "resource-fossflow-tag": "Diagrams",
        "resource-stephane-title": "Stéphane Robert Blog",
        "resource-stephane-desc": "Comprehensive blog covering DevSecOps best practices and tools",
        "resource-stephane-tag": "DevSecOps",
        "resource-resume-title": "Easy Free Resume",
        "resource-resume-desc": "ATS-friendly resume templates to build your professional CV",
        "resource-resume-tag": "Career",
        "resource-roadmap-title": "Roadmap.sh",
        "resource-roadmap-desc": "Developer roadmaps and learning paths for any IT career or skill",
        "resource-roadmap-tag": "Learning",

        // Easter eggs
        "console-message": "Stop looking at my code! 👀",
        "dont-click-btn": "catch me, if you can !"
    },
    fr: {
        // Hero
        "hero-greeting": "Bonjour, je suis",
        "hero-title": "Ingénieur DevOps et IA",
        "hero-tag-1": "Intelligence Artificielle (GenAI/Machine Learning)",
        "hero-tag-2": "DevOps & Infrastructure",
        "hero-tag-3": "Python, Bash, Java",

        // Sidebar
        "nav-about": "À propos",
        "nav-cv": "CV",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "nav-chat": "Discuter avec moi",

        // About
        "about-title": "À propos de moi",
        "about-text-1": "Passionné par l'intelligence artificielle et le DevOps, j'ai <strong>obtenu</strong> mon diplôme d'ingénieur à <span class=\"hover-word\" data-image=\"polytech\">Polytech Nancy</span> avec un <span class=\"hover-word\" data-image=\"diplome\">double diplôme</span> en IA (Master II Vision et Robotique).",
        "about-text-2": "Après mon expérience chez <span class=\"hover-word\" data-image=\"hermine\">HermineIA</span> à <span class=\"hover-word\" data-image=\"stationf\">STATION F</span> en tant qu'Applied AI Engineer, j'ai développé un assistant juridique multi-agents et dirigé des projets d'automatisation ETL, réalisant 90% de gain de temps sur les migrations clients.",
        "about-text-3": "Mon parcours m'a mené de la création d'outils de monitoring chez <span class=\"hover-word\" data-image=\"equasens\">Equasens</span> à l'architecture de systèmes agentiques résilients, en passant par des projets de deep learning et MLOps. Actuellement en préparation de la certification AWS Solutions Architect Associate.",
        "about-text-4": "Ce qui m'intéresse ? L'intersection fascinante entre l'intelligence artificielle et l'infrastructure DevOps, où chaque infrastructure et pipeline permet de déployer des modèles qui transforment notre façon de travailler.",
        "about-text-5": "Quand je ne code pas, vous me trouverez sur un court de tennis, dans une salle de boxe, à étudier la biomécanique ou dans un cinéma.",
        "about-text-6": "Disponible maintenant pour de nouveaux défis techniques passionnants.",

        // CV Header
        "cv-title": "Ingénieur DevOps & IA",
        "cv-availability": "Disponible immédiatement, mobile à l'échelle nationale et internationale",
        "cv-driver": "🚗 Permis B & Véhicule",

        // CV Section Titles
        "cv-profile-title": "Profil",
        "cv-experience-title": "Expérience",
        "cv-education-title": "Formation",
        "cv-certifications-title": "Certifications",
        "cv-projects-title": "Projets",

        // CV Profile
        "cv-profile-text": "Ingénieur DevOps et IA avec une forte orientation vers la construction d'<span class=\"highlight\">architectures durables et de qualité production</span>. Mon parcours couvre l'administration Linux, l'ingénierie de données et le développement d'agents IA. Je porte un intérêt profond aux design patterns et aux meilleures pratiques garantissant la maintenabilité à long terme des systèmes. Actuellement en préparation de la certification <span class=\"highlight\">AWS Solutions Architect Associate</span>, je souhaite exploiter mon expertise Python/Shell et mon expérience DevOps pour bâtir des solutions évolutives et performantes dans des environnements Cloud-native.",

        // CV Experience - HermineIA Data Engineer
        "exp1-title": "HermineIA – Data Engineer Freelance",
        "exp1-duration": "Décembre 2025 - Janvier 2025",
        "exp1-li1": "<strong>Automatisation ETL :</strong> Conception de scripts Python/SQL documentés pour analyser, normaliser et migrer des bases de données clients, garantissant l'intégrité des données.",
        "exp1-li2": "<strong>Cartographie collaborative :</strong> Traduction des besoins métier en spécifications visuelles (Excalidraw/Excel) via des revues itératives avec les parties prenantes.",
        "exp1-li3": "<strong>Gestion de clientèle :</strong> Supervision du cycle de vie complet du projet, de la mise en place administrative à la livraison, assurant la transparence via des rapports bi-hebdomadaires.",
        "exp1-li4": "<strong>Impact Clé :</strong> Réduction de 90% du temps de migration client par rapport au traitement manuel.",

        // CV Experience - HermineIA AI Engineer
        "exp2-title": "HermineIA – Applied AI Engineer",
        "exp2-duration": "Février 2025 - Septembre 2025",
        "exp2-li1": "<strong>Architecture Agentique Résiliente (Hiérarchique) :</strong> Orchestration d'un assistant juridique hybride à base d'agents IA (Python, FastAPI, Redis, Firebase) utilisant des API natives pour assurer la persistance de l'état et un contrôle granulaire.",
        "exp2-li2": "<strong>Ingénierie à coût optimisé :</strong> Conception d'un système d'injection de contexte NoSQL (évitant les RAG complexes) et d'outils de benchmarking internes pour optimiser le ratio Performance/Coût.",
        "exp2-li3": "<strong>Pont Juridique-NLP :</strong> Collaboration avec des juristes pour traduire le jargon juridique complexe en prompts de haute précision, garantissant une analyse documentaire exacte.",
        "exp2-li4": "<strong>Impact Clé :</strong> Signature de 2 clients et 15 bêta-testeurs | Gain de temps de 50% sur la rédaction juridique | Potentiel de vente incitative.",

        // CV Experience - Equasens
        "exp3-title": "Equasens – Ingénieur DevOps",
        "exp3-duration": "Février 2024 - Juin 2024",
        "exp3-li1": "<strong>Conception de systèmes robustes :</strong> Développement d'une solution de diagnostic et de monitoring utilisant les principes du Software Craftsmanship (SOLID, TDD en Bash) pour assurer fiabilité et maintenabilité.",
        "exp3-li2": "<strong>Automatisation DevOps :</strong> Mise en œuvre d'un pipeline CI/CD Jenkins pour automatiser les déploiements en production dans un environnement Gitflow.",
        "exp3-li3": "<strong>Leadership Agile :</strong> Facilitation des rétrospectives de sprint pour une équipe de 9 personnes (collecte de feedbacks, identification des axes d'amélioration, organisation des sessions sur Miro).",
        "exp3-li4": "<strong>Communication :</strong> Animation d'une session de partage de connaissances sur le TDD pour 3 personnes.",
        "exp3-li5": "<strong>Impact Clé :</strong> Réduction de 30% du temps d'analyse serveur pour les équipes de support sur plus de 8 000 pharmacies.",

        // CV Education
        "edu1-title": "Master II – IA appliquée à la Vision et à la Robotique (IA2VR)",
        "edu1-school": "Faculté des Sciences et Technologies de Nancy",
        "edu1-li1": "Fondamentaux du Machine Learning : Deep Learning, Reinforcement Learning et applications",
        "edu1-li2": "Pipeline complet de pré-entraînement, fine-tuning (CNN & ResNet50)",
        "edu1-li3": "Optimisation des paramètres d'entraînement, mise en place et analyse des métriques",
        "edu1-li4": "Algorithmes de planification et contrôle robotique",

        "edu2-title": "Diplôme d'Ingénieur – Systèmes d'Information et Réseaux",
        "edu2-school": "Polytech Nancy",
        "edu2-li1": "Réseaux informatiques : TCP/IP, DNS, DHCP, HTTP, Routage IP, Sécurité réseau",
        "edu2-li2": "Génie logiciel : POO, Design Patterns, Qualité du code, API REST",
        "edu2-li3": "Bases de données : SQL, NoSQL, Algèbre relationnelle",
        "edu2-li4": "Systèmes : Administration Linux, Scripts Bash, Virtualisation",

        "edu3-title": "Classes Préparatoires MPSI-PSI",
        "edu3-school": "Mathématiques, Physique et Sciences de l'Ingénieur",
        "edu3-li1": "Bases solides en mathématiques et statistiques",
        "edu3-li2": "Analyse mathématique avancée et algèbre linéaire",
        "edu3-li3": "Fondamentaux de physique et sciences de l'ingénieur",
        "edu3-li4": "Préparation aux concours d'entrée des grandes écoles d'ingénieurs",

        // CV Skills
        "cv-skills-title": "Compétences",
        "skill-cloud-title": "Cloud & DevOps",
        "skill-cloud-text": "<strong>AWS:</strong> IAM, EC2, S3, Route53, SQS, SNS, ElastiCache. <strong>Infrastructure:</strong> Docker (K3s, dind), Kubernetes, Terraform, Pipelines CI/CD, Jenkins.",
        "skill-ai-title": "IA & Machine Learning",
        "skill-ai-text": "PyTorch, TensorFlow, Hugging Face Transformers, LoRA/PEFT, MLFlow, SLURM.",
        "skill-agents-title": "Agents IA & Ingénierie de Contexte",
        "skill-agents-text": "LangGraph, Agno, Google ADK, Injection de Contexte, Redis, Firebase, FastAPI.",
        "skill-dev-title": "Développement & Méthodologies",
        "skill-dev-text": "<strong>Langages:</strong> Python, Bash, SQL. <strong>Principes:</strong> TDD, SOLID, DRY, KISS, Software Craftsmanship, GitOps.",
        "skill-lang-title": "Langues",
        "skill-lang-text": "Français (Natif), Anglais (Professionnel - TOEIC 865), Allemand (Notions).",

        // CV Certifications
        "cert-aws": "• AWS Certified Solutions Architect Associate (Examen prévu mars 2026)",
        "cert-toeic": "• TOEIC : 865/990",
        "cert-hf": "• Hugging face Agent Course, Hugging Face",
        "cert-linux": "• Administration de Serveurs Linux, Open Classroom",

        // CV Projects
        "cv-projects-gitlab": "Mon Gitlab :",
        "cv-projects-mlops": "MLOps :",
        "cv-projects-mlops-1": "<strong>Classifieur de Tickets Jira :</strong> Fine-tuning DistilBERT avec LoRA/PEFT pour classification d'incidents. Architecture cloud hybride (Terraform IaC) connectant AWS S3 et ressources locales via SQS. Workflow GitOps avec FluxCD, suivi MLFlow.",
        "cv-projects-ml": "ML :",
        "cv-projects-ml-1": "Segmentation Sémantique pour segmentation d'objets sur dataset PascalVOC avec modèle CNN U-Net : Pytorch, TensorBoard, ONNX (Voir Gitlab : U-Net)",
        "cv-projects-ml-2": "Contrôle de l'angle de direction d'un véhicule simulé par vision : ROS2, Pytorch, ONNX, TensorBoard (voir Gitlab : SteerSim)",
        "cv-projects-ml-3": "Implémentation d'un RNN pour classification de sentiments sur tweets",
        "cv-projects-ml-4": "Implémentation d'un DCGAN pour génération d'images synthétiques sur dataset Fashion MNIST",
        "cv-projects-devops": "DevOps :",
        "cv-projects-devops-1": "Pipeline CI/CD pour backend d'application Java : Gitlab CI (voir Gitlab : Backend Production Deployment)",
        "cv-projects-devops-2": "Cluster de 4 conteneurs pour application \"Docker coins Miner\" : KinD, Helm, Kubectl (voir Gitlab : Kubernetes-simple-app)",
        "cv-projects-devops-3": "Conteneurisation d'une application PHP : Docker, RabbitMQ (voir Gitlab : container project)",

        // CV Interests
        "cv-interests-title": "Centres d'intérêt",
        "interest-1": "Lecture 📖",
        "interest-2": "Cuisine 🍳",
        "interest-3": "Entraînement physique et kinésithérapie : sciences du mouvement et biomécanique 🏋️‍♂️",
        "interest-4": "Tennis et Boxe 🎾 🥊",

        // Projects Section
        "projects-header-title": "Mes Projets",
        "projects-header-subtitle": "Découvrez mes réalisations techniques",
        "projects-ai-title": "🤖 Intelligence Artificielle & MLOps",
        "projects-devops-title": "⚙️ DevOps & Infrastructure",

        // Project Cards
        "project-jira-title": "Classifieur de Tickets Jira",
        "project-jira-desc": "Pipeline MLOps avec fine-tuning DistilBERT (LoRA/PEFT), architecture hybride AWS/local via Terraform, GitOps avec FluxCD.",
        "project-unet-title": "Segmentation Sémantique U-Net",
        "project-unet-desc": "Segmentation d'objets sur le dataset PascalVOC utilisant un modèle CNN U-Net avec PyTorch, TensorBoard et ONNX.",
        "project-steersim-title": "Contrôle Véhicule par Vision",
        "project-steersim-desc": "Contrôle de l'angle de direction d'un véhicule simulé par vision par ordinateur. Pipeline ML complet avec ROS2.",
        "project-hermine-title": "Solution LegalTech Multi-Agents",
        "project-hermine-desc": "Développement d'une solution agentique pour les professionnels du droit : Q&A automatique et analyse de documents juridiques.",
        "project-superdiag-title": "SuperDiag - Solution de Monitoring",
        "project-superdiag-desc": "Solution de monitoring serveur client développée chez Equasens. Conception et développement complets avec tests unitaires.",
        "project-kubernetes-title": "Cluster Kubernetes",
        "project-kubernetes-desc": "Déploiement d'un cluster de 4 conteneurs pour une application distribuée avec orchestration Kubernetes et monitoring complet.",
        "project-cicd-title": "Pipeline CI/CD Java",
        "project-cicd-desc": "Pipeline CI/CD complet pour un backend d'application Java avec GitLab CI, tests automatisés et déploiement conteneurisé.",

        // Contact
        "contact-title": "Me contacter",
        "contact-subtitle": "N'hésitez pas à me contacter pour discuter d'opportunités ou échanger des idées sur nos projets communs",
        "contact-social": "Réseaux Sociaux",
        "contact-email": "Email",
        "contact-footer": "Disponible maintenant pour de nouveaux défis",

        // Chat
        "chat-title": "💬 Discutez avec ma version IA",
        "chat-subtitle": "Posez-moi des questions sur mon parcours, mes compétences ou mes projets !",
        "chat-placeholder": "Tapez votre question ici...",
        "chat-send": "Envoyer",
        "chat-bot-greeting": "👋 Bonjour ! Je suis la version IA de Wassil NAKIB. Je peux vous parler de mon parcours en ingénierie IA, de mes expériences chez HermineIA et Equasens, et de mes projets en machine learning et DevOps. Que souhaitez-vous savoir ?",

        // CV Download Preview
        "cv-preview-title": "CV - Wassil NAKIB",
        "cv-preview-subtitle": "Ingénieur Machine Learning & DevOps",
        "cv-preview-format": "Format PDF - 2 pages",

        // CV Download Hover
        "cv-download-title": "Télécharger le CV",

        // Hidden Menu Item
        "nav-hidden-movies": "Films & Séries",

        // Resources
        "resources-title": "Sources Utiles",
        "resources-subtitle": "Une sélection d'outils et de documentation que je trouve précieux",
        "nav-resources": "Ressources",
        "resource-fossflow-title": "FossFLOW",
        "resource-fossflow-desc": "Créez de beaux diagrammes réseaux pour votre documentation d'infrastructure",
        "resource-fossflow-tag": "Diagrammes",
        "resource-stephane-title": "Blog Stéphane Robert",
        "resource-stephane-desc": "Blog complet sur les bonnes pratiques et outils DevSecOps",
        "resource-stephane-tag": "DevSecOps",
        "resource-resume-title": "Easy Free Resume",
        "resource-resume-desc": "Modèles de CV compatibles ATS pour construire votre CV professionnel",
        "resource-resume-tag": "Carrière",
        "resource-roadmap-title": "Roadmap.sh",
        "resource-roadmap-desc": "Roadmaps et parcours d'apprentissage pour toute carrière ou compétence IT",
        "resource-roadmap-tag": "Apprentissage",

        // Easter eggs
        "console-message": "Arrête de regarder mon code ! 👀",
        "dont-click-btn": "Attrape moi si tu peux  !"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    document.getElementById('lang-text').textContent = currentLang === 'en' ? 'EN' : 'FR';
    localStorage.setItem('portfolio-lang', currentLang);
    applyTranslations();

    // Restart hero typing animation with new language
    if (typeof restartHeroTyping === 'function') {
        restartHeroTyping();
    }
}

function applyTranslations() {
    const t = translations[currentLang];

    // Hero
    const heroGreeting = document.querySelector('.hero-greeting h5');
    if (heroGreeting) heroGreeting.textContent = t['hero-greeting'];

    const heroTitle = document.querySelector('.hero-title p');
    if (heroTitle) heroTitle.innerHTML = t['hero-title'] + ' <span class="cursor">|</span>';

    const heroTags = document.querySelectorAll('.hero-tag');
    if (heroTags.length >= 3) {
        heroTags[0].textContent = ' ' + t['hero-tag-1'] + ' ';
        heroTags[1].textContent = ' ' + t['hero-tag-2'];
        heroTags[2].textContent = ' ' + t['hero-tag-3'];
    }

    // Sidebar - 6 items: About, CV, Projects, Resources, Contact, Chat
    const navItems = document.querySelectorAll('.sidebar .nav-item');
    if (navItems.length >= 6) {
        navItems[0].textContent = ' ' + t['nav-about'];
        navItems[1].textContent = ' ' + t['nav-cv'];
        navItems[2].textContent = ' ' + t['nav-projects'];
        navItems[3].textContent = ' ' + t['nav-resources'];
        navItems[4].textContent = ' ' + t['nav-contact'];
        navItems[5].textContent = ' ' + t['nav-chat'];
    }

    // About
    const aboutTitle = document.querySelector('.propos em');
    if (aboutTitle) aboutTitle.textContent = t['about-title'] + ' ';

    const aboutTexts = document.querySelectorAll('.about-text');
    if (aboutTexts.length > 0) {
        const aboutDiv = aboutTexts[0];
        aboutDiv.innerHTML = t['about-text-1'] + '<br><br>' +
                            t['about-text-2'] + '<br><br>' +
                            t['about-text-3'] + '<br><br>' +
                            t['about-text-4'] + '<br><br>' +
                            t['about-text-5'] + '<br><br>' +
                            t['about-text-6'];
    }

    // CV Title
    const cvTitle = document.querySelector('.cv-title');
    if (cvTitle) cvTitle.textContent = ' ' + t['cv-title'];

    // CV Availability
    const cvAvailability = document.querySelector('.cv-availability');
    if (cvAvailability) cvAvailability.textContent = t['cv-availability'];

    // CV Section Titles
    const cvSectionTitles = document.querySelectorAll('.cv-section-title');
    cvSectionTitles.forEach(title => {
        const text = title.textContent.trim();
        if (text === 'Profile' || text === 'Profil') {
            title.textContent = t['cv-profile-title'];
        } else if (text === 'Experience' || text === 'Expérience') {
            title.textContent = t['cv-experience-title'];
        } else if (text === 'Education' || text === 'Formation') {
            title.textContent = t['cv-education-title'];
        } else if (text === 'Certifications') {
            title.textContent = t['cv-certifications-title'];
        } else if (text === 'Projects' || text === 'Projets') {
            title.textContent = t['cv-projects-title'];
        }
    });

    // CV Profile Text
    const cvProfileSection = document.querySelectorAll('.cv-section')[0];
    if (cvProfileSection) {
        const profileP = cvProfileSection.querySelector('p');
        if (profileP) profileP.innerHTML = t['cv-profile-text'];
    }

    // CV Experiences
    const experiences = document.querySelectorAll('.cv-experience');
    if (experiences.length >= 3) {
        // Experience 1 - HermineIA Data Engineer
        const exp1Title = experiences[0].querySelector('h4');
        const exp1Duration = experiences[0].querySelector('.cv-duration');
        const exp1Items = experiences[0].querySelectorAll('li');
        if (exp1Title) exp1Title.textContent = t['exp1-title'];
        if (exp1Duration) exp1Duration.textContent = t['exp1-duration'];
        if (exp1Items.length >= 4) {
            exp1Items[0].innerHTML = t['exp1-li1'];
            exp1Items[1].innerHTML = t['exp1-li2'];
            exp1Items[2].innerHTML = t['exp1-li3'];
            exp1Items[3].innerHTML = t['exp1-li4'];
        }

        // Experience 2 - HermineIA AI Engineer
        const exp2Title = experiences[1].querySelector('h4');
        const exp2Duration = experiences[1].querySelector('.cv-duration');
        const exp2Items = experiences[1].querySelectorAll('li');
        if (exp2Title) exp2Title.textContent = t['exp2-title'];
        if (exp2Duration) exp2Duration.textContent = t['exp2-duration'];
        if (exp2Items.length >= 4) {
            exp2Items[0].innerHTML = t['exp2-li1'];
            exp2Items[1].innerHTML = t['exp2-li2'];
            exp2Items[2].innerHTML = t['exp2-li3'];
            exp2Items[3].innerHTML = t['exp2-li4'];
        }

        // Experience 3 - Equasens
        const exp3Title = experiences[2].querySelector('h4');
        const exp3Duration = experiences[2].querySelector('.cv-duration');
        const exp3Items = experiences[2].querySelectorAll('li');
        if (exp3Title) exp3Title.textContent = t['exp3-title'];
        if (exp3Duration) exp3Duration.textContent = t['exp3-duration'];
        if (exp3Items.length >= 5) {
            exp3Items[0].innerHTML = t['exp3-li1'];
            exp3Items[1].innerHTML = t['exp3-li2'];
            exp3Items[2].innerHTML = t['exp3-li3'];
            exp3Items[3].innerHTML = t['exp3-li4'];
            exp3Items[4].innerHTML = t['exp3-li5'];
        }
    }

    // CV Education
    const educations = document.querySelectorAll('.cv-education');

    // Education 1 - Master II
    if (educations.length >= 1) {
        const edu1Title = educations[0].querySelector('h4');
        const edu1School = educations[0].querySelector('.cv-school');
        const edu1Items = educations[0].querySelectorAll('li');
        if (edu1Title) edu1Title.textContent = t['edu1-title'];
        if (edu1School) edu1School.textContent = t['edu1-school'];
        if (edu1Items.length >= 4) {
            edu1Items[0].textContent = t['edu1-li1'];
            edu1Items[1].textContent = t['edu1-li2'];
            edu1Items[2].textContent = t['edu1-li3'];
            edu1Items[3].textContent = t['edu1-li4'];
        }
    }

    // Education 2 - Polytech
    if (educations.length >= 2) {
        const edu2Title = educations[1].querySelector('h4');
        const edu2School = educations[1].querySelector('.cv-school');
        const edu2Items = educations[1].querySelectorAll('li');
        if (edu2Title) edu2Title.textContent = t['edu2-title'];
        if (edu2School) edu2School.textContent = t['edu2-school'];
        if (edu2Items.length >= 4) {
            edu2Items[0].textContent = t['edu2-li1'];
            edu2Items[1].textContent = t['edu2-li2'];
            edu2Items[2].textContent = t['edu2-li3'];
            edu2Items[3].textContent = t['edu2-li4'];
        }
    }

    // Education 3 - MPSI-PSI
    if (educations.length >= 3) {
        const edu3Title = educations[2].querySelector('h4');
        const edu3School = educations[2].querySelector('.cv-school');
        const edu3Items = educations[2].querySelectorAll('li');
        if (edu3Title) edu3Title.textContent = t['edu3-title'];
        if (edu3School) edu3School.textContent = t['edu3-school'];
        if (edu3Items.length >= 4) {
            edu3Items[0].textContent = t['edu3-li1'];
            edu3Items[1].textContent = t['edu3-li2'];
            edu3Items[2].textContent = t['edu3-li3'];
            edu3Items[3].textContent = t['edu3-li4'];
        }
    }

    // Projects Section Titles
    const projectSectionTitles = document.querySelectorAll('#projectwrapper .section-title');
    if (projectSectionTitles.length >= 2) {
        projectSectionTitles[0].textContent = t['projects-ai-title'];
        projectSectionTitles[1].textContent = t['projects-devops-title'];
    }

    // Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        if (title && desc) {
            const preview = card.getAttribute('data-preview');
            if (preview === 'jira-mlops') {
                title.textContent = t['project-jira-title'];
                desc.textContent = t['project-jira-desc'];
            } else if (preview === 'unet') {
                title.textContent = t['project-unet-title'];
                desc.textContent = t['project-unet-desc'];
            } else if (preview === 'steersim') {
                title.textContent = t['project-steersim-title'];
                desc.textContent = t['project-steersim-desc'];
            } else if (preview === 'hermine') {
                title.textContent = t['project-hermine-title'];
                desc.textContent = t['project-hermine-desc'];
            } else if (preview === 'superdiag') {
                title.textContent = t['project-superdiag-title'];
                desc.textContent = t['project-superdiag-desc'];
            } else if (preview === 'kubernetes') {
                title.textContent = t['project-kubernetes-title'];
                desc.textContent = t['project-kubernetes-desc'];
            } else if (preview === 'cicd') {
                title.textContent = t['project-cicd-title'];
                desc.textContent = t['project-cicd-desc'];
            }
        }
    });

    // CV Skills - translate section title and all skill categories
    const allSectionTitles = document.querySelectorAll('.cv-section-title');
    allSectionTitles.forEach(title => {
        const text = title.textContent.trim();
        if (text === 'Skills' || text === 'Compétences') {
            title.textContent = t['cv-skills-title'];
        } else if (text === 'Interests' || text === 'Centres d\'intérêt') {
            title.textContent = t['cv-interests-title'];
        }
    });

    const skillCategories = document.querySelectorAll('.cv-skill-category');
    if (skillCategories.length >= 5) {
        // Cloud & DevOps
        const skill1Title = skillCategories[0].querySelector('h5');
        const skill1Text = skillCategories[0].querySelector('p');
        if (skill1Title) skill1Title.textContent = t['skill-cloud-title'];
        if (skill1Text) skill1Text.innerHTML = t['skill-cloud-text'];

        // AI & ML
        const skill2Title = skillCategories[1].querySelector('h5');
        const skill2Text = skillCategories[1].querySelector('p');
        if (skill2Title) skill2Title.textContent = t['skill-ai-title'];
        if (skill2Text) skill2Text.textContent = t['skill-ai-text'];

        // AI Agents
        const skill3Title = skillCategories[2].querySelector('h5');
        const skill3Text = skillCategories[2].querySelector('p');
        if (skill3Title) skill3Title.textContent = t['skill-agents-title'];
        if (skill3Text) skill3Text.textContent = t['skill-agents-text'];

        // Development
        const skill4Title = skillCategories[3].querySelector('h5');
        const skill4Text = skillCategories[3].querySelector('p');
        if (skill4Title) skill4Title.textContent = t['skill-dev-title'];
        if (skill4Text) skill4Text.innerHTML = t['skill-dev-text'];

        // Languages
        const skill5Title = skillCategories[4].querySelector('h5');
        const skill5Text = skillCategories[4].querySelector('p');
        if (skill5Title) skill5Title.textContent = t['skill-lang-title'];
        if (skill5Text) skill5Text.textContent = t['skill-lang-text'];
    }

    // CV Certifications (index 4: Profile=0, Experience=1, Education=2, Skills=3, Certifications=4)
    const certSection = document.querySelectorAll('.cv-section')[4];
    if (certSection) {
        const certItems = certSection.querySelectorAll('li');
        if (certItems.length >= 4) {
            // AWS cert (first item without class)
            if (!certItems[0].classList.contains('certification-item')) {
                certItems[0].textContent = t['cert-aws'];
            }
            // TOEIC (second item without class)
            if (!certItems[1].classList.contains('certification-item')) {
                certItems[1].textContent = t['cert-toeic'];
            }
            // HF cert
            const hfCertText = certItems[2].querySelector('.certification-text');
            if (hfCertText) hfCertText.textContent = t['cert-hf'];
            // Linux cert
            const linuxCertText = certItems[3].querySelector('.certification-text');
            if (linuxCertText) linuxCertText.textContent = t['cert-linux'];
        }
    }

    // CV Projects section (index 5)
    const cvProjectsSection = document.querySelectorAll('.cv-section')[5];
    if (cvProjectsSection) {
        const gitlabLink = cvProjectsSection.querySelector('.cv-gitlab-link');
        if (gitlabLink) {
            const link = gitlabLink.querySelector('a');
            if (link) {
                gitlabLink.innerHTML = t['cv-projects-gitlab'] + ' <a href="https://gitlab.com/users/SilloVV/projects" target="_blank" class="gitlab-link">https://gitlab.com/users/SilloVV/projects</a>';
            }
        }

        const projectH5s = cvProjectsSection.querySelectorAll('.cv-projects h5');
        const projectUls = cvProjectsSection.querySelectorAll('.cv-projects ul');

        if (projectH5s.length >= 3) {
            projectH5s[0].textContent = t['cv-projects-mlops'];
            projectH5s[1].textContent = t['cv-projects-ml'];
            projectH5s[2].textContent = t['cv-projects-devops'];
        }

        if (projectUls.length >= 3) {
            // MLOps
            const mlopsItems = projectUls[0].querySelectorAll('li');
            if (mlopsItems.length >= 1) mlopsItems[0].innerHTML = t['cv-projects-mlops-1'];

            // ML
            const mlItems = projectUls[1].querySelectorAll('li');
            if (mlItems.length >= 4) {
                mlItems[0].textContent = t['cv-projects-ml-1'];
                mlItems[1].textContent = t['cv-projects-ml-2'];
                mlItems[2].textContent = t['cv-projects-ml-3'];
                mlItems[3].textContent = t['cv-projects-ml-4'];
            }

            // DevOps
            const devopsItems = projectUls[2].querySelectorAll('li');
            if (devopsItems.length >= 3) {
                devopsItems[0].textContent = t['cv-projects-devops-1'];
                devopsItems[1].textContent = t['cv-projects-devops-2'];
                devopsItems[2].textContent = t['cv-projects-devops-3'];
            }
        }
    }

    // CV Interests (index 6)
    const interestsSection = document.querySelectorAll('.cv-section')[6];
    if (interestsSection) {
        const interestItems = interestsSection.querySelectorAll('li');
        if (interestItems.length >= 4) {
            interestItems[0].textContent = t['interest-1'];
            interestItems[1].textContent = t['interest-2'];
            interestItems[2].textContent = t['interest-3'];
            interestItems[3].textContent = t['interest-4'];
        }
    }

    // CV Driver's license
    const cvContact = document.querySelector('.cv-contact');
    if (cvContact) {
        const spans = cvContact.querySelectorAll('span');
        if (spans.length >= 2) {
            spans[1].textContent = t['cv-driver'] + ' ';
        }
    }

    // Projects page header
    const projectsHeader = document.querySelector('.projects-header');
    if (projectsHeader) {
        const h2 = projectsHeader.querySelector('h2');
        const p = projectsHeader.querySelector('p');
        if (h2) h2.textContent = t['projects-header-title'];
        if (p) p.textContent = t['projects-header-subtitle'];
    }

    // Contact
    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) contactTitle.textContent = ' ' + t['contact-title'];

    const contactSubtitle = document.querySelector('.contact-subtitle');
    if (contactSubtitle) contactSubtitle.textContent = t['contact-subtitle'];

    const contactSocial = document.querySelector('.social-method h3');
    if (contactSocial) contactSocial.textContent = t['contact-social'];

    const contactEmail = document.querySelector('.email-method h3');
    if (contactEmail) contactEmail.textContent = t['contact-email'];

    const contactFooter = document.querySelector('.contact-footer p');
    if (contactFooter) contactFooter.textContent = ' ' + t['contact-footer'];

    // Chat
    const chatTitle = document.querySelector('.chat-header h2');
    if (chatTitle) chatTitle.textContent = t['chat-title'];

    const chatSubtitle = document.querySelector('.chat-header p');
    if (chatSubtitle) chatSubtitle.textContent = t['chat-subtitle'];

    const chatInput = document.getElementById('chat-input');
    if (chatInput) chatInput.placeholder = t['chat-placeholder'];

    const chatSend = document.getElementById('send-button');
    if (chatSend) chatSend.textContent = t['chat-send'];

    // Chat bot greeting (first message)
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        const firstBotMessage = chatMessages.querySelector('.bot-message .message-content');
        if (firstBotMessage && !firstBotMessage.hasAttribute('data-user-message')) {
            firstBotMessage.textContent = t['chat-bot-greeting'];
        }
    }

    // CV Download Preview
    const cvPreview = document.querySelector('.cv-preview-content');
    if (cvPreview) {
        const h4 = cvPreview.querySelector('h4');
        const p = cvPreview.querySelector('p');
        const small = cvPreview.querySelector('small');
        if (h4) h4.textContent = t['cv-preview-title'];
        if (p) p.textContent = t['cv-preview-subtitle'];
        if (small) small.textContent = t['cv-preview-format'];
    }

    // CV Download Link - change PDF based on language and update title
    const cvDownloadLink = document.getElementById('cv-download-link');
    if (cvDownloadLink) {
        cvDownloadLink.title = t['cv-download-title'];
        if (currentLang === 'fr') {
            cvDownloadLink.href = 'assets/CV_NAKIB_WASSIL.pdf';
            cvDownloadLink.download = 'CV_Wassil_NAKIB.pdf';
        } else {
            cvDownloadLink.href = 'assets/RESUME_NAKIB_WASSIL.pdf';
            cvDownloadLink.download = 'Resume_Wassil_NAKIB.pdf';
        }
    }

    // Hidden Menu Item (Easter Egg)
    const hiddenNavItem = document.querySelector('.hidden-nav-item');
    if (hiddenNavItem) hiddenNavItem.textContent = t['nav-hidden-movies'];

    // Resources Section
    const resourcesHeader = document.querySelector('.resources-header');
    if (resourcesHeader) {
        const h2 = resourcesHeader.querySelector('h2');
        const p = resourcesHeader.querySelector('p');
        if (h2) h2.textContent = t['resources-title'];
        if (p) p.textContent = t['resources-subtitle'];
    }

    // Resources cards
    const resourceCards = document.querySelectorAll('.resource-card');
    const resourceKeys = ['fossflow', 'stephane', 'resume', 'roadmap'];
    resourceCards.forEach((card, index) => {
        if (index < resourceKeys.length) {
            const key = resourceKeys[index];
            const title = card.querySelector('h3');
            const desc = card.querySelector('.resource-desc');
            const tag = card.querySelector('.resource-tag');
            if (title) title.textContent = t[`resource-${key}-title`];
            if (desc) desc.textContent = t[`resource-${key}-desc`];
            if (tag) tag.textContent = t[`resource-${key}-tag`];
        }
    });

}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang) {
        currentLang = savedLang;
        document.getElementById('lang-text').textContent = currentLang === 'en' ? 'EN' : 'FR';
    }
    // Always apply translations on load
    applyTranslations();
});
