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
    title: "Issue Tracker",
    imgSrc: "/project-imgs/issue-tracker-app-screens.png",
    code: "https://github.com/bilalsh-dev/issue-tracker-app",
    projectLink: "https://issue-tracker-app-h8m9.vercel.app/",
    tech: [
      "Typescript",
      "React",
      "Nextjs",
      "Tailwind",
      "Prisma",
      "Postgres",
      "React-Query",
      "NextAuth",
    ],
    description:
      "Application designed to streamline issue management and tracking for teams.",
    modalContent: (
      <>
        <p>
          Designed and developed E2E with fully functional CRUDs and filtering
          related to the issues with markdown editor support, issues can be
          assigned to users, Dashbord for statistics.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Radix-UI, tailwind
          components, connected to a Prisma backend.{" "}
        </p>
        <p>
          <br />
          - Dashboard with Issue Stats: View OPEN, IN PROGRESS, and CLOSED issue
          counts at a glance.
          <br />
          - Issue Board: Filter, paginate, and sort issues with ease.
          <br />
          - Create, Update, and Delete Issues: Full issue lifecycle management
          with Markdown support for rich formatting.
          <br />
          - User Assignment: Assign tasks to team members to ensure
          accountability.
          <br />- Responsive Design: Optimized for both desktop and mobile
          devices.
          <br />- SEO-Friendly: Follows best practices for search engine
          optimization.
          <br />- Performance: Built with a focus on speed and user experience.
        </p>
      </>
    ),
  },
  {
    title: "Proshop",
    imgSrc: "/project-imgs/proshop-app-screens.png",
    code: "https://github.com/bilalsh-dev/proshop-ts",
    projectLink: "https://proshop-2bty.onrender.com/",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Redux-toolkit"],
    description:
      "eCommerce platform built with the MERN stack, Redux, Typescript. It is a full-featured online store with shopping cart, PayPal & credit/debit payments",
    modalContent: (
      <>
        <p>
          Designed and implemented an e-commerce platform E2E using (Typescript,
          React.js, Node.js, Express.js, MongoDB).
        </p>
        <p>
          The tech stack is based on MERN with the custom react-bootstrap
          components, connected to a Node.js(express.js) backend, with data
          stored in MongoDB.
        </p>
        <p>
          <br />
          - Full featured shopping cart
          <br />
          - Product reviews and ratings
          <br />
          - Top products carousel
          <br />
          - Product pagination
          <br />
          - Product search feature
          <br />
          - User profile with orders
          <br />
          - Admin product management
          <br />
          - Admin user management
          <br />
          - Admin Order details page
          <br />
          - Mark orders as delivered option
          <br />
          - Checkout process (shipping, payment method, etc)
          <br />
          - PayPal / credit card integration
          <br />- Database seeder (products & users)
        </p>
      </>
    ),
  },
];
