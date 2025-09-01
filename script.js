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

// DOM Elements
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const projectsGrid = document.getElementById("projects-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const backToTop = document.getElementById("back-to-top");
const header = document.querySelector(".header");

// Mobile Menu Toggle
if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
    
    // Animate hamburger menu
    const icon = menuToggle.querySelector('i');
    if (navbar.classList.contains('show')) {
      icon.className = 'bx bx-x';
    } else {
      icon.className = 'bx bx-menu';
    }
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Remove active class from all links
    document.querySelectorAll(".navbar a").forEach(l => l.classList.remove("active"));
    // Add active class to clicked link
    this.classList.add("active");
    
    // Scroll to section
    const targetSection = document.querySelector(this.getAttribute("href"));
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    
    // Close mobile menu
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
      const icon = menuToggle.querySelector('i');
      icon.className = 'bx bx-menu';
    }
  });
});

// Lightbox Functionality
if (lightbox && lightboxImg && closeBtn) {
  // Open lightbox
  function openLightbox(imageSrc) {
    lightbox.style.display = "block";
    lightboxImg.src = imageSrc;
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  }

  closeBtn.addEventListener("click", closeLightbox);

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.style.display === "block") {
      closeLightbox();
    }
  });
}

// Back to Top Button
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  });
}

// Scroll Event Handler
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  
  // Header scroll effect
  if (header) {
    if (scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  
  // Back to top button visibility
  if (backToTop) {
    if (scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }
  
  // Update active navigation link
  updateActiveNavigation();
  
  // Scroll reveal animation
  revealOnScroll();
});

// Update Active Navigation
function updateActiveNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Scroll Reveal Animation
function revealOnScroll() {
  const sections = document.querySelectorAll('section');
  const cards = document.querySelectorAll('.project-card, .skills li');
  
  const revealElements = [...sections, ...cards];
  
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('revealed');
    }
  });
}

// Projects Rendering Function
function renderProjects(filter) {
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = "";
  
  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);
  
  if (filtered.length === 0) {
    projectsGrid.innerHTML = '<p class="no-projects">No projects found in this category.</p>';
    return;
  }
  
  filtered.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">
        <img src="${project.image}" alt="${project.title}" class="popup-img">
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </a>
    `;
    
    projectsGrid.appendChild(card);
  });
  
  // Add click event for lightbox
  document.querySelectorAll(".popup-img").forEach(img => {
    img.addEventListener("click", function(e) {
      e.preventDefault();
      if (lightbox && lightboxImg) {
        openLightbox(this.src);
      }
    });
  });
  
  // Trigger reveal animation for new cards
  setTimeout(() => {
    revealOnScroll();
  }, 100);
}

// Filter Buttons Event Listeners
function initializeFilterButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      
      // Add active class to clicked button
      btn.classList.add("active");
      
      // Add loading effect
      projectsGrid.style.opacity = "0";
      projectsGrid.style.transform = "translateY(20px)";
      
      setTimeout(() => {
        renderProjects(btn.dataset.category);
        
        // Restore visibility with animation
        projectsGrid.style.opacity = "1";
        projectsGrid.style.transform = "translateY(0)";
      }, 200);
    });
  });
}

// Form Submission Handler
function initializeContactForm() {
  const form = document.querySelector('.contact form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form elements
      const nameInput = form.querySelector('input[type="text"]');
      const emailInput = form.querySelector('input[type="email"]');
      const messageTextarea = form.querySelector('textarea');
      const submitBtn = form.querySelector('button[type="submit"]');
      
      // Simple validation
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageTextarea.value.trim()) {
        showNotification('Please fill in all fields.', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }
      
      // Simulate form submission
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        showNotification('Message sent successfully! Thank you for reaching out.', 'success');
        form.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
      }, 2000);
    });
  }
}

// Notification System
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 10000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    max-width: 350px;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    hideNotification(notification);
  });
  
  // Auto hide after 5 seconds
  setTimeout(() => {
    hideNotification(notification);
  }, 5000);
}

function hideNotification(notification) {
  notification.style.opacity = '0';
  notification.style.transform = 'translateX(100%)';
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// Typing Effect for Hero Text
function initializeTypingEffect() {
  const heroTitle = document.querySelector('.hero-text h1');
  if (!heroTitle) return;
  
  const originalText = heroTitle.innerHTML;
  const nameSpan = heroTitle.querySelector('span');
  
  if (nameSpan) {
    const name = nameSpan.textContent;
    const beforeName = "Hello, I'm ";
    
    heroTitle.innerHTML = beforeName + '<span id="typing-cursor">|</span>';
    
    let i = 0;
    const typeWriter = () => {
      if (i < name.length) {
        const currentText = heroTitle.innerHTML.replace('<span id="typing-cursor">|</span>', '');
        heroTitle.innerHTML = currentText + name.charAt(i) + '<span id="typing-cursor">|</span>';
        i++;
        setTimeout(typeWriter, 100);
      } else {
        // Remove cursor and restore original styling
        setTimeout(() => {
          heroTitle.innerHTML = originalText;
        }, 1000);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }
}

// Parallax Effect for Hero Section
function initializeParallax() {
  const hero = document.querySelector('.hero');
  const heroImg = document.querySelector('.hero-img img');
  
  if (!hero || !heroImg) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (scrolled < hero.offsetHeight) {
      heroImg.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.05)`;
    }
  });
}

// Smooth appearance animation for skills
function animateSkills() {
  const skills = document.querySelectorAll('.skills li');
  
  skills.forEach((skill, index) => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateY(20px)';
    skill.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
      skill.style.opacity = '1';
      skill.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initial render of projects
  renderProjects("all");
  
  // Initialize filter buttons
  initializeFilterButtons();
  
  // Initialize contact form
  initializeContactForm();
  
  // Initialize typing effect
  initializeTypingEffect();
  
  // Initialize parallax
  initializeParallax();
  
  // Initial scroll reveal
  revealOnScroll();
  
  // Animate skills when about section comes into view
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(aboutSection);
  }
  
  // Add loading animation
  document.body.classList.add('loaded');
});

// Loading animation styles (add to CSS)
const loadingStyles = `
  body {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  body.loaded {
    opacity: 1;
  }
  
  .no-projects {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  
  .notification-close:hover {
    opacity: 0.8;
  }
  
  #typing-cursor {
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

// Add the loading styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);

// const projects = [
//   {
//     title: "Image Gallery",
//     description: "A responsive image gallery built with JavaScript.",
//     image: "./assets/images/image-gallery.jpg",
//     link: "https://image-gallery-using-js.vercel.app/",
//     category: "Websites"
//   },
//   {
//     title: "Form Validation",
//     description: "Form validation using vanilla JS.",
//     image: "./assets/images/form-validation.jpg",
//     link: "https://form-validation-using-js-gamma.vercel.app/",
//     category: "Websites"
//   },
//   {
//     title: "Text Editor",
//     description: "Online text editor app.",
//     image: "./assets/images/text-editor.jpg",
//     link: "https://text-editor-using-js.vercel.app/",
//     category: "Mini Apps"
//   },
//   {
//     title: "Travel Agency Website",
//     description: "Modern travel website UI.",
//     image: "./assets/images/travel-agency-website.jpg",
//     link: "https://travel-agency-website-flax.vercel.app/",
//     category: "Websites"
//   },
//   {
//     title: "Responsive Landing Page",
//     description: "Mobile-friendly landing page.",
//     image: "./assets/images/responsive-landing-page.jpg",
//     link: "https://responsive-landing-page-green.vercel.app/",
//     category: "Websites"
//   },
//   {
//     title: "Countdown Timer",
//     description: "Countdown app built with Next.js.",
//     image: "./assets/images/countdown-timer.jpg",
//     link: "https://count-down-timer-iota-self.vercel.app/",
//     category: "Mini Apps"
//   },
//   {
//     title: "Weather App",
//     description: "Weather widget using API.",
//     image: "./assets/images/weather-app.jpg",
//     link: "https://weather-widget-app-three.vercel.app/",
//     category: "Mini Apps"
//   },
//   {
//     title: "Birthday Wishes App",
//     description: "Send animated birthday wishes.",
//     image: "./assets/images/birthday-wishes-app.jpg",
//     link: "https://birthday-wishes-app-3d-ti69.vercel.app/",
//     category: "Designs"
//   },
//   {
//     title: "Random Jokes Generator",
//     description: "Fetch random jokes from API.",
//     image: "./assets/images/random-jokes-app.jpg",
//     link: "https://random-jokes-generator-app-b8qx.vercel.app/",
//     category: "Mini Apps"
//   },
//   {
//     title: "Password Generator",
//     description: "Generate secure passwords.",
//     image: "./assets/images/password-generator-app.jpg",
//     link: "https://password-generator-app-k3w8.vercel.app/",
//     category: "Mini Apps"
//   }
// ];


// const menuToggle = document.getElementById("menu-toggle");
// const navbar = document.getElementById("navbar");
// const projectsGrid = document.getElementById("projects-grid");

// menuToggle.addEventListener("click", () => {
//   navbar.classList.toggle("show");
// });

// document.querySelectorAll(".navbar a").forEach(link => {
//   link.addEventListener("click", function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//     navbar.classList.remove("show");
//   });
// });

// const lightbox = document.getElementById("lightbox");
// const lightboxImg = document.getElementById("lightbox-img");
// const closeBtn = document.querySelector(".lightbox .close");

// document.querySelectorAll(".popup-img").forEach(img => {
//   img.addEventListener("click", function(e) {
//     e.preventDefault();
//     lightbox.style.display = "block";
//     lightboxImg.src = this.src;
//   });
// });

// closeBtn.addEventListener("click", () => {
//   lightbox.style.display = "none";
// });

// window.addEventListener("click", (e) => {
//   if (e.target === lightbox) {
//     lightbox.style.display = "none";
//   }
// });

// const backToTop = document.getElementById("back-to-top");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     backToTop.style.display = "block";
//   } else {
//     backToTop.style.display = "none";
//   }
// });

// backToTop.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// function renderProjects(filter) {
//   projectsGrid.innerHTML = "";

//   const filtered = filter === "all"
//     ? projects
//     : projects.filter(p => p.category === filter);

//   if (filtered.length === 0) {
//     projectsGrid.innerHTML = "<p>No projects found in this category.</p>";
//     return;
//   }

//   filtered.forEach(project => {
//     const card = document.createElement("div");
//     card.classList.add("project-card");

//     card.innerHTML = `
//       <a href="${project.link}" target="_blank">
//         <img src="${project.image}" alt="${project.title}">
//         <div class="project-info">
//           <h3>${project.title}</h3>
//           <p>${project.description}</p>
//         </div>
//       </a>
//     `;
//     projectsGrid.appendChild(card);
//   });
// }

// // Initial Render
// renderProjects("all");

// // ===== Filter Buttons =====
// const filterBtns = document.querySelectorAll(".filter-btn");

// filterBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
//     document.querySelector(".filter-btn.active").classList.remove("active");
//     btn.classList.add("active");
//     renderProjects(btn.dataset.category);
//   });
// });

