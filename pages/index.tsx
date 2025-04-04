import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Abdul Qadir | Full Stack Developer</title>
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <meta name="description" content="Abdul Qadir | Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Abdul Qadir | Full Stack Developer" />
        <meta
          name="description"
          content="Hi! I'm Abdul Qadir, a dedicated Software Developer specializing in full stack development. I am passionate about building user-centric, performant, and scalable web/mobile applications. With expertise in modern JavaScript/TypeScript frameworks like React, NextJS, React Native and MERN Stack, I thrive on turning innovative ideas into seamless digital experiences."
        />

        <meta property="og:title" content="Abdul Qadir | Full Stack Developer" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://portfolio-v2-two-teal-30.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://portfolio-v2-two-teal-30.vercel.app/screenshot.png"
        />
        <meta
          property="og:description"
          content="Hi! I'm Abdul Qadir, a dedicated Software Developer specializing in full stack development. I am passionate about building user-centric, performant, and scalable web/mobile applications. With expertise in modern JavaScript/TypeScript frameworks like React, NextJS, React Native and MERN stack, I thrive on turning innovative ideas into seamless digital experiences."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@abdulqadir" />
        <meta
          name="twitter:title"
          content="Abdul Qadir | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Hi! I'm Abdul Qadir, a dedicated Software Developer specializing in full stack development. I am passionate about building user-centric, performant, and scalable web/mobile applications. With expertise in modern JavaScript/TypeScript frameworks like React, NextJS, React Native and MERN stack, I thrive on turning innovative ideas into seamless digital experiences."
        />
        <meta name="twitter:creator" content="@abdulqadir" />
        <meta
          name="twitter:image"
          content="https://portfolio-v2-two-teal-30.vercel.app/screenshot.png"
        />

        <meta itemProp="name" content="Abdul Qadir | Full Stack Developer" />
        <meta
          itemProp="description"
          content="Hi! I'm Abdul Qadir, a dedicated Software Developer specializing in full stack development. I am passionate about building user-centric, performant, and scalable web applications. With expertise in modern JavaScript/TypeScript frameworks like React, NextJS, and MERN stack, I thrive on turning innovative ideas into seamless digital experiences."
        />
        <meta
          itemProp="image"
          content="https://portfolio-v2-two-teal-30.vercel.app/screenshot.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </Head>
      <Home />
    </>
  );
}
