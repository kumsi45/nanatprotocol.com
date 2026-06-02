export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Branch {
  name: string;
  location: string;
  address: string;
  phone: string;
  whatsapp: string;
}
