import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

// Self-hosted Poppins (via @fontsource/poppins) so dev/build never needs Google Fonts.
const poppins = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/poppins/files/poppins-latin-100-normal.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/poppins/files/poppins-latin-200-normal.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/poppins/files/poppins-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/poppins/files/poppins-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/poppins/files/poppins-latin-900-normal.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  fallback: ["system-ui", "sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
