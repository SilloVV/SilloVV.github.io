// Typing Animation for Hero Section - Old School Style
class TypeWriter {
    constructor(element, texts, wait = 2000) {
        this.element = element;
        this.texts = texts;
        this.wait = parseInt(wait, 10);
        this.txt = '';
        this.wordIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.texts.length;
        const fullTxt = this.texts[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `${this.txt}<span class="cursor">|</span>`;

        // Variable speed for old-school effect
        let typeSpeed = 60 + Math.random() * 80;

        if (this.isDeleting) {
            typeSpeed = 30 + Math.random() * 40;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============== LOADING SCREEN ANIMATION ==============

// Typing effect for loading screen
function typeLoadingText(element, text, baseSpeed = 45) {
    return new Promise(resolve => {
        let i = 0;
        element.innerHTML = '<span class="loading-cursor"></span>';

        function type() {
            if (i < text.length) {
                // Remove cursor, add char, add cursor back
                element.innerHTML = text.substring(0, i + 1) + '<span class="loading-cursor"></span>';

                // Variable speed for realistic typing
                let delay = baseSpeed + Math.random() * 40;

                // Occasional pause
                if (Math.random() < 0.08) {
                    delay += 80 + Math.random() * 100;
                }

                // Pause after punctuation
                if ([',', '.', '!', '?'].includes(text.charAt(i))) {
                    delay += 150;
                }

                i++;
                setTimeout(type, delay);
            } else {
                // Keep cursor blinking at end
                element.innerHTML = text + '<span class="loading-cursor"></span>';
                resolve();
            }
        }
        type();
    });
}

// Main loading screen animation
async function animateLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const helloEl = document.getElementById('loading-hello');
    const nameEl = document.getElementById('loading-name-text');
    const titleEl = document.getElementById('loading-title-text');
    const tag1 = document.getElementById('loading-tag-1');
    const tag2 = document.getElementById('loading-tag-2');
    const tag3 = document.getElementById('loading-tag-3');

    if (!loadingScreen || !helloEl || !nameEl || !titleEl) {
        // If elements don't exist, just show the main content
        showMainContent();
        return;
    }

    // Get current language
    const savedLang = localStorage.getItem('portfolio-lang') || 'en';
    const t = translations[savedLang];

    // Texts based on language
    const greetingText = savedLang === 'fr' ? 'Bonjour, je suis' : 'Hi, I\'m';
    const nameText = 'Wassil NAKIB';
    const titleText = savedLang === 'fr' ? 'Ingénieur DevOps et IA' : 'DevOps and AI Engineer';
    const tags = [
        savedLang === 'fr' ? 'Intelligence Artificielle (GenAI/ML)' : 'Artificial Intelligence (GenAI/ML)',
        'DevOps & Infrastructure',
        'Python, Bash, Java'
    ];

    // Small initial delay
    await new Promise(r => setTimeout(r, 400));

    // Type greeting
    await typeLoadingText(helloEl, greetingText, 55);
    await new Promise(r => setTimeout(r, 300));

    // Type name
    await typeLoadingText(nameEl, nameText, 70);
    await new Promise(r => setTimeout(r, 400));

    // Type title
    await typeLoadingText(titleEl, titleText, 50);
    await new Promise(r => setTimeout(r, 500));

    // Show tags one by one
    tag1.textContent = tags[0];
    tag1.classList.add('visible');
    await new Promise(r => setTimeout(r, 300));

    tag2.textContent = tags[1];
    tag2.classList.add('visible');
    await new Promise(r => setTimeout(r, 300));

    tag3.textContent = tags[2];
    tag3.classList.add('visible');

    // Wait a moment to appreciate the full loading screen
    await new Promise(r => setTimeout(r, 1200));

    // Fade out loading screen and show main content
    loadingScreen.classList.add('fade-out');

    // Show main content after fade starts
    setTimeout(() => {
        showMainContent();
    }, 400);

    // Remove loading screen from DOM after fade completes
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 800);
}

// Show main content (hero, lang toggle, etc.)
function showMainContent() {
    const hero = document.getElementById('hero');
    const langToggle = document.querySelector('.lang-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (hero) {
        hero.style.display = '';
        hero.style.opacity = '0';
        hero.style.transition = 'opacity 0.6s ease';
        setTimeout(() => {
            hero.style.opacity = '1';
        }, 50);
    }

    if (langToggle) {
        langToggle.style.display = '';
    }

    if (sidebar) {
        sidebar.style.opacity = '0';
        sidebar.style.transition = 'opacity 0.6s ease';
        setTimeout(() => {
            sidebar.style.opacity = '1';
        }, 200);
    }

    // Setup name hover effect
    setupNameHoverEffect();
}

// Hero typing animation
function initHeroTyping() {
    const heroTitle = document.querySelector('.hero-title p');
    if (!heroTitle) return;

    const texts = currentLang === 'fr'
        ? ['Ingénieur DevOps et IA', 'Passionné par le MLOps', 'Architecte Cloud']
        : ['DevOps and AI Software Engineer', 'MLOps Enthusiast', 'Cloud Architect'];

    new TypeWriter(heroTitle, texts, 3000);
}

// Old-school typing effect with variable speed and occasional pauses
function typeTextOldSchool(element, text, baseSpeed = 50) {
    return new Promise(resolve => {
        let i = 0;
        element.textContent = '';
        element.style.visibility = 'visible';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);

                // Variable speed for realistic typing
                let delay = baseSpeed + Math.random() * 60;

                // Occasional slight pause (like thinking)
                if (Math.random() < 0.1) {
                    delay += 100 + Math.random() * 150;
                }

                // Pause after punctuation
                if ([',', '.', '!', '?', ':'].includes(text.charAt(i))) {
                    delay += 200;
                }

                i++;
                setTimeout(type, delay);
            } else {
                resolve();
            }
        }
        type();
    });
}

// Type name letter by letter
function typeNameOldSchool(element, text, baseSpeed = 80) {
    return new Promise(resolve => {
        let i = 0;
        element.textContent = '';
        element.style.visibility = 'visible';
        element.style.opacity = '1';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);

                // Variable speed
                let delay = baseSpeed + Math.random() * 50;

                // Space pause
                if (text.charAt(i) === ' ') {
                    delay += 100;
                }

                i++;
                setTimeout(type, delay);
            } else {
                resolve();
            }
        }
        type();
    });
}

async function animateHeroEntrance() {
    const greeting = document.querySelector('.hero-greeting h5');
    const nameElement = document.getElementById('nom');
    const title = document.querySelector('.hero-title p');
    const tags = document.querySelectorAll('.hero-tag');
    const heroAnimation = document.getElementById('hero_animation');

    if (!greeting || !nameElement || !title) return;

    // Hide all elements initially
    greeting.style.visibility = 'hidden';
    greeting.style.opacity = '0';
    nameElement.style.visibility = 'hidden';
    nameElement.style.opacity = '0';
    title.style.visibility = 'hidden';
    title.style.opacity = '0';
    tags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px)';
    });
    if (heroAnimation) {
        heroAnimation.style.opacity = '0';
        heroAnimation.style.transform = 'scale(0.9)';
    }

    // Small initial delay for page load
    await new Promise(r => setTimeout(r, 300));

    // Animate greeting with old-school typing
    const t = translations[currentLang];
    const greetingText = t['hero-greeting'];
    greeting.style.visibility = 'visible';
    greeting.style.opacity = '1';
    await typeTextOldSchool(greeting, greetingText, 70);

    await new Promise(r => setTimeout(r, 400));

    // Animate name with typing effect
    const nameText = 'Wassil NAKIB';
    await typeNameOldSchool(nameElement, nameText, 100);

    // Setup the name hover effect after typing is done
    setupNameHoverEffect();

    await new Promise(r => setTimeout(r, 300));

    // Fade in hero animation
    if (heroAnimation) {
        heroAnimation.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroAnimation.style.opacity = '1';
        heroAnimation.style.transform = 'scale(1)';
    }

    await new Promise(r => setTimeout(r, 400));

    // Start title typing animation
    title.style.visibility = 'visible';
    title.style.opacity = '1';
    initHeroTyping();

    // Fade in tags one by one
    await new Promise(r => setTimeout(r, 600));
    tags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Name hover effect: reveal "SilloVV" under cursor
function setupNameHoverEffect() {
    const nameContainer = document.querySelector('.hero-name');
    const nameElement = document.getElementById('nom');
    const sillowElement = document.getElementById('sillow');

    if (!nameContainer || !nameElement || !sillowElement) return;

    // Position sillow exactly over nom
    sillowElement.style.position = 'absolute';
    sillowElement.style.top = '0';
    sillowElement.style.left = '0';
    sillowElement.style.width = '100%';
    sillowElement.style.height = '100%';
    sillowElement.style.display = 'flex';
    sillowElement.style.alignItems = 'center';
    sillowElement.style.justifyContent = 'center';
    sillowElement.style.clipPath = 'circle(0px at 50% 50%)';
    sillowElement.style.transition = 'none';
    sillowElement.style.pointerEvents = 'none';
    sillowElement.style.zIndex = '10';

    // Track mouse position over name
    let isOverName = false;
    let animationFrame = null;

    nameContainer.addEventListener('mouseenter', () => {
        isOverName = true;
    });

    nameContainer.addEventListener('mouseleave', () => {
        isOverName = false;
        // Smoothly hide the sillow text
        sillowElement.style.transition = 'clip-path 0.3s ease-out';
        sillowElement.style.clipPath = 'circle(0px at 50% 50%)';
    });

    nameContainer.addEventListener('mousemove', (e) => {
        if (!isOverName) return;

        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(() => {
            const rect = nameContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Reveal with circle mask following cursor (matches inverseur-circle size)
            sillowElement.style.transition = 'none';
            sillowElement.style.clipPath = `circle(50px at ${x}px ${y}px)`;
        });
    });
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .hero-greeting h5,
    .hero-name h1,
    .hero-title p {
        visibility: hidden;
    }

    .cursor {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }

    /* Name hover effect styles */
    .hero-name {
        position: relative;
        cursor: pointer;
    }

    #sillow {
        font-family: 'Playfair Display', serif;
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 2px;
        color: var(--text);
        background: linear-gradient(
            90deg,
            var(--bg-alt) 0%,
            var(--text) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    @media screen and (max-width: 768px) {
        #sillow {
            font-size: 32px;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Start loading screen animation
    setTimeout(() => {
        animateLoadingScreen();
    }, 100);
});
