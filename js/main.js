

// No more dark mode logic - light mode only




// Unified state manager for pages
class PageManager {
    constructor() {
        this.currentPage = null;
        this.isAnimationRunning = false;
        this.sidebar = document.querySelector(".sidebar");
        this.btn = document.querySelector('#btn');
        this.heroAnimation = document.getElementById('hero_animation');
        this.heroAnimationImg = document.getElementById('hero__animation__img');
        this.originalAnimation = '';
        
        // Check that elements exist
        if (!this.btn) {
            console.error('Button #btn not found');
            return;
        }
        if (!this.heroAnimation) {
            console.error('Element #hero_animation not found');
            return;
        }
        if (!this.heroAnimationImg) {
            console.error('Element #hero__animation__img not found');
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
            },
            'resources': {
                element: 'resources',
                additionalElements: []
            }
        };
        
        this.init();
    }
    
    init() {
        // Handle sidebar button with animation
        this.btn.onclick = () => {
            if (this.currentPage) {
                // If a page is open, close it first
                this.hidePage(this.currentPage);
            } else {
                // Otherwise, just toggle the sidebar with animation
                this.toggleSidebarAnimation();
            }
        };
    }
    
    toggleSidebarAnimation() {
        if (!this.isAnimationRunning) {
            // Opening animation
            this.isAnimationRunning = true;
            this.sidebar.classList.add('active');

            // Reset animation first, then trigger
            this.heroAnimationImg.style.animation = 'none';
            this.heroAnimationImg.offsetHeight; // Force reflow
            this.heroAnimationImg.style.animation = 'top-left 0.4s ease-out forwards';

        } else {
            // Closing animation
            this.isAnimationRunning = false;
            this.sidebar.classList.remove('active');

            // Reset animation first, then trigger reverse
            this.heroAnimationImg.style.animation = 'none';
            this.heroAnimationImg.offsetHeight; // Force reflow
            this.heroAnimationImg.style.animation = 'reverse-top-left 0.4s ease-out forwards';
        }
    }
    
    showPage(pageName) {
        if (this.currentPage === pageName) {
            // If the same page is requested, close it and reactivate animation
            this.hidePage(pageName);
            // No automatic reactivation
            return;
        }
        
        // Hide all other pages
        this.hideAllPages();
        
        // Display the requested page
        const page = this.pages[pageName];
        if (page) {
            document.getElementById('hero').style.display = 'none';
            document.getElementById(page.element).style.display = '';
            
            // Display additional elements
            page.additionalElements.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.style.display = '';
                } else {
                    console.warn(`Element ${elementId} not found`);
                }
            });
            
            this.currentPage = pageName;
            
            // Display CV button only on CV page
            const cvDownloadBtn = document.querySelector('.cv-download-fixed');
            if (cvDownloadBtn) {
                if (pageName === 'cv') {
                    cvDownloadBtn.style.display = 'flex';
                } else {
                    cvDownloadBtn.style.display = 'none';
                }
            }
            
            // Add class to indicate a page is open
            document.body.classList.add('page-open');
            
            // Hide menu logo when a section is open
            this.hideMenuLogo();
            
            // Completely hide sidebar when a page is open
            this.sidebar.style.display = 'none';
            
            // Close sidebar with smooth animation
            if (this.sidebar.classList.contains('active') && this.isAnimationRunning) {
                this.toggleSidebarAnimation();
            }

            // Re-apply translations when page is shown
            if (typeof applyTranslations === 'function') {
                applyTranslations();
            }
        }
    }
    
    hidePage(pageName) {
        const page = this.pages[pageName];
        if (page) {
            document.getElementById(page.element).style.display = 'none';
            
            // Hide additional elements
            page.additionalElements.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.style.display = 'none';
                } else {
                    console.warn(`Element ${elementId} not found`);
                }
            });
        }
        
        // No need to reset anything for the about section
        
        // Hide CV button when closing a page
        const cvDownloadBtn = document.querySelector('.cv-download-fixed');
        if (cvDownloadBtn) {
            cvDownloadBtn.style.display = 'none';
        }
        
        document.getElementById('hero').style.display = '';
        this.currentPage = null;

        // Remove class to indicate we're on the home page
        document.body.classList.remove('page-open');

        // If terminal mode is active, show overlay instead of sidebar
        if (document.body.classList.contains('terminal-mode')) {
            const overlay = document.getElementById('terminal-overlay');
            if (overlay) overlay.style.display = 'flex';
            this.sidebar.style.display = 'none';
            termSelectedIndex = -1;
            updateTermSelection();
            startCursorHideTimer();
        } else {
            // Show menu logo and sidebar again
            this.showMenuLogo();
            this.sidebar.style.display = '';
        }
        
        // Don't automatically reactivate animation to avoid back-and-forth
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
        
        // Hide CV button when closing pages
        const cvDownloadBtn = document.querySelector('.cv-download-fixed');
        if (cvDownloadBtn) {
            cvDownloadBtn.style.display = 'none';
        }
    }
}

// Global manager instance
let pageManager;

// Initialize manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    pageManager = new PageManager();
});

// Public functions for compatibility
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

function show_resources() {
    if (pageManager) pageManager.showPage('resources');
}

function closeCurrentSection() {
    if (pageManager && pageManager.currentPage) {
        // Reset section item selection
        sectionItemIndex = -1;
        updateSectionItemSelection();

        pageManager.hidePage(pageManager.currentPage);
    }
}

function copyEmail() {
    navigator.clipboard.writeText('wnakib21@gmail.com').then(() => {
        const mailDiv = document.querySelector('.mail');
        const originalHTML = mailDiv.innerHTML;

        // Show check logo
        mailDiv.innerHTML = '<img src="assets/icons/check_logo.svg" alt="Copied" class="check-logo-icon">';

        // Restore original content after 2 seconds
        setTimeout(() => {
            mailDiv.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Error during copy:', err);
    });
}

function showCopyMessage() {
    // Remove existing message if there is one
    const existingMessage = document.querySelector('.copy-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create the message
    const message = document.createElement('div');
    message.className = 'copy-message';
    message.textContent = 'Copied to clipboard!';
    
    // Add it to contact container
    const contactContent = document.querySelector('.contact-content');
    contactContent.appendChild(message);
    
    // Appearance animation
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 300);
    }, 3000);
}

// Function for LLM chat
let isLoading = false;

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const messagesContainer = document.getElementById('chat-messages');
    
    const message = input.value.trim();
    if (!message || isLoading) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Disable button during request
    isLoading = true;
    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';
    
    // Add typing indicator
    const typingIndicator = addTypingIndicator();
    
    try {
        // Call to OpenRouter API
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + OPENROUTER_API_KEY,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Wassil NAKIB Portfolio'
            },
            body: JSON.stringify({
                model: "tngtech/deepseek-r1t2-chimera:free",
                messages: [
                    {
                        role: "system",
                        content: "You are Wassil NAKIB, a French Machine Learning and DevOps engineer. You graduated from Polytech Nancy with a double degree in AI (Master II Vision and Robotics). Information about you: You completed your internship at HermineIA at STATION F as Applied AI Engineer, developing a multi-agent solution for legal professionals. You also did an internship at Equasens as DevOps Engineer where you created SuperDiag, a server monitoring solution. Your AI skills: PyTorch, TensorBoard, LangGraph, HF Transformers, ONNX, MLFlow. Your DevOps skills: Kubernetes, Docker, Jenkins, Linux, Bash, Terraform, AWS. Projects: MLOps Jira classifier, U-Net semantic segmentation, vehicle control by vision, multi-agent solutions, Kubernetes clusters. Email: wnakib21@gmail.com. GitLab: gitlab.com/SilloVV. LinkedIn: linkedin.com/in/wassil-nakib-031361293. Passions: cinema, physiotherapy, sports science, boxing, tennis. Always respond naturally and engagingly. You are passionate about the intersection between AI and DevOps."
                    },
                    {
                        role: "user",
                        content: message
                    }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });
        
        const data = await response.json();
        
        typingIndicator.remove();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            addMessage(data.choices[0].message.content, 'bot');
        } else {
            // Fallback to predefined responses in case of error
            const fallbackResponse = generateResponse(message);
            addMessage(fallbackResponse, 'bot');
        }
        
    } catch (error) {
        console.error('Error calling API:', error);
        typingIndicator.remove();
        
        // Fallback to predefined responses in case of network error
        const fallbackResponse = generateResponse(message);
        addMessage(fallbackResponse, 'bot');
    }
    
    isLoading = false;
    sendButton.disabled = false;
    sendButton.textContent = 'Send';
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
            <span>Typing</span>
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
    // Predefined responses based on keywords
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('parcours') || lowerMessage.includes('formation')) {
        return "I am in my 5th year of engineering in a double degree AI program at Polytech Nancy. My path combines artificial intelligence and advanced computer systems, with a specialization in machine learning and DevOps.";
    }
    
    if (lowerMessage.includes('stage') || lowerMessage.includes('expérience') || lowerMessage.includes('hermine')) {
        return "Currently, I am doing my internship at HermineIA at STATION F, where I develop a multi-agent solution for legal professionals. I also did an internship at Equasens where I created SuperDiag, a server monitoring solution.";
    }
    
    if (lowerMessage.includes('projet') || lowerMessage.includes('github') || lowerMessage.includes('gitlab')) {
        return "My main projects include: semantic segmentation with U-Net, vehicle control by vision, multi-agent solutions, Kubernetes clusters and CI/CD pipelines. You can check them out on my GitLab!";
    }
    
    if (lowerMessage.includes('compétence') || lowerMessage.includes('technologie')) {
        return "My skills are divided into two domains: AI (PyTorch, TensorBoard, LangGraph, HF Transformers) and DevOps (Kubernetes, Docker, Jenkins, Linux, Bash). I love the intersection between these two worlds!";
    }
    
    if (lowerMessage.includes('devops')) {
        return "In DevOps, I master Kubernetes, Docker, Jenkins, Linux and Bash. I developed SuperDiag at Equasens and created complete CI/CD pipelines. I love automating and optimizing infrastructures!";
    }
    
    if (lowerMessage.includes('ia') || lowerMessage.includes('machine learning') || lowerMessage.includes('ai')) {
        return "In AI, I work with PyTorch, TensorBoard, ONNX for classic machine learning, and LangGraph, HF Transformers for AI agents. My most recent project is a multi-agent solution for the legal domain.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
        return "You can contact me at wnakib21@gmail.com or via LinkedIn. I am always open to discussions about AI, DevOps and new opportunities!";
    }
    
    // Default response
    return "Thank you for your question! I specialize in machine learning and DevOps. Feel free to ask me for more details about my background, experiences or projects. What exactly would you like to know?";
}

// Allow sending with Enter
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


// Mouse animation 
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

// Inverter circle animation
const inverseurCircle = document.querySelector(".inverseur-circle");

function animateInverseurCircle() {
  if (inverseurCircle) {
    inverseurCircle.style.left = coords.x - 50 + "px"; // Center the 100px circle
    inverseurCircle.style.top = coords.y - 50 + "px";
  }
  requestAnimationFrame(animateInverseurCircle);
}

// Central white point animation
const cursorCenter = document.querySelector(".cursor-center");

function animateCursorCenter() {
  if (cursorCenter) {
    cursorCenter.style.left = coords.x - 2 + "px"; // Center the 4px point
    cursorCenter.style.top = coords.y - 2 + "px";
  }
  requestAnimationFrame(animateCursorCenter);
}

animateInverseurCircle();
animateCursorCenter();

// Hero name reveal effect - SilloVV appears where cursor is, Wassil NAKIB is masked
const heroName = document.querySelector('.hero-name');
const nomElement = document.getElementById('nom');
const sillowElement = document.getElementById('sillow');

// Circle radius for the reveal effect (matches inverseur-circle size)
const circleRadius = 50;

function updateHeroNameClipPath() {
    if (!heroName || !nomElement || !sillowElement) return;

    const rect = heroName.getBoundingClientRect();

    // Check if the circle (not just center) overlaps with the hero-name area
    // Expand detection by circleRadius in all directions
    const isCircleOverHeroName = (
        coords.x + circleRadius >= rect.left &&
        coords.x - circleRadius <= rect.right &&
        coords.y + circleRadius >= rect.top &&
        coords.y - circleRadius <= rect.bottom
    );

    if (isCircleOverHeroName) {
        // Calculate relative position within the hero-name element
        const relativeX = coords.x - rect.left;
        const relativeY = coords.y - rect.top;

        // Update SilloVV clip-path to show a circle at cursor position
        sillowElement.style.clipPath = `circle(${circleRadius}px at ${relativeX}px ${relativeY}px)`;

        // Update Wassil NAKIB to hide content at cursor position using CSS mask
        // We use a radial gradient mask: transparent inside circle, black (visible) outside
        nomElement.style.maskImage = `radial-gradient(circle ${circleRadius}px at ${relativeX}px ${relativeY}px, transparent 0%, transparent ${circleRadius}px, black ${circleRadius}px)`;
        nomElement.style.webkitMaskImage = `radial-gradient(circle ${circleRadius}px at ${relativeX}px ${relativeY}px, transparent 0%, transparent ${circleRadius}px, black ${circleRadius}px)`;
    } else {
        // Reset when cursor circle leaves the hero-name area
        sillowElement.style.clipPath = 'circle(0px at 50% 50%)';
        nomElement.style.maskImage = 'none';
        nomElement.style.webkitMaskImage = 'none';
    }

    requestAnimationFrame(updateHeroNameClipPath);
}

updateHeroNameClipPath();

// redirection au clic
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne toutes les cartes qui ont un lien défini
    const projectCards = document.querySelectorAll('.project-card[data-url]');
    
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Empêche la propagation si tu as d'autres éléments interactifs dedans
            e.preventDefault(); 
            
            const url = card.getAttribute('data-url');
            
            // Ouvre dans un nouvel onglet
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});
    
    
    
    // Hover management for keywords
    const hoverWords = document.querySelectorAll('.hover-word');
    
    hoverWords.forEach(word => {
        const imageId = word.getAttribute('data-image');
        const imageElement = document.getElementById(`hover-${imageId}`);
        
        if (imageElement) {
            word.addEventListener('mouseenter', () => {
                imageElement.style.opacity = '1';
                imageElement.style.visibility = 'visible';
            });
            
            word.addEventListener('mouseleave', () => {
                imageElement.style.opacity = '0';
                imageElement.style.visibility = 'hidden';
            });
        }
    });


// Function to close project previews
function closeProjectPreview(previewId) {
    const previewElement = document.getElementById(`preview-${previewId}`);
    const overlay = document.getElementById('preview-overlay');

    if (previewElement) {
        // Hide preview
        previewElement.style.opacity = '0';
        previewElement.style.visibility = 'hidden';

        // Hide blur overlay
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
        }

        // Show project section close button again
        const projectCloseBtn = document.getElementById('closeb-projects');
        if (projectCloseBtn) {
            projectCloseBtn.style.display = 'flex';
        }
    }
}

// ============== EASTER EGGS ==============

// Console message - Always visible when someone opens DevTools
(function() {
    // Show message immediately on page load
    console.log(
        '%cദ്ദി◝ ⩊ ◜.ᐟ',
        'color: #2903ff; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 0 #000;'
    );
    console.log(
        '%cQue cherches-tu ?! \nWhat are-you looking for ? ',
        'background: linear-gradient(135deg, #5064be, #3f41b6); color: #F5F5DC; font-size: 24px; font-weight: bold; padding: 20px 40px; border-radius: 10px; border: 2px solid #333;'
    );
    console.log(
        '%cMais puisque tu es là... bienvenue ! \nBut since you\'re here... welcome! ',
        'color: #4ecdc4; font-size: 14px; font-style: italic; padding: 10px;'
    );
    console.log(
        '%c╭─────────────────────────────────╮\n│  Made with ♥ by Wassil NAKIB    │\n│  github.com/SilloVV             │\n╰─────────────────────────────────╯',
        'color: #888; font-family: monospace; font-size: 12px;'
    );
    console.log(
        '%cPsst... Il y a des Easter Eggs cachés sur ce site ! Sauras-tu les trouver ? 🥚\nPsst... There are hidden Easter Eggs on this site! Can you find them?',
        'color: #ff6b6b; font-size: 13px; font-weight: bold; padding: 8px; background: rgba(255, 107, 107, 0.1); border-radius: 5px;'
    );
    console.log(
        '%c🕰️ Time Capsule: https://elgoog.im/ - Une collection des Easter Eggs de Google!\n   A collection of Google Easter Eggs!',
        'color: #4ecdc4; font-size: 12px; padding: 5px;'
    );
})();

// Runaway button - Escapes from cursor
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('dont-click-btn');
    if (!btn) return;

    let clickCount = 0;
    const escapeDistance = 100; // Distance to trigger escape
    const moveDistance = 140;   // How far to move

    // Update button text based on language
    const updateButtonText = () => {
        if (typeof currentLang !== 'undefined' && translations && translations[currentLang]) {
            btn.textContent = translations[currentLang]['dont-click-btn'] || "Don't click!";
        }
    };

    // Initial text
    updateButtonText();

    // Update on language change
    const originalToggle = window.toggleLanguage;
    window.toggleLanguage = function() {
        if (originalToggle) originalToggle();
        setTimeout(updateButtonText, 100);
    };

    // Get button center position
    const getBtnCenter = () => {
        const rect = btn.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    };

    // Move button away from cursor
    const escapeFromCursor = (cursorX, cursorY) => {
        const btnCenter = getBtnCenter();
        const dx = btnCenter.x - cursorX;
        const dy = btnCenter.y - cursorY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < escapeDistance) {
            // Calculate escape direction (away from cursor)
            const angle = Math.atan2(dy, dx);
            let newX = btnCenter.x + Math.cos(angle) * moveDistance;
            let newY = btnCenter.y + Math.sin(angle) * moveDistance;

            // Keep within viewport bounds (account for button size)
            const btnWidth = btn.offsetWidth;
            const btnHeight = btn.offsetHeight;
            const minX = btnWidth / 2 + 20;
            const maxX = window.innerWidth - btnWidth / 2 - 20;
            const minY = btnHeight / 2 + 20;
            const maxY = window.innerHeight - btnHeight / 2 - 20;

            newX = Math.max(minX, Math.min(maxX, newX));
            newY = Math.max(minY, Math.min(maxY, newY));

            // If stuck in corner, jump to opposite side
            if ((newX <= minX || newX >= maxX) && (newY <= minY || newY >= maxY)) {
                newX = window.innerWidth - newX;
                newY = window.innerHeight - newY;
                newX = Math.max(minX, Math.min(maxX, newX));
                newY = Math.max(minY, Math.min(maxY, newY));
            }

            // Apply new position
            btn.style.position = 'fixed';
            btn.style.right = 'auto';
            btn.style.bottom = 'auto';
            btn.style.left = (newX - btnWidth / 2) + 'px';
            btn.style.top = (newY - btnHeight / 2) + 'px';
        }
    };

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        escapeFromCursor(e.clientX, e.clientY);
    });

    // Handle click - after many attempts, let them "catch" it
    btn.addEventListener('click', () => {
        clickCount++;

        if (clickCount >= 5) {
            // They finally caught it!
            btn.classList.add('caught');
            btn.textContent = typeof currentLang !== 'undefined' && currentLang === 'fr'
                ? "Tu m'as eu ! 🎉"
                : "You got me! 🎉";

            // Reset after celebration
            setTimeout(() => {
                btn.classList.remove('caught');
                updateButtonText();
                clickCount = 0;

                // Reset position
                btn.style.left = 'auto';
                btn.style.top = 'auto';
                btn.style.right = '30px';
                btn.style.bottom = '80px';
            }, 2000);
        }
    });
});

// ============== TERMINAL MODE TOGGLE ==============
let termSelectedIndex = -1;
let cursorHideTimeout = null;

const termMenuItems = [
    { name: 'about-me/', fn: show_about },
    { name: 'curriculum/', fn: show_cv },
    { name: 'projects/', fn: show_projects },
    { name: 'resources/', fn: show_resources },
    { name: 'contact/', fn: show_contact },
    { name: 'chat/', fn: show_chat }
];

function toggleTerminalMode() {
    const isEntering = !document.body.classList.contains('terminal-mode');
    document.body.classList.toggle('terminal-mode');

    const overlay = document.getElementById('terminal-overlay');
    const sidebar = document.querySelector('.sidebar');
    const termArrow = document.querySelector('.term-shortcut-arrow');
    const hasOpenPage = pageManager && pageManager.currentPage;

    if (hasOpenPage) {
        // A section is open: just toggle terminal styling, don't show overlay
        if (termArrow) termArrow.style.display = isEntering ? 'none' : '';
    } else if (isEntering) {
        // No section open, entering TERM mode: show overlay
        termSelectedIndex = -1;

        if (overlay) overlay.style.display = 'flex';
        if (sidebar) sidebar.style.display = 'none';
        if (termArrow) termArrow.style.display = 'none';

        updateTermSelection();
        startCursorHideTimer();
    } else {
        // No section open, exiting TERM mode: hide overlay
        if (overlay) overlay.style.display = 'none';
        if (sidebar) sidebar.style.display = '';
        if (termArrow) termArrow.style.display = '';
        stopCursorHideTimer();
        document.body.classList.remove('cursor-hidden');
    }

    localStorage.setItem('terminal-mode', isEntering ? 'enabled' : 'disabled');
}

function updateTermSelection() {
    const items = document.querySelectorAll('#terminal-overlay .term-item');
    const promptTarget = document.getElementById('term-prompt-target');

    items.forEach((item, i) => {
        if (i === termSelectedIndex) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });

    if (promptTarget) {
        if (termSelectedIndex >= 0 && termSelectedIndex < termMenuItems.length) {
            promptTarget.textContent = termMenuItems[termSelectedIndex].name;
        } else {
            promptTarget.textContent = '_';
        }
    }
}

let sectionItemIndex = -1;

function termNavigate() {
    if (termSelectedIndex >= 0 && termSelectedIndex < termMenuItems.length) {
        const overlay = document.getElementById('terminal-overlay');
        if (overlay) overlay.style.display = 'none';

        sectionItemIndex = -1;
        // Keep terminal-mode class active but hide overlay
        termMenuItems[termSelectedIndex].fn();
    }
}

// Get the scrollable container for the current section
function getActiveSectionContainer() {
    if (!pageManager || !pageManager.currentPage) return null;
    const sectionMap = {
        'cv': '#cvscroller',
        'projects': '#projectwrapper',
        'resources': '#resources',
        'contact': '#contact-section',
        'about': '#about-me',
        'chat': '#chat-section'
    };
    const selector = sectionMap[pageManager.currentPage];
    return selector ? document.querySelector(selector) : null;
}

// Get selectable items in the current section
function getSectionSelectableItems() {
    if (!pageManager || !pageManager.currentPage) return [];
    const itemMap = {
        'projects': '#projectwrapper .project-card',
        'resources': '#resources .resource-card',
        'contact': '#contact-section .contact-icon, #contact-section .mail'
    };
    const selector = itemMap[pageManager.currentPage];
    return selector ? Array.from(document.querySelectorAll(selector)) : [];
}

// Highlight the selected item within a section
function updateSectionItemSelection() {
    // Remove previous highlights
    document.querySelectorAll('.term-section-selected').forEach(el => {
        el.classList.remove('term-section-selected');
    });

    const items = getSectionSelectableItems();
    if (sectionItemIndex >= 0 && sectionItemIndex < items.length) {
        items[sectionItemIndex].classList.add('term-section-selected');
        // Scroll item into view within the section container
        items[sectionItemIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Activate the selected item (open link / click)
function activateSectionItem() {
    const items = getSectionSelectableItems();
    if (sectionItemIndex < 0 || sectionItemIndex >= items.length) return;

    const item = items[sectionItemIndex];
    const page = pageManager.currentPage;

    if (page === 'projects') {
        const url = item.getAttribute('data-url');
        if (url) window.open(url, '_blank');
    } else if (page === 'resources') {
        // resource-card is an <a> tag
        if (item.href) window.open(item.href, '_blank');
    } else if (page === 'contact') {
        if (item.classList.contains('mail')) {
            copyEmail();
        } else {
            const link = item.querySelector('a');
            if (link && link.href) window.open(link.href, '_blank');
        }
    }
}

// Cursor hide on idle (only in terminal mode)
function startCursorHideTimer() {
    stopCursorHideTimer();
    cursorHideTimeout = setTimeout(() => {
        if (document.body.classList.contains('terminal-mode')) {
            document.body.classList.add('cursor-hidden');
        }
    }, 2000);
}

function stopCursorHideTimer() {
    if (cursorHideTimeout) {
        clearTimeout(cursorHideTimeout);
        cursorHideTimeout = null;
    }
}

// Mouse move listener for cursor-hidden reset
window.addEventListener('mousemove', () => {
    if (document.body.classList.contains('terminal-mode')) {
        document.body.classList.remove('cursor-hidden');
        startCursorHideTimer();
    }
});

// ============== KEYBOARD SHORTCUTS ==============
document.addEventListener('keydown', (e) => {
    // Ignore if typing in input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const isTermMode = document.body.classList.contains('terminal-mode');
    const overlay = document.getElementById('terminal-overlay');
    const overlayVisible = overlay && overlay.style.display !== 'none';

    // Shift+T: Toggle TERM mode
    if (e.key === 'T' && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        toggleTerminalMode();
        return;
    }

    if (!isTermMode) return;

    // When overlay is NOT visible (a section is open in TERM mode)
    if (!overlayVisible) {
        if (e.key === 'Escape' && pageManager && pageManager.currentPage) {
            e.preventDefault();
            sectionItemIndex = -1;
            updateSectionItemSelection();
            closeCurrentSection();
            return;
        }

        // Tab: cycle through selectable items in the section
        if (e.key === 'Tab') {
            const items = getSectionSelectableItems();
            if (items.length > 0) {
                e.preventDefault();
                if (e.shiftKey) {
                    sectionItemIndex--;
                    if (sectionItemIndex < 0) sectionItemIndex = items.length - 1;
                } else {
                    sectionItemIndex++;
                    if (sectionItemIndex >= items.length) sectionItemIndex = 0;
                }
                updateSectionItemSelection();
            }
            return;
        }

        // Enter: activate selected item
        if (e.key === 'Enter') {
            if (sectionItemIndex >= 0) {
                e.preventDefault();
                activateSectionItem();
            }
            return;
        }

        // Arrow keys / ZQSD for scrolling the section container
        const container = getActiveSectionContainer();
        const scrollAmt = 80;
        if (e.key === 'ArrowDown' || e.key === 's') {
            if (container) container.scrollBy(0, scrollAmt);
        } else if (e.key === 'ArrowUp' || e.key === 'z') {
            if (container) container.scrollBy(0, -scrollAmt);
        } else if (e.key === 'ArrowLeft' || e.key === 'q') {
            if (container) container.scrollBy(-scrollAmt, 0);
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
            if (container) container.scrollBy(scrollAmt, 0);
        }
        return;
    }

    // From here on, overlay is visible
    if (e.key === 'Tab') {
        e.preventDefault();
        if (e.shiftKey) {
            // Shift+Tab: go backwards
            termSelectedIndex--;
            if (termSelectedIndex < 0) termSelectedIndex = termMenuItems.length - 1;
        } else {
            termSelectedIndex++;
            if (termSelectedIndex >= termMenuItems.length) termSelectedIndex = 0;
        }
        updateTermSelection();
        return;
    }

    if (e.key === 'Enter') {
        e.preventDefault();
        termNavigate();
        return;
    }

    if (e.key === 'Escape') {
        e.preventDefault();
        toggleTerminalMode();
        return;
    }
});

// Preload reverse animation (simple placeholder function)
function preloadReverseAnimation() {
    // This function can be expanded if needed for animation preloading
    const heroAnimationImg = document.getElementById('hero__animation__img');
    if (heroAnimationImg) {
        // Preload animation frames or resources here if needed
        console.log('Reverse animation preloaded');
    }
}

// Call preload on page load
document.addEventListener('DOMContentLoaded', preloadReverseAnimation);

// ============== TAB VISIBILITY - "Reviens !" ==============
(function() {
    const originalTitle = document.title;

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = "Reviens ! ";
        } else {
            document.title = originalTitle;
        }
    });
})();

// ============== KEYBOARD EASTER EGGS (Selma & Nul) ==============
(function() {
    let typedKeys = '';
    let selmaActive = false;
    let nulActive = false;

    // Listen for keystrokes
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in an input field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        typedKeys += e.key.toLowerCase();

        // Keep only last 10 characters
        if (typedKeys.length > 10) {
            typedKeys = typedKeys.slice(-10);
        }

        // Check for "selma"
        if (typedKeys.includes('selma') && !selmaActive) {
            triggerSelma();
            typedKeys = '';
        }

        // Check for "nul"
        if (typedKeys.includes('nul') && !nulActive) {
            triggerNul();
            typedKeys = '';
        }
    });

    // ===== SELMA EASTER EGG =====
    function triggerSelma() {
        selmaActive = true;
        const body = document.body;
        const overlay = document.getElementById('selma-overlay');



        // show heart overlay
        setTimeout(() => {
            if (overlay) overlay.classList.add('show');
        }, 500);

        // After 5 seconds, flip back
        setTimeout(() => {
            if (overlay) overlay.classList.remove('show');
            body.classList.remove('selma-flip');
            body.classList.add('selma-flip-back');

            // Clean up
            setTimeout(() => {
                body.classList.remove('selma-flip-back');
                selmaActive = false;
            }, 800);
        }, 2000);
    }

    // ===== NUL EASTER EGG =====
    function triggerNul() {
        nulActive = true;
        const overlay = document.getElementById('nul-overlay');
        const countdownEl = document.getElementById('nul-countdown');
        const messageEl = document.getElementById('nul-message');

        // Show overlay with emoji directly
        if (overlay) overlay.classList.add('show');
        if (messageEl) messageEl.style.display = 'none';
        if (countdownEl) {
            countdownEl.classList.remove('nul-countdown');
            countdownEl.classList.add('nul-emoji');
            countdownEl.textContent = '╭∩╮( •̀_•́ )╭∩╮';
        }

        // Hide after 3 seconds
        setTimeout(() => {
            if (overlay) overlay.classList.remove('show');

            // Reset for next time
            setTimeout(() => {
                if (messageEl) messageEl.style.display = '';
                if (countdownEl) {
                    countdownEl.classList.remove('nul-emoji');
                    countdownEl.classList.add('nul-countdown');
                    countdownEl.textContent = '3';
                }
                nulActive = false;
            }, 500);
        }, 3000);
    }
})();

