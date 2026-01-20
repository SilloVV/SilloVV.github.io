// Typing Animation for Hero Section
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

        let typeSpeed = 80;

        if (this.isDeleting) {
            typeSpeed /= 2;
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

// Hero typing animation
function initHeroTyping() {
    const heroTitle = document.querySelector('.hero-title p');
    if (!heroTitle) return;

    const texts = currentLang === 'fr'
        ? ['Ingénieur DevOps et IA', 'Passionné par le MLOps', 'Architecte Cloud']
        : ['DevOps and AI Software Engineer', 'MLOps Enthusiast', 'Cloud Architect'];

    new TypeWriter(heroTitle, texts, 3000);
}

// Typing effect for greeting and name (one-time animation)
function typeText(element, text, speed = 50) {
    return new Promise(resolve => {
        let i = 0;
        element.textContent = '';
        element.style.visibility = 'visible';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

async function animateHeroEntrance() {
    const greeting = document.querySelector('.hero-greeting h5');
    const name = document.querySelector('.hero-name h1');
    const title = document.querySelector('.hero-title p');
    const tags = document.querySelectorAll('.hero-tag');

    if (!greeting || !name || !title) return;

    // Hide elements initially
    greeting.style.visibility = 'hidden';
    name.style.visibility = 'hidden';
    title.style.visibility = 'hidden';
    tags.forEach(tag => tag.style.opacity = '0');

    // Get translated text
    const t = translations[currentLang];
    const greetingText = t['hero-greeting'];
    const nameText = 'Wassil NAKIB';

    // Animate greeting
    await typeText(greeting, greetingText, 60);
    await new Promise(r => setTimeout(r, 300));

    // Animate name
    name.style.visibility = 'visible';
    name.style.animation = 'fadeInUp 0.8s ease forwards';
    await new Promise(r => setTimeout(r, 800));

    // Start title typing animation
    title.style.visibility = 'visible';
    initHeroTyping();

    // Fade in tags
    await new Promise(r => setTimeout(r, 500));
    tags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.transition = 'opacity 0.5s ease';
            tag.style.opacity = '1';
        }, index * 200);
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
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for translations to load
    setTimeout(() => {
        animateHeroEntrance();
    }, 100);
});
