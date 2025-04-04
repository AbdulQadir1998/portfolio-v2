import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Howdy! I&apos;m Abdul Qadir, and I&apos;m a Computer Science
              graduate.
              <br />
              <br />
              Specializing in React, Redux, Next.js, Node.js, and Nest.js, I have built scalable, high-performance applications for a variety of industries. 
              I thrive on solving complex problems and ensuring seamless user experiences across web and mobile platforms.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My expertise extends to backend development with Express.js PostgreSQL, MongoDB, and MySQL, leveraging cloud solutions like AWS and DigitalOcean.
              From architecting APIs to implementing CI/CD pipelines, I ensure efficient and secure application development.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m a firm believer in clean code practices, test-driven development, and automation to build maintainable and scalable applications. 
              My work also involves integrating third-party services, optimizing performance, and enhancing security.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to
              learn and grow as a developer. If you&apos;re interested in
              working together or have any questions, please don&apos;t hesitate
              to get in touch!🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
