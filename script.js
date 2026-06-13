/* ============================================
   BookVerse — Main JavaScript
   ============================================ */

// ---- Genre Cover Colors ----
const genreColors = {
  Fantasy: { from: "#4a3f8c", to: "#1a1a3e" },
  Mystery: { from: "#2c5282", to: "#1a365d" },
  Romance: { from: "#8b4557", to: "#6b3344" },
  "Science Fiction": { from: "#0a1628", to: "#1e3a5f" },
  "Self-Help": { from: "#f5a623", to: "#e67e22" },
  History: { from: "#c0392b", to: "#922b21" },
  Biography: { from: "#553c9a", to: "#322659" },
  Thriller: { from: "#1a202c", to: "#2d3748" }
};

const genreIcons = {
  Fantasy: "fa-dragon", Mystery: "fa-magnifying-glass", Romance: "fa-heart",
  "Science Fiction": "fa-rocket", "Self-Help": "fa-seedling", History: "fa-landmark",
  Biography: "fa-user-pen", Thriller: "fa-skull-crossbones"
};

const genreColorsMap = {
  Fantasy: "#6B4C9A", Mystery: "#2C5282", Romance: "#C53030",
  "Science Fiction": "#2B6CB0", "Self-Help": "#276749", History: "#975A16",
  Biography: "#553C9A", Thriller: "#1A202C"
};

// ---- Book Data ----
const booksData = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", genre: "Fantasy", rating: 4.7, reviews: 2847, pages: 304, year: 2020, description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.", cover: "https://covers.openlibrary.org/b/title/The%20Midnight%20Library-L.jpg", featured: true, recommended: true, videoId: "rB9G5h7Lq8k" },
  { id: 2, title: "Project Hail Mary", author: "Andy Weir", genre: "Science Fiction", rating: 4.8, reviews: 3521, pages: 496, year: 2021, description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the author of The Martian.", cover: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg", featured: true, recommended: true, videoId: "A5w-dfvi3Ss" },
  { id: 3, title: "The Silent Patient", author: "Alex Michaelides", genre: "Mystery", rating: 4.5, reviews: 4102, pages: 336, year: 2019, description: "A woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.", cover: "https://covers.openlibrary.org/b/title/The%20Silent%20Patient-L.jpg", featured: true, recommended: false, videoId: "1sTk8C7-ZgE" },
  { id: 4, title: "Atomic Habits", author: "James Clear", genre: "Self-Help", rating: 4.9, reviews: 8924, pages: 320, year: 2018, description: "An easy and proven way to build good habits and break bad ones through tiny changes that deliver remarkable results.", cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg", featured: true, recommended: true, videoId: "PZ7lDr5yKJU" },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", rating: 4.6, reviews: 6234, pages: 432, year: 1813, description: "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring.", cover: "https://covers.openlibrary.org/b/title/Pride%20and%20Prejudice-L.jpg", featured: false, recommended: true, videoId: "7A0SxMm0PBA" },
  { id: 6, title: "Sapiens", author: "Yuval Noah Harari", genre: "History", rating: 4.7, reviews: 5678, pages: 443, year: 2011, description: "A brief history of humankind, exploring how Homo sapiens came to dominate the world through cognitive, agricultural, and scientific revolutions.", cover: "https://covers.openlibrary.org/b/title/Sapiens-L.jpg", featured: false, recommended: true, videoId: "BB0QZzG4Y0Y" },
  { id: 7, title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", rating: 4.8, reviews: 3891, pages: 662, year: 2007, description: "The tale of Kvothe, from his childhood in a troupe of traveling players to his years spent as a near-feral orphan in a crime-ridden city.", cover: "https://covers.openlibrary.org/b/title/The%20Name%20of%20the%20Wind-L.jpg", featured: false, recommended: false, videoId: "efGyNgUllXg" },
  { id: 8, title: "Gone Girl", author: "Gillian Flynn", genre: "Mystery", rating: 4.4, reviews: 4521, pages: 432, year: 2012, description: "On a warm summer morning, Nick's wife Amy disappears. Under mounting pressure from the police, the media, and Amy's parents, Nick's portrait of a blissful marriage begins to crumble.", cover: "https://covers.openlibrary.org/b/title/Gone%20Girl-L.jpg", featured: false, recommended: false, videoId: "2-_-1nJf8Vg" },
  { id: 9, title: "Dune", author: "Frank Herbert", genre: "Science Fiction", rating: 4.6, reviews: 7123, pages: 688, year: 1965, description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.", cover: "https://covers.openlibrary.org/b/title/Dune-L.jpg", featured: false, recommended: true, videoId: "jAhjPd4uNF4" },
  { id: 10, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", genre: "Romance", rating: 4.7, reviews: 3890, pages: 400, year: 2017, description: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.", cover: "https://covers.openlibrary.org/b/title/The%20Seven%20Husbands%20of%20Evelyn%20Hugo-L.jpg", featured: false, recommended: false, videoId: "kQ8q3YqZqZQ" },
  { id: 11, title: "Educated", author: "Tara Westover", genre: "History", rating: 4.6, reviews: 5234, pages: 334, year: 2018, description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.", cover: "https://covers.openlibrary.org/b/title/Educated-L.jpg", featured: false, recommended: false, videoId: "1Q8V9Z9Z9Z9" },
  { id: 12, title: "Deep Work", author: "Cal Newport", genre: "Self-Help", rating: 4.5, reviews: 2987, pages: 296, year: 2016, description: "Rules for focused success in a distracted world. Learn how to cultivate deep focus and produce better results in less time.", cover: "https://covers.openlibrary.org/b/title/Deep%20Work-L.jpg", featured: false, recommended: false, videoId: "3E7hmRlNW88" },
  { id: 13, title: "The Alchemist", author: "Paulo Coelho", genre: "Fantasy", rating: 4.6, reviews: 9102, pages: 208, year: 1988, description: "A magical story about following your dream. Santiago, an Andalusian shepherd boy, travels from Spain to Egypt in search of treasure.", cover: "https://covers.openlibrary.org/b/title/The%20Alchemist-L.jpg", featured: true, recommended: true, videoId: "GcgFxToF9B0" },
  { id: 14, title: "1984", author: "George Orwell", genre: "Science Fiction", rating: 4.7, reviews: 9876, pages: 328, year: 1949, description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its dystopia becomes more real.", cover: "https://covers.openlibrary.org/b/title/1984-L.jpg", featured: true, recommended: true, videoId: "h9JIKngJ0KM" },
  { id: 15, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "History", rating: 4.8, reviews: 7654, pages: 336, year: 1960, description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.", cover: "https://covers.openlibrary.org/b/title/To%20Kill%20a%20Mockingbird-L.jpg", featured: false, recommended: true, videoId: "KR7loA_oziY" },
  { id: 16, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Romance", rating: 4.5, reviews: 5432, pages: 180, year: 1925, description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, set in the Jazz Age.", cover: "https://covers.openlibrary.org/b/title/The%20Great%20Gatsby-L.jpg", featured: false, recommended: true, videoId: "rARN6agiW54" },
  { id: 17, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genre: "Fantasy", rating: 4.9, reviews: 15234, pages: 309, year: 1997, description: "Harry Potter has no idea how famous he is until he turns eleven and receives an invitation to attend Hogwarts School of Witchcraft.", cover: "https://covers.openlibrary.org/b/title/Harry%20Potter%20and%20the%20Philosopher's%20Stone-L.jpg", featured: true, recommended: true, videoId: "VyHV0BRtdxo" },
  { id: 18, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", rating: 4.8, reviews: 8765, pages: 310, year: 1937, description: "Bilbo Baggins is a hobbit who enjoys a comfortable life. His contentment is disturbed when the wizard Gandalf and dwarves arrive.", cover: "https://covers.openlibrary.org/b/title/The%20Hobbit-L.jpg", featured: true, recommended: true, videoId: "JTsoK_qchA" },
  { id: 19, title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery", rating: 4.3, reviews: 6789, pages: 489, year: 2003, description: "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night.", cover: "https://covers.openlibrary.org/b/title/The%20Da%20Vinci%20Code-L.jpg", featured: false, recommended: false, videoId: "zN1sp8eG6H4" },
  { id: 20, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "Self-Help", rating: 4.4, reviews: 7654, pages: 224, year: 2016, description: "A counterintuitive approach to living a good life. Not your typical self-help book — raw, honest, and refreshingly real.", cover: "https://covers.openlibrary.org/b/title/The%20Subtle%20Art%20of%20Not%20Giving%20a%20F*ck-L.jpg", featured: false, recommended: true, videoId: "2f5kR9Y8K1E" },
  { id: 21, title: "Becoming", author: "Michelle Obama", genre: "Biography", rating: 4.8, reviews: 11234, pages: 448, year: 2018, description: "An intimate, powerful, and inspiring memoir by the former First Lady of the United States.", cover: "https://covers.openlibrary.org/b/title/Becoming-L.jpg", featured: true, recommended: true, videoId: "SEWG5-pBjKM" },
  { id: 22, title: "The Psychology of Money", author: "Morgan Housel", genre: "Self-Help", rating: 4.7, reviews: 5432, pages: 256, year: 2020, description: "Timeless lessons on wealth, greed, and happiness. Doing well with money has little to do with how smart you are.", cover: "https://covers.openlibrary.org/b/title/The%20Psychology%20of%20Money-L.jpg", featured: false, recommended: true, videoId: "TJDcGv9OH4Q" },
  { id: 23, title: "Circe", author: "Madeline Miller", genre: "Fantasy", rating: 4.6, reviews: 4321, pages: 393, year: 2018, description: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. Circe is strange — but she has power.", cover: "https://covers.openlibrary.org/b/title/Circe-L.jpg", featured: false, recommended: true, videoId: "wfW5h3A_d5o" },
  { id: 24, title: "Where the Crawdads Sing", author: "Delia Owens", genre: "Mystery", rating: 4.6, reviews: 8765, pages: 384, year: 2018, description: "For years, rumors of the Marsh Girl have haunted Barkley Cove. But Kya is not what they say — sensitive and intelligent.", cover: "https://covers.openlibrary.org/b/title/Where%20the%20Crawdads%20Sing-L.jpg", featured: false, recommended: true, videoId: "TisWBbj3AYQ" },
  { id: 25, title: "A Game of Thrones", author: "George R.R. Martin", genre: "Fantasy", rating: 4.7, reviews: 9876, pages: 694, year: 1996, description: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. Summers can last decades, winters a lifetime.", cover: "https://covers.openlibrary.org/b/title/A%20Game%20of%20Thrones-L.jpg", featured: true, recommended: true, videoId: "KPLWWIOCOO8" },
  { id: 26, title: "The Girl on the Train", author: "Paula Hawkins", genre: "Thriller", rating: 4.2, reviews: 5432, pages: 336, year: 2015, description: "Rachel takes the same commuter train every morning. She fantasizes about the perfect couple she watches every day, until she sees something shocking.", cover: "https://covers.openlibrary.org/b/title/The%20Girl%20on%20the%20Train-L.jpg", featured: false, recommended: false, videoId: "y5yHTR4JGD4" },
  { id: 27, title: "Think and Grow Rich", author: "Napoleon Hill", genre: "Self-Help", rating: 4.5, reviews: 6543, pages: 320, year: 1937, description: "The landmark bestseller that has sold millions of copies worldwide — the definitive guide to success and personal achievement.", cover: "https://covers.openlibrary.org/b/title/Think%20and%20Grow%20Rich-L.jpg", featured: false, recommended: false, videoId: "X3mKi4M9r7I" },
  { id: 28, title: "Steve Jobs", author: "Walter Isaacson", genre: "Biography", rating: 4.6, reviews: 4321, pages: 656, year: 2011, description: "Based on more than forty interviews with Steve Jobs conducted over two years — as well as interviews with family and colleagues.", cover: "https://covers.openlibrary.org/b/title/Steve%20Jobs-L.jpg", featured: false, recommended: true, videoId: "FTGI-TsrY48" }
];

const videosData = [
  { id: 1, title: "Dune — Official Movie Trailer", description: "Experience the epic sci-fi masterpiece that defined a genre. Watch the cinematic adaptation of Frank Herbert's legendary novel.", youtubeId: "jAhjPd4uNF4", bookId: 9, type: "Trailer", duration: "2:30" },
  { id: 2, title: "Atomic Habits — Book Summary", description: "Discover James Clear's revolutionary framework for building good habits and breaking bad ones in this animated summary.", youtubeId: "PZ7lDr5yKJU", bookId: 4, type: "Review", duration: "8:45" },
  { id: 3, title: "Project Hail Mary — Book Review", description: "Andy Weir delivers another sci-fi triumph. See why readers are calling this the best book of the year.", youtubeId: "A5w-dfvi3Ss", bookId: 2, type: "Review", duration: "12:20" },
  { id: 4, title: "The Midnight Library — Author Interview", description: "Matt Haig discusses life, regret, and the infinite possibilities within The Midnight Library.", youtubeId: "rB9G5h7Lq8k", bookId: 1, type: "Interview", duration: "15:00" },
  { id: 5, title: "Sapiens — Animated Summary", description: "Yuval Noah Harari's sweeping history of humankind condensed into a visually stunning animated overview.", youtubeId: "BB0QZzG4Y0Y", bookId: 6, type: "Summary", duration: "10:15" },
  { id: 6, title: "Gone Girl — Film Trailer", description: "The psychological thriller that kept millions guessing. Based on Gillian Flynn's bestselling novel.", youtubeId: "2-_-1nJf8Vg", bookId: 8, type: "Trailer", duration: "2:15" },
  { id: 7, title: "The Psychology of Money — Summary", description: "Timeless lessons on wealth, greed, and happiness from Morgan Housel's bestselling finance book.", youtubeId: "TJDcGv9OH4Q", bookId: 22, type: "Summary", duration: "11:00" },
  { id: 8, title: "Harry Potter — Official Trailer", description: "Enter the magical world of Hogwarts with the film adaptation of J.K. Rowling's beloved first novel.", youtubeId: "VyHV0BRtdxo", bookId: 17, type: "Trailer", duration: "2:22" }
];

const categories = [];

function buildCategories() {
  const counts = {};
  booksData.forEach((b) => { counts[b.genre] = (counts[b.genre] || 0) + 1; });
  return Object.keys(counts).map((name) => ({
    name, icon: genreIcons[name] || "fa-book", count: counts[name], color: genreColorsMap[name] || "#8b2942"
  }));
}

const testimonials = [
  { name: "Sarah Mitchell", role: "Avid Reader", avatar: "SM", text: "BookVerse transformed how I discover new books. The recommendations are spot-on, and I love saving my favorites for later!", rating: 5 },
  { name: "James Chen", role: "Book Club Leader", avatar: "JC", text: "Our book club uses BookVerse to find our next read every month. The genre filters make it incredibly easy to explore new categories.", rating: 5 },
  { name: "Emily Rodriguez", role: "Literature Student", avatar: "ER", text: "The clean interface and detailed book information helped me build an amazing reading list for my thesis. Highly recommended!", rating: 4 }
];

// ---- State ----
let favorites = JSON.parse(localStorage.getItem("bookverse-favorites")) || [];
let currentFilter = "all";
let searchQuery = "";

// ---- DOM Ready ----
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initTheme();
  initNavigation();
  initPremiumAnimations();
  initScrollProgress();
  initParallax();
  initSectionTabs();

  if (document.getElementById("featured-books")) {
    categories.push(...buildCategories());
    populateGenreFilter();
    renderHeroCovers();
    renderMarquee();
    renderTopRated();
    renderVideos();
    renderShowcase();
    renderFeaturedBooks();
    renderCategories();
    renderRecommendedBooks();
    renderTestimonials();
    initSearchSection();
    initNewsletter();
    renderFavorites();
    initHeroAnimations();
  }

  initModal();
  initVideoModal();
  initContactForm();
  initFAQ();
  initCounterAnimation();
});

// ---- Cover Helpers ----
function getCoverColors(book) {
  return genreColors[book.genre] || { from: "#333", to: "#555" };
}

function getInitials(title) {
  return title.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function createCoverHTML(book, className = "") {
  const colors = getCoverColors(book);
  const initials = getInitials(book.title);
  const placeholder = `<div class="placeholder-cover cover-fallback ${className}" style="--cover-from:${colors.from};--cover-to:${colors.to}"><span class="cover-initials">${initials}</span></div>`;
  if (!book.cover) {
    return `<div class="placeholder-cover ${className}" style="--cover-from:${colors.from};--cover-to:${colors.to}"><span class="cover-initials">${initials}</span></div>`;
  }
  return `<img src="${book.cover}" alt="${book.title} cover" class="book-cover ${className}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">${placeholder}`;
}

// ---- Theme Toggle ----
function initTheme() {
  const savedTheme = localStorage.getItem("bookverse-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("bookverse-theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (icon) icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// ---- Navigation ----
function initNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const navbar = document.getElementById("navbar");
  if (navbar) {
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      navbar.classList.toggle("scrolled", y > 50);
      if (y > 200) {
        navbar.classList.toggle("nav-hidden", y > lastScroll && y > 300);
      } else {
        navbar.classList.remove("nav-hidden");
      }
      lastScroll = y;
    }, { passive: true });
  }
}

// ---- Scroll Animations (Premium Agency Style) ----
function initPremiumAnimations() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add("revealed"), delay);
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => revealObserver.observe(el));

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll(".book-card, .category-card, .testimonial-card, .video-card, .top-rated-card, .showcase-item").forEach((child, i) => {
        setTimeout(() => child.classList.add("revealed"), i * 80);
      });
      staggerObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(".stagger-grid, .categories-grid, .testimonials-grid, .video-grid, .top-rated-scroll").forEach((el) => staggerObserver.observe(el));

  // Legacy support
  const legacyObserver = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  document.querySelectorAll(".fade-in, .slide-up").forEach((el) => legacyObserver.observe(el));
}

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const progress = document.getElementById("preloader-progress");
  if (!preloader) return;

  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 18 + 8;
    if (pct >= 100) {
      pct = 100;
      clearInterval(interval);
      if (progress) progress.style.width = "100%";
      setTimeout(() => {
        preloader.classList.add("done");
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");
        setTimeout(() => preloader.remove(), 800);
      }, 400);
    } else if (progress) {
      progress.style.width = pct + "%";
    }
  }, 120);
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrollTop / docHeight * 100) + "%";
  }, { passive: true });
}

function initParallax() {
  const layers = document.querySelectorAll("[data-parallax]");
  const heroText = document.querySelector(".hero-text");
  const heroVisual = document.querySelector(".hero-visual");
  const sections = document.querySelectorAll(".parallax-section");

  function onScroll() {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    layers.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const rect = el.closest("section")?.getBoundingClientRect();
      const inView = rect ? rect.top < vh && rect.bottom > 0 : true;
      if (!inView && el.classList.contains("parallax-bg")) return;

      if (el.classList.contains("parallax-bg")) {
        const section = el.closest("section");
        const offset = section ? section.offsetTop : 0;
        const rel = scrollY - offset;
        el.style.transform = `translate3d(0, ${rel * speed}px, 0)`;
      } else {
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      }
    });

    if (heroText) {
      const p = Math.min(scrollY / (vh * 0.6), 1);
      heroText.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
      heroText.style.opacity = 1 - p * 0.6;
    }
    if (heroVisual) {
      heroVisual.style.transform = `translate3d(0, ${scrollY * -0.2}px, 0) scale(${1 - scrollY * 0.0002})`;
    }

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const progress = 1 - Math.abs(rect.top + rect.height / 2 - vh / 2) / (vh * 0.8);
      const clamped = Math.max(0, Math.min(1, progress));
      sec.style.setProperty("--scroll-progress", clamped);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initSectionTabs() {
  const tabsNav = document.getElementById("section-tabs");
  if (!tabsNav) return;

  const tabs = tabsNav.querySelectorAll(".section-tab");
  const sections = Array.from(tabs).map((t) => document.getElementById(t.dataset.section)).filter(Boolean);

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(tab.dataset.section);
      if (target) {
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--navbar-height")) + 56;
        window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tabs.forEach((t) => t.classList.toggle("active", t.dataset.section === entry.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

  sections.forEach((sec) => observer.observe(sec));
}

function initHeroAnimations() {
  document.querySelectorAll(".title-word").forEach((word, i) => {
    setTimeout(() => word.classList.add("shown"), 600 + i * 120);
  });
  document.querySelectorAll(".hero-stat").forEach((stat, i) => {
    setTimeout(() => {
      const target = parseInt(stat.dataset.count);
      const suffix = stat.dataset.suffix || "";
      const strong = stat.querySelector("strong");
      animateValue(strong, 0, target, 1800, suffix);
    }, 1200 + i * 200);
  });
}

function animateValue(el, start, end, duration, suffix) {
  const t0 = performance.now();
  function step(now) {
    const p = Math.min((now - t0) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.floor(start + (end - start) * eased).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function populateGenreFilter() {
  const select = document.getElementById("genre-filter");
  if (!select) return;
  const genres = [...new Set(booksData.map((b) => b.genre))].sort();
  select.innerHTML = '<option value="all">All Genres</option>' +
    genres.map((g) => `<option value="${g}">${g}</option>`).join("");
}

function renderShowcase() {
  const track = document.getElementById("showcase-track");
  if (!track) return;
  const newest = [...booksData].sort((a, b) => b.year - a.year).slice(0, 14);
  const html = newest.map((book) => `
    <div class="showcase-item" data-id="${book.id}">
      <div class="showcase-cover">${createCoverHTML(book)}</div>
      <div class="showcase-info">
        <span class="showcase-year">${book.year}</span>
        <h4>${book.title}</h4>
        <p>${book.author}</p>
        <div class="showcase-rating"><i class="fas fa-star"></i> ${book.rating}</div>
      </div>
    </div>`).join("");
  track.innerHTML = html + html;
  track.querySelectorAll(".showcase-item").forEach((item, i) => {
    setTimeout(() => item.classList.add("revealed"), 100 + i * 50);
    item.addEventListener("click", () => openModal(parseInt(item.dataset.id)));
  });
}

// ---- Book Card ----
function createBookCard(book, showFavorite = true, variant = "") {
  const isFav = favorites.includes(book.id);
  const stars = generateStars(book.rating);

  return `
    <article class="book-card reveal-card ${variant}" data-id="${book.id}" data-genre="${book.genre}">
      <div class="book-cover-wrapper">
        ${createCoverHTML(book)}
        ${book.rating >= 4.7 ? '<span class="rating-ribbon"><i class="fas fa-star"></i> Top Pick</span>' : ''}
        <div class="book-overlay">
          <button class="btn btn-primary btn-sm view-details" data-id="${book.id}">
            <i class="fas fa-eye"></i> View Details
          </button>
          ${book.videoId ? `<button class="btn btn-glass btn-sm watch-trailer" data-videoid="${book.videoId}" data-title="${book.title}"><i class="fas fa-play"></i> Trailer</button>` : ''}
        </div>
        ${showFavorite ? `<button class="favorite-btn ${isFav ? "active" : ""}" data-id="${book.id}" aria-label="Toggle favorite"><i class="${isFav ? "fas" : "far"} fa-heart"></i></button>` : ""}
      </div>
      <div class="book-info">
        <span class="book-genre">${book.genre}</span>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
        <div class="book-rating">${stars} <span class="rating-value">${book.rating}</span> ${book.reviews ? `<span class="review-count">(${book.reviews.toLocaleString()} reviews)</span>` : ''}</div>
        <p class="book-desc">${book.description.substring(0, 90)}...</p>
        ${book.pages ? `<div class="book-meta-mini"><span><i class="fas fa-book"></i> ${book.pages} pages</span><span><i class="fas fa-calendar"></i> ${book.year}</span></div>` : ''}
      </div>
    </article>`;
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = "";
  for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
  if (half) html += '<i class="fas fa-star-half-alt"></i>';
  for (let i = 0; i < 5 - full - (half ? 1 : 0); i++) html += '<i class="far fa-star"></i>';
  return html;
}

// ---- Hero & Marquee ----
function renderHeroCovers() {
  const container = document.getElementById("hero-floating-covers");
  if (!container) return;
  const topBooks = [...booksData].sort((a, b) => b.rating - a.rating).slice(0, 5);
  container.innerHTML = topBooks.map((book, i) => `
    <div class="floating-cover floating-cover-${i + 1}" data-id="${book.id}" style="--delay:${i * 0.15}s">
      ${createCoverHTML(book, "hero-cover-img")}
      <div class="floating-cover-info">
        <span class="floating-rating"><i class="fas fa-star"></i> ${book.rating}</span>
      </div>
    </div>`).join("");
  container.querySelectorAll(".floating-cover").forEach((el) => {
    el.addEventListener("click", () => openModal(parseInt(el.dataset.id)));
  });
}

function renderMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;
  const items = [...booksData].sort((a, b) => b.rating - a.rating);
  const html = items.map((b) => `
    <span class="marquee-item">
      <img src="${b.cover || ''}" alt="" class="marquee-thumb" loading="lazy" onerror="this.style.display='none'">
      <strong>${b.title}</strong>
      <em>${b.rating} ★</em>
    </span>`).join("");
  track.innerHTML = html + html;
}

// ---- Top Rated ----
function renderTopRated() {
  const podium = document.getElementById("top-rated-podium");
  const scroll = document.getElementById("top-rated-scroll");
  if (!podium || !scroll) return;

  const sorted = [...booksData].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  const podiumOrder = [top3[1], top3[0], top3[2]];
  const ranks = [2, 1, 3];
  const medals = ["silver", "gold", "bronze"];

  podium.innerHTML = podiumOrder.map((book, i) => `
    <div class="podium-item podium-${medals[i]} slide-up" data-id="${book.id}">
      <div class="podium-rank">#${ranks[i]}</div>
      <div class="podium-cover-wrap">${createCoverHTML(book, "podium-cover")}</div>
      <div class="podium-info">
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <div class="podium-rating">${generateStars(book.rating)} <span>${book.rating}</span></div>
        <span class="podium-reviews">${book.reviews.toLocaleString()} reviews</span>
      </div>
      <div class="podium-actions">
        <button class="btn btn-primary btn-sm view-details" data-id="${book.id}"><i class="fas fa-eye"></i> Details</button>
        ${book.videoId ? `<button class="btn btn-glass btn-sm watch-trailer" data-videoid="${book.videoId}" data-title="${book.title}"><i class="fas fa-play"></i></button>` : ''}
      </div>
    </div>`).join("");

  scroll.innerHTML = rest.map((book) => createTopRatedCard(book)).join("");
  attachBookEvents(podium);
  attachBookEvents(scroll);
}

function createTopRatedCard(book) {
  const isFav = favorites.includes(book.id);
  return `
    <article class="top-rated-card" data-id="${book.id}">
      <div class="top-rated-cover">${createCoverHTML(book)}</div>
      <div class="top-rated-body">
        <span class="book-genre">${book.genre}</span>
        <h3>${book.title}</h3>
        <p class="book-author">by ${book.author}</p>
        <div class="book-rating">${generateStars(book.rating)} <span class="rating-value">${book.rating}</span></div>
        <span class="review-count">${book.reviews.toLocaleString()} reviews</span>
      </div>
      <div class="top-rated-actions">
        <button class="favorite-btn ${isFav ? "active" : ""}" data-id="${book.id}"><i class="${isFav ? "fas" : "far"} fa-heart"></i></button>
        <button class="view-details" data-id="${book.id}"><i class="fas fa-arrow-right"></i></button>
      </div>
    </article>`;
}

// ---- Videos ----
function renderVideos() {
  const featured = document.getElementById("video-featured");
  const grid = document.getElementById("video-grid");
  if (!featured || !grid) return;

  const main = videosData[0];
  const book = booksData.find((b) => b.id === main.bookId);
  featured.innerHTML = `
    <div class="video-featured-player" data-youtube="${main.youtubeId}" data-title="${main.title}" data-desc="${main.description}">
      <img src="https://img.youtube.com/vi/${main.youtubeId}/maxresdefault.jpg" alt="${main.title}" class="video-thumb" onerror="this.src='https://img.youtube.com/vi/${main.youtubeId}/hqdefault.jpg'">
      <div class="video-play-overlay">
        <button class="video-play-btn" aria-label="Play video"><i class="fas fa-play"></i></button>
        <span class="video-duration">${main.duration}</span>
      </div>
      <span class="video-type-badge">${main.type}</span>
      ${book ? `<div class="video-book-cover">${createCoverHTML(book, "video-book-img")}</div>` : ''}
    </div>
    <div class="video-featured-info">
      <span class="section-tag section-tag-light"><i class="fas fa-star"></i> Featured</span>
      <h3>${main.title}</h3>
      <p>${main.description}</p>
      ${book ? `<p class="video-linked-book"><i class="fas fa-link"></i> Based on <strong>${book.title}</strong> by ${book.author}</p>` : ''}
      <button class="btn btn-primary watch-video" data-youtube="${main.youtubeId}" data-title="${main.title}" data-desc="${main.description}"><i class="fas fa-play"></i> Watch Now</button>
    </div>`;

  grid.innerHTML = videosData.slice(1).map((v) => {
    const linkedBook = booksData.find((b) => b.id === v.bookId);
    return `
      <div class="video-card slide-up" data-youtube="${v.youtubeId}" data-title="${v.title}" data-desc="${v.description}">
        <div class="video-card-thumb">
          <img src="https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg" alt="${v.title}" loading="lazy">
          <div class="video-play-overlay">
            <button class="video-play-btn sm" aria-label="Play ${v.title}"><i class="fas fa-play"></i></button>
            <span class="video-duration">${v.duration}</span>
          </div>
          <span class="video-type-badge">${v.type}</span>
        </div>
        <div class="video-card-body">
          <h4>${v.title}</h4>
          <p>${v.description.substring(0, 80)}...</p>
          ${linkedBook ? `<span class="video-book-tag"><i class="fas fa-book"></i> ${linkedBook.title}</span>` : ''}
        </div>
      </div>`;
  }).join("");

  attachVideoEvents(featured);
  attachVideoEvents(grid);
}

function attachVideoEvents(container) {
  container.querySelectorAll("[data-youtube], .watch-video").forEach((el) => {
    el.addEventListener("click", () => {
      openVideoModal(el.dataset.youtube, el.dataset.title, el.dataset.desc);
    });
  });
}

function attachTrailerEvents(container) {
  container.querySelectorAll(".watch-trailer").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openVideoModal(btn.dataset.videoid, btn.dataset.title + " — Trailer", "");
    });
  });
}

function initVideoModal() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("video-modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closeVideoModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeVideoModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeVideoModal(); });
}

function openVideoModal(youtubeId, title, desc) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-iframe");
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
  document.getElementById("video-modal-title").textContent = title || "";
  document.getElementById("video-modal-desc").textContent = desc || "";
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("video-iframe");
  if (modal) { modal.classList.remove("active"); iframe.src = ""; document.body.style.overflow = ""; }
}

// ---- Render Sections ----
function renderFeaturedBooks() {
  const container = document.getElementById("featured-books");
  container.innerHTML = booksData.filter((b) => b.featured).map((b) => createBookCard(b)).join("");
  attachBookEvents(container);
  initStaggerReveal(container);
}

function renderRecommendedBooks() {
  const container = document.getElementById("recommended-books");
  container.innerHTML = booksData.filter((b) => b.recommended).map((b) => createBookCard(b)).join("");
  attachBookEvents(container);
  initStaggerReveal(container);
}

function renderCategories() {
  const container = document.getElementById("categories-grid");
  if (!container) return;

  container.innerHTML = categories.map((cat) => `
    <div class="category-card reveal-card" data-genre="${cat.name}" style="--cat-color:${cat.color}">
      <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
      <h3>${cat.name}</h3>
      <p>${cat.count} books available</p>
      <span class="category-link">Explore <i class="fas fa-arrow-right"></i></span>
    </div>`).join("");

  container.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.getElementById("search-section").scrollIntoView({ behavior: "smooth" });
      document.getElementById("genre-filter").value = card.dataset.genre;
      currentFilter = card.dataset.genre;
      searchQuery = "";
      document.getElementById("search-input").value = "";
      renderSearchResults();
    });
  });
}

function renderTestimonials() {
  const container = document.getElementById("testimonials-slider");
  if (!container) return;
  container.innerHTML = testimonials.map((t) => `
    <div class="testimonial-card slide-up">
      <div class="testimonial-stars">${generateStars(t.rating)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.avatar}</div>
        <div><strong>${t.name}</strong><span>${t.role}</span></div>
      </div>
    </div>`).join("");
}

// ---- Search & Filter ----
function initSearchSection() {
  const searchInput = document.getElementById("search-input");
  const genreFilter = document.getElementById("genre-filter");
  const searchBtn = document.getElementById("search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", debounce((e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderSearchResults();
    }, 300));
  }
  if (genreFilter) {
    genreFilter.addEventListener("change", (e) => { currentFilter = e.target.value; renderSearchResults(); });
  }
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      searchQuery = searchInput.value.toLowerCase().trim();
      renderSearchResults();
    });
  }
  renderSearchResults();
}

function renderSearchResults() {
  const container = document.getElementById("search-results");
  const countEl = document.getElementById("results-count");
  if (!container) return;

  let filtered = booksData;
  if (currentFilter !== "all") filtered = filtered.filter((b) => b.genre === currentFilter);
  if (searchQuery) {
    filtered = filtered.filter((b) =>
      b.title.toLowerCase().includes(searchQuery) ||
      b.author.toLowerCase().includes(searchQuery) ||
      b.genre.toLowerCase().includes(searchQuery)
    );
  }

  if (countEl) countEl.textContent = `${filtered.length} book${filtered.length !== 1 ? "s" : ""} found`;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-results"><i class="fas fa-book-open"></i><h3>No books found</h3><p>Try adjusting your search or filter criteria.</p></div>`;
    return;
  }
  container.innerHTML = filtered.map((b) => createBookCard(b)).join("");
  attachBookEvents(container);
  initStaggerReveal(container);
}

function initStaggerReveal(container) {
  if (!container) return;
  container.querySelectorAll(".book-card").forEach((card, i) => {
    card.classList.remove("revealed");
    setTimeout(() => card.classList.add("revealed"), i * 60);
  });
}

function renderFavorites() {
  const container = document.getElementById("favorites-grid");
  const emptyState = document.getElementById("favorites-empty");
  if (!container) return;

  const favBooks = booksData.filter((b) => favorites.includes(b.id));
  if (favBooks.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "flex";
    return;
  }
  if (emptyState) emptyState.style.display = "none";
  container.innerHTML = favBooks.map((b) => createBookCard(b)).join("");
  attachBookEvents(container);
}

// ---- Book Events ----
function attachBookEvents(container) {
  container.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => { e.stopPropagation(); toggleFavorite(parseInt(btn.dataset.id)); });
  });
  container.querySelectorAll(".view-details").forEach((btn) => {
    btn.addEventListener("click", (e) => { e.stopPropagation(); openModal(parseInt(btn.dataset.id)); });
  });
  container.querySelectorAll(".book-card, .top-rated-card, .podium-item").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".favorite-btn") && !e.target.closest(".view-details") && !e.target.closest(".watch-trailer")) {
        openModal(parseInt(card.dataset.id));
      }
    });
  });
  attachTrailerEvents(container);
}

// ---- Favorites ----
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) favorites.splice(index, 1);
  else favorites.push(id);
  localStorage.setItem("bookverse-favorites", JSON.stringify(favorites));
  updateFavoriteButtons();
  updateFavoritesCount();
  renderFavorites();
}

function updateFavoriteButtons() {
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    const isFav = favorites.includes(parseInt(btn.dataset.id));
    btn.classList.toggle("active", isFav);
    btn.querySelector("i").className = isFav ? "fas fa-heart" : "far fa-heart";
  });
}

function updateFavoritesCount() {
  const badge = document.getElementById("favorites-count");
  if (badge) badge.textContent = favorites.length;
}

// ---- Modal ----
function initModal() {
  const modal = document.getElementById("book-modal");
  const closeBtn = document.getElementById("modal-close");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  updateFavoritesCount();
}

function openModal(id) {
  const book = booksData.find((b) => b.id === id);
  if (!book) return;

  const modal = document.getElementById("book-modal");
  const isFav = favorites.includes(book.id);

  document.getElementById("modal-cover-wrapper").innerHTML = createCoverHTML(book);
  document.getElementById("modal-title").textContent = book.title;
  document.getElementById("modal-author").textContent = `by ${book.author}`;
  document.getElementById("modal-genre").textContent = book.genre;
  document.getElementById("modal-rating").innerHTML = `${generateStars(book.rating)} <span>${book.rating}</span> <span class="review-count">(${book.reviews?.toLocaleString() || 0} reviews)</span>`;
  document.getElementById("modal-description").textContent = book.description;
  document.getElementById("modal-meta").innerHTML = book.pages ? `
    <div class="modal-meta-grid">
      <div class="meta-item"><i class="fas fa-book"></i><div><strong>${book.pages}</strong><span>Pages</span></div></div>
      <div class="meta-item"><i class="fas fa-calendar"></i><div><strong>${book.year}</strong><span>Published</span></div></div>
      <div class="meta-item"><i class="fas fa-users"></i><div><strong>${book.reviews?.toLocaleString()}</strong><span>Reviews</span></div></div>
      <div class="meta-item"><i class="fas fa-tag"></i><div><strong>${book.genre}</strong><span>Genre</span></div></div>
    </div>` : "";

  const videoBtn = document.getElementById("modal-video-btn");
  if (book.videoId) {
    videoBtn.style.display = "inline-flex";
    videoBtn.onclick = () => { closeModal(); openVideoModal(book.videoId, book.title + " — Trailer", book.description); };
  } else {
    videoBtn.style.display = "none";
  }

  const favBtn = document.getElementById("modal-favorite");
  favBtn.dataset.id = book.id;
  favBtn.classList.toggle("active", isFav);
  favBtn.innerHTML = `<i class="${isFav ? "fas" : "far"} fa-heart"></i> ${isFav ? "Saved" : "Save to Favorites"}`;
  favBtn.onclick = () => {
    toggleFavorite(book.id);
    const nowFav = favorites.includes(book.id);
    favBtn.classList.toggle("active", nowFav);
    favBtn.innerHTML = `<i class="${nowFav ? "fas" : "far"} fa-heart"></i> ${nowFav ? "Saved" : "Save to Favorites"}`;
  };

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("book-modal");
  if (modal) { modal.classList.remove("active"); document.body.style.overflow = ""; }
}

// ---- Newsletter ----
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]');
    const message = document.getElementById("newsletter-message");
    if (!email.value || !isValidEmail(email.value)) {
      message.textContent = "Please enter a valid email address.";
      message.className = "form-message error";
      return;
    }
    message.textContent = "Thank you for subscribing! Welcome to BookVerse.";
    message.className = "form-message success";
    email.value = "";
    setTimeout(() => { message.textContent = ""; message.className = "form-message"; }, 4000);
  });
}

// ---- Contact Form ----
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name: { el: form.querySelector("#name"), error: form.querySelector("#name-error"), validate: (v) => v.trim().length >= 2 },
    email: { el: form.querySelector("#email"), error: form.querySelector("#email-error"), validate: (v) => isValidEmail(v) },
    subject: { el: form.querySelector("#subject"), error: form.querySelector("#subject-error"), validate: (v) => v.trim().length >= 3 },
    message: { el: form.querySelector("#message"), error: form.querySelector("#message-error"), validate: (v) => v.trim().length >= 10 }
  };

  Object.values(fields).forEach(({ el, error, validate }) => {
    if (el) {
      el.addEventListener("blur", () => validateField(el, error, validate));
      el.addEventListener("input", () => { if (el.classList.contains("invalid")) validateField(el, error, validate); });
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    Object.values(fields).forEach(({ el, error, validate }) => {
      if (el && !validateField(el, error, validate)) isValid = false;
    });
    if (isValid) {
      form.reset();
      Object.values(fields).forEach(({ el }) => el.classList.remove("valid", "invalid"));
      const successMsg = document.getElementById("form-success");
      successMsg.classList.add("show");
      setTimeout(() => successMsg.classList.remove("show"), 5000);
    }
  });
}

function validateField(el, errorEl, validateFn) {
  const isValid = validateFn(el.value);
  el.classList.toggle("valid", isValid);
  el.classList.toggle("invalid", !isValid);
  if (errorEl) errorEl.textContent = isValid ? "" : getErrorMessage(el.id);
  return isValid;
}

function getErrorMessage(fieldId) {
  return { name: "Name must be at least 2 characters.", email: "Please enter a valid email address.", subject: "Subject must be at least 3 characters.", message: "Message must be at least 10 characters." }[fieldId] || "This field is invalid.";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---- FAQ ----
function initFAQ() {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

// ---- Counter Animation ----
function initCounterAnimation() {
  const counters = document.querySelectorAll(".stat-number");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { animateCounter(entry.target); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 3))).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function debounce(fn, delay) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}
