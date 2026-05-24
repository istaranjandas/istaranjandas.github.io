// ==========================================
// DYNAMIC REPOSITORY DATA & STATIC BACKUPS
// Sorted by created_at date (Latest First)
// ==========================================
const GITHUB_REPOS = [
  {
    name: "claudeSessions",
    description: "A compilation of utility scripts and templates for saving, caching, and managing dynamic LLM conversational threads.",
    url: "https://github.com/istaranjandas/claudeSessions",
    language: "JavaScript",
    stars: 0,
    fork: false,
    category: "react-js"
  },
  {
    name: "youtube-hide-shorts-extension",
    description: "A productivity browser extension designed to hide YouTube Shorts to foster focused learning and reduce distractions.",
    url: "https://github.com/istaranjandas/youtube-hide-shorts-extension",
    language: "JavaScript",
    stars: 0,
    fork: false,
    category: "react-js"
  },
  {
    name: "solar-system-3d",
    description: "An immersive 3D simulation of our solar system built using WebGL, Three.js, and interactive spatial mechanics.",
    url: "https://github.com/istaranjandas/solar-system-3d",
    language: "TypeScript",
    stars: 1,
    fork: false,
    category: "others"
  },
  {
    name: "cloud-notes-app",
    description: "A secure, cloud-connected notes application supporting user authentication, markdown rendering, and instant database sync.",
    url: "https://github.com/istaranjandas/cloud-notes-app",
    language: "JavaScript",
    stars: 0,
    fork: false,
    category: "react-js"
  },
  {
    name: "textCompare",
    description: "A lightweight code and text comparison tool highlighting additions, deletions, and differences in real time.",
    url: "https://github.com/istaranjandas/textCompare",
    language: "JavaScript",
    stars: 0,
    fork: false,
    category: "react-js"
  },
  {
    name: "datasharing",
    description: "A detailed guide and standard guidelines on data sharing protocols and data structure guidelines.",
    url: "https://github.com/istaranjandas/datasharing",
    language: "Markdown",
    stars: 0,
    fork: true,
    category: "others"
  },
  {
    name: "datasciencecoursera",
    description: "Data analysis scripts, exercises, and course archives for the Data Science Coursera Specialization.",
    url: "https://github.com/istaranjandas/datasciencecoursera",
    language: "R",
    stars: 0,
    fork: false,
    category: "others"
  },
  {
    name: "datascience-toolbox",
    description: "Practical setups, version control configurations, and markdown reports from the Data Science Toolbox track.",
    url: "https://github.com/istaranjandas/datascience-toolbox",
    language: "HTML",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "Taskapp",
    description: "A simple and beautiful daily task tracker featuring custom CSS confetti animations upon task completion.",
    url: "https://github.com/istaranjandas/Taskapp",
    language: "HTML",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "bgmidos",
    description: "A Python automation and scripting project designed for secure configuration management and operations.",
    url: "https://github.com/istaranjandas/bgmidos",
    language: "Python",
    stars: 0,
    fork: false,
    category: "others"
  },
  {
    name: "hostingProject",
    description: "A Python server automation project designed to orchestrate local site hosting and deployment.",
    url: "https://github.com/istaranjandas/hostingProject",
    language: "Python",
    stars: 0,
    fork: false,
    category: "others"
  },
  {
    name: "calc-numerology",
    description: "A clean numerological calculator to discover core values and traits based on name and birth date.",
    url: "https://github.com/istaranjandas/calc-numerology",
    language: "HTML",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "Final-Project",
    description: "System database integrations, secure credentials and core functions backup for final engineering review.",
    url: "https://github.com/istaranjandas/Final-Project",
    language: "PHP",
    stars: 0,
    fork: false,
    category: "others"
  },
  {
    name: "cs-video-courses",
    description: "A comprehensive, curated database of video lectures covering advanced Computer Science topics.",
    url: "https://github.com/istaranjandas/cs-video-courses",
    language: "Markdown",
    stars: 0,
    fork: true,
    category: "others"
  },
  {
    name: "istaranjandas.github.io",
    description: "The source code of this beautiful, premium, HSL-themed portfolio website.",
    url: "https://github.com/istaranjandas/istaranjandas.github.io",
    language: "HTML",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "coding-files",
    description: "A structured compilation of object-oriented program exercises, data structures, and algorithms in Java.",
    url: "https://github.com/istaranjandas/coding-files",
    language: "Java",
    stars: 0,
    fork: false,
    category: "others"
  },
  {
    name: "ird-notebook",
    description: "A reactive, client-side digital notebook on the go for quick brainstorming and coding logs.",
    url: "https://github.com/istaranjandas/ird-notebook",
    language: "JavaScript",
    stars: 0,
    fork: false,
    category: "react-js"
  },
  {
    name: "news-website-production-build",
    description: "Fully optimized, static production build of a modern News Portal ready for Netlify hosting.",
    url: "https://github.com/istaranjandas/news-website-production-build",
    language: "JavaScript",
    stars: 0,
    fork: false,
    category: "react-js"
  },
  {
    name: "istaranjandas",
    description: "Personal profile configuration files and Markdown templates.",
    url: "https://github.com/istaranjandas/istaranjandas",
    language: "Markdown",
    stars: 0,
    fork: false,
    category: "others"
  },
  {
    name: "NewsPage",
    description: "A real-time news application fetching general, sports, and business articles via NewsAPI with custom filters.",
    url: "https://github.com/istaranjandas/NewsPage",
    language: "React.js",
    stars: 1,
    fork: false,
    category: "react-js"
  },
  {
    name: "Text-Utility",
    description: "A React-based text processing tool to manipulate cases, remove extra spaces, copy, and read text aloud.",
    url: "https://github.com/istaranjandas/Text-Utility",
    language: "React.js",
    stars: 1,
    fork: false,
    category: "react-js"
  },
  {
    name: "online-quiz-website",
    description: "An interactive online quiz platform with secure student login, real-time scorecard, database backup, and animations.",
    url: "https://github.com/istaranjandas/online-quiz-website",
    language: "PHP",
    stars: 1,
    fork: false,
    category: "others"
  },
  {
    name: "joker",
    description: "A dynamic random joke generator delivering lighthearted jokes using public dad-jokes APIs.",
    url: "https://github.com/istaranjandas/joker",
    language: "JavaScript",
    stars: 0,
    fork: false,
    category: "react-js"
  },
  {
    name: "react-interface-2880067",
    description: "Customized dashboard layouts showcasing advanced flexbox layouts and reusable elements in React.",
    url: "https://github.com/istaranjandas/react-interface-2880067",
    language: "React.js",
    stars: 0,
    fork: true,
    category: "react-js"
  },
  {
    name: "social-platform-donut-frontend",
    description: "An open-source collaboration platform connecting developers and industry experts globally.",
    url: "https://github.com/istaranjandas/social-platform-donut-frontend",
    language: "React.js",
    stars: 1,
    fork: true,
    category: "react-js"
  },
  {
    name: "legitrading-website",
    description: "Full-featured web application for trading and market simulations with high-end financial charts.",
    url: "https://github.com/istaranjandas/legitrading-website",
    language: "JavaScript",
    stars: 1,
    fork: false,
    category: "react-js"
  },
  {
    name: "legitrading",
    description: "A frontend landing page mockup built with polished responsive elements for financial services.",
    url: "https://github.com/istaranjandas/legitrading",
    language: "HTML",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "mydemocodes",
    description: "A collection of minor static design patterns and practice blocks from college laboratories.",
    url: "https://github.com/istaranjandas/mydemocodes",
    language: "HTML",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "change-calculator",
    description: "A utility program that computes the exact optimal change breakdown for currency denominations.",
    url: "https://github.com/istaranjandas/change-calculator",
    language: "CSS",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "emojiteller",
    description: "An interactive React application helping users explore and search emoji definitions.",
    url: "https://github.com/istaranjandas/emojiteller",
    language: "JavaScript",
    stars: 0,
    fork: false,
    category: "react-js"
  },
  {
    name: "neogcamp-banana-speak",
    description: "A fun web-app translator that converts English sentences into Minion / Banana language using Vanilla JS.",
    url: "https://github.com/istaranjandas/neogcamp-banana-speak",
    language: "CSS",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "neogcamp-lesson-3",
    description: "Webpage styles and layouts designed as project work for the NeoG Camp frontend curriculum.",
    url: "https://github.com/istaranjandas/neogcamp-lesson-3",
    language: "HTML",
    stars: 0,
    fork: false,
    category: "html-css"
  },
  {
    name: "form-with-validation",
    description: "A polished registration form complete with secure, custom regular-expression validation rules.",
    url: "https://github.com/istaranjandas/form-with-validation",
    language: "HTML",
    stars: 0,
    fork: false,
    category: "html-css"
  }
];

// ==========================================
// CORE LAYOUT INTERACTIVE INTERACTIONS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Navigation Menu elements
  const body = document.body;
  const header = document.querySelector(".header");
  const btnTheme = document.getElementById("btn-theme");
  const btnHamburger = document.querySelector(".nav__hamburger");
  const navList = document.querySelector(".nav__list");
  const navLinks = document.querySelectorAll(".link--nav");
  const btnScrollTop = document.querySelector(".scroll-top");

  // ==========================================
  // LIGHT/DARK THEME IMPLEMENTATION
  // ==========================================
  const addThemeClass = (bodyClass, btnIconClass) => {
    body.className = bodyClass; // resets light/dark theme class on body
    if (btnTheme) {
      btnTheme.className = `fas ${btnIconClass}`;
    }
  };

  const getSavedBodyTheme = localStorage.getItem("portfolio-theme");
  const getSavedBtnTheme = localStorage.getItem("portfolio-btn-theme");

  if (getSavedBodyTheme && getSavedBtnTheme) {
    addThemeClass(getSavedBodyTheme, getSavedBtnTheme);
  } else {
    // Check system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      addThemeClass("dark", "fa-sun");
    } else {
      addThemeClass("light", "fa-moon");
    }
  }

  const isDark = () => body.classList.contains("dark");

  const setTheme = (bodyClass, btnClass) => {
    addThemeClass(bodyClass, btnClass);
    localStorage.setItem("portfolio-theme", bodyClass);
    localStorage.setItem("portfolio-btn-theme", btnClass);
  };

  // ==========================================
  // VIEW TRANSITIONS MOVEMENT & RIPPLE
  // ==========================================
  const toggleTheme = (e) => {
    const isAppearanceTransition = document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const toggleThemeLogic = () => {
      if (isDark()) {
        setTheme("light", "fa-moon");
      } else {
        setTheme("dark", "fa-sun");
      }
    };

    if (!isAppearanceTransition) {
      toggleThemeLogic();
      return;
    }

    // Capture circular reveal epicenter coordinate (where user clicked)
    const x = e.clientX || window.innerWidth / 2;
    const y = e.clientY || window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      toggleThemeLogic();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      document.documentElement.animate(
        {
          clipPath: isDark() ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: isDark()
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      );
    });
  };

  if (btnTheme) {
    btnTheme.parentElement.addEventListener("click", (e) => toggleTheme(e));
  }

  // ==========================================
  // MOBILE NAVIGATION HAMBURGER SYSTEM
  // ==========================================
  const toggleHamburger = () => {
    const icon = btnHamburger.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      navList.classList.add("display-nav-list");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      navList.classList.remove("display-nav-list");
    }
  };

  if (btnHamburger) {
    btnHamburger.addEventListener("click", toggleHamburger);
  }

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("display-nav-list")) {
        toggleHamburger();
      }
    });
  });

  // ==========================================
  // SCROLL EFFECTS (HEADER SCROLLED & BACK TO TOP)
  // ==========================================
  const handleScrollEffects = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Header scrolled transformation
    if (scrollPosition > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }

    // Scroll back to top visibility
    if (scrollPosition > 500) {
      btnScrollTop.style.display = "block";
    } else {
      btnScrollTop.style.display = "none";
    }
  };

  window.addEventListener("scroll", handleScrollEffects);
  handleScrollEffects(); // Call initially on page load

  // ==========================================
  // SCROLL REVEAL (INTERSECTION OBSERVER) ENGINE
  // ==========================================
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // Reveal once, keep performance optimal
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px -40px 0px"
  });

  // Observe static reveal elements on DOM load
  const revealElements = document.querySelectorAll(".reveal-element");
  if (revealElements.length > 0) {
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ==========================================
  // INTERACTIVE REPOSITORIES Showcase Engine
  // ==========================================
  const projectsGrid = document.querySelector(".projects__grid");
  const filterTabsContainer = document.querySelector(".filter-tabs");
  const searchInput = document.getElementById("proj-search");
  const showMoreBtn = document.getElementById("btn-show-more");
  const showMoreContainer = document.querySelector(".projects-more-container");

  if (projectsGrid) {
    let currentFilter = "all";
    let searchQuery = "";
    let projectsToShow = 6;
    const INITIAL_PROJECTS_COUNT = 6;

    // Renders the projects list to the HTML Grid
    const renderProjects = () => {
      // 1. Filter the repositories
      let filtered = GITHUB_REPOS.filter(repo => {
        const matchesCategory = currentFilter === "all" || repo.category === currentFilter;
        const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                              (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      });

      // 2. Clear previous content
      projectsGrid.innerHTML = "";

      if (filtered.length === 0) {
        projectsGrid.innerHTML = `
          <div class="no-results-message glass-panel">
            <i class="fas fa-search-minus" style="font-size: 2.5rem; margin-bottom: 0.5em; color: var(--clr-primary);"></i>
            <p>No projects found matching "${searchQuery}". Try adjusting your filters!</p>
          </div>
        `;
        if (showMoreContainer) showMoreContainer.style.display = "none";
        return;
      }

      // 3. Determine pagination slicing: if actively searching or filtering, show ALL results, otherwise progressive loading
      const isSearchingOrFiltering = searchQuery !== "" || currentFilter !== "all";
      const displayCount = isSearchingOrFiltering ? filtered.length : projectsToShow;
      const sliced = filtered.slice(0, displayCount);

      // 4. Update the "Show More" visibility
      if (showMoreContainer) {
        if (isSearchingOrFiltering || displayCount >= filtered.length) {
          showMoreContainer.style.display = "none";
        } else {
          showMoreContainer.style.display = "flex";
        }
      }

      // 5. Generate cards HTML
      sliced.forEach((repo, index) => {
        const langDotColor = getLanguageColor(repo.language);
        const card = document.createElement("div");
        card.className = "project-card glass-panel reveal-element";
        // Stagger dynamic cards reveal delays!
        card.style.transitionDelay = `${(index % 3) * 100}ms`;
        card.innerHTML = `
          <div>
            <div class="project-card-header">
              <i class="far fa-folder project-folder-icon"></i>
              <div class="project-links">
                <a href="${repo.url}" target="_blank" aria-label="GitHub Repository" class="link--social">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
            <h3 class="project-card-title">${repo.name}</h3>
            <p class="project-card-desc">${repo.description || 'No description available for this repository.'}</p>
          </div>
          <div class="project-card-footer">
            <span class="project-language">
              <span class="language-dot" style="background-color: ${langDotColor}"></span>
              ${repo.language || 'HTML'}
            </span>
            <span class="project-stars">
              <i class="fas fa-star"></i> ${repo.stars}
            </span>
          </div>
        `;
        projectsGrid.appendChild(card);
      });

      // Dynamically register new cards with the Intersection Observer Reveal Engine
      const dynamicReveals = projectsGrid.querySelectorAll(".reveal-element");
      dynamicReveals.forEach(el => revealObserver.observe(el));
    };

    // Helper for beautiful custom badge colors per coding language
    const getLanguageColor = (lang) => {
      const colors = {
        "TypeScript": "#3178c6",
        "React.js": "#61dafb",
        "JavaScript": "#f7df1e",
        "HTML": "#e34c26",
        "CSS": "#563d7c",
        "Java": "#b07219",
        "Python": "#3572A5",
        "PHP": "#4F5D95",
        "R": "#198CE7",
        "Markdown": "#083fa1"
      };
      return colors[lang] || "#777777";
    };

    // Setup Filter Pill triggers
    if (filterTabsContainer) {
      filterTabsContainer.addEventListener("click", (e) => {
        const tab = e.target.closest(".filter-tab");
        if (!tab) return;

        // Toggle Active class
        filterTabsContainer.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Filter and re-render
        currentFilter = tab.dataset.filter;
        projectsToShow = INITIAL_PROJECTS_COUNT; // reset pagination on filter change
        renderProjects();
      });
    }

    // Setup Text Search listener
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        projectsToShow = INITIAL_PROJECTS_COUNT; // reset pagination on search
        renderProjects();
      });
    }

    // Setup progressive disclosure load triggers
    if (showMoreBtn) {
      showMoreBtn.addEventListener("click", () => {
        projectsToShow += INITIAL_PROJECTS_COUNT;
        renderProjects();
      });
    }

    // Initial load
    renderProjects();
  }

  // ==========================================
  // NEXA MODAL POPUP TRIGGER SYSTEM
  // ==========================================
  const nexaTrigger = document.getElementById("nexa-trigger");
  const nexaModal = document.getElementById("nexa-modal");
  const nexaClose = document.getElementById("nexa-close");

  if (nexaTrigger && nexaModal && nexaClose) {
    // Open Modal
    nexaTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      nexaModal.classList.add("active");
    });

    // Close Modal via Close Button
    nexaClose.addEventListener("click", () => {
      nexaModal.classList.remove("active");
    });

    // Close Modal via clicking on Overlay
    nexaModal.addEventListener("click", (e) => {
      if (e.target === nexaModal) {
        nexaModal.classList.remove("active");
      }
    });

    // Close Modal via Escape Key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nexaModal.classList.contains("active")) {
        nexaModal.classList.remove("active");
      }
    });
  }
});
