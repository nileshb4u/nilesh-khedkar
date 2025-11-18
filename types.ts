
export interface HeaderData {
  name: string;
  title: string;
  certifications: string[];
  email: string;
  linkedin: string;
  github: string;
  researchGate: string;
  twitter: string;
  imageUrl: string;
  cvPdfUrl: string;
}

export interface Recognition {
  year: number;
  description: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  title: string;
  role: string;
  details: string[];
}

export interface Certification {
  name: string;
  date: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
}

export interface Achievement {
  title: string;
  description: string;
  imageUrl: string;
}

export interface CVData {
    header: HeaderData;
    aboutMe: {
        title: string;
        content: string;
        points: string[];
        note: string;
    };
    recognitions: Recognition[];
    experience: ExperienceItem[];
    certifications: Certification[];
    education: EducationItem[];
    achievements: Achievement[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}