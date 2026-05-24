# Professional Developer Portfolio - Istaranjan Das

Welcome to the source repository for my professional developer portfolio. This website is a premium, modern, and lightweight showcase of my professional journey, skills, and open-source contributions. 

Built as a high-performance static website, it is fully optimized for speed, responsive design, search engine optimization (SEO), and direct hosting on GitHub Pages.

---

## 🌟 Key Features

- **Accenture Experience Showcase:** A highly polished professional timeline detailing 3+ years of experience as an Application Development Analyst at Accenture, highlighting engineering impacts, agile workflows, database optimizations, and system integrations.
- **Interactive GitHub Showcase:** A client-side project explorer showcasing 30+ repositories. Users can search by name, tag, or description, and filter by categories (*React & JS*, *HTML & CSS*, *Backend & Others*).
- **Glassmorphic HSL Design:** Fully overhauled CSS styles featuring a premium glassmorphic UI, harmonious HSL color systems, and modern Google Fonts (*Outfit* for headings and *Inter* for body text).
- **Dynamic Dark/Light Themes:** System-preference-aware dark and light themes that toggle smoothly and persist across sessions via `localStorage`.
- **Ultra Responsive:** Adapts to all viewports—from standard desktops to mobile screens with a customized sliding drawer navigation menu.
- **Blazing Fast Performance:** Zero framework dependencies, meaning instantaneous loads, high accessibility compliance, and perfect SEO indexing.

---

## 🛠️ Technology Stack

- **Core Structure:** HTML5 (Semantic elements)
- **Styling:** Vanilla CSS3 (Custom HSL properties, Glassmorphism, CSS Grid & Flexbox, micro-animations)
- **Interactive Engine:** Vanilla JavaScript (ES6+, DOM Events, asynchronous search, dynamic pagination, and filter mechanisms)
- **Typography & Icons:** Google Fonts (*Outfit* and *Inter*), Font Awesome Icons

---

## 📂 Project Structure

```text
├── index.html       # Primary portfolio page (Hero, Timeline, Showcase, Skills, Contact)
├── blog.html        # Personal blog hub (Under Construction card)
├── styles.css       # Fully customized visual design, variables, themes, animations, & queries
├── script.js        # Dynamic theme engine, mobile navbar navigation, and GitHub search index
└── README.md        # Technical guide and documentation
```

---

## 🚀 Running Locally

Since the project is built purely with native web technologies, there are no compilers, bundlers, or package installations needed. 

### Method 1: Double-Click
You can double-click on `index.html` in your file explorer to open the portfolio instantly in your default web browser.

### Method 2: Live Server (Recommended)
For the best experience (with smooth navigation and live-reloads), run a local development server:
- If using **VS Code**, right-click `index.html` and select **"Open with Live Server"**.
- If using **Python**, run:
  ```bash
  python -m http.server 8000
  ```
  Then navigate to `http://localhost:8000`.

---

## ✏️ Customizing Repository Showcase

The project list is statically compiled in the `GITHUB_REPOS` array inside [script.js](file:///c:/Users/istar/Desktop/Work/istaranjandas.github.io/script.js) to avoid rate limits when fetching live from GitHub's REST API.

To add or update a project, simply append or modify an object in the array using the following schema:

```javascript
{
  name: "your-repository-name",
  description: "A description detailing the core impact and tech stack of your project.",
  url: "https://github.com/istaranjandas/your-repository-name",
  language: "React.js", // Language or framework displayed on card badge
  stars: 5,             // Star count highlight
  fork: false,          // True if the repository is a fork
  category: "react-js"  // Must be: "react-js", "html-css", or "others"
}
```

---

## 📝 License
Feel free to clone, edit, and use this codebase as a base for your own personal developer portfolio!
