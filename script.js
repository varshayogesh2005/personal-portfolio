// =========================================
// WEEK 3 - SMART NAVIGATION
// =========================================

// Select navigation elements
const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav a");

// -----------------------------------------
// MOBILE MENU TOGGLE
// -----------------------------------------

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.textContent = "☰";
menuButton.className = "menu-toggle";
menuButton.setAttribute("aria-label", "Toggle navigation menu");

nav.insertBefore(menuButton, navList);

// Open / close menu
menuButton.addEventListener("click", () => {
    navList.classList.toggle("nav-open");
});

// -----------------------------------------
// CLOSE MENU AFTER SELECTING A SECTION
// -----------------------------------------

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navList.classList.remove("nav-open");
    });
});

// -----------------------------------------
// SMOOTH SCROLLING
// -----------------------------------------

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {
            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// -----------------------------------------
// ACTIVE NAVIGATION STATE
// -----------------------------------------

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// -----------------------------------------
// BACK TO TOP BUTTON
// -----------------------------------------

const backToTop = document.createElement("button");

backToTop.textContent = "↑";
backToTop.className = "back-to-top";
backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

// Show button after scrolling
window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Scroll to top
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// =========================================
// FEATURE 02 - DYNAMIC HERO SECTION
// =========================================

// Select the hero elements
const greeting = document.querySelector("#dynamic-greeting");
const message = document.querySelector("#dynamic-message");

// Get the current hour
const currentHour = new Date().getHours();

// Create a greeting based on the time
if (currentHour < 12) {

    greeting.textContent = "Good Morning! ☀️";

    message.textContent =
        "Welcome to my portfolio. Have a productive day!";

} else if (currentHour < 18) {

    greeting.textContent = "Good Afternoon! 🌤️";

    message.textContent =
        "Welcome to my portfolio. Explore my skills and projects.";

} else {

    greeting.textContent = "Good Evening! 🌙";

    message.textContent =
        "Welcome to my portfolio. Thanks for visiting!";

}
// =========================================
// INTERACTIVE HERO BUTTON
// =========================================

const exploreButton = document.querySelector("#explore-projects");

exploreButton.addEventListener("click", () => {

    alert("Let's explore my projects!");

    const projectsSection = document.querySelector("#projects");

    projectsSection.scrollIntoView({
        behavior: "smooth"
    });

});
// =========================================
// FEATURE 03 - DYNAMIC SKILLS ENGINE
// =========================================

// Skills data
const skills = [
    {
        name: "C Programming",
        category: "Programming",
        description: "Basic programming and problem solving using C.",
        level: "Intermediate"
    },

    {
        name: "C++ Programming",
        category: "Programming",
        description: "Object-oriented programming using C++.",
        level: "Intermediate"
    },

    {
        name: "Object-Oriented Programming",
        category: "Programming",
        description: "Understanding classes, objects and OOP concepts.",
        level: "Intermediate"
    },

    {
        name: "Data Structures",
        category: "Programming",
        description: "Basic understanding of common data structures.",
        level: "Beginner"
    },

    {
        name: "HTML",
        category: "Frontend",
        description: "Creating structured web pages using HTML5.",
        level: "Intermediate"
    },

    {
        name: "CSS",
        category: "Frontend",
        description: "Styling and creating responsive web layouts.",
        level: "Beginner"
    },

    {
        name: "JavaScript",
        category: "Frontend",
        description: "Building interactive web pages using JavaScript.",
        level: "Beginner"
    },

    {
        name: "Git & GitHub",
        category: "Tools",
        description: "Version control and project management using GitHub.",
        level: "Beginner"
    }
];
// Select the skills container
const skillsContainer = document.querySelector("#skills-container");

// Generate skill elements
skills.forEach((skill) => {

    const skillItem = document.createElement("li");

    skillItem.innerHTML = `
        <strong>${skill.name}</strong>
        <span>${skill.category}</span>
        <p>${skill.description}</p>
        <span class="skill-level">${skill.level}</span>
    `;

    skillsContainer.appendChild(skillItem);

});
// =========================================
// FEATURE 04 - PROJECT SHOWCASE SYSTEM
// =========================================

// Project data
const projects = [

    {
        name: "AI-Based Waste Management System",
        description: "An AI-based waste segregation concept that uses machine learning to classify waste and improve waste management efficiency.",
        technology: "Python, Machine Learning",
        category: "Other",
        link: "#"
    },

    {
        name: "School Planner Application",
        description: "A student planner application designed for timetable management, assignment tracking, reminders, attendance and study planning.",
        technology: "HTML, CSS, JavaScript",
        category: "JavaScript",
        link: "#"
    },

    {
        name: "Personal Portfolio Website",
        description: "A personal portfolio website created to showcase education, skills, projects, resume and contact information.",
        technology: "HTML5, CSS, JavaScript",
        category: "Web",
        link: "https://varshayogesh2005.github.io/personal-portfolio/"
    },

    {
        name: "Interactive Portfolio Upgrade",
        description: "A JavaScript-powered portfolio upgrade with dynamic content, project filtering, search, modal interactions and browser storage.",
        technology: "HTML, CSS, JavaScript",
        category: "JavaScript",
        link: "#"
    },

    {
        name: "Student Task Manager",
        description: "A simple task management concept for students to organize academic tasks, priorities and completion status.",
        technology: "HTML, CSS, JavaScript",
        category: "JavaScript",
        link: "#"
    },

    {
        name: "AI Study Assistant",
        description: "A concept for an AI-powered study assistant designed to help students organize learning activities and access study resources.",
        technology: "Python, AI",
        category: "Other",
        link: "#"
    }

];
// Select the project container
const projectsContainer = document.querySelector("#projects-container");

// Function to display projects
function displayProjects(projectList) {

    // Clear existing projects
    projectsContainer.innerHTML = "";

    // Generate project cards
    projectList.forEach((project) => {

        const projectCard = document.createElement("article");

        // Line 323
projectCard.innerHTML = `
    <h3>${project.name}</h3>

    <p>
        <strong>Technology:</strong>
        ${project.technology}
    </p>

    <p>
        ${project.description}
    </p>

    <p>
        <strong>Category:</strong>
        ${project.category}
    </p>

    <button class="project-details">
        View Details
    </button>
`;
        

        projectsContainer.appendChild(projectCard);
        // Open project modal
const detailsButton = projectCard.querySelector(".project-details");

detailsButton.addEventListener("click", () => {

    openProjectModal(project);

});

    });
}

// Display all projects when the page loads
displayProjects(projects);
// =========================================
// PROJECT SEARCH + CATEGORY FILTER
// =========================================

const projectSearch = document.querySelector("#project-search");

const filterButtons = document.querySelectorAll(
    "#project-filters button"
);

let selectedCategory = "All";

// Apply search and category filter
function filterProjects() {

    const searchText = projectSearch.value.toLowerCase();

    const filteredProjects = projects.filter((project) => {

        const matchesSearch =
            project.name.toLowerCase().includes(searchText) ||
            project.technology.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            project.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayProjects(filteredProjects);
}

// Search
projectSearch.addEventListener("input", () => {

    filterProjects();

});

// Category buttons
filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        selectedCategory = button.dataset.category;

        filterProjects();

    });

});
// =========================================
// FEATURE 05 - PROJECT DETAILS MODAL
// =========================================

// Create the modal
const projectModal = document.createElement("div");

projectModal.className = "project-modal";

projectModal.innerHTML = `
    <div class="modal-content">

        <button class="modal-close">&times;</button>

        <h2 id="modal-project-name"></h2>

        <p>
            <strong>Technology:</strong>
            <span id="modal-project-technology"></span>
        </p>

        <p id="modal-project-description"></p>

        <p>
            <strong>Category:</strong>
            <span id="modal-project-category"></span>
        </p>

        <a
            id="modal-project-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
        >
            Open Project
        </a>

    </div>
`;

document.body.appendChild(projectModal);


// -----------------------------------------
// OPEN PROJECT MODAL
// -----------------------------------------

function openProjectModal(project) {

    document.querySelector("#modal-project-name").textContent =
        project.name;

    document.querySelector("#modal-project-technology").textContent =
        project.technology;

    document.querySelector("#modal-project-description").textContent =
        project.description;

    document.querySelector("#modal-project-category").textContent =
        project.category;

    document.querySelector("#modal-project-link").href =
        project.link;

    projectModal.classList.add("show");
}


// -----------------------------------------
// CLOSE MODAL
// -----------------------------------------

const modalClose = projectModal.querySelector(".modal-close");

modalClose.addEventListener("click", () => {

    projectModal.classList.remove("show");

});


// -----------------------------------------
// CLOSE WHEN CLICKING OUTSIDE
// -----------------------------------------

projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {

        projectModal.classList.remove("show");

    }

});
// =========================================
// FEATURE 06 - LOCAL STORAGE THEME
// =========================================

const themeButton = document.createElement("button");

themeButton.id = "theme-toggle";
themeButton.textContent = "🌙 Dark Mode";

document.body.appendChild(themeButton);

// Apply saved theme when page loads
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "☀️ Light Mode";
}

// Toggle theme
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("portfolio-theme", "dark");
        themeButton.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("portfolio-theme", "light");
        themeButton.textContent = "🌙 Dark Mode";
    }
});
// =========================================
// FEATURE 07 - GITHUB API INTEGRATION
// =========================================

const loadGithubButton = document.querySelector("#load-github");
const githubResult = document.querySelector("#github-result");

loadGithubButton.addEventListener("click", async () => {
    githubResult.innerHTML = "<p>Loading GitHub information...</p>";

    try {
        const response = await fetch(
            "https://api.github.com/repos/varshayogesh2005/personal-portfolio"
        );

        if (!response.ok) {
            throw new Error("Unable to fetch GitHub data.");
        }

        const data = await response.json();

        githubResult.innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.description || "Personal portfolio repository."}</p>
            <p><strong>⭐ Stars:</strong> ${data.stargazers_count}</p>
            <p><strong>🍴 Forks:</strong> ${data.forks_count}</p>
            <p><strong>💻 Language:</strong> ${data.language || "HTML/CSS/JavaScript"}</p>
            <a href="${data.html_url}" target="_blank" rel="noopener noreferrer">
                View GitHub Repository
            </a>
        `;
    } catch (error) {
        githubResult.innerHTML = `
            <p>Unable to load GitHub information.</p>
        `;

        console.error(error);
    }
});
// =========================================
// FEATURE 08 - CONTACT FORM
// =========================================

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const successMessage = document.createElement("p");

    successMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    successMessage.className = "form-success";

    contactForm.appendChild(successMessage);

    contactForm.reset();

    setTimeout(() => {
        successMessage.remove();
    }, 5000);
});