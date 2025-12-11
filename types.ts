export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI' | 'Tools';
  // level removed as requested
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
  reflection?: string; // Added field for personal thoughts
}

export interface Project {
  title: string;
  period: string;
  description: string;
  details: string[];
  techStack: string[];
  link?: string;
  image: string;
}

export interface Certification {
  name: string;
  year?: string;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  location: string;
}