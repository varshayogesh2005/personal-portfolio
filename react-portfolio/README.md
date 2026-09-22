# React Portfolio

A responsive personal portfolio website built using React.js and Vite.

This project was developed as part of Week 4 of the InternNova internship to learn React fundamentals, reusable components, state management, routing, forms, API integration, and responsive web development.

## Features

- Responsive portfolio design
- React functional components
- Reusable components
- Props and component communication
- React Router navigation
- Dynamic project detail pages
- Project search and category filtering
- Contact form with validation
- Form reset and success message
- GitHub API integration
- Light and dark mode
- Local Storage for theme preference
- Responsive project grid
- 404 Page Not Found route

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- React Router
- Git & GitHub
- GitHub REST API

## Project Structure

```text
react-portfolio/
├── public/
│   └── projects/
│       ├── portfolio.jpg
│       ├── javascript-portfolio.jpg
│       └── react-portfolio.jpg
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── GitHub.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectList.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── ProjectsPage.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── README.md