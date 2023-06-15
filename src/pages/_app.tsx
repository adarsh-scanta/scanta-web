import "./globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script>{`(function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({
        'gtm.start':
          new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-5S97HQ4');`}</script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7KK004LHNR"
        />
        <script>
          {` window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-7KK004LHNR');`}
        </script>
        <script>
          {`!function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '885285045904955');
    fbq('track', 'PageView');`}
        </script>

        <script type="text/javascript">
          {`_linkedin_partner_id = "5471609";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </script>
        <script type="text/javascript">
          {` (function (l) {
      if (!l) {
        window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) };
        window.lintrk.q = []
      }
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript"; b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);
    })(window.lintrk);`}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=5462713&fmt=gif"
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=885285045904955&ev=PageView
  &noscript=1"
          />
        </noscript>

        <meta
          name="facebook-domain-verification"
          content="gefu7m9v0rc0rgmdlipsgauixdwbqr"
        />
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
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5S97HQ4"
          height="0"
          width="0"
        ></iframe>
      </noscript>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Component {...pageProps} />
        </Suspense>
      </main>
    </>
  );
}
