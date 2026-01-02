const defaultLang = 'it';
const availableLangs = ['it', 'en'];

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

        // 2. Aggiorna stato Select e Etichetta Visibile
        localStorage.setItem('ogame_lang', lang);
        
        const selector = document.getElementById('langSelector');
        const label = document.getElementById('langLabel');
        
        if(selector) selector.value = lang;
        if(label) label.innerText = lang.toUpperCase();
        
        // 3. Lancia evento
        document.dispatchEvent(new Event('langLoaded'));

    } catch (e) {
        console.error("Errore caricamento lingua:", e);
    }
}

window.t = function(key) {
    return window.translations[key] || key;
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('ogame_lang') || navigator.language.slice(0, 2);
    setLanguage(savedLang);
});
