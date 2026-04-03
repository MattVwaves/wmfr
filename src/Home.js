import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useState } from 'react';

export default function Home() {
  const aboutText = `Hello friend! 
  I'm Matt. I make music.
  Check out my stuff and let's talk...`;

  const [hoverMusic, setHoverMusic] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  return (
    <>

    <div className="homepage">

    <div className="overlay-container">
      <div id='title-container'>

        <img id='scroll-page'src={require('./images/Page-cropped.png')} alt="WMFR"></img>
        <div id='Walter-Keyne-text'>Walter Keyne</div>

      </div>


      <div id='navigation-container'>

      <div className='nav-container'>

        <img className='nav-image'src={require('./images/HOMEmusic-cropped.png')} alt="WMFR"></img>
        <div id='Walter-Keyne-text' onMouseEnter={() => setHoverMusic(true)} onMouseLeave={() => setHoverMusic(false)}><p><Link
              style={{
                color: hoverMusic ? "red" : "inherit",
                textDecoration: 'inherit',
                backgroundColor: 'inherit',
              }}
              to={'/music'}
            >
              Music
            </Link></p></div>

      </div>

      <div className='nav-container'>
        
      <img className='nav-image' id='nav-image-wk' src={require('./images/HOMEwalterkeyne-cropped.png')} alt="WMFR"></img>

      </div>

      <div className='nav-container' id='nav-container-contact'>

        <img className='nav-image' id='nav-image-contact' src={require('./images/HOMEcontact-cropped.png')} alt="WMFR"></img>
        <div id='Walter-Keyne-text' onMouseEnter={() => setHoverContact(true)} onMouseLeave={() => setHoverContact(false)}><p><Link
              style={{
                color: hoverContact ? 'red' : "inherit",
                textDecoration: 'inherit',
                backgroundColor: 'inherit',
                

              }}
              to={'/contact'}
            >
              Contact
            </Link></p></div>

      </div>


    </div>


    </div>

      <img id='background-image'src={require('./images/HOMEbackground.png')} alt="WMFR"></img>





      {/* <Header></Header> */}
      <div className="about-me">
        {/* <img
            src={require('./matt-walk-cut.jpg')}
            alt="WMFR"
            id="matt-walk-cut"
          ></img> */}
        {/* <img
            src={require('./matt-walk-cut.jpg')}
            alt="WMFR"
            id="matt-walk-cut-2"
          ></img> */}
        {/* <div className="about-me-text">{aboutText}</div> */}
      </div>

    </div>



    </>
    
    
  );
}
