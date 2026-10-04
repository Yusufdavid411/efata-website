import {
  BadgeCheck,
  Boxes,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Fuel,
  Headphones,
  Radio,
  Route,
  ShieldCheck,
  Truck,
  Warehouse,
} from 'lucide-react';

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'How it works', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export const serviceLines = [
  {
    icon: Boxes,
    title: 'Goods distribution',
    description:
      'Move stock, equipment, packaged goods, and palletised cargo between warehouses, stores, and customer locations.',
  },
  {
    icon: Building2,
    title: 'Construction haulage',
    description:
      'Coordinate tipper and truck movements for sand, granite, laterite, blocks, machinery, and site supplies.',
  },
  {
    icon: Fuel,
    title: 'Fuel movement',
    description:
      'Arrange scheduled tanker trips with clear vehicle details, route coordination, and delivery confirmation.',
  },
  {
    icon: Warehouse,
    title: 'Contract logistics',
    description:
      'Set up repeat vehicle movements for businesses that need dependable capacity across regular routes.',
  },
];

export const vehicles = [
  {
    id: 'truck',
    icon: Truck,
    name: 'Truck',
    label: 'General cargo',
    description:
      'For packaged goods, pallets, equipment, wholesale stock, and scheduled distribution work.',
    suitableFor: ['Warehouse transfers', 'Retail distribution', 'Equipment movement'],
    dispatchNote: 'Share the load type, estimated weight, pickup point, and destination.',
  },
  {
    id: 'tipper',
    icon: Building2,
    name: 'Tipper',
    label: 'Bulk materials',
    description:
      'For sand, granite, laterite, rubble, and other construction materials that require open-body haulage.',
    suitableFor: ['Quarry runs', 'Building sites', 'Bulk aggregate'],
    dispatchNote: 'Share the material, quantity, loading point, site access, and preferred delivery window.',
  },
  {
    id: 'tanker',
    icon: Fuel,
    name: 'Petrol tanker',
    label: 'Fuel logistics',
    description:
      'For controlled fuel movement where vehicle documentation, timing, and route coordination matter.',
    suitableFor: ['Depot collection', 'Fuel supply', 'Scheduled replenishment'],
    dispatchNote: 'Share the product, volume, loading depot, receiving location, and required documents.',
  },
];

export const processSteps = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'Send the trip details',
    description:
      'Tell us what is moving, the required vehicle, pickup and delivery locations, load size, and timing.',
  },
  {
    step: '02',
    icon: BadgeCheck,
    title: 'Confirm vehicle and rate',
    description:
      'EFATA matches the request, confirms availability, and shares the trip rate before dispatch.',
  },
  {
    step: '03',
    icon: Radio,
    title: 'Dispatch and follow the trip',
    description:
      'Receive the assigned driver and vehicle details, then get clear updates through the movement.',
  },
  {
    step: '04',
    icon: FileCheck2,
    title: 'Complete the handover',
    description:
      'The receiving point confirms delivery and the job closes with a clean trip record.',
  },
];

export const operatingStandards = [
  {
    icon: Truck,
    title: 'The right vehicle for the load',
    text: 'Vehicle selection starts with the cargo, route, access conditions, and delivery window.',
  },
  {
    icon: ShieldCheck,
    title: 'Details before movement',
    text: 'Customers receive the assigned driver and vehicle information before the trip begins.',
  },
  {
    icon: Route,
    title: 'One clear trip record',
    text: 'Pickup, movement updates, delivery status, and exceptions stay connected to the same job.',
  },
  {
    icon: Headphones,
    title: 'Dispatch support',
    text: 'A single operations contact coordinates changes, delays, and delivery questions.',
  },
];

export const faqs = [
  {
    question: 'How do I request a vehicle?',
    answer:
      'Send the pickup point, destination, load description, estimated size or weight, preferred date, and vehicle type. EFATA will review the trip and respond with availability and a rate.',
  },
  {
    question: 'Which vehicles can I request?',
    answer:
      'EFATA currently coordinates trucks, tippers, and petrol tankers. Vehicle selection depends on the load, route, site access, documentation, and timing.',
  },
  {
    question: 'How is the trip price calculated?',
    answer:
      'Rates are based on vehicle type, distance, load requirements, waiting time, route conditions, and any special handling or documentation needed for the job.',
  },
  {
    question: 'Will I receive trip updates?',
    answer:
      'Yes. Dispatch shares the assigned vehicle details and provides practical updates from pickup through delivery confirmation.',
  },
  {
    question: 'Can my business schedule repeat movements?',
    answer:
      'Yes. Businesses with recurring routes can request a regular dispatch arrangement based on expected volume, frequency, and vehicle requirements.',
  },
];
