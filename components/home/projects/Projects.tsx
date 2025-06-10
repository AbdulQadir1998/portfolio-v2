import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Retailo – B2B Ordering App",
    imgSrc: "/project-imgs/retailo-app-screens.png", // Update with actual path to your app screenshot
    projectLink:
      "https://play.google.com/store/apps/details?id=com.app.retailerapp",
    tech: [
      "React Native",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MySQL",
      "Firebase",
      "App Center",
    ],
    description:
      "A multilingual B2B ordering app for retailers across the MENA region, developed with scalability and performance in mind.",
    modalContent: (
      <>
        <p>
          Built the Retailo B2B app from scratch using React Native, enabling
          retailers in Pakistan, Saudi Arabia, and UAE to place and manage
          orders efficiently.
        </p>
        <p>
          Developed a component library with RTL and multilingual support using
          styled-components. Integrated Firebase for crash analytics and push
          notifications, and set up Microsoft App Center for CI/CD and crash
          reporting.
        </p>
        <p>
          <br />
          - Custom component library with internationalization (i18n)
          <br />
          - Secure order management with API middleware
          <br />
          - Firebase + Sentry for logging and crash handling
          <br />
          - Automated builds and deployments via App Center
        </p>
      </>
    ),
  },
  {
    title: "Skipify – Real Estate Skip Tracing",
    imgSrc: "/project-imgs/skipify-app-screens.png", // Update with actual path to your app screenshot
    projectLink: "https://www.skipify.ai",
    tech: [
      "Nest.js",
      "React.js",
      "Redux Toolkit",
      "MongoDB",
      "Stripe API",
      "Apache Solr",
      "AWS",
    ],
    description:
      "High-performance property data tracing platform for the U.S. real estate market, with large-scale ingestion and billing features.",
    modalContent: (
      <>
        <p>
          Contributed to the development of a scalable skip tracing platform
          used by real estate professionals across the USA. Implemented Stripe
          billing workflows and processed over 120M+ property records.
        </p>
        <p>
          Built secure ingestion pipelines using AWS S3 and Apache Solr. Managed
          front-end state with Redux Toolkit and enabled seamless payment and
          subscription tracking via Stripe.
        </p>
        <p>
          <br />
          - Stripe-powered billing and history tracking
          <br />
          - Processed 120M+ records via FTP → AWS S3 → Solr pipeline
          <br />
          - Deployed on EC2 with structured data storage in MongoDB
          <br />
          - Advanced real estate search and filtering tools
        </p>
      </>
    ),
  },
];

