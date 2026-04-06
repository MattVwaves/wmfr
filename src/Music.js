import './App.css';
import Header from './Header';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer, { RHAP_UI }  from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/src/styles.scss';



import Epiano from './electric_piano.mp3';
import { useState } from 'react';
import { useEffect } from 'react';
import { createRef } from 'react';
import MusicCategories from './MusicTracks';

import { Link } from 'react-router-dom';



export default function Music() {

  const [category, setCategory] = useState('Modular');
  const [categoryBrowse, setCategoryBrowse] = useState('Modular');
  const [trackChanged, setTrackChanged] = useState(false)

  const [trackList, setTrackList] = useState(
    MusicCategories.MusicCategories[0].tracks
  );
  const [currentTrack, setCurrentTrack] = useState("Feyd_FINAL.mp3");
  const [currentTrackName, setCurrentTrackName] = useState("Feyd: Don't Resuscitate");


  const [hoverHome, setHoverHome] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    player.current.playAudioPromise();

  },[currentTrack, currentTrackName, category]);

  const handleCategory = async (e) => {
    const musicCategories = MusicCategories.MusicCategories;
    const category = e.target.innerHTML;
    setCategoryBrowse(category);
    const foundCategory = musicCategories.find(
      (cat) => cat.category === category
    );
    // setCurrentTrack(foundCategory.tracks[0].fileName);
    setTrackList(foundCategory.tracks);
  };

  
  const handleSelectTrack = async (track) => {

    setCurrentTrack(track.fileName);
    setCurrentTrackName(track.trackName);
    setCategory(track.category);
    console.log(currentTrack)



    const audio = player.current.audio.current
    // audio.play();
    player.current.playAudioPromise();


    // if ((audio.paused || audio.ended ) && audio.src) {
    //     player.current.playAudioPromise();
    //     setIsPlaying(true)
    //   } else if (!audio.paused) {
    //     audio.pause();
    //     setIsPlaying(false)
    //   }

  };

  const player = createRef();


  return (
    <>
      <div className="homepage">
        {/* <Header /> */}

        <div className='overlay-container'>

          {/* <img className='music-gram'src={require('./images/MUSICmusic_cropped.png')} alt="WMFR"></img> */}


          <div id='music-header-container'>

            <div className='music-header-empty'></div>

            <div className='music-header-title-container'>

              {/* <img className='music-header-title-scroll'src={require('./images/Page-cropped-half.png')} alt="WMFR"></img> */}
              {/* <div className='music-text'>Music</div> */}

            </div>

            <div className='music-header-title-container'>

              <img className='music-header-home-scroll'src={require('./images/Page-cropped-half-edgeoff.png')} alt="WMFR"></img>
              <div className='home-text' onMouseEnter={() => setHoverHome(true)} onMouseLeave={() => setHoverHome(false)}>

                <p>
                  <Link
                    style={{
                      color: hoverHome ? "red" : 'inherit',
                      textDecoration: 'inherit',
                      backgroundColor: 'inherit',
                          }}
                      to={'/'}
                       >
                      Home
                  </Link>
                </p>
              </div>

            </div>

          </div>

          <div className='music-container'>

            <div className='music-container-item'>


              <div className='music-moods-text'>

                  <div className='music-title-container'>
                  <h1 className='mood-title-text'>Category</h1>
                </div>

                <div className='music-list-container'>
                <ul className='categories-list'>
                  <li onClick={handleCategory} className='mood-text'>Modular</li>
                  <li onClick={handleCategory} className='mood-text'>Thematic</li>
                  <li onClick={handleCategory} className='mood-text'>Atmospheric</li>
                  <li onClick={handleCategory} className='mood-text'>Songs</li>
                  <li onClick={handleCategory} className='mood-text'>Ambient</li>
                  <li onClick={handleCategory} className='mood-text'>Beats</li>
                  <li onClick={handleCategory} className='mood-text'>Noisey</li>

                </ul>
                </div>
              </div>

              {/* <img className='music-moods-scroll'src={require('./images/MUSICleft-cropped.png')} alt="WMFR"></img> */}


            </div>
            
            <div className='music-container-item'>

              <div className='music-moods-text'>
                <div className='music-title-container'>
                  <h1 className='mood-title-text'>Title</h1>
                </div>

                {trackList && (
                <ul className="categories-list">
                  {trackList.map((track) => {
                    return (
                      <>

                      {/* {currentTrack === track.fileName && isPlaying === true ? 

                      (
                        <img className='play'src={require('./images/pause.jpg')} alt="WMFR"></img>

                      ) : 
                      (
                        <img className='play'src={require('./images/play.jpg')} alt="WMFR"></img>
                      )

                      } */}
                      
                      <li
                        className="mood-text"
                        key={track.id}
                        onClick={() => handleSelectTrack(track)}
                      >
                        {track.trackName}
                      </li>
                      </>
                    );
                  })}
                </ul>
              )}
                
              </div>

              {/* <img className='music-moods-scroll'src={require('./images/MUSICright_cropped.png')} alt="WMFR"></img> */}

            </div>

          </div>


        </div>

        <img id='background-image'src={require('./images/MUSICbackground_smaller.png')} alt="WMFR"></img>

              <div className='player-container'>
                <div className='player'>
                  
                  <AudioPlayer
                  header={currentTrackName}
                  
                  // src={require(`./music/${category}/${currentTrack}`)}
                  src={require(`./music/${category}/${currentTrack}`)}
                  ref={player}
                  
                    ></AudioPlayer>
                </div>
              </div>
        
      </div>
        

        

      
    </>
  );
}
