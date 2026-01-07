const defaultLang = 'it';
const availableLangs = ['it', 'en'];

window.translations = {}; 

// Carica la lingua e aggiorna la UI
async function setLanguage(lang) {
    if (!availableLangs.includes(lang)) lang = defaultLang;

    try {
        const response = await fetch(`locales/${lang}.json`);
        window.translations = await response.json();
        
        // 1. Aggiorna testi statici HTML
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (window.translations[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = window.translations[key];
                } else {
                    el.innerHTML = window.translations[key];
                }
            }
        });

        // 2. Salva preferenza
        localStorage.setItem('ogame_lang', lang);
        
        // 3. Aggiorna UI del Custom Dropdown
        updateLangUI(lang);
        
        // 4. Lancia evento
        document.dispatchEvent(new Event('langLoaded'));

    } catch (e) {
        console.error("Errore caricamento lingua:", e);
    }
}

// Funzione di traduzione per l'uso in JS
window.t = function(key) {
    return window.translations[key] || key;
};

// --- LOGICA CUSTOM DROPDOWN ---

function toggleLangDropdown() {
    const menu = document.getElementById('lang-dropdown-menu');
    const btn = document.getElementById('lang-btn');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        // Animazione entrata
        setTimeout(() => {
            menu.classList.remove('opacity-0', 'scale-95');
            menu.classList.add('opacity-100', 'scale-100');
        }, 10);
    } else {
        closeLangDropdown();
    }
}

function closeLangDropdown() {
    const menu = document.getElementById('lang-dropdown-menu');
    if (!menu) return;
    
    menu.classList.remove('opacity-100', 'scale-100');
    menu.classList.add('opacity-0', 'scale-95');
    
    setTimeout(() => {
        menu.classList.add('hidden');
    }, 150); // Tempo dell'animazione CSS
}

function selectLang(lang) {
    setLanguage(lang);
    closeLangDropdown();
}

function updateLangUI(lang) {
    // Aggiorna etichetta pulsante principale
    const label = document.getElementById('langLabel');
    if(label) label.innerText = lang.toUpperCase();

    // Aggiorna stato attivo nel menu
    document.querySelectorAll('.lang-option').forEach(opt => {
        if(opt.dataset.lang === lang) {
            opt.classList.add('bg-ogame-accent/20', 'text-ogame-accent');
            opt.classList.remove('text-gray-400');
        } else {
            opt.classList.remove('bg-ogame-accent/20', 'text-ogame-accent');
            opt.classList.add('text-gray-400');
        }
    });
}

// Chiudi menu se clicco fuori
window.addEventListener('click', (e) => {
    const container = document.getElementById('lang-component');
    if (container && !container.contains(e.target)) {
        closeLangDropdown();
    }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('ogame_lang') || navigator.language.slice(0, 2);
    setLanguage(savedLang);
});
