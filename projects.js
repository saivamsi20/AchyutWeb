// ============================================
// Projects Page JavaScript
// ============================================

// Project Data Array
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
const LATEST_PROJECTS_COUNT = 5;

// State Management
let currentCategory = "All";
let latestProjectsStartIndex = 0;

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// Initialize Category Filters
function initCategoryFilters() {
  const filtersContainer = document.getElementById('categoryFilters');
  if (!filtersContainer) return;

  filtersContainer.innerHTML = '';

  CATEGORIES.forEach(category => {
    const button = document.createElement('button');
    button.className = `filter-btn ${category === currentCategory ? 'active' : ''}`;
    button.textContent = category;
    button.setAttribute('data-category', category);
    
    button.addEventListener('click', () => {
      if (currentCategory !== category) {
        currentCategory = category;
        updateFilterButtons();
        renderProjectsGrid();
      }
    });

    filtersContainer.appendChild(button);
  });
}

function updateFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    const category = btn.getAttribute('data-category');
    if (category === currentCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Render Projects Grid
function renderProjectsGrid() {
  const gridContainer = document.getElementById('projectsGrid');
  if (!gridContainer) return;

  // Filter projects by category
  const filteredProjects = currentCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === currentCategory);

  gridContainer.innerHTML = '';

  if (filteredProjects.length === 0) {
    gridContainer.innerHTML = '<p style="text-align: center; padding: 40px; color: rgba(30, 42, 42, 0.68);">No projects found in this category.</p>';
    return;
  }

  filteredProjects.forEach((project, index) => {
    const card = createProjectCard(project, index);
    gridContainer.appendChild(card);
  });
}

function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('data-category', project.category);

  const imagesHTML = project.images.map((img, imgIndex) => 
    `<img src="${img}" alt="${project.title} - Image ${imgIndex + 1}" class="project-slider-image ${imgIndex === 0 ? 'active' : ''}" data-image-index="${imgIndex}">`
  ).join('');

  const dotsHTML = project.images.length > 1 
    ? project.images.map((_, dotIndex) => 
        `<button class="slider-dot ${dotIndex === 0 ? 'active' : ''}" data-dot-index="${dotIndex}" aria-label="Go to image ${dotIndex + 1}"></button>`
      ).join('')
    : '';

  const arrowsHTML = project.images.length > 1 
    ? `<button class="slider-arrow prev" aria-label="Previous image">&#10094;</button>
       <button class="slider-arrow next" aria-label="Next image">&#10095;</button>`
    : '';

  card.innerHTML = `
    <div class="project-slider-container">
      <div class="project-slider-images">
        ${imagesHTML}
      </div>
      ${arrowsHTML}
      ${project.images.length > 1 ? `<div class="slider-dots-container">${dotsHTML}</div>` : ''}
    </div>
    <div class="project-card-content">
      <div class="project-card-header">
        <h3 class="project-card-title">${project.title}</h3>
        <span class="project-card-category">${project.category}</span>
      </div>
      ${project.location ? `<p class="project-card-location">📍 ${project.location}</p>` : ''}
      <p class="project-card-description">${project.description}</p>
      <button class="project-card-button">View Details</button>
    </div>
  `;

  // Initialize slider for this card
  if (project.images.length > 1) {
    initProjectSlider(card, project.images.length);
  }

  return card;
}

// Initialize Project Card Slider
function initProjectSlider(card, imageCount) {
  const images = card.querySelectorAll('.project-slider-image');
  const dots = card.querySelectorAll('.slider-dot');
  const prevBtn = card.querySelector('.slider-arrow.prev');
  const nextBtn = card.querySelector('.slider-arrow.next');
  
  let currentIndex = 0;

  function showImage(index) {
    // Handle infinite loop
    if (index < 0) {
      index = imageCount - 1;
    } else if (index >= imageCount) {
      index = 0;
    }
    
    currentIndex = index;

    // Update images
    images.forEach((img, i) => {
      img.classList.toggle('active', i === currentIndex);
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showImage(currentIndex - 1);
    });
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showImage(currentIndex + 1);
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showImage(index);
    });
  });
}

// Latest Projects Section
function getLatestProjects() {
  return [...projects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, LATEST_PROJECTS_COUNT);
}

function renderLatestProjects() {
  const track = document.getElementById('latestProjectsTrack');
  if (!track) return;

  const latestProjects = getLatestProjects();
  track.innerHTML = '';

  latestProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'latest-project-card';
    
    const primaryImage = project.images && project.images.length > 0 ? project.images[0] : '';
    
    card.innerHTML = `
      ${primaryImage ? `<img src="${primaryImage}" alt="${project.title}" class="latest-project-card-image">` : ''}
      <div class="latest-project-card-content">
        <h3 class="latest-project-card-title">${project.title}</h3>
        <div class="latest-project-card-meta">
          <span class="latest-project-card-category">${project.category}</span>
          <span class="latest-project-card-date">${formatDate(project.date)}</span>
        </div>
      </div>
    `;

    track.appendChild(card);
  });

  updateLatestNavigation();
}

function updateLatestNavigation() {
  const latestProjects = getLatestProjects();
  const prevBtn = document.getElementById('latestPrev');
  const nextBtn = document.getElementById('latestNext');

  // For now, disable navigation if we have 5 or fewer projects
  // You can implement carousel functionality if needed
  if (latestProjects.length <= 3) {
    if (prevBtn) prevBtn.classList.add('disabled');
    if (nextBtn) nextBtn.classList.add('disabled');
  } else {
    if (prevBtn) prevBtn.classList.remove('disabled');
    if (nextBtn) nextBtn.classList.remove('disabled');
  }
}

// Initialize Latest Projects Navigation
function initLatestNavigation() {
  const prevBtn = document.getElementById('latestPrev');
  const nextBtn = document.getElementById('latestNext');
  const track = document.getElementById('latestProjectsTrack');
  const latestProjects = getLatestProjects();

  if (!track || latestProjects.length <= 3) return;

  let currentIndex = 0;
  const visibleCount = 3;
  const maxIndex = Math.max(0, latestProjects.length - visibleCount);

  function updateCarousel() {
    if (!track) return;
    const translateX = currentIndex * (100 / visibleCount);
    track.style.transform = `translateX(-${translateX}%)`;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });
  }

  // Update button states
  function updateButtonStates() {
    if (prevBtn) {
      prevBtn.classList.toggle('disabled', currentIndex === 0);
    }
    if (nextBtn) {
      nextBtn.classList.toggle('disabled', currentIndex >= maxIndex);
    }
  }

  updateButtonStates();
  
  // Re-check button states after render
  if (prevBtn) prevBtn.addEventListener('click', updateButtonStates);
  if (nextBtn) nextBtn.addEventListener('click', updateButtonStates);
}

// Main Initialization
function initProjectsPage() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initialize();
    });
  } else {
    initialize();
  }
}

function initialize() {
  initCategoryFilters();
  renderProjectsGrid();
  renderLatestProjects();
  initLatestNavigation();
}

// Start initialization
initProjectsPage();