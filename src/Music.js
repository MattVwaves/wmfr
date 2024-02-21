import './App.css';
import Header from './Header';
import ReactAudioPlayer from 'react-audio-player';
import Epiano from './electric_piano.mp3';
import { useState } from 'react';
import { useEffect } from 'react';
import MusicCategories from './MusicTracks';

export default function Music() {
  const [category, setCategory] = useState('Melodically Rich');
  const [trackList, setTrackList] = useState(
    MusicCategories.MusicCategories[0].tracks
  );

  useEffect(() => {});

  const handleCategory = async (e) => {
    const musicCategories = MusicCategories.MusicCategories;
    const category = e.target.innerHTML;
    setCategory(category);
    const foundCategory = musicCategories.find(
      (cat) => cat.category === category
    );
    setTrackList(foundCategory.tracks);
  };
  return (
    <>
      <div className="homepage">
        <Header />
        <div className="music-categories-outer">
          <div className="music-categories">
            <div className="categories-list-container-left">
              <ul className="categories-list">
                <li className="music-category">
                  <h3 onClick={handleCategory}>Melodically Rich</h3>
                </li>
                <li className="music-category">
                  <h3 onClick={handleCategory}>Ambient</h3>
                </li>
                <li className="music-category">
                  <h3 onClick={handleCategory}>Dark/Noisey</h3>
                </li>
              </ul>
            </div>
            <div className="track-list">
              {trackList && (
                <ul className="categories-list">
                  {trackList.map((track) => {
                    return (
                      <li className="track" key={track.id}>
                        {track.trackName}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="categories-list-container-right">
              <ul className="categories-list">
                <li className="music-category">
                  <h3 onClick={handleCategory}>Poppy</h3>
                </li>
                <li className="music-category">
                  <h3 onClick={handleCategory}>Alt-Beats</h3>
                </li>
                <li className="music-category">
                  <h3 onClick={handleCategory}>Piano</h3>
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
