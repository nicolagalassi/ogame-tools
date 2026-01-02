const defaultLang = 'it';
const availableLangs = ['it', 'en'];

// Variabile globale per le traduzioni
window.translations = {}; 

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

        // 2. Salva e aggiorna UI
        localStorage.setItem('ogame_lang', lang);
        const selector = document.getElementById('langSelector');
        if(selector) selector.value = lang;
        
        // 3. Lancia un evento per dire alle altre funzioni "Ridisegnatevi!"
        document.dispatchEvent(new Event('langLoaded'));

    } catch (e) {
        console.error("Errore lingua:", e);
    }
}

// Helper per ottenere testo in JS
window.t = function(key) {
    return window.translations[key] || key; // Ritorna la chiave se manca la traduzione
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('ogame_lang') || navigator.language.slice(0, 2);
    setLanguage(savedLang);
});
