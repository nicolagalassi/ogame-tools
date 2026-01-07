const defaultLang = 'it';
const availableLangs = ['it', 'en'];

window.translations = {}; 

async function setLanguage(lang) {
    if (!availableLangs.includes(lang)) lang = defaultLang;

    try {
        const response = await fetch(`locales/${lang}.json`);
        window.translations = await response.json();
        
        // Aggiorna testi pagina
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

        // Salva e Aggiorna UI
        localStorage.setItem('ogame_lang', lang);
        updateLangUI(lang);
        
        document.dispatchEvent(new Event('langLoaded'));

    } catch (e) {
        console.error("Errore lingua:", e);
    }
}

window.t = function(key) {
    return window.translations[key] || key;
};

// --- GESTIONE MENU CUSTOM ---

function toggleLangDropdown() {
    const menu = document.getElementById('lang-dropdown-menu');
    if (!menu) return;
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        // Timeout per permettere al browser di renderizzare prima dell'animazione
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
    if (!menu || menu.classList.contains('hidden')) return;
    
    menu.classList.remove('opacity-100', 'scale-100');
    menu.classList.add('opacity-0', 'scale-95');
    
    setTimeout(() => {
        menu.classList.add('hidden');
    }, 150); // Durata animazione
}

function selectLang(lang) {
    setLanguage(lang);
    closeLangDropdown();
}

function updateLangUI(lang) {
    // Aggiorna etichetta pulsante
    const label = document.getElementById('langLabel');
    if(label) label.innerText = lang.toUpperCase();

    // Evidenzia opzione selezionata
    document.querySelectorAll('.lang-option').forEach(opt => {
        if(opt.dataset.lang === lang) {
            opt.classList.add('bg-ogame-accent/20', 'text-ogame-accent');
            opt.classList.remove('text-gray-400', 'hover:bg-gray-800');
        } else {
            opt.classList.remove('bg-ogame-accent/20', 'text-ogame-accent');
            opt.classList.add('text-gray-400', 'hover:bg-gray-800');
        }
    });
}

// Chiudi se clicco fuori
window.addEventListener('click', (e) => {
    const container = document.getElementById('lang-component');
    if (container && !container.contains(e.target)) {
        closeLangDropdown();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('ogame_lang') || navigator.language.slice(0, 2);
    setLanguage(savedLang);
});
