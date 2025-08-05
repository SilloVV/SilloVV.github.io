

// Plus de logique de dark mode - mode clair uniquement



// Gestionnaire d'état unifié pour les pages
class PageManager {
    constructor() {
        this.currentPage = null;
        this.isAnimationRunning = false;
        this.sidebar = document.querySelector(".sidebar");
        this.btn = document.querySelector('#btn');
        this.heroAnimation = document.getElementById('hero_animation');
        this.heroAnimationImg = document.getElementById('hero__animation__img');
        this.originalAnimation = '';
        
        // Vérification que les éléments existent
        if (!this.btn) {
            console.error('Bouton #btn non trouvé');
            return;
        }
        if (!this.heroAnimation) {
            console.error('Élément #hero_animation non trouvé');
            return;
        }
        if (!this.heroAnimationImg) {
            console.error('Élément #hero__animation__img non trouvé');
            return;
        }
        
        this.pages = {
            'cv': {
                element: 'cvscroller',
                additionalElements: []
            },
            'projects': {
                element: 'projectwrapper',
                additionalElements: []
            },
            'contact': {
                element: 'contact-section',
                additionalElements: []
            },
            'about': {
                element: 'about-me',
                additionalElements: []
            },
            'chat': {
                element: 'chat-section',
                additionalElements: []
            }
        };
        
        this.init();
    }
    
    init() {
        // Gestion du bouton sidebar avec animation
        this.btn.onclick = () => {
            console.log('Bouton cliqué, currentPage:', this.currentPage);
            if (this.currentPage) {
                // Si une page est ouverte, la fermer d'abord
                this.hidePage(this.currentPage);
            } else {
                // Sinon, juste toggle la sidebar avec animation
                this.toggleSidebarAnimation();
            }
        };
    }
    
    toggleSidebarAnimation() {
        if (!this.isAnimationRunning) {
            // Animation d'ouverture
            this.isAnimationRunning = true;
            this.sidebar.classList.add('active');
            
            // Déclencher l'animation de l'image
            this.heroAnimationImg.style.animation = 'top-left 0.4s ease-out forwards';
            
        } else {
            // Animation de fermeture
            this.isAnimationRunning = false;
            this.sidebar.classList.remove('active');
            
            // Déclencher l'animation inverse de l'image
            this.heroAnimationImg.style.animation = 'reverse-top-left 0.4s ease-out forwards';
        }
    }
    
    showPage(pageName) {
        if (this.currentPage === pageName) {
            // Si la même page est demandée, la fermer et réactiver l'animation
            this.hidePage(pageName);
            // Pas de réactivation automatique
            return;
        }
        
        // Cacher toutes les autres pages
        this.hideAllPages();
        
        // Afficher la page demandée
        const page = this.pages[pageName];
        if (page) {
            document.getElementById('hero').style.display = 'none';
            document.getElementById(page.element).style.display = '';
            
            // Afficher les éléments additionnels
            page.additionalElements.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.style.display = '';
                } else {
                    console.warn(`Element ${elementId} not found`);
                }
            });
            
            this.currentPage = pageName;
            
            // Cacher le logo du menu quand une section est ouverte
            this.hideMenuLogo();
            
            // Fermer la sidebar avec animation de manière fluide
            if (this.sidebar.classList.contains('active') && this.isAnimationRunning) {
                this.toggleSidebarAnimation();
            }
        }
    }
    
    hidePage(pageName) {
        const page = this.pages[pageName];
        if (page) {
            document.getElementById(page.element).style.display = 'none';
            
            // Cacher les éléments additionnels
            page.additionalElements.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.style.display = 'none';
                } else {
                    console.warn(`Element ${elementId} not found`);
                }
            });
        }
        
        document.getElementById('hero').style.display = '';
        this.currentPage = null;
        
        // Réafficher le logo du menu
        this.showMenuLogo();
        
        // Ne pas réactiver automatiquement l'animation pour éviter l'aller-retour
    }
    
    hideMenuLogo() {
        const btn = document.getElementById('btn');
        if (btn) {
            btn.style.opacity = '0';
            btn.style.pointerEvents = 'none';
        }
    }
    
    showMenuLogo() {
        const btn = document.getElementById('btn');
        if (btn) {
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }
    }
    
    hideAllPages() {
        Object.keys(this.pages).forEach(pageName => {
            const page = this.pages[pageName];
            const mainElement = document.getElementById(page.element);
            if (mainElement) {
                mainElement.style.display = 'none';
            }
            page.additionalElements.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.style.display = 'none';
                } else {
                    console.warn(`Element ${elementId} not found`);
                }
            });
        });
    }
}

// Instance globale du gestionnaire
let pageManager;

// Initialiser le gestionnaire quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    pageManager = new PageManager();
});

// Fonctions publiques pour compatibilité
function show_cv() {
    if (pageManager) pageManager.showPage('cv');
}

function show_projects() {
    if (pageManager) pageManager.showPage('projects');
}

function show_contact() {
    if (pageManager) pageManager.showPage('contact');
}

function show_about() {
    if (pageManager) pageManager.showPage('about');
}


function show_chat() {
    if (pageManager) pageManager.showPage('chat');
}

function closeCurrentSection() {
    if (pageManager && pageManager.currentPage) {
        pageManager.hidePage(pageManager.currentPage);
    }
}

function copyEmail() {
    navigator.clipboard.writeText('wnakib21@gmail.com').then(() => {
        // Feedback visuel sur le bouton
        const copyBtn = document.querySelector('.copy-btn');
        const originalContent = copyBtn.innerHTML;
        
        // Changer l'icône temporairement
        copyBtn.innerHTML = '<i class="bx bx-check"></i>';
        copyBtn.style.background = 'rgba(34, 197, 94, 0.3)';
        
        // Créer et afficher le message de confirmation
        showCopyMessage();
        
        // Remettre l'icône originale après 2 secondes
        setTimeout(() => {
            copyBtn.innerHTML = originalContent;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Erreur lors de la copie:', err);
    });
}

function showCopyMessage() {
    // Supprimer le message existant s'il y en a un
    const existingMessage = document.querySelector('.copy-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Créer le message
    const message = document.createElement('div');
    message.className = 'copy-message';
    message.textContent = 'Copié dans le presse-papier !';
    
    // L'ajouter au container de contact
    const contactContent = document.querySelector('.contact-content');
    contactContent.appendChild(message);
    
    // Animation d'apparition
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 300);
    }, 3000);
}

// Fonction pour le chat LLM
let isLoading = false;

function sendMessage() {
    const input = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('chat-messages');
    
    const message = input.value.trim();
    if (!message || isLoading) return;
    
    // Ajouter le message utilisateur
    addMessage(message, 'user');
    input.value = '';
    
    // Désactiver le bouton pendant la requête
    isLoading = true;
    sendButton.disabled = true;
    sendButton.textContent = 'Envoi...';
    
    // Ajouter indicateur de frappe
    const typingIndicator = addTypingIndicator();
    
    // Simuler une réponse (remplacer par l'API Hugging Face)
    setTimeout(() => {
        typingIndicator.remove();
        const response = generateResponse(message);
        addMessage(response, 'bot');
        
        isLoading = false;
        sendButton.disabled = false;
        sendButton.textContent = 'Envoyer';
    }, 1500);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    messageDiv.innerHTML = `
        <div class="message-content">
            ${text}
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    
    typingDiv.innerHTML = `
        <div class="message-content">
            <span>En train d'écrire</span>
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    return typingDiv;
}

function generateResponse(userMessage) {
    // Réponses prédéfinies basées sur des mots-clés
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('parcours') || lowerMessage.includes('formation')) {
        return "Je suis en 5ème année d'ingénieur en double diplôme IA à Polytech Nancy. Mon parcours combine l'intelligence artificielle et les systèmes informatiques avancés, avec une spécialisation en machine learning et DevOps.";
    }
    
    if (lowerMessage.includes('stage') || lowerMessage.includes('expérience') || lowerMessage.includes('hermine')) {
        return "Actuellement, je réalise mon stage chez HermineIA à STATION F, où je développe une solution multi-agentique pour les professionnels du droit. J'ai également fait un stage chez Equasens où j'ai créé SuperDiag, une solution de monitoring de serveurs.";
    }
    
    if (lowerMessage.includes('projet') || lowerMessage.includes('github') || lowerMessage.includes('gitlab')) {
        return "Mes projets principaux incluent : la segmentation sémantique avec U-Net, le contrôle de véhicule par vision, des solutions multi-agentiques, des clusters Kubernetes et des pipelines CI/CD. Tu peux les consulter sur mon GitLab !";
    }
    
    if (lowerMessage.includes('compétence') || lowerMessage.includes('technologie')) {
        return "Mes compétences se divisent en deux domaines : l'IA (PyTorch, TensorBoard, LangGraph, HF Transformers) et le DevOps (Kubernetes, Docker, Jenkins, Linux, Bash). J'aime l'intersection entre ces deux mondes !";
    }
    
    if (lowerMessage.includes('devops')) {
        return "En DevOps, je maîtrise Kubernetes, Docker, Jenkins, Linux et Bash. J'ai développé SuperDiag chez Equasens et créé des pipelines CI/CD complets. J'aime automatiser et optimiser les infrastructures !";
    }
    
    if (lowerMessage.includes('ia') || lowerMessage.includes('machine learning') || lowerMessage.includes('ai')) {
        return "En IA, je travaille avec PyTorch, TensorBoard, ONNX pour le machine learning classique, et LangGraph, HF Transformers pour les agents IA. Mon projet le plus récent est une solution multi-agentique pour le domaine juridique.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
        return "Tu peux me contacter à wnakib21@gmail.com ou via LinkedIn. Je suis toujours ouvert aux discussions sur l'IA, le DevOps et les nouvelles opportunités !";
    }
    
    // Réponse par défaut
    return "Merci pour ta question ! Je suis spécialisé en machine learning et DevOps. N'hésite pas à me demander plus de détails sur mon parcours, mes expériences ou mes projets. Que souhaites-tu savoir exactement ?";
}

// Permettre l'envoi avec Entrée
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});


//Mouse animation 
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
     "var(--bg)", "var(--bg-alt)"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});


function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();



