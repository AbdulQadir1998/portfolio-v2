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
    title: "Ubiquify Digital",
    position: "Senior Software Engineer (Contract)",
    time: "April 2025 - July 2026",
    location: "Lahore, Pakistan",
    description:
      "Developed and delivered production-grade SaaS applications, including multi-tenant platforms, AI-driven SEO automation systems, and enterprise workflow solutions. Leveraged modern technologies such as React, Node.js, NestJS, PostgreSQL, AWS, and N8N to enhance scalability, automation, and operational efficiency.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Nest.js",
      "Redux-Toolkit",
      "MongoDB",
      "PostgreSQL",
      "AWS (EC2, S3, RDS, CloudWatch, SNS)",
      "TypeScript",
      "WebSockets",
      "Supabase",
      "LLM APIs",
      "RAG Pipelines",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Techdots",
    position: "Senior Software Engineer",
    time: "Jan 2024 - Feb 2025",
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

