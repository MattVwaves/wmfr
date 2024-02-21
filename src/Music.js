import './App.css';
import Header from './Header';
import ReactAudioPlayer from 'react-audio-player';
import Epiano from './electric_piano.mp3';

export default function Music() {
  return (
    <>
      <div className="homepage">
        <Header />
        <div className="music-categories-outer">
          <div className="music-categories">
            <div className="categories-list-container-left">
              <ul className="categories-list">
                <li className="music-category">
                  <h3>Melodically Rich</h3>
                </li>
                <li className="music-category">
                  <h3>Melodically Rich</h3>
                </li>
                <li className="music-category">
                  <h3>Melodically Rich</h3>
                </li>
              </ul>
            </div>
            <div className="track-list">
              <ul className="categories-list">
                <li className="track">track one</li>
                <li className="track">track two</li>
                <li className="track">track three</li>
              </ul>
            </div>
            <div className="categories-list-container-right">
              <ul className="categories-list">
                <li className="music-category">
                  <h3>Melodically Rich</h3>
                </li>
                <li className="music-category">
                  <h3>Melodically Rich</h3>
                </li>
                <li className="music-category">
                  <h3>Melodically Rich</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ReactAudioPlayer src={Epiano} controls />
      </div>
    </>
  );
}
