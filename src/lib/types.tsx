export interface HeroProps {
    name: string;
    typingWords: string[];
    location: string;
    email: string;
}

export interface AboutProps {
    photo: string
    name: string
    bio: string
    linkedin: string
    github: string
    email: string
    phone: string
    resume: string
}

export interface EducationItem {
    degree: string
    institution?: string
    location?: string
    startDate: string
    endDate: string
    description: string[]
    tags: string[]
}
export interface EducationProps {
    educations: EducationItem[]
}