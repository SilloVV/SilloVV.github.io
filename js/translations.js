// Translations for EN/FR
const translations = {
    en: {
        // Hero
        "hero-greeting": "Hi, I'm",
        "hero-title": "AgiRisk Development Manager",
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
        "cv-profile-text": "DevOps and AI Software Engineer currently working as <span class=\"highlight\">Freelance Development Manager for AgiRisk at Cerema</span>, a flood-risk prevention platform. My background spans Linux administration, Data Engineering, AI Agent development and the delivery of <span class=\"highlight\">sustainable, production-grade architectures</span>. I apply software design patterns and engineering best practices to build scalable, reliable and maintainable Cloud-native solutions.",

        // CV Experience - Cerema / AgiRisk
        "exp0-title": "Cerema – Freelance Development Manager, AgiRisk",
        "exp0-duration": "March 2026 - Present · 5 months",
        "exp0-li1": "<strong>Development leadership:</strong> Led the development of AgiRisk, a flood-risk prevention and territorial resilience platform.",
        "exp0-li2": "<strong>Technical delivery:</strong> Coordinated product requirements, technical design and implementation to deliver a reliable, maintainable platform.",
        "exp0-li3": "<strong>Stakeholder coordination:</strong> Worked with Cerema experts and project stakeholders to translate flood-prevention needs into actionable features.",
        "exp0-li4": "<strong>Public-interest impact:</strong> Contributed to improving risk awareness and decision support for territories exposed to flooding.",

        // CV Experience - HermineIA Data Engineer
        "exp1-title": "HermineIA – Freelance Data Engineer",
        "exp1-duration": "December 2025 - January 2026",
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
        "cv-projects-webgis": "Web Development & GIS :",
        "cv-projects-webgis-1": "<strong>Dump Alert:</strong> Full-stack Django 5.2 / GeoDjango application for illegal dump reporting with PostGIS geolocation, interactive Leaflet heatmap, QGIS/PyQGIS marker generation and Django admin for report validation with interoperable geospatial data export.",
        "cv-projects-webgis-2": "<strong>Doctolib Bis:</strong> Full-stack vaccination booking application. Modular Angular frontend (features/reservation, features/admin) with REST API services, Spring Boot backend (Controllers, Services, Repositories, DTO), PostgreSQL database. JWT authentication with role system (Admin, Super-Admin, Doctor) and Angular guards.",
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
        "projects-ai-title": " AI & MLOps",
        "projects-devops-title": " DevOps & Infrastructure",
        "projects-webgis-title": " Web Development & GIS",

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

        // Project Detailed Descriptions - English
        "project-jira-detail-title": "Technical Details:",
        "project-jira-detail-1": "<strong>Fine-tuning:</strong> DistilBERT model using LoRA and PEFT for efficient incident classification",
        "project-jira-detail-2": "<strong>Hybrid Cloud:</strong> Terraform IaC connecting AWS S3 and local resources via SQS for asynchronous processing",
        "project-jira-detail-3": "<strong>CI/CD:</strong> Trunk-Based Development with FluxCD (GitOps), pre-commits, linters (Ruff, yamllint, TFLint)",
        "project-jira-detail-4": "<strong>Tracking:</strong> MLFlow for experiment management and model lifecycle",
        "project-jira-detail-5": "<strong>Impact:</strong> Production-grade MLOps pipeline following AWS Solutions Architect principles",

        "project-unet-detail-title": "Technical Details:",
        "project-unet-detail-1": "<strong>Model:</strong> U-Net CNN architecture for semantic segmentation on PascalVOC dataset",
        "project-unet-detail-2": "<strong>Framework:</strong> PyTorch for model development and training",
        "project-unet-detail-3": "<strong>Monitoring:</strong> TensorBoard for metrics tracking and visualization",
        "project-unet-detail-4": "<strong>Deployment:</strong> ONNX format for model export and inference optimization",
        "project-unet-detail-5": "<strong>Application:</strong> Precise object segmentation for computer vision tasks",

        "project-steersim-detail-title": "Technical Details:",
        "project-steersim-detail-1": "<strong>System Integration:</strong> ROS2 publish/subscribe architecture for vehicle telemetry and real-time control",
        "project-steersim-detail-2": "<strong>Data Engineering:</strong> Multi-camera collector (3 POVs + steering metadata) with synchronized ROS2 topics",
        "project-steersim-detail-3": "<strong>Distributed Training:</strong> Large-scale training on Slurm cluster with PyTorch, hyperparameter optimization",
        "project-steersim-detail-4": "<strong>Monitoring:</strong> TensorBoard for Loss and F1-Score tracking, custom \"distance-to-route\" evaluation",
        "project-steersim-detail-5": "<strong>Impact:</strong> Complete end-to-end ML and robotics pipeline for autonomous steering",

        "project-hermine-detail-title": "Technical Details:",
        "project-hermine-detail-1": "<strong>Architecture:</strong> Hierarchical multi-agent system (Python, FastAPI, Redis, Firebase) using Native APIs",
        "project-hermine-detail-2": "<strong>State Management:</strong> Persistent state and granular control across agent hierarchy",
        "project-hermine-detail-3": "<strong>Cost Optimization:</strong> NoSQL context injection (avoiding complex RAG), internal benchmarking tools",
        "project-hermine-detail-4": "<strong>Legal-NLP Bridge:</strong> Collaboration with jurists for high-precision prompt engineering",
        "project-hermine-detail-5": "<strong>Impact:</strong> 2 clients, 15 beta-testers, 50% time savings on legal drafting, upselling potential",

        "project-superdiag-detail-title": "Technical Details:",
        "project-superdiag-detail-1": "<strong>Software Craftsmanship:</strong> SOLID principles and TDD in Bash for high reliability",
        "project-superdiag-detail-2": "<strong>Testing:</strong> Comprehensive unit tests with shUnit2 framework",
        "project-superdiag-detail-3": "<strong>CI/CD:</strong> Jenkins pipeline for automated production deployments in Gitflow environment",
        "project-superdiag-detail-4": "<strong>Monitoring:</strong> Diagnostic and server analysis tools for pharmacy infrastructure",
        "project-superdiag-detail-5": "<strong>Impact:</strong> 30% reduction in server analysis time for support teams on 8,000+ pharmacies",

        "project-kubernetes-detail-title": "Technical Details:",
        "project-kubernetes-detail-1": "<strong>Orchestration:</strong> 4-container cluster for distributed application \"Docker coins Miner\"",
        "project-kubernetes-detail-2": "<strong>Tools:</strong> KinD (Kubernetes in Docker) for local development and testing",
        "project-kubernetes-detail-3": "<strong>Package Management:</strong> Helm charts for application deployment and configuration",
        "project-kubernetes-detail-4": "<strong>Monitoring:</strong> Complete observability stack for cluster health and performance",
        "project-kubernetes-detail-5": "<strong>Impact:</strong> Hands-on experience with production-grade Kubernetes orchestration",

        "project-cicd-detail-title": "Technical Details:",
        "project-cicd-detail-1": "<strong>Containerization:</strong> Multi-stage Docker builds with lightweight images using layer caching",
        "project-cicd-detail-2": "<strong>GitLab CI:</strong> Tag and version management, automated build and push to Docker Hub",
        "project-cicd-detail-3": "<strong>Artifact Registry:</strong> JAR artifacts stored in GitLab artifact registry",
        "project-cicd-detail-4": "<strong>Automation:</strong> Triggered on main branch commits or tag creation",
        "project-cicd-detail-5": "<strong>Impact:</strong> Streamlined deployment process for Java backend applications",

        // Dump Alert
        "project-dump-alert-title": "Dump Alert",
        "project-dump-alert-desc": "Full-stack Python/Django application for illegal dump reporting with PostGIS geolocation, interactive mapping (Leaflet heatmap) and QGIS marker export.",
        "project-dump-alert-detail-title": "Technical Details:",
        "project-dump-alert-detail-1": "<strong>Reporting:</strong> Image upload with danger level and PostGIS geolocation",
        "project-dump-alert-detail-2": "<strong>Administration:</strong> Django admin interface for report validation, interoperable geospatial data export",
        "project-dump-alert-detail-3": "<strong>GIS Mapping:</strong> Interactive Leaflet map with heatmap and QGIS/PyQGIS marker generation",
        "project-dump-alert-detail-4": "<strong>Stack:</strong> Python, Django 5.2, GeoDjango, PostGIS/SpatiaLite, django-leaflet, Pillow",
        "project-dump-alert-detail-5": "<strong>Impact:</strong> Complete GIS application for illegal dump reporting with real-time geospatial visualization",

        // Doctolib Bis
        "project-doctolib-bis-title": "Doctolib Bis - Vaccination Booking",
        "project-doctolib-bis-desc": "Full-stack vaccination booking application with Angular frontend, Spring Boot backend, PostgreSQL database and JWT security.",
        "project-doctolib-bis-detail-title": "Technical Details:",
        "project-doctolib-bis-detail-1": "<strong>Full-Stack Architecture:</strong> Spring Boot backend (Controllers, Services, Repositories, DTO) + Angular frontend",
        "project-doctolib-bis-detail-2": "<strong>Database:</strong> PostgreSQL with relational management of centers, slots and bookings",
        "project-doctolib-bis-detail-3": "<strong>Security:</strong> JWT authentication with role system (Admin, Super-Admin, Doctor) and Angular guards",
        "project-doctolib-bis-detail-4": "<strong>Frontend:</strong> Modular Angular components (features/reservation, features/admin) with REST API services",
        "project-doctolib-bis-detail-5": "<strong>Impact:</strong> Complete multi-center vaccination booking management application",

        // Portfolio Pédagogique
        "project-portfolio-pedago-title": "Portfolio – Pedagogical Manager",
        "project-portfolio-pedago-desc": "Trilingual professional portfolio for a pedagogical manager with 13 years of experience, showcasing skills, experiences and achievements.",
        "project-portfolio-pedago-detail-title": "Technical Details:",
        "project-portfolio-pedago-detail-1": "<strong>Design:</strong> Modern and professional UI with structured navigation (Home, Presentation, Skills, Experiences, Education, Achievements, Contact)",
        "project-portfolio-pedago-detail-2": "<strong>Trilingual:</strong> French/English/Arabic language toggle for international reach",
        "project-portfolio-pedago-detail-3": "<strong>Responsive:</strong> Fully responsive layout optimized for all screen sizes",
        "project-portfolio-pedago-detail-4": "<strong>Content:</strong> Showcase of 13 years of pedagogical engineering experience",
        "project-portfolio-pedago-detail-5": "<strong>Impact:</strong> Professional online presence for career visibility",

        // Contact
        "contact-title": "Contact me",
        "contact-subtitle": "Feel free to contact me to discuss opportunities or exchange ideas about our common projects",
        "contact-social": "Social Networks",
        "contact-freelance": "Freelance",
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
        "resource-cat-learning": "Learning & Career",
        "resource-cat-dev": "Development",
        "resource-cat-productivity": "Productivity",
        "resource-cat-design": "Design",
        "resource-cat-discovery": "Discovery & Research",
        "resource-cat-fun": "Fun",
        "resource-fossflow-title": "FossFLOW",
        "resource-fossflow-desc": "Create beautiful network diagrams for your infrastructure documentation",
        "resource-fossflow-tag": "Diagrams",
        "resource-stephane-title": "Stéphane Robert Blog",
        "resource-stephane-desc": "Comprehensive blog covering DevSecOps best practices and tools",
        "resource-stephane-tag": "DevSecOps",
        "resource-resume-title": "Easy Free Resume",
        "resource-resume-desc": "ATS-friendly resume templates to build your professional CV",
        "resource-resume-tag": "Career",
        "resource-wolfram-title": "Wolfram Alpha",
        "resource-wolfram-desc": "Computational intelligence for math, science, and data analysis",
        "resource-wolfram-tag": "Calculations",
        "resource-exercism-title": "Exercism",
        "resource-exercism-desc": "Free coding practice with mentorship in 70+ programming languages",
        "resource-exercism-tag": "Practice",
        "resource-toffeeshare-title": "ToffeeShare",
        "resource-toffeeshare-desc": "Secure peer-to-peer file sharing with no size limits",
        "resource-toffeeshare-tag": "Sharing",
        "resource-flowlauncher-title": "Flow Launcher",
        "resource-flowlauncher-desc": "Quick file search and app launcher for Windows",
        "resource-flowlauncher-tag": "Search",
        "resource-bitwarden-title": "Bitwarden",
        "resource-bitwarden-desc": "Open source password manager for individuals and teams",
        "resource-bitwarden-tag": "Security",
        "resource-roadmap-title": "Roadmap.sh",
        "resource-roadmap-desc": "Developer roadmaps and learning paths for any IT career or skill",
        "resource-roadmap-tag": "Learning",
        "resource-elgoog-title": "elgooG",
        "resource-elgoog-desc": "Time capsule of Google Easter Eggs - hidden games and surprises",
        "resource-elgoog-tag": "Easter Eggs",
        "resource-jsoncrack-title": "JSON Crack",
        "resource-jsoncrack-desc": "Visualize and explore JSON data in interactive graphs",
        "resource-jsoncrack-tag": "Development",
        "resource-devtoys-title": "DevToys",
        "resource-devtoys-desc": "Swiss Army knife for developers - converters, encoders, formatters",
        "resource-devtoys-tag": "Development",
        "resource-anchor-title": "Anchor",
        "resource-anchor-desc": "Offline-first, self-hostable note taking application",
        "resource-anchor-tag": "Notes",
        "resource-tinywow-title": "TinyWow",
        "resource-tinywow-desc": "Free online PDF tools - convert, compress, merge, split",
        "resource-tinywow-tag": "PDF Tools",
        "resource-ilovepdf-title": "iLovePDF",
        "resource-ilovepdf-desc": "All-in-one PDF editor - merge, split, compress, convert and sign",
        "resource-ilovepdf-tag": "PDF Tools",
        "resource-ditto-title": "Ditto",
        "resource-ditto-desc": "Powerful clipboard manager for Windows with search and sync",
        "resource-ditto-tag": "Productivity",
        "resource-snapdrop-title": "Snapdrop",
        "resource-snapdrop-desc": "Cross-platform file sharing like AirDrop - works on any device",
        "resource-snapdrop-tag": "Sharing",
        "resource-privnote-title": "Privnote",
        "resource-privnote-desc": "Send self-destructing notes that disappear after being read",
        "resource-privnote-tag": "Privacy",
        "resource-streamline-title": "Streamline",
        "resource-streamline-desc": "Massive icon library with illustrations and emojis",
        "resource-streamline-tag": "Icons",
        "resource-coolors-title": "Coolors",
        "resource-coolors-desc": "Generate perfect color palettes for your projects",
        "resource-coolors-tag": "Colors",
        "resource-alternativeto-title": "AlternativeTo",
        "resource-alternativeto-desc": "Find open source and free alternatives to any software",
        "resource-alternativeto-tag": "Discovery",
        "resource-miromind-title": "Dr. MiroMind",
        "resource-miromind-desc": "Free agentic AI search for deep research queries",
        "resource-miromind-tag": "AI Research",
        "resource-rayso-title": "Ray.so",
        "resource-rayso-desc": "Create beautiful code screenshots for sharing and documentation",
        "resource-rayso-tag": "Code Screenshots",
        "resource-diagrams-title": "Draw.io",
        "resource-diagrams-desc": "Create professional diagrams for architecture and workflows",
        "resource-diagrams-tag": "Diagrams",
        "resource-awscheat-title": "AWS Cheat Sheets",
        "resource-awscheat-desc": "Comprehensive AWS cheat sheets for certification preparation",
        "resource-awscheat-tag": "Cloud",
        "resource-coddy-title": "Coddy",
        "resource-coddy-desc": "The Duolingo for programming - learn any language with gamification",
        "resource-coddy-tag": "Learning",
        "resource-explainshell-title": "Explain Shell",
        "resource-explainshell-desc": "Paste a shell command and get a detailed breakdown of each argument",
        "resource-explainshell-tag": "Shell",
        "resource-excalidraw-title": "Excalidraw",
        "resource-excalidraw-desc": "Easy-to-use online diagramming tool with hand-drawn style (ExcalidrawZ for Mac)",
        "resource-excalidraw-tag": "Diagrams",
        "resource-sankeymatic-title": "SankeyMATIC",
        "resource-sankeymatic-desc": "Build Sankey diagrams to visualize financial flows and data",
        "resource-sankeymatic-tag": "Diagrams",
        "resource-skillssh-title": "Skills.sh",
        "resource-skillssh-desc": "Reusable capabilities for AI agents, installable with a single command",
        "resource-skillssh-tag": "AI Agents",
        "resource-reactbits-title": "ReactBits",
        "resource-reactbits-desc": "Collection of useful React components ready to copy and use",
        "resource-reactbits-tag": "React",
        "resource-claudecheat-title": "Claude Code Cheat Sheet",
        "resource-claudecheat-desc": "Ultimate collection of Claude Code tips, tricks, hacks and workflows",
        "resource-claudecheat-tag": "AI Agents",
        "resource-ventusky-title": "Ventusky",
        "resource-ventusky-desc": "Live weather map with detailed wind, rain, temperature and pressure data",
        "resource-ventusky-tag": "Weather",
        "resource-tosdr-title": "ToS;DR",
        "resource-tosdr-desc": "Terms of Service ratings and summaries - know your rights at a glance",
        "resource-tosdr-tag": "Privacy",
        "resource-rome2rio-title": "Rome2Rio",
        "resource-rome2rio-desc": "Find every way to get from A to B - flights, trains, buses, ferries",
        "resource-rome2rio-tag": "Travel",
        "resource-eatthismuch-title": "Eat This Much",
        "resource-eatthismuch-desc": "Automatic meal planner based on your diet and calorie goals",
        "resource-eatthismuch-tag": "Meal Planning",
        "resource-lifepro-title": "r/LifeProTips",
        "resource-lifepro-desc": "Top-rated life tips from Reddit's most useful subreddit",
        "resource-lifepro-tag": "Life Tips",
        "resource-superwhisper-title": "SuperWhisper",
        "resource-superwhisper-desc": "AI-powered voice-to-text transcription for fast dictation",
        "resource-superwhisper-tag": "Voice",
        "resource-geocaching-title": "Geocaching",
        "resource-geocaching-desc": "Real-world outdoor treasure hunting game using GPS",
        "resource-geocaching-tag": "Exploration",
        "resource-osint-title": "OSINT Framework",
        "resource-osint-desc": "Collection of open source intelligence tools organized by category",
        "resource-osint-tag": "OSINT",
        "resource-owid-title": "Our World in Data",
        "resource-owid-desc": "Research and data on global issues - health, poverty, environment",
        "resource-owid-tag": "Data",
        "resource-biodigital-title": "BioDigital Human",
        "resource-biodigital-desc": "Interactive 3D anatomy explorer - human body, organs and diseases",
        "resource-biodigital-tag": "Anatomy",
        "resource-animagraffs-title": "Animagraffs",
        "resource-animagraffs-desc": "Animated infographics explaining how things work - engines, screens, airbags",
        "resource-animagraffs-tag": "Education",
        "resource-nealfun-title": "Neal.fun",
        "resource-nealfun-desc": "Collection of addictive mini-games and interactive experiments",
        "resource-nealfun-tag": "Games",
        "resource-trustgame-title": "The Evolution of Trust",
        "resource-trustgame-desc": "Interactive guide to game theory and why we trust or distrust each other",
        "resource-trustgame-tag": "Game Theory",

        // Terminal overlay
        "term-ls-header": "$ ls -a",
        "term-press-tab": "Press Tab to choose",
        "term-enter-go": "Enter to go",
        "term-esc-exit": "Esc to Exit",
        "term-shortcut": "Shift + T",
        "term-hint": "Press Shift+T : terminal mode",

        // Contact
        "email-tooltip": "Click to copy",

        // Easter eggs
        "console-message": "Stop looking at my code! 👀",
        "dont-click-btn": "catch me, if you can !"
    },
    fr: {
        // Hero
        "hero-greeting": "Bonjour, je suis",
        "hero-title": "Responsable de développement AgiRisk",
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
        "about-text-1": "Passionné d'informatique et de création et gestion de projets qui répondent à un problème concret , j'ai <strong>obtenu</strong> mon diplôme d'ingénieur à <span class=\"hover-word\" data-image=\"polytech\">Polytech Nancy</span> avec un <span class=\"hover-word\" data-image=\"diplome\">double diplôme</span> en IA (Master II Vision et Robotique).",
        "about-text-2": "Après mon expérience chez <span class=\"hover-word\" data-image=\"hermine\">HermineIA</span> à <span class=\"hover-word\" data-image=\"stationf\">STATION F</span>(incubateur de plus de 1000 start ups) en tant qu'Applied AI Engineer, j'ai développé un assistant juridique multi-agents et dirigé des projets d'automatisation ETL, réalisant 90% de gain de temps sur les migrations clients.",
        "about-text-3": "Mon parcours m'a mené de la création d'outils de monitoring chez <span class=\"hover-word\" data-image=\"equasens\">Equasens</span> à l'architecture de systèmes agentiques résilients, en passant par des projets de deep learning et MLOps. Actuellement en préparation de la certification AWS Solutions Architect Associate.",
        "about-text-4": "Ce qui m'intéresse ? Créer des solutions propres, scalable et facilement maintenable à des problèmes concrets.",
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
        "cv-profile-text": "Ingénieur DevOps et IA, actuellement <span class=\"highlight\">Responsable de développement freelance d'AgiRisk au Cerema</span>, une plateforme de prévention du risque inondation. Mon parcours couvre l'administration Linux, l'ingénierie de données, le développement d'agents IA et la livraison d'<span class=\"highlight\">architectures durables et de qualité production</span>. J'applique les design patterns et les meilleures pratiques d'ingénierie pour bâtir des solutions Cloud-native évolutives, fiables et maintenables.",

        // CV Experience - Cerema / AgiRisk
        "exp0-title": "Cerema – Responsable de développement freelance, AgiRisk",
        "exp0-duration": "Mars 2026 - Aujourd'hui · 5 mois",
        "exp0-li1": "<strong>Pilotage du développement :</strong> Direction du développement d'AgiRisk, une plateforme de prévention du risque inondation et de résilience territoriale.",
        "exp0-li2": "<strong>Livraison technique :</strong> Coordination des besoins produit, de la conception technique et de l'implémentation afin de livrer une plateforme fiable et maintenable.",
        "exp0-li3": "<strong>Coordination des parties prenantes :</strong> Collaboration avec les experts du Cerema et les acteurs du projet pour transformer les besoins de prévention des inondations en fonctionnalités concrètes.",
        "exp0-li4": "<strong>Impact d'intérêt public :</strong> Contribution à l'amélioration de la sensibilisation au risque et de l'aide à la décision pour les territoires exposés aux inondations.",

        // CV Experience - HermineIA Data Engineer
        "exp1-title": "HermineIA – Data Engineer Freelance",
        "exp1-duration": "Décembre 2025 - Janvier 2026",
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
        "cv-projects-webgis": "Développement Web & SIG :",
        "cv-projects-webgis-1": "<strong>Dump Alert :</strong> Application full-stack Django 5.2 / GeoDjango de signalement de dépôts sauvages avec géolocalisation PostGIS, heatmap interactive Leaflet, génération de markers QGIS/PyQGIS et interface d'administration Django pour validation des signalements avec export de données géospatiales interopérables.",
        "cv-projects-webgis-2": "<strong>Doctolib Bis :</strong> Application full-stack de réservation de vaccinations. Frontend Angular modulaire (features/reservation, features/admin) avec services API REST, backend Spring Boot (Controllers, Services, Repositories, DTO), base PostgreSQL. Authentification JWT avec système de rôles (Admin, Super-Admin, Médecin) et guards Angular.",
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
        "projects-ai-title": " IA & MLOps",
        "projects-devops-title": " DevOps & Infrastructure",
        "projects-webgis-title": " Développement Web & SIG",

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

        // Project Detailed Descriptions - French
        "project-jira-detail-title": "Détails Techniques:",
        "project-jira-detail-1": "<strong>Fine-tuning:</strong> Modèle DistilBERT utilisant LoRA et PEFT pour classification efficace d'incidents",
        "project-jira-detail-2": "<strong>Cloud Hybride:</strong> IaC Terraform connectant AWS S3 et ressources locales via SQS pour traitement asynchrone",
        "project-jira-detail-3": "<strong>CI/CD:</strong> Trunk-Based Development avec FluxCD (GitOps), pre-commits, linters (Ruff, yamllint, TFLint)",
        "project-jira-detail-4": "<strong>Suivi:</strong> MLFlow pour la gestion des expérimentations et cycle de vie des modèles",
        "project-jira-detail-5": "<strong>Impact:</strong> Pipeline MLOps de qualité production suivant les principes AWS Solutions Architect",

        "project-unet-detail-title": "Détails Techniques:",
        "project-unet-detail-1": "<strong>Modèle:</strong> Architecture CNN U-Net pour segmentation sémantique sur dataset PascalVOC",
        "project-unet-detail-2": "<strong>Framework:</strong> PyTorch pour développement et entraînement du modèle",
        "project-unet-detail-3": "<strong>Monitoring:</strong> TensorBoard pour suivi des métriques et visualisation",
        "project-unet-detail-4": "<strong>Déploiement:</strong> Format ONNX pour export du modèle et optimisation de l'inférence",
        "project-unet-detail-5": "<strong>Application:</strong> Segmentation précise d'objets pour tâches de vision par ordinateur",

        "project-steersim-detail-title": "Détails Techniques:",
        "project-steersim-detail-1": "<strong>Intégration Système:</strong> Architecture ROS2 publish/subscribe pour télémétrie véhicule et contrôle temps réel",
        "project-steersim-detail-2": "<strong>Ingénierie de Données:</strong> Collecteur multi-caméras (3 POVs + métadonnées direction) avec topics ROS2 synchronisés",
        "project-steersim-detail-3": "<strong>Formation Distribuée:</strong> Entraînement large échelle sur cluster Slurm avec PyTorch, optimisation hyperparamètres",
        "project-steersim-detail-4": "<strong>Monitoring:</strong> TensorBoard pour suivi Loss et F1-Score, évaluation \"distance-to-route\" personnalisée",
        "project-steersim-detail-5": "<strong>Impact:</strong> Pipeline complet end-to-end ML et robotique pour direction autonome",

        "project-hermine-detail-title": "Détails Techniques:",
        "project-hermine-detail-1": "<strong>Architecture:</strong> Système multi-agents hiérarchique (Python, FastAPI, Redis, Firebase) avec APIs Natives",
        "project-hermine-detail-2": "<strong>Gestion d'État:</strong> État persistant et contrôle granulaire à travers hiérarchie d'agents",
        "project-hermine-detail-3": "<strong>Optimisation Coûts:</strong> Injection contexte NoSQL (évitant RAG complexe), outils benchmarking internes",
        "project-hermine-detail-4": "<strong>Pont Juridique-NLP:</strong> Collaboration avec juristes pour ingénierie de prompts haute précision",
        "project-hermine-detail-5": "<strong>Impact:</strong> 2 clients, 15 bêta-testeurs, 50% gain temps rédaction juridique, potentiel vente incitative",

        "project-superdiag-detail-title": "Détails Techniques:",
        "project-superdiag-detail-1": "<strong>Software Craftsmanship:</strong> Principes SOLID et TDD en Bash pour haute fiabilité",
        "project-superdiag-detail-2": "<strong>Tests:</strong> Tests unitaires complets avec framework shUnit2",
        "project-superdiag-detail-3": "<strong>CI/CD:</strong> Pipeline Jenkins pour déploiements production automatisés en environnement Gitflow",
        "project-superdiag-detail-4": "<strong>Monitoring:</strong> Outils diagnostic et analyse serveur pour infrastructure pharmacies",
        "project-superdiag-detail-5": "<strong>Impact:</strong> Réduction 30% temps analyse serveur équipes support sur 8 000+ pharmacies",

        "project-kubernetes-detail-title": "Détails Techniques:",
        "project-kubernetes-detail-1": "<strong>Orchestration:</strong> Cluster 4 conteneurs pour application distribuée \"Docker coins Miner\"",
        "project-kubernetes-detail-2": "<strong>Outils:</strong> KinD (Kubernetes in Docker) pour développement et tests locaux",
        "project-kubernetes-detail-3": "<strong>Gestion Paquets:</strong> Charts Helm pour déploiement et configuration application",
        "project-kubernetes-detail-4": "<strong>Monitoring:</strong> Stack observabilité complète pour santé et performance cluster",
        "project-kubernetes-detail-5": "<strong>Impact:</strong> Expérience pratique orchestration Kubernetes qualité production",

        "project-cicd-detail-title": "Détails Techniques:",
        "project-cicd-detail-1": "<strong>Conteneurisation:</strong> Builds Docker multi-étapes avec images légères utilisant layer caching",
        "project-cicd-detail-2": "<strong>GitLab CI:</strong> Gestion tags et versions, build automatique et push vers Docker Hub",
        "project-cicd-detail-3": "<strong>Registre Artefacts:</strong> Artefacts JAR stockés dans registre artefacts GitLab",
        "project-cicd-detail-4": "<strong>Automatisation:</strong> Déclenché sur commits branche main ou création tags",
        "project-cicd-detail-5": "<strong>Impact:</strong> Processus déploiement rationalisé pour applications backend Java",

        // Dump Alert
        "project-dump-alert-title": "Dump Alert",
        "project-dump-alert-desc": "Application full-stack Python/Django de signalement de dépôts sauvages avec géolocalisation PostGIS, cartographie interactive (heatmap Leaflet) et export markers QGIS.",
        "project-dump-alert-detail-title": "Détails Techniques :",
        "project-dump-alert-detail-1": "<strong>Signalement :</strong> Upload d'image avec niveau de dangerosité et géolocalisation PostGIS",
        "project-dump-alert-detail-2": "<strong>Administration :</strong> Interface d'administration Django pour validation des signalements, export de données géospatiales interopérables",
        "project-dump-alert-detail-3": "<strong>Cartographie SIG :</strong> Carte interactive Leaflet avec heatmap et génération de markers QGIS/PyQGIS",
        "project-dump-alert-detail-4": "<strong>Stack :</strong> Python, Django 5.2, GeoDjango, PostGIS/SpatiaLite, django-leaflet, Pillow",
        "project-dump-alert-detail-5": "<strong>Impact :</strong> Application SIG complète de signalement avec visualisation géospatiale temps réel",

        // Doctolib Bis
        "project-doctolib-bis-title": "Doctolib Bis - Réservation Vaccination",
        "project-doctolib-bis-desc": "Application full-stack de réservation de vaccinations avec frontend Angular, backend Spring Boot, base PostgreSQL et sécurité JWT.",
        "project-doctolib-bis-detail-title": "Détails Techniques :",
        "project-doctolib-bis-detail-1": "<strong>Architecture Full-Stack :</strong> Backend Spring Boot (Controllers, Services, Repositories, DTO) + Frontend Angular",
        "project-doctolib-bis-detail-2": "<strong>Base de données :</strong> PostgreSQL avec gestion relationnelle des centres, créneaux et réservations",
        "project-doctolib-bis-detail-3": "<strong>Sécurité :</strong> Authentification JWT avec système de rôles (Admin, Super-Admin, Médecin) et guards Angular",
        "project-doctolib-bis-detail-4": "<strong>Frontend :</strong> Composants Angular modulaires (features/reservation, features/admin) avec services API REST",
        "project-doctolib-bis-detail-5": "<strong>Impact :</strong> Application complète de gestion de rendez-vous vaccination multi-centres",

        // Portfolio Pédagogique
        "project-portfolio-pedago-title": "Portfolio – Responsable Pédagogique",
        "project-portfolio-pedago-desc": "Portfolio professionnel trilingue pour une responsable pédagogique avec 13 ans d'expérience, présentant compétences, expériences et réalisations.",
        "project-portfolio-pedago-detail-title": "Détails Techniques :",
        "project-portfolio-pedago-detail-1": "<strong>Design :</strong> Interface moderne et professionnelle avec navigation structurée (Accueil, Présentation, Compétences, Expériences, Formation, Réalisations, Contact)",
        "project-portfolio-pedago-detail-2": "<strong>Trilingue :</strong> Basculement français/anglais/arabe pour une portée internationale",
        "project-portfolio-pedago-detail-3": "<strong>Responsive :</strong> Mise en page entièrement responsive optimisée pour tous les écrans",
        "project-portfolio-pedago-detail-4": "<strong>Contenu :</strong> Mise en valeur de 13 ans d'expérience en ingénierie pédagogique",
        "project-portfolio-pedago-detail-5": "<strong>Impact :</strong> Présence en ligne professionnelle pour la visibilité de carrière",

        // Contact
        "contact-title": "Me contacter",
        "contact-subtitle": "N'hésitez pas à me contacter pour discuter d'opportunités ou échanger des idées sur nos projets communs",
        "contact-social": "Réseaux Sociaux",
        "contact-freelance": "Freelance",
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
        "resource-cat-learning": "Apprentissage & Carrière",
        "resource-cat-dev": "Développement",
        "resource-cat-productivity": "Productivité",
        "resource-cat-design": "Design",
        "resource-cat-discovery": "Découverte & Recherche",
        "resource-cat-fun": "Fun",
        "resource-fossflow-title": "FossFLOW",
        "resource-fossflow-desc": "Créez de beaux diagrammes réseaux pour votre documentation d'infrastructure",
        "resource-fossflow-tag": "Diagrammes",
        "resource-stephane-title": "Blog Stéphane Robert",
        "resource-stephane-desc": "Blog complet sur les bonnes pratiques et outils DevSecOps",
        "resource-stephane-tag": "DevSecOps",
        "resource-resume-title": "Easy Free Resume",
        "resource-resume-desc": "Modèles de CV compatibles ATS pour construire votre CV professionnel",
        "resource-resume-tag": "Carrière",
        "resource-wolfram-title": "Wolfram Alpha",
        "resource-wolfram-desc": "Intelligence computationnelle pour les maths, sciences et analyse de données",
        "resource-wolfram-tag": "Calculs",
        "resource-exercism-title": "Exercism",
        "resource-exercism-desc": "Pratique gratuite du code avec mentorat dans 70+ langages de programmation",
        "resource-exercism-tag": "Pratique",
        "resource-toffeeshare-title": "ToffeeShare",
        "resource-toffeeshare-desc": "Partage de fichiers peer-to-peer sécurisé sans limite de taille",
        "resource-toffeeshare-tag": "Partage",
        "resource-flowlauncher-title": "Flow Launcher",
        "resource-flowlauncher-desc": "Recherche rapide de fichiers et lanceur d'applications pour Windows",
        "resource-flowlauncher-tag": "Recherche",
        "resource-bitwarden-title": "Bitwarden",
        "resource-bitwarden-desc": "Gestionnaire de mots de passe open source pour particuliers et équipes",
        "resource-bitwarden-tag": "Sécurité",
        "resource-roadmap-title": "Roadmap.sh",
        "resource-roadmap-desc": "Roadmaps et parcours d'apprentissage pour toute carrière ou compétence IT",
        "resource-roadmap-tag": "Apprentissage",
        "resource-elgoog-title": "elgooG",
        "resource-elgoog-desc": "Capsule temporelle des Easter Eggs de Google - jeux et surprises cachés",
        "resource-elgoog-tag": "Easter Eggs",
        "resource-jsoncrack-title": "JSON Crack",
        "resource-jsoncrack-desc": "Visualisez et explorez les données JSON en graphes interactifs",
        "resource-jsoncrack-tag": "Développement",
        "resource-devtoys-title": "DevToys",
        "resource-devtoys-desc": "Couteau suisse pour développeurs - convertisseurs, encodeurs, formateurs",
        "resource-devtoys-tag": "Développement",
        "resource-anchor-title": "Anchor",
        "resource-anchor-desc": "Application de prise de notes offline-first et auto-hébergeable",
        "resource-anchor-tag": "Notes",
        "resource-tinywow-title": "TinyWow",
        "resource-tinywow-desc": "Outils PDF gratuits en ligne - convertir, compresser, fusionner, diviser",
        "resource-tinywow-tag": "Outils PDF",
        "resource-ilovepdf-title": "iLovePDF",
        "resource-ilovepdf-desc": "Éditeur PDF tout-en-un - fusionner, diviser, compresser, convertir et signer",
        "resource-ilovepdf-tag": "Outils PDF",
        "resource-ditto-title": "Ditto",
        "resource-ditto-desc": "Gestionnaire de presse-papiers puissant pour Windows avec recherche et sync",
        "resource-ditto-tag": "Productivité",
        "resource-snapdrop-title": "Snapdrop",
        "resource-snapdrop-desc": "Partage de fichiers multiplateforme comme AirDrop - fonctionne sur tout appareil",
        "resource-snapdrop-tag": "Partage",
        "resource-privnote-title": "Privnote",
        "resource-privnote-desc": "Envoyez des notes qui s'autodétruisent après avoir été lues",
        "resource-privnote-tag": "Confidentialité",
        "resource-streamline-title": "Streamline",
        "resource-streamline-desc": "Immense bibliothèque d'icônes avec illustrations et emojis",
        "resource-streamline-tag": "Icônes",
        "resource-coolors-title": "Coolors",
        "resource-coolors-desc": "Générez des palettes de couleurs parfaites pour vos projets",
        "resource-coolors-tag": "Couleurs",
        "resource-alternativeto-title": "AlternativeTo",
        "resource-alternativeto-desc": "Trouvez des alternatives open source et gratuites à tout logiciel",
        "resource-alternativeto-tag": "Découverte",
        "resource-miromind-title": "Dr. MiroMind",
        "resource-miromind-desc": "Recherche IA agentique gratuite pour requêtes approfondies",
        "resource-miromind-tag": "Recherche IA",
        "resource-rayso-title": "Ray.so",
        "resource-rayso-desc": "Créez de beaux screenshots de code pour partage et documentation",
        "resource-rayso-tag": "Screenshots Code",
        "resource-diagrams-title": "Draw.io",
        "resource-diagrams-desc": "Créez des diagrammes professionnels pour architecture et workflows",
        "resource-diagrams-tag": "Diagrammes",
        "resource-awscheat-title": "AWS Cheat Sheets",
        "resource-awscheat-desc": "Fiches récapitulatives AWS complètes pour la préparation aux certifications",
        "resource-awscheat-tag": "Cloud",
        "resource-coddy-title": "Coddy",
        "resource-coddy-desc": "Le Duolingo de la programmation - apprenez n'importe quel langage par le jeu",
        "resource-coddy-tag": "Apprentissage",
        "resource-explainshell-title": "Explain Shell",
        "resource-explainshell-desc": "Collez une commande shell et obtenez une explication détaillée de chaque argument",
        "resource-explainshell-tag": "Shell",
        "resource-excalidraw-title": "Excalidraw",
        "resource-excalidraw-desc": "Outil de diagramme en ligne facile avec style dessiné à la main (ExcalidrawZ pour Mac)",
        "resource-excalidraw-tag": "Diagrammes",
        "resource-sankeymatic-title": "SankeyMATIC",
        "resource-sankeymatic-desc": "Créez des diagrammes Sankey pour visualiser flux financiers et données",
        "resource-sankeymatic-tag": "Diagrammes",
        "resource-skillssh-title": "Skills.sh",
        "resource-skillssh-desc": "Capacités réutilisables pour agents IA, installables en une seule commande",
        "resource-skillssh-tag": "Agents IA",
        "resource-reactbits-title": "ReactBits",
        "resource-reactbits-desc": "Collection de composants React utiles prêts à copier et utiliser",
        "resource-reactbits-tag": "React",
        "resource-claudecheat-title": "Claude Code Cheat Sheet",
        "resource-claudecheat-desc": "Collection complète d'astuces, hacks et workflows pour Claude Code",
        "resource-claudecheat-tag": "Agents IA",
        "resource-ventusky-title": "Ventusky",
        "resource-ventusky-desc": "Carte météo en direct avec données de vent, pluie, température et pression",
        "resource-ventusky-tag": "Météo",
        "resource-tosdr-title": "ToS;DR",
        "resource-tosdr-desc": "Notes et résumés des conditions d'utilisation - connaissez vos droits en un coup d'œil",
        "resource-tosdr-tag": "Confidentialité",
        "resource-rome2rio-title": "Rome2Rio",
        "resource-rome2rio-desc": "Trouvez tous les moyens d'aller de A à B - avions, trains, bus, ferries",
        "resource-rome2rio-tag": "Voyage",
        "resource-eatthismuch-title": "Eat This Much",
        "resource-eatthismuch-desc": "Planificateur de repas automatique selon votre régime et objectifs caloriques",
        "resource-eatthismuch-tag": "Repas",
        "resource-lifepro-title": "r/LifeProTips",
        "resource-lifepro-desc": "Astuces de vie les mieux notées du subreddit le plus utile de Reddit",
        "resource-lifepro-tag": "Astuces",
        "resource-superwhisper-title": "SuperWhisper",
        "resource-superwhisper-desc": "Transcription vocale IA pour une dictée rapide",
        "resource-superwhisper-tag": "Voix",
        "resource-geocaching-title": "Geocaching",
        "resource-geocaching-desc": "Jeu de chasse au trésor en plein air utilisant le GPS",
        "resource-geocaching-tag": "Exploration",
        "resource-osint-title": "OSINT Framework",
        "resource-osint-desc": "Collection d'outils de renseignement en sources ouvertes organisés par catégorie",
        "resource-osint-tag": "OSINT",
        "resource-owid-title": "Our World in Data",
        "resource-owid-desc": "Recherche et données sur les enjeux mondiaux - santé, pauvreté, environnement",
        "resource-owid-tag": "Données",
        "resource-biodigital-title": "BioDigital Human",
        "resource-biodigital-desc": "Explorateur 3D interactif d'anatomie - corps humain, organes et maladies",
        "resource-biodigital-tag": "Anatomie",
        "resource-animagraffs-title": "Animagraffs",
        "resource-animagraffs-desc": "Infographies animées expliquant le fonctionnement des choses - moteurs, écrans, airbags",
        "resource-animagraffs-tag": "Éducation",
        "resource-nealfun-title": "Neal.fun",
        "resource-nealfun-desc": "Collection de mini-jeux addictifs et expériences interactives",
        "resource-nealfun-tag": "Jeux",
        "resource-trustgame-title": "L'Évolution de la Confiance",
        "resource-trustgame-desc": "Guide interactif sur la théorie des jeux et pourquoi on se fait confiance ou non",
        "resource-trustgame-tag": "Théorie des jeux",

        // Terminal overlay
        "term-ls-header": "$ ls -a",
        "term-press-tab": "Appuyez sur Tab pour choisir",
        "term-enter-go": "Entr\u00e9e pour aller",
        "term-esc-exit": "Esc pour quitter",
        "term-shortcut": "Shift + T",
        "term-hint": "Appuyez sur Shift+T : terminal mode",

        // Contact
        "email-tooltip": "Cliquer pour copier",

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

    // Set data-lang attribute on html element for CSS content translations
    document.documentElement.setAttribute('data-lang', currentLang);

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
    const experienceKeys = ['exp0', 'exp1', 'exp2', 'exp3'];
    experiences.forEach((experience, index) => {
        const key = experienceKeys[index];
        if (!key) return;

        const title = experience.querySelector('h4');
        const duration = experience.querySelector('.cv-duration');
        const items = experience.querySelectorAll('li');

        if (title) title.textContent = t[`${key}-title`];
        if (duration) duration.textContent = t[`${key}-duration`];
        items.forEach((item, itemIndex) => {
            const translation = t[`${key}-li${itemIndex + 1}`];
            if (translation) item.innerHTML = translation;
        });
    });

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
    if (projectSectionTitles.length >= 3) {
        projectSectionTitles[0].textContent = t['projects-webgis-title'];
        projectSectionTitles[1].textContent = t['projects-devops-title'];
        projectSectionTitles[2].textContent = t['projects-ai-title'];
    } else if (projectSectionTitles.length >= 2) {
        projectSectionTitles[0].textContent = t['projects-webgis-title'];
        projectSectionTitles[1].textContent = t['projects-devops-title'];
    }

    // Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const title = card.querySelector('.project-content h3');
        const desc = card.querySelector('.project-content p');
        const preview = card.getAttribute('data-preview');

        // Translate title and description
        if (title && desc) {
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
            } else if (preview === 'dump-alert') {
                title.textContent = t['project-dump-alert-title'];
                desc.textContent = t['project-dump-alert-desc'];
            } else if (preview === 'doctolib-bis') {
                title.textContent = t['project-doctolib-bis-title'];
                desc.textContent = t['project-doctolib-bis-desc'];
            } else if (preview === 'portfolio-pedagogique') {
                title.textContent = t['project-portfolio-pedago-title'];
                desc.textContent = t['project-portfolio-pedago-desc'];
            }
        }

        // Translate detailed descriptions
        const detailTitle = card.querySelector('.project-description h4');
        const detailItems = card.querySelectorAll('.project-description li');

        if (detailTitle && detailItems.length >= 5) {
            if (preview === 'jira-mlops') {
                detailTitle.textContent = t['project-jira-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-jira-detail-1'];
                detailItems[1].innerHTML = t['project-jira-detail-2'];
                detailItems[2].innerHTML = t['project-jira-detail-3'];
                detailItems[3].innerHTML = t['project-jira-detail-4'];
                detailItems[4].innerHTML = t['project-jira-detail-5'];
            } else if (preview === 'unet') {
                detailTitle.textContent = t['project-unet-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-unet-detail-1'];
                detailItems[1].innerHTML = t['project-unet-detail-2'];
                detailItems[2].innerHTML = t['project-unet-detail-3'];
                detailItems[3].innerHTML = t['project-unet-detail-4'];
                detailItems[4].innerHTML = t['project-unet-detail-5'];
            } else if (preview === 'steersim') {
                detailTitle.textContent = t['project-steersim-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-steersim-detail-1'];
                detailItems[1].innerHTML = t['project-steersim-detail-2'];
                detailItems[2].innerHTML = t['project-steersim-detail-3'];
                detailItems[3].innerHTML = t['project-steersim-detail-4'];
                detailItems[4].innerHTML = t['project-steersim-detail-5'];
            } else if (preview === 'hermine') {
                detailTitle.textContent = t['project-hermine-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-hermine-detail-1'];
                detailItems[1].innerHTML = t['project-hermine-detail-2'];
                detailItems[2].innerHTML = t['project-hermine-detail-3'];
                detailItems[3].innerHTML = t['project-hermine-detail-4'];
                detailItems[4].innerHTML = t['project-hermine-detail-5'];
            } else if (preview === 'superdiag') {
                detailTitle.textContent = t['project-superdiag-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-superdiag-detail-1'];
                detailItems[1].innerHTML = t['project-superdiag-detail-2'];
                detailItems[2].innerHTML = t['project-superdiag-detail-3'];
                detailItems[3].innerHTML = t['project-superdiag-detail-4'];
                detailItems[4].innerHTML = t['project-superdiag-detail-5'];
            } else if (preview === 'kubernetes') {
                detailTitle.textContent = t['project-kubernetes-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-kubernetes-detail-1'];
                detailItems[1].innerHTML = t['project-kubernetes-detail-2'];
                detailItems[2].innerHTML = t['project-kubernetes-detail-3'];
                detailItems[3].innerHTML = t['project-kubernetes-detail-4'];
                detailItems[4].innerHTML = t['project-kubernetes-detail-5'];
            } else if (preview === 'cicd') {
                detailTitle.textContent = t['project-cicd-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-cicd-detail-1'];
                detailItems[1].innerHTML = t['project-cicd-detail-2'];
                detailItems[2].innerHTML = t['project-cicd-detail-3'];
                detailItems[3].innerHTML = t['project-cicd-detail-4'];
                detailItems[4].innerHTML = t['project-cicd-detail-5'];
            } else if (preview === 'dump-alert') {
                detailTitle.textContent = t['project-dump-alert-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-dump-alert-detail-1'];
                detailItems[1].innerHTML = t['project-dump-alert-detail-2'];
                detailItems[2].innerHTML = t['project-dump-alert-detail-3'];
                detailItems[3].innerHTML = t['project-dump-alert-detail-4'];
                detailItems[4].innerHTML = t['project-dump-alert-detail-5'];
            } else if (preview === 'doctolib-bis') {
                detailTitle.textContent = t['project-doctolib-bis-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-doctolib-bis-detail-1'];
                detailItems[1].innerHTML = t['project-doctolib-bis-detail-2'];
                detailItems[2].innerHTML = t['project-doctolib-bis-detail-3'];
                detailItems[3].innerHTML = t['project-doctolib-bis-detail-4'];
                detailItems[4].innerHTML = t['project-doctolib-bis-detail-5'];
            } else if (preview === 'portfolio-pedagogique') {
                detailTitle.textContent = t['project-portfolio-pedago-detail-title'] || 'Technical Details:';
                detailItems[0].innerHTML = t['project-portfolio-pedago-detail-1'];
                detailItems[1].innerHTML = t['project-portfolio-pedago-detail-2'];
                detailItems[2].innerHTML = t['project-portfolio-pedago-detail-3'];
                detailItems[3].innerHTML = t['project-portfolio-pedago-detail-4'];
                detailItems[4].innerHTML = t['project-portfolio-pedago-detail-5'];
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

        if (projectH5s.length >= 4) {
            projectH5s[0].textContent = t['cv-projects-mlops'];
            projectH5s[1].textContent = t['cv-projects-ml'];
            projectH5s[2].textContent = t['cv-projects-webgis'];
            projectH5s[3].textContent = t['cv-projects-devops'];
        }

        if (projectUls.length >= 4) {
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

            // Web Development & GIS
            const webgisItems = projectUls[2].querySelectorAll('li');
            if (webgisItems.length >= 2) {
                webgisItems[0].innerHTML = t['cv-projects-webgis-1'];
                webgisItems[1].innerHTML = t['cv-projects-webgis-2'];
            }

            // DevOps
            const devopsItems = projectUls[3].querySelectorAll('li');
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

    const contactFreelance = document.querySelector('.malt-method h3');
    if (contactFreelance) contactFreelance.textContent = t['contact-freelance'];

    const contactEmail = document.querySelector('.email-method h3');
    if (contactEmail) contactEmail.textContent = t['contact-email'];

    const emailTooltip = document.getElementById('email-tooltip');
    if (emailTooltip) emailTooltip.textContent = t['email-tooltip'];

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

    // Resources category titles
    const categoryTitles = document.querySelectorAll('.resource-category-title');
    categoryTitles.forEach(title => {
        const key = title.getAttribute('data-translate');
        if (key && t[key]) {
            title.textContent = t[key];
        }
    });

    // Terminal overlay + sidebar hint
    document.querySelectorAll('[data-translate^="term-"]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (key && t[key]) {
            el.textContent = t[key];
        }
    });

    // Resources cards (using data-resource attribute for reliable mapping)
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        const key = card.getAttribute('data-resource');
        if (key) {
            const title = card.querySelector('h3');
            const desc = card.querySelector('.resource-desc');
            const tag = card.querySelector('.resource-tag');
            if (title && t[`resource-${key}-title`]) title.textContent = t[`resource-${key}-title`];
            if (desc && t[`resource-${key}-desc`]) desc.textContent = t[`resource-${key}-desc`];
            if (tag && t[`resource-${key}-tag`]) tag.textContent = t[`resource-${key}-tag`];
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
