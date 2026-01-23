// Typing Animation for Hero Section - Old School Style
let currentTypeWriter = null;

class TypeWriter {
    constructor(element, texts, wait = 2000, startWithDelete = null) {
        this.element = element;
        this.texts = texts;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.isRunning = true;

        // If startWithDelete is provided, start by deleting that text first
        if (startWithDelete) {
            this.txt = startWithDelete;
            this.isDeleting = true;
        } else {
            this.txt = '';
            this.isDeleting = false;
        }

        this.type();
    }

    stop() {
        this.isRunning = false;
    }

    type() {
        if (!this.isRunning) return;

        const current = this.wordIndex % this.texts.length;
        const fullTxt = this.texts[current];

        if (this.isDeleting) {
            this.txt = this.txt.substring(0, this.txt.length - 1);
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

// Function to restart TypeWriter with new language
function restartHeroTyping() {
    // Stop current TypeWriter
    if (currentTypeWriter) {
        currentTypeWriter.stop();
    }

    const heroTitle = document.querySelector('.hero-title p');
    if (!heroTitle) return;

    const savedLang = localStorage.getItem('portfolio-lang') || 'en';

    const texts = savedLang === 'fr'
        ? ['Passionné par le MLOps', 'Architecte Cloud', 'Ingénieur DevOps et IA']
        : ['MLOps Enthusiast', 'Cloud Architect', 'DevOps and AI Engineer'];

    // Start fresh (no delete animation)
    currentTypeWriter = new TypeWriter(heroTitle, texts, 3000);
}

// ============== LOADING SCREEN ANIMATION ==============

// Typing effect with single moving cursor (20% faster)
function typeLoadingText(element, text, baseSpeed = 36, keepCursor = false) {
    return new Promise(resolve => {
        let i = 0;
        element.textContent = '';

        // Add cursor to this element
        const cursor = document.getElementById('typing-cursor');
        if (cursor) {
            element.appendChild(cursor);
        }

        function type() {
            if (i < text.length) {
                // Set text content and re-append cursor
                element.textContent = text.substring(0, i + 1);
                if (cursor) {
                    element.appendChild(cursor);
                }

                // Variable speed for realistic typing (reduced by 20%)
                let delay = baseSpeed + Math.random() * 32;

                // Occasional pause (reduced)
                if (Math.random() < 0.06) {
                    delay += 60 + Math.random() * 80;
                }

                // Pause after punctuation (reduced)
                if ([',', '.', '!', '?'].includes(text.charAt(i))) {
                    delay += 120;
                }

                i++;
                setTimeout(type, delay);
            } else {
                element.textContent = text;
                if (keepCursor && cursor) {
                    element.appendChild(cursor);
                }
                resolve();
            }
        }
        type();
    });
}

// Preload face animation images to avoid lag on first menu click
function preloadFaceAnimation() {
    const images = [
        'assets/face-animation-light/tl1.png',
        'assets/face-animation-light/tl2.png',
        'assets/face-animation-light/tl3.png',
        'assets/face-animation-light/tl4.png'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Update progress bar and percentage text
function updateProgress(percent) {
    const progressBar = document.getElementById('loading-progress');
    const progressText = document.getElementById('loading-progress-text');

    if (progressBar) {
        progressBar.style.width = percent + '%';
    }
    if (progressText) {
        progressText.textContent = percent + '%';
    }
}

// Main loading screen animation
async function animateLoadingScreen() {
    // Start preloading face animation images immediately
    preloadFaceAnimation();

    const loadingScreen = document.getElementById('loading-screen');
    const helloEl = document.getElementById('loading-hello');
    const nameEl = document.getElementById('loading-name-text');
    const titleEl = document.getElementById('loading-title-text');
    const tag1 = document.getElementById('loading-tag-1');
    const tag2 = document.getElementById('loading-tag-2');
    const tag3 = document.getElementById('loading-tag-3');
    const cursor = document.getElementById('typing-cursor');

    if (!loadingScreen || !helloEl || !nameEl || !titleEl) {
        // If elements don't exist, just show the main content
        transitionToHero();
        return;
    }

    // Get current language
    const savedLang = localStorage.getItem('portfolio-lang') || 'en';

    // Texts based on language
    const greetingText = savedLang === 'fr' ? 'Bonjour, je suis' : 'Hi, I\'m';
    const nameText = 'Wassil NAKIB';
    const titleText = savedLang === 'fr' ? 'Ingénieur DevOps et IA' : 'DevOps and AI Engineer';
    const tags = [
        savedLang === 'fr' ? 'Intelligence Artificielle (GenAI/ML)' : 'Artificial Intelligence (GenAI/ML)',
        'DevOps & Infrastructure',
        'Python, Bash, Java'
    ];

    // Store title text for hero transition
    window.loadingTitleText = titleText;

    // Show cursor
    if (cursor) cursor.style.display = 'inline-block';

    // Small initial delay
    updateProgress(5);
    await new Promise(r => setTimeout(r, 320));

    // Type greeting
    updateProgress(15);
    await typeLoadingText(helloEl, greetingText, 44);
    updateProgress(30);
    await new Promise(r => setTimeout(r, 240));

    // Type name
    updateProgress(35);
    await typeLoadingText(nameEl, nameText, 56);
    updateProgress(55);
    await new Promise(r => setTimeout(r, 320));

    // Type title (keep cursor here)
    updateProgress(60);
    await typeLoadingText(titleEl, titleText, 40, true);
    updateProgress(75);
    await new Promise(r => setTimeout(r, 400));

    // Hide cursor before showing tags
    if (cursor) cursor.style.display = 'none';

    // Show tags one by one
    tag1.textContent = tags[0];
    tag1.classList.add('visible');
    updateProgress(82);
    await new Promise(r => setTimeout(r, 240));

    tag2.textContent = tags[1];
    tag2.classList.add('visible');
    updateProgress(89);
    await new Promise(r => setTimeout(r, 240));

    tag3.textContent = tags[2];
    tag3.classList.add('visible');
    updateProgress(95);

    // Wait a moment to appreciate the full loading screen
    await new Promise(r => setTimeout(r, 600));
    updateProgress(100);
    await new Promise(r => setTimeout(r, 200));

    // Transition to main content
    transitionToHero();
}

// Smooth transition from loading screen to hero
function transitionToHero() {
    const loadingScreen = document.getElementById('loading-screen');
    const hero = document.getElementById('hero');
    const langToggle = document.querySelector('.lang-toggle');
    const termToggle = document.querySelector('.term-toggle');
    const sidebar = document.querySelector('.sidebar');
    const heroTitle = document.querySelector('.hero-title p');

    // Set hero title to match loading screen (no retyping)
    if (heroTitle && window.loadingTitleText) {
        heroTitle.innerHTML = window.loadingTitleText + '<span class="cursor">|</span>';
    }

    // Fade out loading screen
    loadingScreen.classList.add('fade-out');

    // After a small delay, show hero
    setTimeout(() => {
        // Show hero
        if (hero) {
            hero.style.display = '';
            hero.style.opacity = '1';
        }

        // Show language toggle
        if (langToggle) {
            langToggle.style.display = '';
        }

        // Show terminal toggle
        if (termToggle) {
            termToggle.style.display = '';
        }

        // Show sidebar with fade
        if (sidebar) {
            sidebar.style.transition = 'opacity 0.5s ease';
            sidebar.style.opacity = '1';
        }

        // Setup name hover effect
        setupNameHoverEffect();

        // Wait then start typing animation with NEXT text (not the same one)
        setTimeout(() => {
            initHeroTyping();
        }, 2500);

    }, 600);

    // Remove loading screen from DOM
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 800);
}

// Hero typing animation - starts by deleting the loading screen text, then types new texts
function initHeroTyping() {
    const heroTitle = document.querySelector('.hero-title p');
    if (!heroTitle) return;

    const savedLang = localStorage.getItem('portfolio-lang') || 'en';

    // Texts to cycle through (different from loading screen)
    const texts = savedLang === 'fr'
        ? ['Passionné par le MLOps', 'Architecte Cloud', 'Ingénieur DevOps et IA']
        : ['MLOps Enthusiast', 'Cloud Architect', 'DevOps and AI Engineer'];

    // Start by deleting the loading screen text, then type the new texts
    const startText = window.loadingTitleText || (savedLang === 'fr' ? 'Ingénieur DevOps et IA' : 'DevOps and AI Engineer');

    currentTypeWriter = new TypeWriter(heroTitle, texts, 3000, startText);
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
    .cursor {
        animation: blink 1s infinite;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
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
