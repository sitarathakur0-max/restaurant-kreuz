export type PageId = 'home' | 'about' | 'dining' | 'contact';

export interface BusinessDetails {
  name: string;
  category: string;
  address: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneHref: string;
  phoneIntl: string;
  description: string;
  reviewsNotice: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'phone' | 'email';
}

export interface RouteInfo {
  origin: string;
  distanceKm: number;
  driveTimeMin: number;
  transitSummary: string;
  scenicNote: string;
}
