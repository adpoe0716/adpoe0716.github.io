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
  image?: string; // Added image for experience
}

export interface Project {
  title: string;
  period: string;
  description: string;
  details: string[];
  techStack: string[];
  link?: string;
  images: string[]; // Changed from image: string to images: string[]
}

export interface Certification {
  name: string;
  year?: string;
  type?: 'award' | 'certification'; // Added to distinguish awards from certs
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  location: string;
}