const Linkedin = "https://www.linkedin.com/in/mariam-seifeldin/";
const Github = "https://github.com/Mariam-Amro-2005";
const Email = "mariam.seifeldin.2005@gmail.com";
const Location = "Cairo, Egypt";
interface EducationItem {
    degree: string
    institution?: string
    location?: string
    startDate: string
    endDate: string
    description: string[]
    tags: string[]
}

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

export const projects = [
    {
        title: "HealMeals",
        description:
            "Full-stack meal planning platform with authentication, admin dashboard, and 20+ APIs.",
        tech: ["React", "TypeScript", "Spring Boot", "MySQL"],
        github: "#",
        live: "#",
    },
];

export const about = {
    photo: "/profile1.jpeg",
    name: "Mariam",
    bio: "I am a dedicated Computer Science student at Cairo University with hands-on experience in full-stack web development using React, SpringBoot, and Django. Skilled in building responsive applications and collaborating on real-world projects.Seeking a Software Engineering Internship or Junior Developer opportunity to apply my technical skills andcontribute to meaningful products.",
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: "+201211433445",
    resume: "https://drive.google.com/file/d/1C3Tslunsuxn1xyH6Vf3gPRDBhY9YZF6E/view?usp=sharing"
};

export const hero = {
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

export const education = {
    educations: [BachelorsEdu, HighSchoolEdu]
}