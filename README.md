# OValue

[![Support me](https://img.shields.io/badge/Support-Ko--fi-FF5E5B?style=flat&logo=ko-fi&logoColor=white)](https://ko-fi.com/galax95)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**OValue** is a suite of advanced web tools designed to optimize resource management and economic decisions for OGame players. It operates entirely client-side, ensuring speed and data privacy.

🔗 **[Launch Live Tool](https://ogamehub.netlify.app)**

---

## 📋 Key Features

### 1. Production Core (Metal Calculator)
A comprehensive tool for analyzing and optimizing mining production.
* **Account Management:** Save and manage configurations for multiple planets.
* **Complete Bonus Calculation:** factors in Lifeforms (Rock'tal/Humans), Player Class (Collector/General), Officers (Geologist/Command Staff), and Items.
* **Crawler Optimization:** Automatic calculation of the Crawler Cap and support for **Overload (+150%)**.
* **Bulk Editing:** Rapidly apply settings (e.g., mine levels, plasma tech) across all planets simultaneously.

### 2. Pack Exchange (Resource Optimization)
A financial tool to analyze construction costs and optimize Dark Matter (DM) spending.
* **Smart Parsing:** Paste cost data directly from OGLight or game views.
* **Construction Queue:** Plan buildings, research, and fleets with a cart-style system.
* **MSU Conversion:** Automatically converts mixed costs into Metal Standard Units.
* **Smart Shopping Algorithm:** A recursive algorithm calculates the mathematically optimal combination of resource packs to purchase with real money/DM, minimizing waste.

---

## 🛠️ Technology Stack

* **Core:** Vanilla JavaScript (ES6+)
* **Styling:** Tailwind CSS (via CDN)
* **Architecture:** Client-side only (No Backend)
* **Storage:** Browser LocalStorage

---

## 💻 Local Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/nicolagalassi/ogame-tools.git](https://github.com/nicolagalassi/ogame-tools.git)
    cd ogame-tools
    ```

2.  **Run a local server:**
    Due to browser CORS policies regarding local JSON files (used for translations), you cannot simply open `index.html` directly. You must serve it via a local HTTP server.

    * **Using Python 3:**
        ```bash
        python -m http.server
        ```
    * **Using VS Code:**
        Install the "Live Server" extension and click "Go Live".

3.  Access the tool at `http://localhost:8000` (or the port specified by your server).

---

## 🌍 Localization (i18n)

OValue supports a modular translation system. Current languages:
* 🇮🇹 Italian (`it`)
* 🇬🇧 English (`en`)

### How to add a new language:

1.  **Create the JSON file:**
    Navigate to the `locales/` directory, duplicate `en.json`, and rename it with your language code (e.g., `de.json`, `fr.json`). Translate the values, keeping the keys unchanged.

2.  **Register the language:**
    Open `js/lang.js` and add your language code to the configuration array:
    ```javascript
    const availableLangs = ['it', 'en', 'de']; // Example: added 'de'
    ```

3.  **Update the UI:**
    Add the option to the custom dropdown in `index.html`, `metal.html`, and `pack.html`:
    ```html
    <button onclick="selectLang('de')" class="..." data-lang="de">
        <span>🇩🇪</span> Deutsch
    </button>
    ```

4.  **Submit a Pull Request:**
    Feel free to submit your translations via PR.

---

## 🔒 Privacy Policy

This application is **stateless server-side**.
* No user data is sent to any external server.
* All configurations (mine levels, settings, queues) are stored persistently using your browser's **Local Storage**.
* Clearing your browser cache will reset the application.

---

## 🤝 Support

If you find these tools useful for your empire, consider supporting the development.

[![Ko-fi](https://img.shields.io/badge/Support%20on-Ko--fi-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/galax95)

---

**License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
