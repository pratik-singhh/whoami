export interface Socials {
  github: string;
  instagram: string;
  letterboxd: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  socials: Socials;
}

export interface Project {
  title: string;
  repo: string;
  live: string;
  description: string;
  tech: string[];
  highlights: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Pratik",
  role: "Fullstack Developer",
  tagline: "React • TypeScript • Node.js",
  bio: "Building scalable web applications with clean code & solid architecture. Passionate about building production-ready applications with modern tech. I focus on clean architecture, secure backends, and responsive frontends. Always learning, always building.",
  email: "pratikthakur4761@gmail.com",
  socials: {
    github: "https://github.com/pratik-singhh",
    instagram: "https://instagram.com/pratiksingh__.__/",
    letterboxd: "https://letterboxd.com/Pratik4351"
  }
};

export const techStack: string[] = [
  "React", "TypeScript", "JavaScript", "Node.js", "Express", "PostgreSQL",
  "HTML", "CSS", "TailwindCSS", "Git", "Linux", "Vite", "Vercel", "Railway"
];

export const projects: Project[] = [
  {
    title: "Campus Event Management System (CEMS)",
    repo: "https://github.com/pratik-singhh/CEMS",
    live: "https://cems-six.vercel.app",
    description: "Full-stack event management platform where users can create events, register, and manage participation with secure authentication.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    highlights: ["Full-stack deployment (Vercel + Render)", "Relational DB", "Protected routes", "Real-time UI updates"]
  },
  {
    title: "TaskMaster – Fullstack Task Manager",
    repo: "https://github.com/pratik-singhh/Devtrack",
    live: "https://taskmaster-rho-two.vercel.app/",
    description: "Full-featured task management app with secure authentication and multi-user support.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS"],
    highlights: ["CRUD operations", "User isolation", "JWT auth"]
  },
  {
    title: "GitHub Profile Viewer",
    repo: "https://github.com/pratik-singhh/github-profile-viewer",
    live: "",
    description: "Search GitHub users, view detailed profiles, and explore repositories with pagination. Demonstrates API integration nicely.",
    tech: ["React", "GitHub API", "Pagination"],
    highlights: ["API integration", "Handling large datasets"]
  },
  {
    title: "GitHub Repo Explorer",
    repo: "https://github.com/pratik-singhh/github-repo-explorer",
    live: "",
    description: "Advanced repository search with debouncing, sorting, and request cancellation.",
    tech: ["React", "AbortController", "Debouncing"],
    highlights: ["Async operations", "API optimization"]
  },
  {
    title: "Movie App",
    repo: "https://github.com/pratik-singhh/Movie-Database-App",
    live: "",
    description: "Movie browser powered by external APIs with robust error handling and loading states.",
    tech: ["React", "Movie API", "Error Handling"],
    highlights: ["Clean UI", "Smooth user experience"]
  }
];
