import React from "react";
import Layout from "../layouts/layout";
import { Helmet } from "react-helmet";

export default function Listen() {
  return (
    <Layout>
      <Helmet>
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
          fbq('init', '324505585703700');
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`
            <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=324505585703700&ev=PageView&noscript=1" />
          `}
        </noscript>
      </Helmet>
      <div className="background">
        <div className="blur">
          <div className="image-container">
            <img src="/640.png" width="260" height="260" />
          </div>
          <div className="content">
            <div className="button-container">
              <h3 className="button-container__title">AVAILABLE AT</h3>
              <div className="button-row">
                <a
                  className="button-row__image-link"
                  href="https://open.spotify.com/track/270iDGNmxJh7zw3axFFKQ7?si=c896b65dfdbc429e"
                >
                  <img src="/spotify.png" className="spotify-row" />
                </a>
                <a href="https://open.spotify.com/track/270iDGNmxJh7zw3axFFKQ7?si=c896b65dfdbc429e">
                  <div className="button">LISTEN</div>
                </a>
              </div>
              <div className="button-row">
                <a
                  className="button-row__image-link"
                  href="https://www.youtube.com/watch?v=2MfHniGa-1I"
                >
                  <img src="/youtube.png" className="youtube-row" />
                </a>
                <a href="https://www.youtube.com/watch?v=2MfHniGa-1I">
                  <div className="button">LISTEN</div>
                </a>
              </div>
              <div className="button-row">
                <a
                  className="button-row__image-link"
                  href="https://music.apple.com/us/album/me-myself-and-i/1458248125?i=1458248135"
                >
                  <img src="/apple.png" className="apple-row" />
                </a>
                <a href="https://music.apple.com/us/album/me-myself-and-i/1458248125?i=1458248135">
                  <div className="button">LISTEN</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
