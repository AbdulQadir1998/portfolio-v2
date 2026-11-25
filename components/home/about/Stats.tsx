import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TypeScript</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Python</span>
            <span className="chip">ReactJS</span>
            <span className="chip">NextJS</span>
            <span className="chip">React Native</span>
            <span className="chip">NodeJS</span>
            <span className="chip">NestJS</span>
            <span className="chip">ExpressJS</span>
            <span className="chip">FastAPI</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Microservices</span>
            <span className="chip">Postgres</span>
            <span className="chip">MySQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Redis</span>
            <span className="chip">Elasticsearch</span>
            <span className="chip">Prisma</span>
            <span className="chip">TypeORM</span>
            <span className="chip">Redux Toolkit</span>
            <span className="chip">AWS</span>
            <span className="chip">Docker</span>
            <span className="chip">CI/CD</span>
            <span className="chip">Azure</span>
            <span className="chip">OpenAI / Claude APIs</span>
            <span className="chip">LangChain</span>
            <span className="chip">AI Agents</span>
            <span className="chip">RAG Pipelines</span>
            <span className="chip">n8n</span>


          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Also work with</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Tailwind</span>
            <span className="chip">Zustand</span>
            <span className="chip">Jest</span>
            <span className="chip">Cypress</span>
            <span className="chip">Detox</span>
            <span className="chip">Storybook</span>
            <span className="chip">Firebase</span>
            <span className="chip">Azure</span>
            <span className="chip">DigitalOcean</span>
            <span className="chip">Vercel</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
