# OValue - OGame Tools Suite 🚀

**OValue** è una suite di strumenti web moderni, veloci e open-source progettati per aiutare i giocatori di OGame a massimizzare il valore del proprio impero.

🔗 **[Vai al Sito Live](https://ogamehub.netlify.app/)** *(Sostituisci con il tuo link reale se diverso)*

---

## 🛠️ Funzionalità

### 1. 🏗️ Production Core (Metal Calculator)
Un calcolatore di produzione avanzato che va oltre le semplici miniere.
* **Gestione Account Completa:** Salva e gestisci le configurazioni di tutti i tuoi pianeti.
* **Supporto Totale Bonus:** Include Forme di Vita (Rock'tal/Umani), Classi (Collezionista/Generale), Geologo, Staff e Item.
* **Crawler Intelligence:** Calcolo automatico del CAP massimo dei crawler e supporto per il **Sovraccarico (+150%)**.
* **Modifica Massiva:** Applica modifiche a tutti i pianeti con un click (es. "Imposta tutte le miniere a 40").

### 2. 💎 Pack Exchange (Pack Calculator)
Analizza i costi e ottimizza la spesa in Materia Oscura/Euro.
* **Parsing Intelligente:** Incolla direttamente i costi da OGLight o dal gioco.
* **Costruttore Integrato:** Pianifica code di costruzione (edifici, ricerche, flotta) e calcola il costo totale.
* **Conversione MSU:** Calcola il valore reale in Unità Standard di Metallo.
* **Smart Shopping:** Un algoritmo ricorsivo calcola la combinazione **esatta** di pacchetti in Euro per spendere il meno possibile, considerando sconti ed eventi MO.

---

## 💻 Installazione Locale

Non è necessaria alcuna installazione complessa (Node.js, Python, ecc.). Il progetto è **Vanilla JS + Tailwind CSS (CDN)**.

1.  Clona la repository:
    ```bash
    git clone [https://github.com/nicolagalassi/ogame-tools.git](https://github.com/nicolagalassi/ogame-tools.git)
    ```
2.  Apri il file `index.html` con il tuo browser.
    * *Nota:* Per via delle policy di sicurezza dei browser (CORS) che bloccano il caricamento dei file JSON locali, si consiglia di usare un'estensione come "Live Server" su VS Code o avviare un server locale (`python -m http.server`).

---

## 🌍 Come Contribuire alle Traduzioni (Translations)

OValue supporta nativamente il multi-lingua! Attualmente sono disponibili: **Italiano (IT)** e **Inglese (EN)**.
Se vuoi aggiungere la tua lingua (es. Tedesco, Francese, Spagnolo...), segui questi passaggi:

### 1. Crea il file di lingua
1.  Vai nella cartella `locales/`.
2.  Copia il file `en.json`.
3.  Rinomina la copia con il codice della tua lingua (es. `de.json` per il tedesco, `fr.json` per il francese).
4.  Traduci i valori a destra nel file JSON (non toccare le chiavi a sinistra!).

### 2. Abilita la lingua nel codice
1.  Apri il file `js/lang.js` e aggiungi il tuo codice lingua all'array `availableLangs`:
    ```javascript
    const availableLangs = ['it', 'en', 'de']; // Aggiunto 'de'
    ```
2.  Aggiungi l'opzione nel menu a tendina nei file HTML (`index.html`, `metal.html`, `pack.html`). Cerca il tag `<select id="langSelector">` e aggiungi la tua riga:
    ```html
    <select id="langSelector" ...>
        <option value="it" ...>Italiano</option>
        <option value="en" ...>English</option>
        <option value="de" style="...">Deutsch</option> </select>
    ```

### 3. Invia una Pull Request
Fai il commit delle tue modifiche e apri una Pull Request su GitHub. Sarò felice di integrarla!

---

## 🔒 Privacy

La privacy è fondamentale. **OValue non ha un database backend.**
Tutti i dati inseriti (livelli miniere, impostazioni account, ecc.) vengono salvati esclusivamente nel **Local Storage** del tuo browser. Nessun dato lascia mai il tuo dispositivo.

---

## ☕ Supporto

Se trovi utili questi strumenti, considera di offrirmi un caffè per supportare lo sviluppo!

[![Ko-fi](https://img.shields.io/badge/Support%20me-Ko--fi-red?style=flat-square&logo=ko-fi)](https://ko-fi.com/galax95)

---

**Licenza:** MIT License. Sentiti libero di forkare e modificare.