import { Languages } from "lucide-react";
import { AboutProps, AchievementItem, AchievementsProps, ContactProps, EducationItem, EducationProps, ExperienceItem, ExperienceProps, HeroProps, ProjectItem, ProjectsProps, SkillsItem, SkillsProps } from "./types";

const Linkedin = "https://www.linkedin.com/in/mariam-seifeldin/";
const Github = "https://github.com/Mariam-Amro-2005";
const Email = "mariam.seifeldin.2005@gmail.com";
const Phone = "+201211433445";
const Location = "Cairo, Egypt";

export const hero: HeroProps = {
    name: "Mariam Amro Ahmed Fathi Seifeldin",
    typingWords: [
        "Full-Stack Developer",
        "Next.js Specialist",
        "React Engineer",
        "Backend API Builder",
        "Software Engineer",
        "5+ Years Experience"
    ],
    location: Location,
    email: Email,
}

export const about: AboutProps = {
    photo: "/profile1.jpeg",
    name: "Mariam",
    bio: "I am a dedicated Computer Science student at Cairo University with hands-on experience in full-stack web development using React, SpringBoot, and Django. Skilled in building responsive applications and collaborating on real-world projects.Seeking a Software Engineering Internship or Junior Developer opportunity to apply my technical skills andcontribute to meaningful products.",
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: Phone,
    resume: "https://drive.google.com/file/d/1C3Tslunsuxn1xyH6Vf3gPRDBhY9YZF6E/view?usp=sharing"
};

const BachelorsEdu: EducationItem = {
    degree: "Bachelor of Science in Computer Science",
    institution: "Faculty of Computers and Artificial Intelligence – Cairo University",
    location: "Cairo, Egypt",
    startDate: "Sep 2022",
    endDate: "Present",
    description: [
        "Pursuing a degree focused on computer science with a strong GPA of 3.38 (Very Good)",
        "Relevant coursework includes core computer science subjects with honors denoting strong academic performance."
    ],
    tags: [
        "Computer Science",
        "Web Development",
        "Software Engineering",
        "Frontend Development",
        "Backend Development"
    ]
}

const HighSchoolEdu: EducationItem = {
    degree: "International General Certificate of Secondary Education (IGCSE) & A-Levels",
    institution: "Thamer International Schools",
    location: "Jeddah, Saudi Arabia",
    startDate: "Sep 2019",
    endDate: "Jun 2021",
    description: [
        "Achieved A+ equivalent (Grades 8–9) across all subjects with highest grade 9 in English.",
        "Completed A-Levels in Biology and Math with A+ grades."
    ],
    tags: [
        "IGCSE",
        "A-Levels",
        "English",
        "Biology",
        "Mathematics"
    ]
}

export const education: EducationProps = {
    educations: [BachelorsEdu, HighSchoolEdu]
}

const EgronXExp: ExperienceItem = {
    title: "Software Developer Intern",
    company: "EgronX",
    location: "Cairo, Egypt",
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    description: [
        "Completed a 62-day internship across 4 agile sprints, working in a 7-member team on UI/UX, backend, and full-stack development.",
        "Designed user flows, wireframes, and interactive prototypes using Figma for a health-focused application.",
        "Built backend services with Spring Boot, JWT, and MySQL, implementing 15+ REST APIs for product and order management.",
        "Developed HealMeals, a full-stack meal-planning web app using React, TypeScript, and Tailwind, integrating 20+ backend APIs.",
        "Delivered production-ready features including an Admin Dashboard, Zod validation, Shadcn components, TanStack Query, and deployment via Vercel and Railway."
    ],
    tags: [
        "Software Development",
        "Full-Stack Development",
        "REST APIs",
        "Data Validation",
        "Agile"
    ]
}

export const experience: ExperienceProps = {
    experiences: [EgronXExp]
}

const HealMeals: ProjectItem = {
    title: "HealMeals - Full-Stack Web App",
    description: "HealMeals was built with a clear purpose: helping users make smarter food choices based on their health needs. As part of the development team, I contributed to building a full-stack application that recommends and filters recipes tailored to allergies, dietary restrictions, and fitness goals. On the frontend, I developed responsive React (TypeScript) components and connected them to Spring Boot backend services, ensuring smooth and reliable data flow. Working closely with teammates, I helped bridge frontend and backend systems to deliver a seamless experience across both web and mobile platforms.",
    image: "/HealMeals-Cover.png",
    tech: [
        "React", 
        "TypeScript", 
        "Spring Boot", 
        "MySQL",
    ],
    startDate: "Sep 2025",
    endDate: "Oct 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/HealMeals-Frontend-Latest",
    liveLink: "https://heal-meals-frontend-latest.vercel.app/"
}

const FurnitureHome: ProjectItem = {
    title: "Furniture Home – E-Commerce Backend",
    description: "In this project, my team and I focused on powering the logic behind an e-commerce experience. I designed and implemented the Order module using Spring Boot, handling everything from entity modeling and database queries to business logic and REST API endpoints. I built features for order placement, retrieval, and status tracking, ensuring smooth checkout integration and optimized database performance. Collaborating within a cross-functional team, I contributed to delivering production-ready backend services that supported real-world e-commerce workflows.",
    image: "/FurnitureHome-Cover.png",
    tech: [
        "Spring Boot", "Lombok", "MySQL" 
    ],
    startDate: "Aug 2025",
    endDate: "Aug 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/Furniture_Home",
}

const ReelVerse: ProjectItem = {
    title: "ReelVerse – TMDB Media Browser Web App",
    // description: "Developed ReelVerse, a responsive web application that allows users to explore trending movies and TV shows through an interactive and user-friendly interface. Built using React and integrated with multiple TMDB APIs, the app features search, genre filtering, pagination, and detailed media pages powered by centralized state management. Designed with a strong focus on performance, smooth navigation, and cross-device responsiveness to deliver an engaging user experience.",
    description: "ReelVerse began as a way to transform raw movie data into an engaging discovery experience. I built this responsive React application to help users seamlessly explore trending movies and TV shows through an intuitive interface. By integrating multiple TMDB APIs and implementing centralized state management, I created a smooth browsing journey featuring search, genre filtering, pagination, and dynamic detail pages. The result is a fast, interactive platform designed to make content discovery effortless across devices.",
    image: "/ReelVerse-Cover.png",
    tech: [
        "React", 
        "JavaScript", 
        "TMDB API", 
        "JSX",
        "Context API", 
        "CSS"
    ],
    startDate: "Jul 2025",
    endDate: "Jul 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/ReelVerse",
    liveLink: "https://reel-verse-one.vercel.app/"
}

const LMS: ProjectItem = {
    title: "Learning Management System",
    // description: "Developed a backend Learning Management System using Spring Boot to support assignment management, submissions, and grading workflows. Designed and implemented RESTful APIs to streamline communication between system components and enable automated feedback features. Applied a modular and secure architecture with role-based access control to ensure scalable performance and clear separation between student and instructor functionalities.",
    description: "This project was driven by the idea of simplifying academic workflows through structured backend design. I developed a Spring Boot–based Learning Management System that organizes assignments, submissions, and grading into clear processes. By designing RESTful APIs and implementing role-based access control, I ensured that students and instructors each had streamlined experiences. The system emphasizes modular architecture, making it scalable, maintainable, and ready to evolve with growing academic needs.",
    image:"/lms-erd-final.png",
    tech: ["Spring Boot", "Java"],
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    githubLink: "https://github.com/Mariam-Amro-2005/LMS-Assessments",
}

const Library: ProjectItem = {
    title: "Online Library System",
    // description: "Built a full-stack web application using Django that allows users to browse, borrow, and manage books through an intuitive interface. Implemented secure role-based access for users and administrators to manage books and accounts efficiently. Integrated external APIs and a SQLite database to support reliable data storage and seamless CRUD operations.",
    description: "The Online Library System was built to replicate the experience of managing a digital library from both user and administrator perspectives. Using Django, my team and I developed a full-stack application where users can browse and borrow books while administrators manage inventory and accounts securely. By integrating a database and external APIs, we created a smooth content management flow that balances usability with structured backend logic.",
    image:"/Online-Library-Cover.png",
    tech: ["Django", "HTML", "CSS", "JavaScript"],
    startDate: "May 2024",
    endDate: "Jun 2024",
    githubLink: "https://github.com/Mariam-Amro-2005/Web-project",
}

export const project: ProjectsProps = {
    projects: [HealMeals, FurnitureHome, ReelVerse, LMS, Library]
};

const AISkills: SkillsItem = {
    category: "AI & Data Science",
    skills: [
        "Python", 
        "NumPy", 
        "Pandas", 
        "Scikit-learn", 
        "PyTorch", 
    ]
}

const VisualizationSkills: SkillsItem = {
    category: "Data Visualization & BI",
    skills: [
        "Matplotlib", 
        "Seaborn", 
        "Power BI" 
    ]
}

const ProgrammingSkills: SkillsItem = {
    category: "Programming Languages",
    skills: [
        "Python", "Java", "C++", "C", "Assembly"
    ]
}

const BackendSkills: SkillsItem = {
    category: "Backend Development",
    skills: [
        "Spring Boot", "Django", "MySQL", "SQL", "SQLite" 
    ]
}

const FrontendSkills: SkillsItem = {
    category: "Web & UI Development",
    skills: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "TypeScript", 
        "React", 
        "Next.js", 
        "Responsive Design"
    ]
}

const FrameworkSkills: SkillsItem = {
    category: "Tools & Frameworks",
    skills: [
        "Git", 
        "GitHub", 
        "Postman", 
        "Figma", 
        "Canva", 
        "Vercel", 
        "Railway" 
    ]
}

const SoftSkills: SkillsItem = {
    category: "Soft Skills",
    skills: ["Team Player", "Detail-oriented", "Communication Skills" ]
}

export const skill: SkillsProps = {
    skills: [FrontendSkills, BackendSkills, ProgrammingSkills, 
        AISkills, VisualizationSkills, FrameworkSkills]
}

const MindersAchievment: AchievementItem = {
    title: "Outstanding Frontend Committe Memeber",
    issuer: "Minders",
    description: [
        "Participated in two weekly sessions focused on frontend development, covering modern tools and best practices while collaborating on mini-project planning. ",
        "Earned the Best Committee Member certificate during the second term of the 2025 season in recognition of performance and engagement.",
        "Maintained an A+ (Excellent) standing throughout the program, demonstrating consistent commitment and academic excellence."
    ],
    date: "Feb 2025 – Sept 2025",
    tags: [
        "React", "TypeScript", "Advanced JavaScript"
    ]
}

export const achievement: AchievementsProps = {
    achievements: []
}

export const contact: ContactProps = {
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: Phone,
}

export const languages = [
    "Arabic (Mother tongue)", "English (Fluent, IGCSE certified)"
]