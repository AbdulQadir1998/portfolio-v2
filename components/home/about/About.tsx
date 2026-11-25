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
              Howdy! I&apos;m Abdul Qadir, a Senior Software Engineer and
              Technical Team Lead with 6+ years of experience turning business
              ideas into dependable software products.
              <br />
              <br />
              I work with founders and teams from the first idea to a live
              product: shaping the right solution, designing a platform that
              can grow with your business, and shipping it with quality and
              care.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Lately I build AI-powered products: intelligent assistants and
              agents that automate repetitive work, answer customer questions
              and help people make better decisions. Examples include UK
              platforms for parking-fine appeals and family wellness, and an
              AI SEO platform that plans and publishes content automatically.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve delivered products in e-commerce and B2B ordering,
              fintech, healthcare, real estate, fitness, legal tech, warehouse
              operations and multi-tenant SaaS. I focus on what matters to
              your business: reliability, speed to market, scalability and
              clear communication, while mentoring teams and keeping delivery
              on track.
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
