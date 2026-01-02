const defaultLang = 'it';
const availableLangs = ['it', 'en']; // Aggiungi qui le lingue future (es. 'es', 'de')

async function setLanguage(lang) {
    if (!availableLangs.includes(lang)) lang = defaultLang;

    // Carica il file JSON
    try {
        const response = await fetch(`locales/${lang}.json`);
        const translations = await response.json();
        
        // Applica le traduzioni
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                // Se è un input, cambia il placeholder, altrimenti il testo
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[key];
                } else {
                    el.innerHTML = translations[key];
                }
            }
        });

        // Salva preferenza e aggiorna selettore
        localStorage.setItem('ogame_lang', lang);
        document.getElementById('langSelector').value = lang;
        
        // Evento custom nel caso serva ricalcolare cose grafiche
        document.dispatchEvent(new Event('langChanged'));

    } catch (e) {
        console.error("Errore caricamento lingua:", e);
    }
}

// Avvio automatico
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('ogame_lang') || navigator.language.slice(0, 2);
    setLanguage(savedLang);
});
