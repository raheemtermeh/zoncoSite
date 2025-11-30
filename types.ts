
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  stats: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
  image: string;
  excerpt: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: string;
  image: string;
}