// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link"); // Get all nav links

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      // Only if menu is open
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

// Set current year in footer
const currentYearSpan = document.getElementById("currentYear");
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// Active Nav Link Styling based on current page
document.addEventListener("DOMContentLoaded", function () {
  const currentLocation =
    window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentLocation) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Smooth scroll for anchor links (optional, nice to have)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    // Only prevent default if it's a true internal anchor, not just '#'
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// You can add more JS for things like:
// - A simple image gallery lightbox
// - Form validation (though HTML5 validation is good for basics)
// - Animations on scroll (using Intersection Observer API)
// - Lazy loading images
// - Fetching data from an API and displaying it
// - Any other interactive features you want to add
// - Just remember to keep it modular and organized
// - Use ES6+ features like arrow functions, template literals, etc.
// - Consider using a build tool (like Webpack or Parcel) for larger projects
// - Use a CSS preprocessor (like SASS or LESS) for better styling organization
// - Use a linter (like ESLint) to keep your JS clean and consistent
// - Use a task runner (like Gulp or Grunt) for automating repetitive tasks
// - Use a version control system (like Git) to keep track of changes
// - Use a code editor with good support for HTML, CSS, and JS (like VSCode)
// - Use a framework or library (like React, Vue, or Angular) for larger projects
// - Use a CSS framework (like Bootstrap or Tailwind) for faster styling
// - Use a JS framework (like jQuery) for easier DOM manipulation
// - Use a testing framework (like Jest or Mocha) for unit testing
// - Use a deployment service (like Netlify or Vercel) for easy hosting
// - Use a CDN (like Cloudflare or jsDelivr) for faster loading times
// - Use a performance monitoring tool (like Google Lighthouse) for optimization
// - Use a security tool (like Snyk or Dependabot) for vulnerability scanning
// - Use a documentation tool (like JSDoc) for generating API docs
// - Use a code review tool (like GitHub or Bitbucket) for collaboration
// - Use a project management tool (like Trello or Jira) for task tracking
// - Use a design tool (like Figma or Sketch) for UI/UX design
// - Use a wireframing tool (like Balsamiq or Axure) for prototyping
// - Use a collaboration tool (like Slack or Discord) for team communication
// - Use a knowledge base tool (like Notion or Confluence) for documentation
// - Use a time tracking tool (like Toggl or Harvest) for productivity
// - Use a backup tool (like Backblaze or Acronis) for data safety
// - Use a cloud storage tool (like Google Drive or Dropbox) for file sharing
// - Use a password manager (like LastPass or 1Password) for security
// - Use a VPN (like NordVPN or ExpressVPN) for privacy
// - Use a firewall (like UFW or iptables) for network security
// - Use an antivirus (like Bitdefender or Norton) for malware protection
// - Use a system monitoring tool (like htop or Glances) for performance
// - Use a database management tool (like MySQL Workbench or pgAdmin) for data handling
// - Use a version control hosting service (like GitHub or GitLab) for collaboration
// - Use a CI/CD tool (like Jenkins or CircleCI) for automation
// - Use a containerization tool (like Docker or Kubernetes) for deployment
// - Use a cloud computing service (like AWS or Azure) for scalability
// - Use a serverless computing service (like AWS Lambda or Google Cloud Functions) for flexibility
// - Use a microservices architecture for modularity
// - Use a monorepo structure for code organization
// - Use a design system for consistency
// - Use a style guide for best practices
// - Use a coding standard for readability
// - Use a branching strategy (like Git Flow or trunk-based development) for collaboration
// - Use a code quality tool (like SonarQube or CodeClimate) for maintainability
// - Use a code coverage tool (like Istanbul or Coveralls) for testing
// - Use a code complexity tool (like ESLint or JSHint) for readability
// - Use a code duplication tool (like SonarQube or CodeClimate) for maintainability
// - Use a code smell tool (like ESLint or JSHint) for readability
// - Use a code review checklist for best practices
// - Use a code review process for collaboration
// - Use a code review tool (like GitHub or Bitbucket) for collaboration
// - Use a code review template for best practices
// - Use a code review guide for best practices
// - Use a code review policy for best practices
// - Use a code review process for collaboration
