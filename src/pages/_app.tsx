import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
       
        <meta charSet="UTF-8" />
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
        <meta name="author" content="Adarsh Verma" />
        <meta name="copyright" content="https://www.scanta.io" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="https://www.scanta.io/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="A conversational analysis platform that helps companies understand employee morale, trending topics and cultural health."
        />
        <meta property="og:type" content="website" />
        <meta
          name="DC.title"
          content="Employee engagement software, measuring employee engagement, cultural surveys, ChatGPT for HR"
        />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.position" content="36.701463;-118.755997" />
        <meta name="ICBM" content="36.701463, -118.755997" />
      </Head>
     
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Component {...pageProps} />
        </Suspense>
      </main>
    </>
  );
}
