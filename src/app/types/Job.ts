export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: 'Full Time' | 'Part Time';
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Role;
}

interface Requirements {
  content: string;
  items: string[];
}

interface Role {
  content: string;
  items: string[];
}
