export interface Campaign {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  impactGoal: string;
  impactAchieved: string;
  category: 'education' | 'food' | 'hygiene' | 'clothing';
  image: string; // fallback placeholders
  raisedPercent: number;
}

export interface ImpactStory {
  id: string;
  name: string;
  age: number;
  location: string;
  title: string;
  story: string;
  program: string;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DonationRecord {
  donorName: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  cause: string;
  certifiedId?: string;
  timestamp: string;
}

export interface VolunteerRecord {
  fullName: string;
  email: string;
  phone: string;
  interest: string;
  hobbies: string;
  badgeId?: string;
  joinedDate: string;
}
