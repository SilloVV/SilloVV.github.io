

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
            console.log('Button clicked, currentPage:', this.currentPage);
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
        
        // Show menu logo and sidebar again
        this.showMenuLogo();
        this.sidebar.style.display = '';
        
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
        pageManager.hidePage(pageManager.currentPage);
    }
}

function copyEmail() {
    navigator.clipboard.writeText('wnakib21@gmail.com').then(() => {
        // Visual feedback on button
        const copyBtn = document.querySelector('.copy-btn');
        const originalContent = copyBtn.innerHTML;
        
        // Change icon temporarily
        copyBtn.innerHTML = '<i class="bx bx-check"></i>';
        copyBtn.style.background = 'rgba(34, 197, 94, 0.3)';
        
        // Create and display confirmation message
        showCopyMessage();
        
        // Restore original icon after 2 seconds
        setTimeout(() => {
            copyBtn.innerHTML = originalContent;
            copyBtn.style.background = '';
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
        // Direct call to Cerebras API
        const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + CEREBRAS_API_KEY
            },
            body: JSON.stringify({
                model: "llama-4-scout-17b-16e-instruct",
                messages: [
                    {
                        role: "system",
                        content: "You are Wassil NAKIB, a French Machine Learning and DevOps engineer. You are currently in your 5th year of engineering studies in a double degree AI program at Polytech Nancy. Information about you: You are currently doing your internship at HermineIA at STATION F, developing a multi-agent solution for legal professionals. You did an internship at Equasens where you created SuperDiag, a server monitoring solution. Your AI skills: PyTorch, TensorBoard, LangGraph, HF Transformers, ONNX. Your DevOps skills: Kubernetes, Docker, Jenkins, Linux, Bash. Projects: U-Net semantic segmentation, vehicle control by vision, multi-agent solutions, Kubernetes clusters. Email: wnakib21@gmail.com. GitLab: gitlab.com/SilloVV. LinkedIn: linkedin.com/in/wassil-nakib-031361293. Passions: cinema, physiotherapy, sports science, boxing, tennis. Always respond in English, naturally and engagingly. You are passionate about the intersection between AI and DevOps."
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

// Project preview management
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card[data-preview]');
    const overlay = document.getElementById('preview-overlay');
    
    projectCards.forEach(card => {
        const previewId = card.getAttribute('data-preview');
        const previewElement = document.getElementById(`preview-${previewId}`);
        
        if (previewElement) {
            // Show preview on click/touch
            const showPreview = (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Show blur overlay
                if (overlay) {
                    overlay.style.opacity = '1';
                    overlay.style.visibility = 'visible';
                }
                
                // Show preview
                previewElement.style.opacity = '1';
                previewElement.style.visibility = 'visible';
                
                // Hide project section close button
                const projectCloseBtn = document.getElementById('closeb-projects');
                if (projectCloseBtn) {
                    projectCloseBtn.style.display = 'none';
                }
            };
            
            // Touch and mouse support
            card.addEventListener('click', showPreview);
            card.addEventListener('touchstart', showPreview);
        }
    });
    
    // Close by clicking overlay on mobile
    if (overlay) {
        overlay.addEventListener('click', () => {
            // Close all open previews
            const openPreviews = document.querySelectorAll('.project-preview[style*="opacity: 1"]');
            openPreviews.forEach(preview => {
                preview.style.opacity = '0';
                preview.style.visibility = 'hidden';
            });
            
            // Hide overlay
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            
            // Show project section close button again
            const projectCloseBtn = document.getElementById('closeb-projects');
            if (projectCloseBtn) {
                projectCloseBtn.style.display = 'flex';
            }
        });
    }
    
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

            // Keep within viewport bounds
            const padding = 60;
            const maxX = window.innerWidth - padding;
            const maxY = window.innerHeight - padding;

            newX = Math.max(padding, Math.min(maxX, newX));
            newY = Math.max(padding, Math.min(maxY, newY));

            // If stuck in corner, jump to opposite side
            const rect = btn.getBoundingClientRect();
            if ((newX <= padding || newX >= maxX) && (newY <= padding || newY >= maxY)) {
                newX = window.innerWidth - rect.left - rect.width;
                newY = window.innerHeight - rect.top - rect.height;
            }

            // Apply new position
            btn.style.position = 'fixed';
            btn.style.right = 'auto';
            btn.style.bottom = 'auto';
            btn.style.left = (newX - btn.offsetWidth / 2) + 'px';
            btn.style.top = (newY - btn.offsetHeight / 2) + 'px';
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

// ============== TAB VISIBILITY - "Reviens !" ==============
(function() {
    const originalTitle = document.title;

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = "Reviens ! Tu me manques 🥺";
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
        const body = document.body;
        const overlay = document.getElementById('nul-overlay');
        const countdownEl = document.getElementById('nul-countdown');
        const messageEl = document.getElementById('nul-message');

        // Start shaking
        body.classList.add('nul-shake');

        // Show overlay after a moment
        setTimeout(() => {
            if (overlay) overlay.classList.add('show');

            // Countdown from 3
            let count = 3;
            const countdownInterval = setInterval(() => {
                count--;
                if (countdownEl) countdownEl.textContent = count;

                if (count <= 0) {
                    clearInterval(countdownInterval);

                    // Stop shaking
                    body.classList.remove('nul-shake');

                    // Show middle finger emoji instead of destruction
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
                                countdownEl.textContent = '5';
                            }
                            nulActive = false;
                        }, 500);
                    }, 3000);
                }
            }, 1000);
        }, 500);
    }
})();

