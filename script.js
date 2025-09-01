const projects = [
  {
    title: "Image Gallery",
    description: "A responsive image gallery built with JavaScript.",
    image: "./assets/images/image-gallery.jpg",
    link: "https://image-gallery-using-js.vercel.app/",
    category: "Websites"
  },
  {
    title: "Form Validation",
    description: "Form validation using vanilla JS.",
    image: "./assets/images/form-validation.jpg",
    link: "https://form-validation-using-js-gamma.vercel.app/",
    category: "Websites"
  },
  {
    title: "Text Editor",
    description: "Online text editor app.",
    image: "./assets/images/text-editor.jpg",
    link: "https://text-editor-using-js.vercel.app/",
    category: "Mini Apps"
  },
  {
    title: "Travel Agency Website",
    description: "Modern travel website UI.",
    image: "./assets/images/travel-agency-website.jpg",
    link: "https://travel-agency-website-flax.vercel.app/",
    category: "Websites"
  },
  {
    title: "Responsive Landing Page",
    description: "Mobile-friendly landing page.",
    image: "./assets/images/responsive-landing-page.jpg",
    link: "https://responsive-landing-page-green.vercel.app/",
    category: "Websites"
  },
  {
    title: "Countdown Timer",
    description: "Countdown app built with Next.js.",
    image: "./assets/images/countdown-timer.jpg",
    link: "https://count-down-timer-iota-self.vercel.app/",
    category: "Mini Apps"
  },
  {
    title: "Weather App",
    description: "Weather widget using API.",
    image: "./assets/images/weather-app.jpg",
    link: "https://weather-widget-app-three.vercel.app/",
    category: "Mini Apps"
  },
  {
    title: "Birthday Wishes App",
    description: "Send animated birthday wishes.",
    image: "./assets/images/birthday-wishes-app.jpg",
    link: "https://birthday-wishes-app-3d-ti69.vercel.app/",
    category: "Designs"
  },
  {
    title: "Random Jokes Generator",
    description: "Fetch random jokes from API.",
    image: "./assets/images/random-jokes-app.jpg",
    link: "https://random-jokes-generator-app-b8qx.vercel.app/",
    category: "Mini Apps"
  },
  {
    title: "Password Generator",
    description: "Generate secure passwords.",
    image: "./assets/images/password-generator-app.jpg",
    link: "https://password-generator-app-k3w8.vercel.app/",
    category: "Mini Apps"
  }
];


const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const projectsGrid = document.getElementById("projects-grid");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    navbar.classList.remove("show");
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".popup-img").forEach(img => {
  img.addEventListener("click", function(e) {
    e.preventDefault();
    lightbox.style.display = "block";
    lightboxImg.src = this.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function renderProjects(filter) {
  projectsGrid.innerHTML = "";

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    projectsGrid.innerHTML = "<p>No projects found in this category.</p>";
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <a href="${project.link}" target="_blank">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </a>
    `;
    projectsGrid.appendChild(card);
  });
}

// Initial Render
renderProjects("all");

// ===== Filter Buttons =====
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderProjects(btn.dataset.category);
  });
});
