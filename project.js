// Data: Project definitions
// Each project is rendered in both the Latest Projects strip and the main grid.

const projects = [
  {
    title: "Luxury Apartment Interior",
    category: "Residential",
    location: "Hyderabad",
    date: "2025-10-01",
    description: "High-end interior design for a 3BHK apartment with modern finishes, premium materials, and elegant lighting solutions.",
    images: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?_gl=1*16yjdnz*_ga*ODA0ODczNzExLjE3NDcwNTk4OTY.*_ga_8JE65Q40S6*czE3NjQ0MTczODgkbzEyJGcxJHQxNzY0NDE3NDMwJGoxOCRsMCRoMA..",
      "https://images.pexels.com/photos/7546772/pexels-photo-7546772.jpeg",
      "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg"
    ]
  },
  {
    title: "Modern Office Complex",
    category: "Commercial",
    location: "Bangalore",
    date: "2025-09-15",
    description: "State-of-the-art commercial building with sustainable design, smart technology integration, and flexible workspace solutions.",
    images: [
      "https://www.decorilla.com/online-decorating/wp-content/uploads/2019/06/modern-interior-design-grey-living-room2-scaled.jpeg",
      "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-8e222da/www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-designer-nyc.jpg"
    ]
  },
  {
    title: "Executive Suite Design",
    category: "Interiors",
    location: "Mumbai",
    date: "2025-08-20",
    description: "Premium executive suite with bespoke furniture, sophisticated color palette, and cutting-edge technology integration.",
    images: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?_gl=1*16yjdnz*_ga*ODA0ODczNzExLjE3NDcwNTk4OTY.*_ga_8JE65Q40S6*czE3NjQ0MTczODgkbzEyJGcxJHQxNzY0NDE3NDMwJGoxOCRsMCRoMA..",
      "https://images.pexels.com/photos/7546772/pexels-photo-7546772.jpeg",
      "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg"
    ]
  },
  {
    title: "Heritage Villa Restoration",
    category: "Renovation",
    location: "Chennai",
    date: "2025-07-10",
    description: "Complete restoration of a heritage villa preserving original architecture while adding modern amenities and comfort.",
    images: [
      "https://images.unsplash.com/photo-1764276266750-4d6316e972e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1764014588206-3c2647a34911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    title: "Luxury Penthouse",
    category: "Residential",
    location: "Delhi",
    date: "2025-06-05",
    description: "Ultra-modern penthouse with panoramic city views, premium finishes, and smart home automation systems.",
    images: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?_gl=1*16yjdnz*_ga*ODA0ODczNzExLjE3NDcwNTk4OTY.*_ga_8JE65Q40S6*czE3NjQ0MTczODgkbzEyJGcxJHQxNzY0NDE3NDMwJGoxOCRsMCRoMA..",
      "https://images.pexels.com/photos/7546772/pexels-photo-7546772.jpeg",
      "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg"
    ]
  },
  {
    title: "Retail Space Design",
    category: "Commercial",
    location: "Pune",
    date: "2025-05-18",
    description: "Contemporary retail space with innovative display systems, ambient lighting, and customer-friendly layout design.",
    images: [
      "https://images.pexels.com/photos/6699979/pexels-photo-6699979.jpeg",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D"
    ]
  },
  {
    title: "Minimalist Home Interior",
    category: "Interiors",
    location: "Hyderabad",
    date: "2025-04-12",
    description: "Clean and minimalist interior design focusing on functionality, natural light, and sustainable materials.",
    images: [
      "https://images.unsplash.com/photo-1564540583246-934409427776?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1757136880905-c069a6887e6d?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.pexels.com/photos/6699979/pexels-photo-6699979.jpeg"
    ]
  },
  {
    title: "Historic Building Renovation",
    category: "Renovation",
    location: "Kolkata",
    date: "2025-03-25",
    description: "Sensitive renovation of a historic building maintaining architectural integrity while upgrading infrastructure.",
    images: [
      "https://images.unsplash.com/photo-1764276266750-4d6316e972e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1764014588206-3c2647a34911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    title: "Family Home Design",
    category: "Residential",
    location: "Hyderabad",
    date: "2025-02-14",
    description: "Spacious family home with open-plan living, modern kitchen, and child-friendly design elements throughout.",
    images: [
      "https://images.unsplash.com/photo-1764276266750-4d6316e972e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1764014588206-3c2647a34911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"
    ]
  }
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
    card.className = "project-card";
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
      <div class="project-card-inner">
        <div class="project-slider" data-testid="project-slider">
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

        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title" data-testid="project-title">${
              project.title
            }</h3>
            <span
              class="project-category-pill"
              data-testid="project-category-pill"
            >${project.category}</span>
          </div>
          ${
            project.location
              ? `<p class="project-location" data-testid="project-location">${project.location}</p>`
              : ""
          }
          <p class="project-description" data-testid="project-description">
            ${project.description}
          </p>
          <button
            class="project-details-button"
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
    card.className = "latest-card";
    card.setAttribute("data-testid", `latest-card-${i + 1}`);

    const primaryImage = project.images && project.images.length > 0
      ? project.images[0]
      : "";

    card.innerHTML = `
      <div class="latest-card-media">
        ${
          primaryImage
            ? `<img src="${primaryImage}" alt="Primary image for ${project.title}" data-testid="latest-card-image" />`
            : ""
        }
      </div>
      <div class="latest-card-body">
        <h3 class="latest-title" data-testid="latest-card-title">${
          project.title
        }</h3>
        <div class="latest-meta">
          <span class="latest-category-pill" data-testid="latest-card-category">
            ${project.category}
          </span>
          <span class="latest-date" data-testid="latest-card-date">
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
