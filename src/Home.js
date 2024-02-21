import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header';

export default function Home() {
  const aboutText = `Hello friend! 
  I'm Matt. I make music.
  Check out my stuff and let's talk...`;

  return (
    <div className="homepage">
      <Header></Header>
      <div className="about-me">
        <img src={require('./matt-walk-full.jpg')} alt="WMFR"></img>
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
        <div className="about-me-text">{aboutText}</div>
      </div>
    </div>
  );
}
