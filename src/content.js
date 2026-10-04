import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Headphones,
  MapPinned,
  PackageCheck,
  Radar,
  Route,
  ShieldCheck,
  Smartphone,
  Truck,
  UsersRound,
} from 'lucide-react';

export const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Platform', href: '#platform' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'FAQ', href: '#faq' },
];

export const stats = [
  { value: '24/7', label: 'dispatch visibility' },
  { value: '3', label: 'core vehicle types' },
  { value: 'Live', label: 'launch interest list' },
];

export const services = [
  {
    icon: Truck,
    title: 'Truck booking',
    description: 'Let customers request the right truck for goods, construction supply, bulk cargo, and scheduled movement.',
  },
  {
    icon: Route,
    title: 'Dispatch control',
    description: 'Assign verified drivers, monitor active trips, and keep every delivery moving from one operations view.',
  },
  {
    icon: PackageCheck,
    title: 'Load tracking',
    description: 'Give customers clearer pickup, transit, and delivery updates for higher-value vehicle-based logistics.',
  },
  {
    icon: ShieldCheck,
    title: 'Fleet accountability',
    description: 'Create a reliable record of drivers, vehicles, plates, licenses, pickup notes, delivery status, and exceptions.',
  },
];

export const workflows = [
  {
    step: '01',
    title: 'Request',
    description: 'A customer creates a delivery request with pickup, drop-off, item details, and the required vehicle type.',
    icon: ClipboardList,
  },
  {
    step: '02',
    title: 'Assign',
    description: 'Dispatchers match each job with an approved truck, tipper, or tanker driver based on readiness and location.',
    icon: UsersRound,
  },
  {
    step: '03',
    title: 'Track',
    description: 'Teams follow trip progress, exceptions, and customer updates from the EFATA control view.',
    icon: Radar,
  },
  {
    step: '04',
    title: 'Confirm',
    description: 'Proof of delivery, status history, and service notes close the loop for customers and internal teams.',
    icon: BadgeCheck,
  },
];

export const useCases = [
  {
    icon: Building2,
    title: 'Truck deliveries',
    text: 'Move goods between warehouses, stores, sites, and customer destinations with clearer status visibility.',
  },
  {
    icon: Boxes,
    title: 'Building supply movement',
    text: 'Support tipper and truck requests for sand, blocks, equipment, and construction-related logistics.',
  },
  {
    icon: Smartphone,
    title: 'Fuel and tanker jobs',
    text: 'Prepare a controlled request and verification flow for tanker-based logistics where trust matters heavily.',
  },
  {
    icon: Headphones,
    title: 'Admin and support teams',
    text: 'Review driver applications, documents, trip disputes, customer accounts, and payouts from one admin console.',
  },
];

export const timeline = [
  {
    title: 'Public website launch',
    status: 'Ready now',
    text: 'EFATA can start collecting business interest, quote requests, and partner conversations immediately.',
  },
  {
    title: 'Private pilot onboarding',
    status: 'Next',
    text: 'Early customers, truck owners, and verified drivers can be shortlisted for controlled testing as product modules stabilize.',
  },
  {
    title: 'Customer app rollout',
    status: 'Planned',
    text: 'The full app experience can launch with tracking, requests, dispatch views, and role-based access.',
  },
];

export const faqs = [
  {
    question: 'Is EFATA already accepting delivery requests?',
    answer: 'The public website is designed to capture serious enquiries while the full app is finalized. The team can manually follow up with leads and pilot partners.',
  },
  {
    question: 'Who is this built for?',
    answer: 'EFATA is positioned for customers booking trucks, verified drivers, truck owners, fleet operators, suppliers, construction logistics, fuel movement, and businesses that need clearer vehicle-based delivery coordination.',
  },
  {
    question: 'Can the site be connected to the app later?',
    answer: 'Yes. The structure leaves room for future app links, sign-in buttons, pricing, live quote forms, dashboards, help content, and customer tracking pages.',
  },
  {
    question: 'What should the domain show before launch?',
    answer: 'It should show trust, direction, and a way to contact the team. This version gives EFATA a credible public face while product development continues.',
  },
];

export const quickLinks = [
  { label: 'Request a quote', href: '#contact', icon: ArrowRight },
  { label: 'View launch plan', href: '#launch', icon: CalendarClock },
  { label: 'See coverage idea', href: '#platform', icon: MapPinned },
  { label: 'Check services', href: '#services', icon: CheckCircle2 },
];
