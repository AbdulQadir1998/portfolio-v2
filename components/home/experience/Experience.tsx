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
    title: "VN-Consulting",
    position: "Senior Software Engineer (Contract)",
    time: "Oct 2024 - Present",
    location: "Remote",
    description:
      "Developed scalable, high-performance applications using MERN stack. Built a healthcare portal with real-time chat, secure report storage (AWS S3) and Firebase alerts. Implemented billing systems with Stripe and processed 120M+ property records from FTP Data-Tree into AWS S3, MongoDB and Apache Solr for a real estate app and deployed on AWS with CI/CD automation.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Nest.js",
      "Redux-Toolkit",
      "MongoDB",
      "PostgreSQL",
      "AWS (EC2, S3, RDS, Lambda)",
      "TypeScript",
      "WebSockets",
      "Stripe",
      "DynamoDB",
    ],
  },
  {
    title: "Techtiz",
    position: "Senior Software Engineer",
    time: "Oct 2024 - Feb 2025",
    location: "Lahore, Pakistan",
    description:
      "Led full-stack development of multiple applications, including a golf event scheduling system with Google Maps API, a fitness app with personalized workout plans and an enterprise admin portal with RBAC. Designed and deployed scalable backend systems using Nest.js and AWS services.",
    tech: [
      "React.js",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "AWS (EC2, S3, RDS)",
      "Firebase",
      "Bitrix",
      "GraphQL",
      "Docker",
      "CI/CD",
      "DigitalOcean"
    ],
  },
  {
    title: "Techdots",
    position: "Senior Software Engineer",
    time: "Jan 2024 - Oct 2024",
    location: "Lahore, Pakistan",
    description:
      "Developed a B2C shipment tracking system for diamonds, a real estate agency portal with RBAC and a CMS for an app offering brand discounts. Migrated a Ruby-based CMS to Node.js using Nest.js and PostgreSQL, implementing TypeORM for backend scalability.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Nest.js",
      "GraphQL",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "AWS",
      "Redux",
      "React Query",
      "TypeScript",
      "Next.js"
    ],
  },
  {
    title: "Retailo Technologies",
    position: "Software Engineer",
    time: "Sep 2020 - Jan 2024",
    location: "Lahore, Pakistan",
    description:
      "Developed a Warehouse Management System (ERP) with OpenSearch & Elasticsearch. Led the development of a React Native StockFlo App for warehouse inventory tracking and contributed to the Retailo B2B ordering app with multilingual support and Redux state management.",
    tech: [
      "React.js",
      "React Native",
      "Node.js",
      "Nest.js",
      "MySQL",
      "Docker",
      "AWS EC2",
      "AWS (S3, SQS, Lambda)",
      "Redux-Saga",
      "Styled-components",
      "Elasticsearch",
      "Detox",
      "Cypress",
    ],
  },
];

