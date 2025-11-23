import { LucideIcon } from 'lucide-react';

export interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  specs: {
    beds: number;
    baths: number;
    sqm: number;
  };
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
