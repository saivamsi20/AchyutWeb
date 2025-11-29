// Data: Project definitions
// Each project is rendered in both the Latest Projects strip and the main grid.

const projects = [
  {
    title: "Luxury Apartment Interior",
    category: "Residential",
    location: "Hyderabad",
    date: "2025-07-10",
    description:
      "High-end interior design for a 3BHK apartment with warm neutrals, custom joinery, and ambient lighting.",
    images: [
      "img/residential1-1.jpg",
      "img/residential1-2.jpg",
      "img/residential1-3.jpg",
    ],
  },
  {
    title: "Premium Villa Renovation",
    category: "Renovation",
    location: "Bangalore",
    date: "2025-06-18",
    description:
      "Complete structural and interior upgrade for a legacy villa, balancing heritage elements with modern comfort.",
    images: [
      "img/renovation1-1.jpg",
      "img/renovation1-2.jpg",
    ],
  },
  {
    title: "Corporate Office Fit-Out",
    category: "Commercial",
    location: "Hyderabad IT Corridor",
    date: "2025-05-30",
    description:
      "Open-plan workspace with collaborative zones, acoustic pods, and a sophisticated reception experience.",
    images: [
      "img/commercial1-1.jpg",
      "img/commercial1-2.jpg",
      "img/commercial1-3.jpg",
    ],
  },
  {
    title: "Boutique Retail Experience",
    category: "Commercial",
    location: "Mumbai",
    date: "2025-04-22",
    description:
      "Immersive retail environment with layered lighting, visual merchandising walls, and flexible display systems.",
    images: [
      "img/commercial2-1.jpg",
      "img/commercial2-2.jpg",
    ],
  },
  {
    title: "Minimalist Studio Residence",
    category: "Residential",
    location: "Pune",
    date: "2025-03-15",
    description:
      "Compact studio transformed with integrated storage, clean lines, and multifunctional furniture solutions.",
    images: [
      "img/residential2-1.jpg",
      "img/residential2-2.jpg",
    ],
  },
  {
    title: "Executive Boardroom Interiors",
    category: "Interiors",
    location: "Hyderabad",
    date: "2025-02-08",
    description:
      "Premium boardroom with bespoke paneling, concealed AV, and a palette that communicates trust and authority.",
    images: [
      "img/interiors1-1.jpg",
      "img/interiors1-2.jpg",
      "img/interiors1-3.jpg",
    ],
  },
  {
    title: "Heritage Home Restoration",
    category: "Renovation",
    location: "Chennai",
    date: "2025-01-12",
    description:
      "Careful restoration of a 40-year-old home, reinforcing structure while preserving original character and details.",
    images: [
      "img/renovation2-1.jpg",
      "img/renovation2-2.jpg",
    ],
  },
  {
    title: "Hospitality Lobby Concept",
    category: "Interiors",
    location: "Goa",
    date: "2024-12-02",
    description:
      "Resort-style lobby with layered textures, artful lighting, and zoning that guides guests intuitively.",
    images: [
      "img/interiors2-1.jpg",
      "img/interiors2-2.jpg",
      "img/interiors2-3.jpg",
    ],
  },
  {
    title: "Family Home Elevation & Interiors",
    category: "Residential",
    location: "Hyderabad",
    date: "2024-11-10",
    description:
      "Contemporary façade upgrade and cohesive interiors featuring deep teals, warm woods, and soft metals.",
    images: [
      "img/residential3-1.jpg",
      "img/residential3-2.jpg",
    ],
  },
];

// Configuration
const CATEGORIES = ["All", "Residential", "Commercial", "Interiors", "Renovation"];
const VISIBLE_LATEST = 3;

// State
let activeCategory = "All";
let latestStartIndex = 0;
let latestProjectsSorted = [];

// Utility: format date for latest projects label
function formatDateLabel(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, {
    month: "short",
    year: "numeric",
  });
}

// Render filter buttons
function renderFilters(filterBar) {
  filterBar.innerHTML = "";

  CATEGORIES.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = category;
    button.setAttribute("data-category", category);
    button.setAttribute(
      "data-testid",
      `filter-btn-${category.toLowerCase()}`.replace(/\s+/g, "-")
    );

    if (category === activeCategory) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      if (activeCategory === category) return;
      activeCategory = category;
      updateFilterActiveState(filterBar, category);
      const grid = document.getElementById("projectsGrid");
      if (grid) {
        renderProjectsGrid(grid, activeCategory);
      }
    });

    filterBar.appendChild(button);
  });
}

function updateFilterActiveState(filterBar, category) {
  const buttons = filterBar.querySelectorAll(".filter-button");
  buttons.forEach((btn) => {
    const cat = btn.getAttribute("data-category");
    if (cat === category) {
      btn.classList.add("is-active");
    } else {
      btn.classList.remove("is-active");
    }
  });
}

// Render main projects grid
function renderProjectsGrid(gridEl, categoryFilter) {
  gridEl.innerHTML = "";

  const filteredProjects =
    categoryFilter === "All"
      ? projects
      : projects.filter((p) => p.category === categoryFilter);

  filteredProjects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "projects-card col-sm-6 col-lg-4";
    card.setAttribute("data-testid", `project-card-${index + 1}`);

    const imagesHtml = project.images
      .map(
        (src, imgIndex) => `
          <img
            src="${src}"
            alt="Project image ${imgIndex + 1} for ${project.title}"
            class="project-image ${imgIndex === 0 ? "active" : ""}"
            data-image-index="${imgIndex}"
            data-testid="project-image"
          />
        `
      )
      .join("");

    const dotsHtml = project.images
      .map(
        (_, dotIndex) => `
          <button
            type="button"
            class="slider-dot ${dotIndex === 0 ? "active" : ""}"
            data-dot-index="${dotIndex}"
            data-testid="project-slider-dot"
          ></button>
        `
      )
      .join("");

    card.innerHTML = `
      <div class="projects-card__inner">
        <div class="projects-card__media project-slider" data-testid="project-slider">
          <div class="project-slider-images">
            ${imagesHtml}
          </div>
          ${
            project.images.length > 1
              ? `
                <button
                  class="slider-nav slider-prev"
                  type="button"
                  aria-label="Previous image"
                  data-testid="project-slider-prev"
                >
                  &#10094;
                </button>
                <button
                  class="slider-nav slider-next"
                  type="button"
                  aria-label="Next image"
                  data-testid="project-slider-next"
                >
                  &#10095;
                </button>
              `
              : ""
          }
          <div class="slider-dots">
            ${dotsHtml}
          </div>
        </div>

        <div class="projects-card__body">
          <h3 class="projects-card__title" data-testid="project-title">${
            project.title
          }</h3>
          ${
            project.location
              ? `<p class="projects-card__location" data-testid="project-location">${project.location}</p>`
              : ""
          }
          <p class="projects-card__description" data-testid="project-description">
            ${project.description}
          </p>
          <div class="projects-card__meta-row">
            <span
              class="project-category-pill"
              data-testid="project-category-pill"
            >${project.category}</span>
          </div>
        </div>
        <div class="projects-card__footer">
          <button
            class="achyut-btn project-details-button"
            type="button"
            data-testid="project-details-button"
          >
            View Details
          </button>
        </div>
      </div>
    `;

    gridEl.appendChild(card);
    attachProjectSlider(card, project.images.length);
  });
}

// Attach per-card slider logic
function attachProjectSlider(cardEl, imageCount) {
  if (!cardEl || imageCount <= 1) return;

  const imageEls = cardEl.querySelectorAll(".project-image");
  const dotEls = cardEl.querySelectorAll(".slider-dot");
  const prevBtn = cardEl.querySelector(".slider-prev");
  const nextBtn = cardEl.querySelector(".slider-next");

  if (!imageEls.length) return;

  let currentIndex = 0;

  const showImage = (nextIndex) => {
    if (!imageEls.length) return;
    const safeIndex = ((nextIndex % imageCount) + imageCount) % imageCount;
    currentIndex = safeIndex;

    imageEls.forEach((img, idx) => {
      img.classList.toggle("active", idx === safeIndex);
    });

    dotEls.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === safeIndex);
    });
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });
  }

  dotEls.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-dot-index"), 10);
      if (!Number.isNaN(idx)) {
        showImage(idx);
      }
    });
  });
}

// Latest projects calculations and rendering
function prepareLatestProjects() {
  latestProjectsSorted = [...projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

function renderLatestProjects(trackEl) {
  if (!trackEl) return;
  trackEl.innerHTML = "";

  if (!latestProjectsSorted.length) return;

  const limit = Math.min(VISIBLE_LATEST, latestProjectsSorted.length);

  // Trigger a quick fade-in
  trackEl.classList.remove("fade-in");
  // Force reflow
  // eslint-disable-next-line no-unused-expressions
  trackEl.offsetHeight;

  for (let i = 0; i < limit; i += 1) {
    const project =
      latestProjectsSorted[(latestStartIndex + i) % latestProjectsSorted.length];

    const card = document.createElement("article");
    card.className = "projects-latest__card";
    card.setAttribute("data-testid", `latest-card-${i + 1}`);

    const primaryImage = project.images && project.images.length > 0
      ? project.images[0]
      : "";

    card.innerHTML = `
      <div class="projects-latest__media">
        ${
          primaryImage
            ? `<img src="${primaryImage}" alt="Primary image for ${project.title}" data-testid="latest-card-image" />`
            : ""
        }
      </div>
      <div class="projects-latest__body">
        <h3 class="projects-latest__title" data-testid="latest-card-title">${
          project.title
        }</h3>
        <div class="projects-latest__meta">
          <span class="projects-latest__category" data-testid="latest-card-category">
            ${project.category}
          </span>
          <span class="projects-latest__date" data-testid="latest-card-date">
            ${formatDateLabel(project.date)}
          </span>
        </div>
      </div>
    `;

    trackEl.appendChild(card);
  }

  // Re-add fade-in class for animation
  requestAnimationFrame(() => {
    trackEl.classList.add("fade-in");
  });
}

function setupLatestNavigation(trackEl) {
  const prevBtn = document.getElementById("latestPrev");
  const nextBtn = document.getElementById("latestNext");

  if (!prevBtn || !nextBtn) return;

  const hasEnoughItems = latestProjectsSorted.length > VISIBLE_LATEST;

  if (!hasEnoughItems) {
    prevBtn.classList.add("is-disabled");
    nextBtn.classList.add("is-disabled");
  }

  const move = (delta) => {
    if (!hasEnoughItems) return;
    const len = latestProjectsSorted.length;
    latestStartIndex = ((latestStartIndex + delta) % len + len) % len;
    renderLatestProjects(trackEl);
  };

  prevBtn.addEventListener("click", () => move(-1));
  nextBtn.addEventListener("click", () => move(1));
}

// Initialization
function initProjectsPage() {
  const filterBar = document.getElementById("filterBar");
  const gridEl = document.getElementById("projectsGrid");
  const latestTrackEl = document.getElementById("latestProjectsTrack");

  if (!filterBar || !gridEl || !latestTrackEl) {
    // Required DOM nodes are missing; do nothing.
    return;
  }

  // Filters
  renderFilters(filterBar);

  // Projects grid
  renderProjectsGrid(gridEl, activeCategory);

  // Latest projects
  prepareLatestProjects();
  renderLatestProjects(latestTrackEl);
  setupLatestNavigation(latestTrackEl);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjectsPage);
} else {
  initProjectsPage();
}
