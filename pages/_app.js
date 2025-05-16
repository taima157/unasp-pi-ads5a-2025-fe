import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import VLibras from "vlibras-nextjs";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const NavigationBar = dynamic(() => import("@/components/NavbarComponent"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Virtus</title>
        <meta name="description" content="Virtus" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <SessionProvider>
        <ThemeProvider attribute="class" enableSystem={false}>
          {(router.pathname !== "/signup" && router.pathname !== "/login") && <NavigationBar />}
          <Component {...pageProps} />
          {(router.pathname !== "/signup" && router.pathname !== "/login") && <Footer /> }
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
