export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  claudeUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
