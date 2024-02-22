import './App.css';
import Header from './Header';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Epiano from './electric_piano.mp3';
import { useState } from 'react';
import { useEffect } from 'react';
import { createRef } from 'react';
import MusicCategories from './MusicTracks';

export default function Music() {
  const [category, setCategory] = useState('MelodicallyRich');
  const [trackList, setTrackList] = useState(
    MusicCategories.MusicCategories[0].tracks
  );
  const [currentTrack, setCurrentTrack] = useState('Little_Ones.mp3');

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

  const handleSelectTrack = async (track) => {
    setCurrentTrack(track.fileName);
    player.current.playAudioPromise();
  };

  const player = createRef();

  return (
    <>
      <div className="homepage">
        <Header />
        <div className="music-categories-outer">
          <div className="music-categories">
            <div className="categories-list-container-left">
              <ul className="categories-list">
                <li className="music-category">
                  <h3 onClick={handleCategory}>MelodicallyRich</h3>
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
                      <li
                        className="track"
                        key={track.id}
                        onClick={() => handleSelectTrack(track)}
                      >
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

        <AudioPlayer
          header={currentTrack}
          controls
          src={require(`./music/${category}/${currentTrack}`)}
          ref={player}
        ></AudioPlayer>
      </div>
    </>
  );
}
