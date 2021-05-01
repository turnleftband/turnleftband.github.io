import React from 'react';
import '../templates/lyric.css';

export default function Listen() {
  return (
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
  );
}
