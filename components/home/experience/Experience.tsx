import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Consultancy Outfit",
    position: "Technical Team Lead",
    time: "Sep 2026 - Present",
    location: "Lahore, Pakistan",
    description:
      "Tech Lead and hands-on engineer for TripInSync and WellnessGram, UK platforms built from scratch. Lead a team of 5, own architecture and technical direction, and design 12+ NestJS microservices behind Next.js front ends, and build AI agents and LLM workflows (PCN appeal drafting grounded in UK case law, risk prediction, deadline alerts, clinician-checked guidance). Set up AWS, Docker and CI/CD, integrate DVLA checks, EV charging networks and Open Banking payments, and lead planning, code reviews and mentoring.",
    tech: [
      "Next.js",
      "Nest.js",
      "Microservices",
      "PostgreSQL",
      "AI Agents",
      "LLM Integration",
      "AWS",
      "Docker",
      "CI/CD",
      "System Design",
      "Technical Leadership",
    ],
  },
  {
    title: "Ubiquify Digital",
    position: "Senior Software Engineer",
    time: "Apr 2025 - Jul 2026",
    location: "Lahore, Pakistan",
    description:
      "Led development of scalable SaaS platforms, including an AI-powered SEO Agent Platform (Claude APIs + n8n) automating keyword research, SERP analysis, content planning, generation and publishing. Built multi-tenant SaaS with automated tenant provisioning, CMS, video streaming and e-commerce, plus RFQ/quotation systems. Integrated Google Search Console, SEO APIs, Slack and email, and deployed on AWS (EC2, RDS, S3) with Docker and CI/CD.",
    tech: [
      "Nest.js",
      "Next.js",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Python",
      "FastAPI",
      "AWS (EC2, RDS, S3)",
      "Claude API",
      "n8n",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Tech Dots",
    position: "Software Engineer",
    time: "Jan 2024 - Mar 2025",
    location: "Lahore, Pakistan",
    description:
      "Built SaaS and enterprise apps across logistics, real estate, healthcare, fitness and fintech: LinkedGolf (real-time events, RBAC, background jobs; cut admin effort by 90%), Aniflex (personalised fitness, +25% engagement), a real-time Healthcare Portal, Nivoda shipment tracking, and the Makhulu real estate CRM with PropertyFinder integration. Migrated the Cashyou CMS from Ruby on Rails to FastAPI and PostgreSQL.",
    tech: [
      "TypeScript",
      "Nest.js",
      "Next.js",
      "React.js",
      "FastAPI",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "TypeORM",
      "AWS",
      "Azure",
      "DigitalOcean",
      "Docker",
    ],
  },
  {
    title: "Retailo Technologies",
    position: "Software Engineer",
    time: "Sep 2020 - Dec 2023",
    location: "Lahore, Pakistan (Remote)",
    description:
      "Led backend development of a custom Warehouse Management System with NestJS, MySQL and Prisma across multiple countries, using AWS Lambda, S3, SQS and EC2 for backend services (inventory, purchase orders, vendors). Earlier, built the Retailo and StockFlo React Native apps with Google Maps delivery check-ins, live inventory capture, Redux Toolkit, Firebase and Detox testing. Documented APIs, cutting developer onboarding time by ~50%.",
    tech: [
      "Nest.js",
      "MySQL",
      "Prisma",
      "React Native",
      "Redux Toolkit",
      "React Query",
      "AWS (Lambda, S3, SQS, EC2)",
      "Firebase",
      "Cypress",
      "Detox",
      "App Center",
    ],
  },
];
