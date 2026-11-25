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
    title: "TripInSync – Travel Management Platform (UK)",
    imgSrc: "/project-imgs/tripinsync-app-screens.png",
    projectLink: "https://tripinsync.ai/",
    tech: [
      "Next.js",
      "Nest.js",
      "Microservices",
      "PostgreSQL",
      "AI Agents",
      "LLM",
      "AWS",
      "Docker",
    ],
    description:
      "An all-in-one UK platform for appealing parking fines (PCNs), smart parking, EV charging monitoring and fleet compliance.",
    modalContent: (
      <>
        <p>
          Built TripInSync from scratch as Tech Lead, from architecture through to production, with a Next.js front end and a Nest.js microservices back end.
        </p>
        <p>
          Built AI agents that draft PCN appeal letters grounded in UK case-law data, predict risk and send deadline alerts. Integrated DVLA checks, EV charging networks and Open Banking payments.
        </p>
        <p>
          <br />
          - Independent services for parking, PCN appeals, EV charging and fleet compliance
          <br />
          - AI-drafted appeals backed by UK case-law data
          <br />
          - Containerised with Docker and shipped via CI/CD on AWS
        </p>
      </>
    ),
  },
  {
    title: "WellnessGram – Family Wellness Platform (UK)",
    imgSrc: "/project-imgs/wellnessgram-app-screens.png",
    projectLink: "https://wellnessgram.co.uk/",
    tech: [
      "Next.js",
      "Nest.js",
      "Microservices",
      "PostgreSQL",
      "LLM",
      "AWS",
      "Docker",
    ],
    description:
      "One account for your own wellness, your children's and the relatives who help care for them, with local verified UK professionals.",
    modalContent: (
      <>
        <p>
          Built WellnessGram from scratch: a Next.js front end on a Nest.js microservices back end with clear service boundaries, so one area can change without touching the rest.
        </p>
        <p>
          Integrated clinician-checked AI guidance and postcode-based discovery of verified UK professionals, deployed on a containerised, CI/CD-driven cloud setup.
        </p>
        <p>
          <br />
          - Single family account covering children and carers
          <br />
          - Postcode-based local results
          <br />
          - Clinician-checked AI safeguards
        </p>
      </>
    ),
  },
  {
    title: "Curetrax – Remote Patient Monitoring (HealthTech)",
    imgSrc: "/project-imgs/curetrax-app-screens.png",
    projectLink: "https://www.curetrax.com/",
    tech: ["Mobile App", "Web Dashboard", "Garmin Wearables", "AWS", "HIPAA"],
    description:
      "A digital monitoring platform for blood-cancer patients after immunotherapy, helping care teams track recovery remotely.",
    modalContent: (
      <>
        <p>
          Curetrax combines wearable vitals with treatment-specific symptom
          reporting so care teams can monitor patients at home 24/7, supporting
          earlier discharge while keeping patients safe.
        </p>
        <p>
          Data is collected automatically from Garmin smartwatches and manually
          through a patient mobile app, then stored securely on AWS and shown to
          clinicians in a dedicated web dashboard.
        </p>
        <p>
          <br />
          - Patient mobile app for symptoms and quality-of-life reporting
          <br />
          - Wearable-based vitals monitoring for care teams
          <br />
          - Clinician web dashboard with data overviews and patient contact
          <br />
          - Secure, HIPAA-compliant cloud hosting
        </p>
      </>
    ),
  },
  {
    title: "Cashyou – Cashback & Rewards App (Switzerland)",
    imgSrc: "/project-imgs/cashyou-app-screens.png",
    projectLink: "https://www.cashyou.ch/",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "Ruby on Rails",
      "Redis",
      "AWS",
      "CI/CD",
    ],
    description:
      "A cashback and discount app for young people and students in Switzerland, built in partnership with UBS.",
    modalContent: (
      <>
        <p>
          Worked full-stack on core product features and migrated legacy CMS modules from Ruby on Rails to FastAPI and PostgreSQL for a faster, easier-to-maintain platform.
        </p>
        <p>
          Optimised SQL queries, indexes and API performance, and moved heavy work off the request path with background jobs, caching and email notifications.
        </p>
        <p>
          <br />
          - Rails to FastAPI + PostgreSQL migration
          <br />
          - Caching in front of hot queries, workers for slow tasks
          <br />
          - Repeatable AWS deployments with CI/CD
        </p>
      </>
    ),
  },
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
          Built and launched the Retailo B2B app from the ground up, enabling
          thousands of retailers across Pakistan, Saudi Arabia, and UAE to
          place and track orders efficiently.
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
          <br />
          - Event-driven order workflows on Amazon SQS
        </p>
      </>
    ),
  },
  {
    title: "Skipify – Real Estate Skip Tracing",
    imgSrc: "/project-imgs/skipify-app-screens.png", // Update with actual path to your app screenshot
    projectLink: "https://skipify.ai/",
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
          Built and optimised the data backbone of a scalable skip tracing platform
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

