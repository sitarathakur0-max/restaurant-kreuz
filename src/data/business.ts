import { BusinessDetails, RouteInfo } from '../types';

export const BUSINESS: BusinessDetails = {
  name: 'Restaurant Kreuz',
  category: 'Restaurant',
  address: 'Oberwilstrasse 35, 4579 Gossliwil, Switzerland',
  street: 'Oberwilstrasse 35',
  postalCode: '4579',
  city: 'Gossliwil',
  country: 'Switzerland',
  phone: '032 661 18 28',
  phoneHref: 'tel:0326611828',
  phoneIntl: '+41 32 661 18 28',
  description: 'Local Swiss-style village restaurant',
  reviewsNotice: 'Reviews are not currently surfaced for this establishment.',
};

export const REGIONAL_ROUTES: RouteInfo[] = [
  {
    origin: 'Solothurn',
    distanceKm: 14,
    driveTimeMin: 18,
    transitSummary: 'Regional bus connection via Lohn-Ammannsegg or Schnottwil',
    scenicNote: 'Scenic drive winding south through the gentle hills of the Bucheggberg district.'
  },
  {
    origin: 'Bern',
    distanceKm: 28,
    driveTimeMin: 32,
    transitSummary: 'RBS / PostAuto regional connection via Jegenstorf or Messen',
    scenicNote: 'Pleasant countryside route heading north across the Bernese-Solothurn borderland.'
  },
  {
    origin: 'Biel / Bienne',
    distanceKm: 22,
    driveTimeMin: 25,
    transitSummary: 'Direct route via Büren an der Aare and Schnottwil',
    scenicNote: 'Cross the Aare river and ascend into the peaceful farming plateau of Bucheggberg.'
  },
  {
    origin: 'Burgdorf',
    distanceKm: 25,
    driveTimeMin: 30,
    transitSummary: 'Country road via Kirchberg and Aefligen into Gossliwil',
    scenicNote: 'Winding country lanes framed by traditional Swiss timber farmhouses and orchards.'
  }
];

export const GENERAL_VISIT_FAQS = [
  {
    question: 'How do I make a table reservation or check availability?',
    answer:
      'Reservations and dining inquiries at Restaurant Kreuz are handled directly over the phone. Please call 032 661 18 28 in advance to speak with the restaurant team and secure your table.'
  },
  {
    question: 'Where is Restaurant Kreuz situated?',
    answer:
      'The restaurant is located at Oberwilstrasse 35, 4579 Gossliwil, in the tranquil Bucheggberg countryside of the Canton of Solothurn, Switzerland.'
  },
  {
    question: 'What is the recommended way to reach Gossliwil?',
    answer:
      'Gossliwil is comfortably reached by car via regional cantonal roads from Solothurn, Biel, and Bern, as well as by regional PostBus services connecting village stops throughout the Bucheggberg.'
  },
  {
    question: 'Are groups or family gatherings welcomed?',
    answer:
      'Village restaurants traditionally accommodate family gatherings and small groups. We recommend calling 032 661 18 28 ahead of time so the team can advise on table arrangements and preparation.'
  }
];
